import { z } from "zod";

const DEFAULT_SITE_URL = "http://localhost:3000";

const publicEnvSchema = z.object({
  NEXT_PUBLIC_SITE_URL: z.url().optional(),
});

const serverEnvSchema = z.object({
  RESEND_API_KEY: z.string().min(1, "RESEND_API_KEY is required"),
  BOOKING_NOTIFICATION_EMAIL: z.string().email("BOOKING_NOTIFICATION_EMAIL must be a valid email"),
  EMAIL_FROM: z.string().email().optional(),
  RATE_LIMIT_SALT: z.string().min(16).optional(),
  NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
});

export type ServerEnv = z.infer<typeof serverEnvSchema>;

let cachedServerEnv: ServerEnv | null = null;

/** Validated public site URL for metadata, sitemap, and canonical links. */
export function getSiteUrl(): string {
  const parsed = publicEnvSchema.safeParse(process.env);

  if (parsed.success && parsed.data.NEXT_PUBLIC_SITE_URL) {
    return parsed.data.NEXT_PUBLIC_SITE_URL;
  }

  return DEFAULT_SITE_URL;
}

/** Validated server-only environment. Throws if required vars are missing. */
export function getServerEnv(): ServerEnv {
  if (cachedServerEnv) {
    return cachedServerEnv;
  }

  const parsed = serverEnvSchema.safeParse(process.env);

  if (!parsed.success) {
    const message = parsed.error.issues
      .map((issue) => `${issue.path.join(".")}: ${issue.message}`)
      .join("; ");
    throw new Error(`Invalid server environment: ${message}`);
  }

  cachedServerEnv = parsed.data;
  return cachedServerEnv;
}

/** Safe check for whether outbound email is configured. */
export function isEmailConfigured(): boolean {
  return Boolean(
    process.env.RESEND_API_KEY?.trim() && process.env.BOOKING_NOTIFICATION_EMAIL?.trim(),
  );
}
