/** Costa Rican national numbers have exactly 8 digits (the +506 country code is separate). */
export const PHONE_DIGITS = 8;

const PHONE_COPY = {
  es: {
    invalidChars: "Solo se permiten números del 0 al 9.",
    tooManyDigits: "El número no puede tener más de 8 dígitos.",
    tooFewDigits: (missing) =>
      missing === 1
        ? "Falta 1 dígito: el número debe tener exactamente 8."
        : `Faltan ${missing} dígitos: el número debe tener exactamente 8.`,
  },
  en: {
    invalidChars: "Only numbers from 0 to 9 are allowed.",
    tooManyDigits: "The number cannot have more than 8 digits.",
    tooFewDigits: (missing) =>
      missing === 1
        ? "1 digit missing: the number must have exactly 8."
        : `${missing} digits missing: the number must have exactly 8.`,
  },
};

/** @param {string} text */
export function extractPhoneDigits(text) {
  return text.replace(/\D/g, "");
}

/**
 * Removes a leading "+506" when the number was pasted with its country code.
 * @param {string} value
 */
export function stripCountryCode(value) {
  return value.trim().replace(/^\+\s*506[\s-]*/, "");
}

/**
 * Digits only, or digits with one hyphen or space after the fourth digit ("8888-8888").
 * @param {string} text
 */
export function hasOnlyAllowedPhoneChars(text) {
  return /^\d*$/.test(text) || /^\d{4}[-\s]\d*$/.test(text);
}

/**
 * The phone field is optional: an empty value is valid.
 * @param {string} value
 * @param {'es' | 'en'} locale
 * @returns {string | null} A specific error message, or null when the value is valid.
 */
export function getPhoneError(value, locale) {
  const t = PHONE_COPY[locale === "en" ? "en" : "es"];
  const text = stripCountryCode(value);
  if (!text) return null;

  if (!hasOnlyAllowedPhoneChars(text)) return t.invalidChars;

  const count = extractPhoneDigits(text).length;
  if (count > PHONE_DIGITS) return t.tooManyDigits;
  if (count < PHONE_DIGITS) return t.tooFewDigits(PHONE_DIGITS - count);

  return null;
}