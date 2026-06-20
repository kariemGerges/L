"use server";

import { BookingServiceError, processBookingSubmission } from "@/lib/services/booking/process-booking-submission";
import { isHoneypotTriggered } from "@/lib/security/honeypot";
import { isEmailConfigured } from "@/lib/env";
import { logger } from "@/lib/logger";
import {
  actionFailure,
  actionSuccess,
  type ActionResult,
} from "@/lib/types/actions";
import { zodFieldErrors } from "@/lib/validation/parse-errors";
import {
  bookingFormSchema,
  type BookingFormInput,
} from "@/lib/validation/schemas";

export interface BookingSubmissionResponse {
  submissionId: string;
}

export async function submitBookingForm(
  input: BookingFormInput,
): Promise<ActionResult<BookingSubmissionResponse>> {
  const parsed = bookingFormSchema.safeParse(input);

  if (!parsed.success) {
    return actionFailure("Please correct the errors below.", zodFieldErrors(parsed.error));
  }

  if (isHoneypotTriggered(parsed.data.website)) {
    logger.warn("Honeypot triggered on booking form");
    return actionSuccess({ submissionId: "ignored" });
  }

  if (!isEmailConfigured()) {
    logger.error("Booking submission rejected — email not configured");
    return actionFailure(
      "Our booking system is temporarily unavailable. Please email us directly.",
    );
  }

  try {
    const result = await processBookingSubmission(parsed.data);
    return actionSuccess({ submissionId: result.id });
  } catch (error) {
    if (error instanceof BookingServiceError) {
      return actionFailure(error.message);
    }

    logger.error("Unexpected booking submission error", {
      reason: error instanceof Error ? error.message : "Unknown error",
    });

    return actionFailure(
      "Something went wrong while submitting your enquiry. Please try again.",
    );
  }
}
