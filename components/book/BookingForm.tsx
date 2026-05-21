"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import {
  BUDGET_RANGES,
  EVENT_TYPES,
  HEAR_ABOUT_OPTIONS,
} from "@/lib/constants";

export interface BookingFormData {
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
  themes: string;
  specialRequests: string;
}

const INITIAL_DATA: BookingFormData = {
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
};

const TOTAL_STEPS = 4;

const inputClass =
  "mt-2 w-full border border-blush/80 bg-white px-4 py-3 text-sm text-foreground outline-none transition-colors duration-200 focus:border-accent-gold";
const labelClass = "block text-xs font-medium uppercase tracking-widest text-foreground";

export function BookingForm() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<BookingFormData>(INITIAL_DATA);
  const [errors, setErrors] = useState<Partial<Record<keyof BookingFormData, string>>>({});

  const update = (field: keyof BookingFormData, value: string) => {
    setData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => {
      const next = { ...prev };
      delete next[field];
      return next;
    });
  };

  const validateStep = (currentStep: number): boolean => {
    const newErrors: Partial<Record<keyof BookingFormData, string>> = {};

    if (currentStep === 1) {
      if (!data.eventType) newErrors.eventType = "Please select an event type";
      if (!data.eventDate) newErrors.eventDate = "Please choose a date";
      if (!data.guestCount || Number(data.guestCount) < 1)
        newErrors.guestCount = "Please enter guest count";
      if (!data.location.trim()) newErrors.location = "Please enter a location";
      if (!data.budget) newErrors.budget = "Please select a budget range";
    }

    if (currentStep === 2) {
      if (!data.firstName.trim()) newErrors.firstName = "First name is required";
      if (!data.lastName.trim()) newErrors.lastName = "Last name is required";
      if (!data.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
        newErrors.email = "Please enter a valid email";
      if (!data.phone.trim()) newErrors.phone = "Phone number is required";
      if (!data.hearAbout) newErrors.hearAbout = "Please let us know how you found us";
    }

    if (currentStep === 3) {
      if (!data.dreamEvent.trim()) newErrors.dreamEvent = "Please describe your dream event";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const next = () => {
    if (!validateStep(step)) return;
    setStep((s) => Math.min(s + 1, TOTAL_STEPS));
  };

  const back = () => setStep((s) => Math.max(s - 1, 1));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(3)) return;
    setStep(4);
  };

  if (step === 4) {
    return (
      <div className="step-enter mx-auto max-w-2xl text-center">
        <p className="font-display text-lg italic text-accent-gold">Thank you</p>
        <h2 className="mt-4 font-display text-4xl text-foreground md:text-5xl">
          We&apos;ve received your enquiry
        </h2>
        <p className="mt-6 text-muted">
          We&apos;ll be in touch within 24 hours to begin planning your celebration.
        </p>

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

  return (
    <form onSubmit={submit} className="mx-auto max-w-2xl">
      <div className="mb-10">
        <div className="flex items-center justify-between text-xs uppercase tracking-widest text-muted">
          <span>
            Step {step} of {TOTAL_STEPS}
          </span>
          <span>{Math.round((step / TOTAL_STEPS) * 100)}% complete</span>
        </div>
        <div className="mt-3 h-1 w-full bg-blush/50">
          <div
            className="h-full bg-accent-gold transition-all duration-500 ease-out"
            style={{ width: `${(step / TOTAL_STEPS) * 100}%` }}
          />
        </div>
      </div>

      <div key={step} className="step-enter space-y-6">
        {step === 1 && (
          <>
            <Field label="Event type" error={errors.eventType}>
              <select
                value={data.eventType}
                onChange={(e) => update("eventType", e.target.value)}
                className={inputClass}
              >
                <option value="">Select event type</option>
                {EVENT_TYPES.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </Field>
            <Field label="Event date" error={errors.eventDate}>
              <input
                type="date"
                value={data.eventDate}
                onChange={(e) => update("eventDate", e.target.value)}
                className={inputClass}
              />
            </Field>
            <Field label="Estimated guest count" error={errors.guestCount}>
              <input
                type="number"
                min={1}
                value={data.guestCount}
                onChange={(e) => update("guestCount", e.target.value)}
                className={inputClass}
                placeholder="e.g. 80"
              />
            </Field>
            <Field label="Event location / city" error={errors.location}>
              <input
                type="text"
                value={data.location}
                onChange={(e) => update("location", e.target.value)}
                className={inputClass}
                placeholder="City or venue"
              />
            </Field>
            <Field label="Approximate budget" error={errors.budget}>
              <select
                value={data.budget}
                onChange={(e) => update("budget", e.target.value)}
                className={inputClass}
              >
                <option value="">Select budget range</option>
                {BUDGET_RANGES.map((range) => (
                  <option key={range} value={range}>
                    {range}
                  </option>
                ))}
              </select>
            </Field>
          </>
        )}

        {step === 2 && (
          <>
            <div className="grid gap-6 sm:grid-cols-2">
              <Field label="First name" error={errors.firstName}>
                <input
                  type="text"
                  value={data.firstName}
                  onChange={(e) => update("firstName", e.target.value)}
                  className={inputClass}
                />
              </Field>
              <Field label="Last name" error={errors.lastName}>
                <input
                  type="text"
                  value={data.lastName}
                  onChange={(e) => update("lastName", e.target.value)}
                  className={inputClass}
                />
              </Field>
            </div>
            <Field label="Email address" error={errors.email}>
              <input
                type="email"
                value={data.email}
                onChange={(e) => update("email", e.target.value)}
                className={inputClass}
              />
            </Field>
            <Field label="Phone number" error={errors.phone}>
              <input
                type="tel"
                value={data.phone}
                onChange={(e) => update("phone", e.target.value)}
                className={inputClass}
              />
            </Field>
            <Field label="How did you hear about us?" error={errors.hearAbout}>
              <select
                value={data.hearAbout}
                onChange={(e) => update("hearAbout", e.target.value)}
                className={inputClass}
              >
                <option value="">Select an option</option>
                {HEAR_ABOUT_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </Field>
          </>
        )}

        {step === 3 && (
          <>
            <Field label="Describe your dream event" error={errors.dreamEvent}>
              <textarea
                rows={4}
                value={data.dreamEvent}
                onChange={(e) => update("dreamEvent", e.target.value)}
                className={`${inputClass} resize-y`}
              />
            </Field>
            <Field label="Themes or inspirations (optional)">
              <textarea
                rows={3}
                value={data.themes}
                onChange={(e) => update("themes", e.target.value)}
                className={`${inputClass} resize-y`}
              />
            </Field>
            <Field label="Special requirements (optional)">
              <textarea
                rows={3}
                value={data.specialRequests}
                onChange={(e) => update("specialRequests", e.target.value)}
                className={`${inputClass} resize-y`}
              />
            </Field>
          </>
        )}
      </div>

      <div className="mt-10 flex flex-col-reverse gap-4 sm:flex-row sm:justify-between">
        {step > 1 ? (
          <Button type="button" variant="ghost" onClick={back}>
            Back
          </Button>
        ) : (
          <span />
        )}
        {step < 3 ? (
          <Button type="button" variant="primary" onClick={next}>
            Continue
          </Button>
        ) : (
          <Button type="submit" variant="primary">
            Submit Enquiry
          </Button>
        )}
      </div>
    </form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className={labelClass}>{label}</label>
      {children}
      {error && <p className="mt-1 text-xs text-red-700">{error}</p>}
    </div>
  );
}

function SummaryRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1 sm:flex-row sm:gap-4">
      <dt className="shrink-0 text-xs uppercase tracking-widest text-muted sm:w-32">{label}</dt>
      <dd className="text-foreground">{value}</dd>
    </div>
  );
}
