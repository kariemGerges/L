import { describe, expect, it } from "vitest";
import { bookingStep1Schema } from "@/lib/validation/schemas";

describe("bookingStep1Schema", () => {
  it("requires core event details", () => {
    const result = bookingStep1Schema.safeParse({
      eventType: "",
      eventDate: "",
      guestCount: "",
      location: "",
      budget: "",
    });

    expect(result.success).toBe(false);
  });

  it("accepts valid step-one data", () => {
    const result = bookingStep1Schema.safeParse({
      eventType: "Wedding",
      eventDate: "2026-12-01",
      guestCount: "120",
      location: "Toronto",
      budget: "$7k–$15k",
    });

    expect(result.success).toBe(true);
  });
});
