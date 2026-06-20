import { describe, expect, it } from "vitest";
import { isHoneypotTriggered } from "@/lib/security/honeypot";

describe("isHoneypotTriggered", () => {
  it("returns false for empty honeypot values", () => {
    expect(isHoneypotTriggered("")).toBe(false);
    expect(isHoneypotTriggered(undefined)).toBe(false);
  });

  it("returns true when honeypot is filled", () => {
    expect(isHoneypotTriggered("https://spam.example")).toBe(true);
  });
});
