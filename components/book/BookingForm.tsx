"use client";

import { useState, useTransition } from "react";
import { submitBookingForm } from "@/lib/actions/booking";
import { Button } from "@/components/ui/Button";
import { fieldAriaProps, FormField } from "@/components/ui/FormField";
import {
  errorClassName,
  honeypotClassName,
  inputClassName,
  labelClassName,
} from "@/components/ui/form-styles";
import {
  BUDGET_RANGES,
  EVENT_TYPES,
  HEAR_ABOUT_OPTIONS,
} from "@/lib/constants";
import {
  BOOKING_STEP_SCHEMAS,
  bookingFormSchema,
  type BookingFormInput,
} from "@/lib/validation/schemas";
import { zodFieldErrors } from "@/lib/validation/parse-errors";

type BookingFormState = {
  [K in keyof BookingFormInput]: string;
};

const EMPTY_DATA: BookingFormState = {
  eventType: "",
  eventDate: "",
  guestCount: "",
  location: "",
  budget: "",
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  hearAbout: "",
  dreamEvent: "",
  themes: "",
  specialRequests: "",
  website: "",
};

const TOTAL_STEPS = 3;

export function BookingForm() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<BookingFormState>(EMPTY_DATA);
  const [errors, setErrors] = useState<Partial<Record<keyof BookingFormState, string>>>({});
  const [formError, setFormError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [submissionId, setSubmissionId] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const update = (field: keyof BookingFormState, value: string) => {
    setData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => {
      const next = { ...prev };
      delete next[field];
      return next;
    });
  };

  const validateStep = (currentStep: number): boolean => {
    const schema = BOOKING_STEP_SCHEMAS[currentStep - 1];
    const parsed = schema.safeParse(data);

    if (!parsed.success) {
      setErrors(zodFieldErrors(parsed.error));
      return false;
    }

    setErrors({});
    return true;
  };

  const next = () => {
    if (!validateStep(step)) return;
    setStep((s) => Math.min(s + 1, TOTAL_STEPS));
  };

  const back = () => setStep((s) => Math.max(s - 1, 1));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);

    if (!validateStep(3)) return;

    const parsed = bookingFormSchema.safeParse(data);
    if (!parsed.success) {
      setErrors(zodFieldErrors(parsed.error));
      return;
    }

    startTransition(async () => {
      const result = await submitBookingForm(parsed.data);

      if (!result.success) {
        setFormError(result.error);
        if (result.fieldErrors) setErrors(result.fieldErrors);
        return;
      }

      setSubmitted(true);
      setSubmissionId(result.data.submissionId);
    });
  };

  if (submitted) {
    return (
      <div className="step-enter mx-auto max-w-2xl text-center" role="status" aria-live="polite">
        <p className="font-display text-lg italic text-accent-gold">Thank you</p>
        <h2 className="mt-4 font-display text-4xl text-foreground md:text-5xl">
          We&apos;ve received your enquiry
        </h2>
        <p className="mt-6 text-muted">
          We&apos;ll be in touch within 24 hours to begin planning your celebration.
        </p>
        {submissionId && submissionId !== "ignored" && (
          <p className="mt-4 text-xs uppercase tracking-widest text-muted">
            Reference: <span className="text-foreground">{submissionId}</span>
          </p>
        )}

        <div className="mt-12 border border-blush/60 bg-cream p-8 text-left text-sm">
          <h3 className="mb-6 font-display text-xl text-foreground">Your submission</h3>
          <dl className="space-y-4">
            <SummaryRow label="Event" value={`${data.eventType} — ${data.eventDate}`} />
            <SummaryRow
              label="Details"
              value={`${data.guestCount} guests · ${data.location} · ${data.budget}`}
            />
            <SummaryRow label="Contact" value={`${data.firstName} ${data.lastName}`} />
            <SummaryRow label="Email" value={data.email} />
            <SummaryRow label="Phone" value={data.phone} />
            {data.dreamEvent && <SummaryRow label="Vision" value={data.dreamEvent} />}
            {data.themes && <SummaryRow label="Themes" value={data.themes} />}
            {data.specialRequests && (
              <SummaryRow label="Special requests" value={data.specialRequests} />
            )}
          </dl>
        </div>
      </div>
    );
  }

  const progress = Math.round((step / TOTAL_STEPS) * 100);

  return (
    <form onSubmit={submit} className="mx-auto max-w-2xl" noValidate>
      <div className="mb-10">
        <div className="flex items-center justify-between text-xs uppercase tracking-widest text-muted">
          <span>
            Step {step} of {TOTAL_STEPS}
          </span>
          <span>{progress}% complete</span>
        </div>
        <div
          className="mt-3 h-1 w-full bg-blush/50"
          role="progressbar"
          aria-valuenow={progress}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label="Booking form progress"
        >
          <div
            className="h-full bg-accent-gold transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {formError && (
        <p role="alert" className={`mb-6 ${errorClassName}`}>
          {formError}
        </p>
      )}

      <div className={honeypotClassName} aria-hidden>
        <label htmlFor="booking-website">Website</label>
        <input
          id="booking-website"
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={data.website ?? ""}
          onChange={(e) => update("website", e.target.value)}
        />
      </div>

      <div key={step} className="step-enter space-y-6">
        {step === 1 && (
          <>
            <FormField id="eventType" label="Event type" error={errors.eventType} required>
              <select
                {...fieldAriaProps("eventType", errors.eventType)}
                value={data.eventType}
                onChange={(e) => update("eventType", e.target.value)}
                className={inputClassName}
              >
                <option value="">Select event type</option>
                {EVENT_TYPES.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </FormField>
            <FormField id="eventDate" label="Event date" error={errors.eventDate} required>
              <input
                {...fieldAriaProps("eventDate", errors.eventDate)}
                type="date"
                value={data.eventDate}
                onChange={(e) => update("eventDate", e.target.value)}
                className={inputClassName}
              />
            </FormField>
            <FormField
              id="guestCount"
              label="Estimated guest count"
              error={errors.guestCount}
              required
            >
              <input
                {...fieldAriaProps("guestCount", errors.guestCount)}
                type="number"
                min={1}
                max={10000}
                value={data.guestCount}
                onChange={(e) => update("guestCount", e.target.value)}
                className={inputClassName}
                placeholder="e.g. 80"
              />
            </FormField>
            <FormField id="location" label="Event location / city" error={errors.location} required>
              <input
                {...fieldAriaProps("location", errors.location)}
                type="text"
                maxLength={200}
                value={data.location}
                onChange={(e) => update("location", e.target.value)}
                className={inputClassName}
                placeholder="City or venue"
              />
            </FormField>
            <FormField id="budget" label="Approximate budget" error={errors.budget} required>
              <select
                {...fieldAriaProps("budget", errors.budget)}
                value={data.budget}
                onChange={(e) => update("budget", e.target.value)}
                className={inputClassName}
              >
                <option value="">Select budget range</option>
                {BUDGET_RANGES.map((range) => (
                  <option key={range} value={range}>
                    {range}
                  </option>
                ))}
              </select>
            </FormField>
          </>
        )}

        {step === 2 && (
          <>
            <div className="grid gap-6 sm:grid-cols-2">
              <FormField id="firstName" label="First name" error={errors.firstName} required>
                <input
                  {...fieldAriaProps("firstName", errors.firstName)}
                  type="text"
                  autoComplete="given-name"
                  maxLength={100}
                  value={data.firstName}
                  onChange={(e) => update("firstName", e.target.value)}
                  className={inputClassName}
                />
              </FormField>
              <FormField id="lastName" label="Last name" error={errors.lastName} required>
                <input
                  {...fieldAriaProps("lastName", errors.lastName)}
                  type="text"
                  autoComplete="family-name"
                  maxLength={100}
                  value={data.lastName}
                  onChange={(e) => update("lastName", e.target.value)}
                  className={inputClassName}
                />
              </FormField>
            </div>
            <FormField id="email" label="Email address" error={errors.email} required>
              <input
                {...fieldAriaProps("email", errors.email)}
                type="email"
                autoComplete="email"
                maxLength={254}
                value={data.email}
                onChange={(e) => update("email", e.target.value)}
                className={inputClassName}
              />
            </FormField>
            <FormField id="phone" label="Phone number" error={errors.phone} required>
              <input
                {...fieldAriaProps("phone", errors.phone)}
                type="tel"
                autoComplete="tel"
                maxLength={30}
                value={data.phone}
                onChange={(e) => update("phone", e.target.value)}
                className={inputClassName}
              />
            </FormField>
            <FormField
              id="hearAbout"
              label="How did you hear about us?"
              error={errors.hearAbout}
              required
            >
              <select
                {...fieldAriaProps("hearAbout", errors.hearAbout)}
                value={data.hearAbout}
                onChange={(e) => update("hearAbout", e.target.value)}
                className={inputClassName}
              >
                <option value="">Select an option</option>
                {HEAR_ABOUT_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </FormField>
          </>
        )}

        {step === 3 && (
          <>
            <FormField
              id="dreamEvent"
              label="Describe your dream event"
              error={errors.dreamEvent}
              required
            >
              <textarea
                {...fieldAriaProps("dreamEvent", errors.dreamEvent)}
                rows={4}
                maxLength={5000}
                value={data.dreamEvent}
                onChange={(e) => update("dreamEvent", e.target.value)}
                className={`${inputClassName} resize-y`}
              />
            </FormField>
            <FormField id="themes" label="Themes or inspirations (optional)">
              <textarea
                id="themes"
                rows={3}
                maxLength={2000}
                value={data.themes ?? ""}
                onChange={(e) => update("themes", e.target.value)}
                className={`${inputClassName} resize-y`}
              />
            </FormField>
            <FormField id="specialRequests" label="Special requirements (optional)">
              <textarea
                id="specialRequests"
                rows={3}
                maxLength={2000}
                value={data.specialRequests ?? ""}
                onChange={(e) => update("specialRequests", e.target.value)}
                className={`${inputClassName} resize-y`}
              />
            </FormField>
          </>
        )}
      </div>

      <div className="mt-10 flex flex-col-reverse gap-4 sm:flex-row sm:justify-between">
        {step > 1 ? (
          <Button type="button" variant="ghost" onClick={back} disabled={isPending}>
            Back
          </Button>
        ) : (
          <span />
        )}
        {step < TOTAL_STEPS ? (
          <Button type="button" variant="primary" onClick={next}>
            Continue
          </Button>
        ) : (
          <Button type="submit" variant="primary" disabled={isPending}>
            {isPending ? "Submitting…" : "Submit Enquiry"}
          </Button>
        )}
      </div>
    </form>
  );
}

function SummaryRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1 sm:flex-row sm:gap-4">
      <dt className={`shrink-0 sm:w-32 ${labelClassName}`}>{label}</dt>
      <dd className="text-foreground">{value}</dd>
    </div>
  );
}
