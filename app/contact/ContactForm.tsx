"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const inputClass =
    "mt-2 w-full border border-blush/80 bg-white px-4 py-3 text-sm text-foreground outline-none transition-colors duration-200 focus:border-accent-gold";
  const labelClass = "block text-xs font-medium uppercase tracking-widest text-foreground";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = "Valid email is required";
    if (!form.subject.trim()) newErrors.subject = "Subject is required";
    if (!form.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="border border-blush/60 bg-cream p-10 text-center">
        <p className="font-display text-2xl text-foreground">Message sent</p>
        <p className="mt-4 text-sm text-muted">Thank you — we&apos;ll respond within 24 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className={labelClass}>
          Name
        </label>
        <input
          id="name"
          type="text"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className={inputClass}
        />
        {errors.name && <p className="mt-1 text-xs text-red-700">{errors.name}</p>}
      </div>
      <div>
        <label htmlFor="email" className={labelClass}>
          Email
        </label>
        <input
          id="email"
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className={inputClass}
        />
        {errors.email && <p className="mt-1 text-xs text-red-700">{errors.email}</p>}
      </div>
      <div>
        <label htmlFor="subject" className={labelClass}>
          Subject
        </label>
        <input
          id="subject"
          type="text"
          value={form.subject}
          onChange={(e) => setForm({ ...form, subject: e.target.value })}
          className={inputClass}
        />
        {errors.subject && <p className="mt-1 text-xs text-red-700">{errors.subject}</p>}
      </div>
      <div>
        <label htmlFor="message" className={labelClass}>
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className={`${inputClass} resize-y`}
        />
        {errors.message && <p className="mt-1 text-xs text-red-700">{errors.message}</p>}
      </div>
      <Button type="submit" variant="primary">
        Send Message
      </Button>
    </form>
  );
}
