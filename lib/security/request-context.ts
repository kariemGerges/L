import { createHash } from "node:crypto";
import { headers } from "next/headers";

/** Extract client IP from trusted proxy headers. */
export async function getClientIp(): Promise<string> {
  const headerStore = await headers();
  const forwarded = headerStore.get("x-forwarded-for");

  if (forwarded) {
    return forwarded.split(",")[0]?.trim() ?? "unknown";
  }

  return headerStore.get("x-real-ip") ?? "unknown";
}

/** One-way hash of IP for storage — never persist raw IPs. */
export function hashClientIp(ip: string): string {
  const salt = process.env.RATE_LIMIT_SALT ?? "development-only-salt";
  return createHash("sha256").update(`${salt}:${ip}`).digest("hex");
}
