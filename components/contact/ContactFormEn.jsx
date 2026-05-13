"use client";

import { useRef, useState } from "react";
import { toast } from "react-toastify";

import {
  contactFormHasErrors,
  contactFormSummaryMessage,
  getContactFormErrors,
} from "@/lib/contactFormValidation";
import { COMPANY_EMAIL } from "@/lib/companyEmail";

const TOPICS = [
  { value: "general", label: "General inquiry" },
  { value: "quote", label: "Request a quote" },
  { value: "residential", label: "Residential" },
  { value: "commercial", label: "Commercial" },
  { value: "industrial", label: "Industrial" },
  { value: "institutional", label: "Institutional" },
  { value: "suppliers", label: "Suppliers / partnerships" },
];

function fieldClass(hasErr) {
  const base =
    "mt-1.5 w-full rounded-xl border bg-zinc-50/50 px-4 py-3 text-sm text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:bg-white disabled:cursor-not-allowed disabled:opacity-60";
  return hasErr ?
      `${base} border-red-400 focus:border-red-500 focus:ring-1 focus:ring-red-200`
    : `${base} border-zinc-200 focus:border-sys-yellow focus:ring-1 focus:ring-sys-yellow`;
}

export default function ContactFormEn() {
  const hpRef = useRef(null);
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [topic, setTopic] = useState("general");
  const [message, setMessage] = useState("");
  /** @type {Partial<Record<'name' | 'email' | 'phone' | 'message', string>>} */
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const clearField = (key) => {
    setErrors((prev) => {
      if (!prev[key]) return prev;
      const next = { ...prev };
      delete next[key];
      return next;
    });
  };

  async function handleSubmit(e) {
    e.preventDefault();

    const next = getContactFormErrors({ name, email, phone, message }, "en");
    setErrors(next);
    if (contactFormHasErrors(next)) {
      toast.error(contactFormSummaryMessage("en"));
      return;
    }

    setSubmitting(true);
    const topicLabel = TOPICS.find((t) => t.value === topic)?.label ?? topic;

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          company: company.trim(),
          email: email.trim(),
          phone: phone.trim(),
          topic: topicLabel,
          message: message.trim(),
          locale: "en",
          fs_hp: hpRef.current?.value ?? "",
        }),
      });

      let data = {};
      try {
        data = await res.json();
      } catch {
        /* empty */
      }

      if (res.status === 400 && data.errors && typeof data.errors === "object") {
        setErrors(data.errors);
        toast.error(contactFormSummaryMessage("en"));
        return;
      }

      if (res.status === 503) {
        toast.warning(
          "Web email is not configured. Add FORMSPREE_FORM_ID to .env.local (see env.example) and restart the dev server.",
          { autoClose: 12000 },
        );
        return;
      }

      if (!res.ok) {
        toast.error(
          `We could not send your message. Try again or email ${COMPANY_EMAIL}.`,
          { autoClose: 8000 },
        );
        return;
      }

      toast.success("Message sent. We will get back to you soon.", { autoClose: 6000 });
      setErrors({});
      setName("");
      setCompany("");
      setEmail("");
      setPhone("");
      setTopic("general");
      setMessage("");
    } catch {
      toast.error("Network error. Check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  }

  const showSummary = contactFormHasErrors(errors);
  const inputsDisabled = submitting;

  return (
    <div className="rounded-2xl border border-zinc-200/90 bg-white p-6 shadow-[0_12px_48px_-20px_rgba(0,0,0,0.12)] sm:p-8">
      <h2 className="text-lg font-semibold tracking-tight text-zinc-900 sm:text-xl">
        Send a message
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-zinc-600">
        We receive submissions in our inbox. You can also email us directly at{" "}
        <a
          href={`mailto:${COMPANY_EMAIL}`}
          className="font-medium text-zinc-800 underline decoration-zinc-300 underline-offset-2 hover:text-sys-yellow hover:decoration-sys-yellow/60"
        >
          {COMPANY_EMAIL}
        </a>
        .
      </p>

      <form onSubmit={handleSubmit} className="relative mt-8 space-y-5" noValidate>
          <input
            ref={hpRef}
            type="text"
            name="fs_hp"
            autoComplete="off"
            tabIndex={-1}
            className="pointer-events-none absolute left-[-9999px] h-0 w-0 opacity-0"
            aria-hidden
          />

          {showSummary ?
            <p className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-800" role="alert">
              {contactFormSummaryMessage("en")}
            </p>
          : null}

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="contact-name" className="block text-xs font-semibold uppercase tracking-wide text-zinc-500">
                Name <span className="text-red-600">*</span>
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                autoComplete="name"
                maxLength={120}
                disabled={inputsDisabled}
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  clearField("name");
                }}
                aria-invalid={errors.name ? "true" : "false"}
                aria-describedby={errors.name ? "contact-name-error" : undefined}
                className={fieldClass(!!errors.name)}
                placeholder="Your name"
              />
              {errors.name ?
                <p id="contact-name-error" className="mt-1.5 text-sm text-red-600">
                  {errors.name}
                </p>
              : null}
            </div>
            <div>
              <label htmlFor="contact-company" className="block text-xs font-semibold uppercase tracking-wide text-zinc-500">
                Company <span className="font-normal normal-case text-zinc-400">(optional)</span>
              </label>
              <input
                id="contact-company"
                name="company"
                type="text"
                autoComplete="organization"
                maxLength={120}
                disabled={inputsDisabled}
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className={fieldClass(false)}
                placeholder="Organization"
              />
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="contact-email" className="block text-xs font-semibold uppercase tracking-wide text-zinc-500">
                Email <span className="text-red-600">*</span>
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                inputMode="email"
                maxLength={254}
                disabled={inputsDisabled}
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  clearField("email");
                }}
                aria-invalid={errors.email ? "true" : "false"}
                aria-describedby={errors.email ? "contact-email-error" : undefined}
                className={fieldClass(!!errors.email)}
                placeholder="you@company.com"
              />
              {errors.email ?
                <p id="contact-email-error" className="mt-1.5 text-sm text-red-600">
                  {errors.email}
                </p>
              : null}
            </div>
            <div>
              <label htmlFor="contact-phone" className="block text-xs font-semibold uppercase tracking-wide text-zinc-500">
                Phone <span className="font-normal normal-case text-zinc-400">(optional)</span>
              </label>
              <input
                id="contact-phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                maxLength={32}
                disabled={inputsDisabled}
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                  clearField("phone");
                }}
                aria-invalid={errors.phone ? "true" : "false"}
                aria-describedby={errors.phone ? "contact-phone-error" : undefined}
                className={fieldClass(!!errors.phone)}
                placeholder="+506 …"
              />
              {errors.phone ?
                <p id="contact-phone-error" className="mt-1.5 text-sm text-red-600">
                  {errors.phone}
                </p>
              : null}
            </div>
          </div>

          <div>
            <label htmlFor="contact-topic" className="block text-xs font-semibold uppercase tracking-wide text-zinc-500">
              Topic
            </label>
            <select
              id="contact-topic"
              name="topic"
              disabled={inputsDisabled}
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="mt-1.5 w-full rounded-xl border border-zinc-200 bg-zinc-50/50 px-4 py-3 text-sm font-medium text-zinc-900 outline-none transition focus:border-sys-yellow focus:bg-white focus:ring-1 focus:ring-sys-yellow disabled:cursor-not-allowed disabled:opacity-60"
            >
              {TOPICS.map((t) => (
                <option key={t.value} value={t.value}>
                  {t.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="contact-message" className="block text-xs font-semibold uppercase tracking-wide text-zinc-500">
              Message <span className="text-red-600">*</span>
            </label>
            <textarea
              id="contact-message"
              name="message"
              rows={5}
              maxLength={4000}
              disabled={inputsDisabled}
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
                clearField("message");
              }}
              aria-invalid={errors.message ? "true" : "false"}
              aria-describedby={errors.message ? "contact-message-error" : undefined}
              className={fieldClass(!!errors.message)}
              placeholder="Describe your project, location, and timeline."
            />
            <div className="mt-1 flex justify-end text-xs text-zinc-400 tabular-nums">
              {message.length}/4000
            </div>
            {errors.message ?
              <p id="contact-message-error" className="mt-1 text-sm text-red-600">
                {errors.message}
              </p>
            : null}
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="w-full rounded-xl bg-zinc-950 px-5 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-zinc-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sys-yellow enabled:cursor-pointer disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto sm:min-w-[200px]"
          >
            {submitting ? "Sending…" : "Send message"}
          </button>
      </form>
    </div>
  );
}
