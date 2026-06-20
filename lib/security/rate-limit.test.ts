import { beforeEach, describe, expect, it } from "vitest";
import { checkRateLimit, resetRateLimitStore } from "@/lib/security/rate-limit";

describe("checkRateLimit", () => {
  beforeEach(() => {
    resetRateLimitStore();
  });

  it("allows requests under the limit", () => {
    const key = "test-ip";

    for (let i = 0; i < 5; i += 1) {
      expect(checkRateLimit(key).allowed).toBe(true);
    }
  });

  it("blocks requests over the limit", () => {
    const key = "test-ip-blocked";

    for (let i = 0; i < 5; i += 1) {
      checkRateLimit(key);
    }

    const result = checkRateLimit(key);
    expect(result.allowed).toBe(false);
    expect(result.retryAfterSeconds).toBeGreaterThan(0);
  });
});
