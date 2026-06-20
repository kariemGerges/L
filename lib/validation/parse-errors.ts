import type { ZodError } from "zod";
import type { FieldErrors } from "@/lib/types/actions";

/** Maps Zod validation errors to field-level error messages for forms. */
export function zodFieldErrors(error: ZodError): FieldErrors {
  const fieldErrors: FieldErrors = {};

  for (const issue of error.issues) {
    const key = issue.path[0];
    if (typeof key === "string" && !fieldErrors[key]) {
      fieldErrors[key] = issue.message;
    }
  }

  return fieldErrors;
}
