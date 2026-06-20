import {
  buildSubmissionPayload,
  toSubmissionResult,
  type BookingSubmissionResult,
} from "@/lib/domain/booking/create-submission";
import { logger, redactEmail } from "@/lib/logger";
import { sendBookingEmails } from "@/lib/services/email/send-booking-emails";
import { checkRateLimit } from "@/lib/security/rate-limit";
import { getClientIp, hashClientIp } from "@/lib/security/request-context";
import type { BookingFormInput } from "@/lib/validation/schemas";

export class BookingServiceError extends Error {
  constructor(
    message: string,
    readonly code: "RATE_LIMITED" | "UNAVAILABLE" = "UNAVAILABLE",
  ) {
    super(message);
    this.name = "BookingServiceError";
  }
}

export async function processBookingSubmission(
  input: BookingFormInput,
): Promise<BookingSubmissionResult> {
  const clientIp = await getClientIp();
  const rateLimitKey = `booking:${hashClientIp(clientIp)}`;
  const rateLimit = checkRateLimit(rateLimitKey);

  if (!rateLimit.allowed) {
    throw new BookingServiceError(
      "Too many submissions. Please try again later.",
      "RATE_LIMITED",
    );
  }

  const submission = buildSubmissionPayload(input);

  logger.info("Processing booking submission", {
    submissionId: submission.id,
    eventType: submission.eventType,
    email: redactEmail(submission.email),
  });

  try {
    await sendBookingEmails(submission);
  } catch (error) {
    logger.error("Booking email delivery failed", {
      submissionId: submission.id,
      reason: error instanceof Error ? error.message : "Unknown error",
    });
    throw new BookingServiceError(
      "We couldn't send your enquiry right now. Please email us directly or try again shortly.",
    );
  }

  return toSubmissionResult(submission);
}
