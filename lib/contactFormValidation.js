import { getPhoneError } from "@/lib/phone";

/** @param {string} value */
function isValidEmail(value) {
  const v = value.trim();
  if (v.length > 254) return false;
  // Práctico para formularios; no intenta cubrir todo el RFC.
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(v);
}

const LIMITS = {
  nameMin: 2,
  nameMax: 120,
  messageMin: 15,
  messageMax: 4000,
};

const COPY = {
  es: {
    nameRequired: "Ingresá tu nombre.",
    nameShort: "El nombre es demasiado corto.",
    nameLong: "El nombre no puede superar 120 caracteres.",
    emailRequired: "Ingresá tu correo electrónico.",
    emailInvalid: "El correo no tiene un formato válido.",
    messageRequired: "Escribí un mensaje.",
    messageShort: `El mensaje debe tener al menos ${LIMITS.messageMin} caracteres.`,
    messageLong: `El mensaje no puede superar ${LIMITS.messageMax} caracteres.`,
    summary: "Revisá los campos marcados antes de continuar.",
  },
  en: {
    nameRequired: "Please enter your name.",
    nameShort: "That name looks too short.",
    nameLong: "Name cannot exceed 120 characters.",
    emailRequired: "Please enter your email address.",
    emailInvalid: "That email does not look valid.",
    messageRequired: "Please enter a message.",
    messageShort: `Message must be at least ${LIMITS.messageMin} characters.`,
    messageLong: `Message cannot exceed ${LIMITS.messageMax} characters.`,
    summary: "Please fix the highlighted fields before continuing.",
  },
};

/**
 * @param {{ name: string; email: string; phone: string; message: string }} fields
 * @param {'es' | 'en'} locale
 * @returns {Partial<Record<'name' | 'email' | 'phone' | 'message', string>>}
 */
export function getContactFormErrors(fields, locale) {
  const t = COPY[locale === "en" ? "en" : "es"];
  /** @type {Partial<Record<'name' | 'email' | 'phone' | 'message', string>>} */
  const errors = {};

  const name = fields.name.trim();
  if (!name) errors.name = t.nameRequired;
  else if (name.length < LIMITS.nameMin) errors.name = t.nameShort;
  else if (name.length > LIMITS.nameMax) errors.name = t.nameLong;

  const email = fields.email.trim();
  if (!email) errors.email = t.emailRequired;
  else if (!isValidEmail(email)) errors.email = t.emailInvalid;

  const phoneError = getPhoneError(fields.phone, locale);
  if (phoneError) errors.phone = phoneError;

  const message = fields.message.trim();
  if (!message) errors.message = t.messageRequired;
  else if (message.length < LIMITS.messageMin) errors.message = t.messageShort;
  else if (message.length > LIMITS.messageMax) errors.message = t.messageLong;

  return errors;
}

/** @param {Partial<Record<string, string>>} errors */
export function contactFormHasErrors(errors) {
  return Object.keys(errors).length > 0;
}

/** @param {'es' | 'en'} locale */
export function contactFormSummaryMessage(locale) {
  return COPY[locale === "en" ? "en" : "es"].summary;
}