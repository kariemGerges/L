import type { BookingSubmissionPayload } from "@/lib/domain/booking/create-submission";
import { BRAND_NAME } from "@/lib/constants";

interface EmailContent {
  subject: string;
  html: string;
  text: string;
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export function buildStaffNotificationEmail(submission: BookingSubmissionPayload): EmailContent {
  const subject = `New booking enquiry — ${submission.eventType} on ${submission.eventDate}`;

  const lines = [
    `Name: ${submission.firstName} ${submission.lastName}`,
    `Email: ${submission.email}`,
    `Phone: ${submission.phone}`,
    `Event: ${submission.eventType}`,
    `Date: ${submission.eventDate}`,
    `Guests: ${submission.guestCount}`,
    `Location: ${submission.location}`,
    `Budget: ${submission.budget}`,
    `Heard about us: ${submission.hearAbout}`,
    "",
    "Vision:",
    submission.dreamEvent,
  ];

  if (submission.themes) {
    lines.push("", "Themes:", submission.themes);
  }

  if (submission.specialRequests) {
    lines.push("", "Special requests:", submission.specialRequests);
  }

  lines.push("", `Reference: ${submission.id}`);

  const text = lines.join("\n");
  const html = `<pre style="font-family: sans-serif; white-space: pre-wrap;">${escapeHtml(text)}</pre>`;

  return { subject, html, text };
}

export function buildCustomerConfirmationEmail(submission: BookingSubmissionPayload): EmailContent {
  const subject = `We received your enquiry — ${BRAND_NAME}`;
  const greeting = submission.firstName ? `Hi ${submission.firstName},` : "Hello,";

  const text = [
    greeting,
    "",
    `Thank you for reaching out to ${BRAND_NAME}. We've received your enquiry for a ${submission.eventType.toLowerCase()} on ${submission.eventDate}.`,
    "",
    "Our team will review your details and respond within 24 hours with next steps.",
    "",
    "With warmth,",
    BRAND_NAME,
    "",
    `Reference: ${submission.id}`,
  ].join("\n");

  const html = `
    <div style="font-family: Georgia, serif; color: #1a1209; max-width: 560px;">
      <p>${escapeHtml(greeting)}</p>
      <p>Thank you for reaching out to <strong>${escapeHtml(BRAND_NAME)}</strong>. We've received your enquiry for a <strong>${escapeHtml(submission.eventType.toLowerCase())}</strong> on <strong>${escapeHtml(submission.eventDate)}</strong>.</p>
      <p>Our team will review your details and respond within <strong>24 hours</strong> with next steps.</p>
      <p style="margin-top: 2rem;">With warmth,<br><em>${escapeHtml(BRAND_NAME)}</em></p>
      <p style="font-size: 12px; color: #8c7b6e; margin-top: 2rem;">Reference: ${escapeHtml(submission.id)}</p>
    </div>
  `.trim();

  return { subject, html, text };
}
