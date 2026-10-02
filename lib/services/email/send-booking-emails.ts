import { Resend } from "resend";
import { BRAND_NAME } from "@/lib/constants";
import type { BookingSubmissionPayload } from "@/lib/domain/booking/create-submission";
import { getServerEnv } from "@/lib/env";
import { logger } from "@/lib/logger";
import { buildCustomerConfirmationEmail, buildStaffNotificationEmail } from "./templates";

function getResendClient() {
  const { RESEND_API_KEY } = getServerEnv();
  return new Resend(RESEND_API_KEY);
}

/** Send-only address on the verified domain. A mailbox is not required. */
function getFromAddress(): string {
  const { EMAIL_FROM } = getServerEnv();
  const address = EMAIL_FROM ?? "onboarding@resend.dev";
  return `${BRAND_NAME} <${address}>`;
}

export async function sendBookingEmails(submission: BookingSubmissionPayload): Promise<void> {
  const { BOOKING_NOTIFICATION_EMAIL } = getServerEnv();
  const resend = getResendClient();
  const from = getFromAddress();

  const staffEmail = buildStaffNotificationEmail(submission);
  const customerEmail = buildCustomerConfirmationEmail(submission);

  const staffResult = await resend.emails.send({
    from,
    to: BOOKING_NOTIFICATION_EMAIL,
    replyTo: submission.email,
    subject: staffEmail.subject,
    html: staffEmail.html,
    text: staffEmail.text,
  });

  if (staffResult.error) {
    logger.error("Failed to send staff booking notification", {
      submissionId: submission.id,
      reason: staffResult.error.message,
    });
    throw new Error("Failed to deliver booking notification email");
  }

  const customerResult = await resend.emails.send({
    from,
    to: submission.email,
    replyTo: BOOKING_NOTIFICATION_EMAIL,
    subject: customerEmail.subject,
    html: customerEmail.html,
    text: customerEmail.text,
  });

  if (customerResult.error) {
    logger.warn("Staff notified but customer confirmation failed", {
      submissionId: submission.id,
      reason: customerResult.error.message,
    });
  }
}
