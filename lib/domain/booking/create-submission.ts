import { randomUUID } from "node:crypto";
import type { BookingFormInput } from "@/lib/validation/schemas";

export interface BookingSubmissionPayload {
  id: string;
  eventType: string;
  eventDate: string;
  guestCount: string;
  location: string;
  budget: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  hearAbout: string;
  dreamEvent: string;
  themes: string | null;
  specialRequests: string | null;
}

export interface BookingSubmissionResult {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  eventType: string;
  eventDate: string;
}

export function buildSubmissionPayload(data: BookingFormInput): BookingSubmissionPayload {
  return {
    id: randomUUID(),
    eventType: data.eventType,
    eventDate: data.eventDate,
    guestCount: data.guestCount,
    location: data.location,
    budget: data.budget,
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email.toLowerCase(),
    phone: data.phone,
    hearAbout: data.hearAbout,
    dreamEvent: data.dreamEvent,
    themes: data.themes?.trim() || null,
    specialRequests: data.specialRequests?.trim() || null,
  };
}

export function toSubmissionResult(
  payload: BookingSubmissionPayload,
): BookingSubmissionResult {
  return {
    id: payload.id,
    email: payload.email,
    firstName: payload.firstName,
    lastName: payload.lastName,
    eventType: payload.eventType,
    eventDate: payload.eventDate,
  };
}
