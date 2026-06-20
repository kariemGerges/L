import { z } from "zod";
import {
  BUDGET_RANGES,
  EVENT_TYPES,
  HEAR_ABOUT_OPTIONS,
} from "@/lib/constants";

const trimmedString = (max: number) => z.string().trim().max(max);

export const emailSchema = trimmedString(254).pipe(
  z.email({ error: "Please enter a valid email" }),
);

/** Honeypot field — must remain empty for legitimate submissions. */
export const honeypotSchema = z.string().max(0).default("");

const eventTypeSchema = z.enum(EVENT_TYPES, {
  error: "Please select an event type",
});

const budgetSchema = z.enum(BUDGET_RANGES, {
  error: "Please select a budget range",
});

const hearAboutSchema = z.enum(HEAR_ABOUT_OPTIONS, {
  error: "Please let us know how you found us",
});

export const bookingStep1Schema = z.object({
  eventType: eventTypeSchema,
  eventDate: trimmedString(10).min(1, "Please choose a date"),
  guestCount: z
    .string()
    .trim()
    .min(1, "Please enter guest count")
    .refine((value) => Number(value) >= 1, "Please enter a valid guest count"),
  location: trimmedString(200).min(1, "Please enter a location"),
  budget: budgetSchema,
});

export const bookingStep2Schema = z.object({
  firstName: trimmedString(100).min(1, "First name is required"),
  lastName: trimmedString(100).min(1, "Last name is required"),
  email: emailSchema,
  phone: trimmedString(30).min(1, "Phone number is required"),
  hearAbout: hearAboutSchema,
});

export const bookingStep3Schema = z.object({
  dreamEvent: trimmedString(5000).min(1, "Please describe your dream event"),
  themes: trimmedString(2000).optional(),
  specialRequests: trimmedString(2000).optional(),
});

export const bookingFormSchema = bookingStep1Schema
  .merge(bookingStep2Schema)
  .merge(bookingStep3Schema)
  .extend({
    website: honeypotSchema,
  });

export type BookingFormInput = z.infer<typeof bookingFormSchema>;

export const BOOKING_STEP_SCHEMAS = [
  bookingStep1Schema,
  bookingStep2Schema,
  bookingStep3Schema,
] as const;
