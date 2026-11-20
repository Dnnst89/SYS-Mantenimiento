"use client";

import { useState } from "react";

import { PHONE_COUNTRY_CODE, sanitizePhoneInput } from "@/lib/phone";

const COPY = {
  es: { helper: "Ingresá 8 dígitos, por ejemplo 8888-8888." },
  en: { helper: "Enter 8 digits, for example 8888-8888." },
};

/**
 * Phone input for Costa Rican numbers: fixed +506 prefix, digits only, "8888-8888" format.
 *
 * @param {{
 *   id: string;
 *   value: string;
 *   onChange: (value: string) => void;
 *   error?: string;
 *   disabled?: boolean;
 *   locale?: 'es' | 'en';
 *   name?: string;
 * }} props
 */
export default function PhoneField({
  id,
  value,
  onChange,
  error,
  disabled = false,
  locale = "es",
  name = "phone",
}) {
  const t = COPY[locale === "en" ? "en" : "es"];
  const [inputWarning, setInputWarning] = useState(null);

  const message = error || inputWarning;
  const messageId = `${id}-error`;
  const helperId = `${id}-help`;

  const handleChange = (event) => {
    const result = sanitizePhoneInput(event.target.value, locale);
    setInputWarning(result.message);
    onChange(result.value);
  };

  const groupClass = message
    ? "border-red-400 focus-within:border-red-500 focus-within:ring-red-200"
    : "border-zinc-200 focus-within:border-sys-yellow focus-within:ring-sys-yellow";

  return (
    <div>
      <div
        className={`mt-1.5 flex w-full items-stretch overflow-hidden rounded-xl border bg-zinc-50/50 transition focus-within:bg-white focus-within:ring-1 ${groupClass} ${
          disabled ? "cursor-not-allowed opacity-60" : ""
        }`}
      >
        <span className="flex select-none items-center border-r border-zinc-200 bg-zinc-100/70 px-3 text-sm font-semibold text-zinc-600">
          {PHONE_COUNTRY_CODE}
        </span>
        <input
          id={id}
          name={name}
          type="tel"
          inputMode="numeric"
          autoComplete="tel-national"
          disabled={disabled}
          value={value}
          onChange={handleChange}
          onBlur={() => setInputWarning(null)}
          aria-invalid={message ? "true" : "false"}
          aria-describedby={message ? messageId : helperId}
          placeholder="8888-8888"
          className="min-w-0 flex-1 bg-transparent px-4 py-3 text-sm text-sys-black outline-none placeholder:text-zinc-400 disabled:cursor-not-allowed"
        />
      </div>

      <div aria-live="polite">
        {message ? (
          <p id={messageId} className="mt-1.5 text-sm text-red-600">
            {message}
          </p>
        ) : (
          <p id={helperId} className="mt-1.5 text-xs text-zinc-500">
            {t.helper}
          </p>
        )}
      </div>
    </div>
  );
}