import { NextResponse } from "next/server";
import { isEmailConfigured } from "@/lib/env";

export const dynamic = "force-dynamic";

export async function GET() {
  const emailConfigured = isEmailConfigured();

  return NextResponse.json(
    {
      status: emailConfigured ? "ok" : "degraded",
      timestamp: new Date().toISOString(),
      checks: {
        email: emailConfigured,
      },
    },
    { status: emailConfigured ? 200 : 503 },
  );
}
