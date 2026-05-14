/** Número y mensaje prellenado para enlaces wa.me (sin "use client"). */

export const WHATSAPP_PHONE = "50660903460";

export const WHATSAPP_PREFILL_MESSAGE = {
  es: "Hola, me gustaría obtener más información sobre los servicios de SYS Mantenimiento.",
  en: "Hello, I'd like more information about SYS Mantenimiento services.",
};

/** @param { 'es' | 'en' } locale */
export function whatsappHref(locale) {
  const params = new URLSearchParams({
    text: WHATSAPP_PREFILL_MESSAGE[locale],
  });
  return `https://wa.me/${WHATSAPP_PHONE}?${params.toString()}`;
}
