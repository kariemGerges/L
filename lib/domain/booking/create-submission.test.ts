import { describe, expect, it } from "vitest";
import { buildSubmissionPayload } from "@/lib/domain/booking/create-submission";

const sampleInput = {
  eventType: "Wedding" as const,
  eventDate: "2026-09-15",
  guestCount: "100",
  location: "Toronto",
  budget: "$7k–$15k" as const,
  firstName: "Jane",
  lastName: "Doe",
  email: "Jane@Example.com",
  phone: "+1 555 0100",
  hearAbout: "Instagram" as const,
  dreamEvent: "Garden wedding with blush florals",
  themes: "",
  specialRequests: "",
  website: "",
};

describe("buildSubmissionPayload", () => {
  it("normalizes email and assigns a submission id", () => {
    const payload = buildSubmissionPayload(sampleInput);

    expect(payload.email).toBe("jane@example.com");
    expect(payload.eventType).toBe("Wedding");
    expect(payload.themes).toBeNull();
    expect(payload.id).toMatch(
      /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i,
    );
  });
});
