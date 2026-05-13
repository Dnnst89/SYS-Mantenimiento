import { NextResponse } from "next/server";

import { contactFormHasErrors, getContactFormErrors } from "@/lib/contactFormValidation";

/**
 * Envío de contacto vía Formspree (gratis, sin SMTP propio).
 *
 * 1. Creá un formulario en https://formspree.io/ y copiá el id (la parte final de la URL …/f/XXXX).
 * 2. En `.env.local`: FORMSPREE_FORM_ID=xxxx
 * 3. Reiniciá `npm run dev`
 */

export async function POST(request) {
  const formId = process.env.FORMSPREE_FORM_ID?.trim();
  if (!formId) {
    return NextResponse.json({ error: "CONTACT_NOT_CONFIGURED" }, { status: 503 });
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "INVALID_JSON" }, { status: 400 });
  }

  const {
    name = "",
    company = "",
    email = "",
    phone = "",
    topic = "",
    message = "",
    locale = "es",
    fs_hp = "",
  } = body;

  if (typeof fs_hp === "string" && fs_hp.trim()) {
    return NextResponse.json({ error: "FORBIDDEN" }, { status: 400 });
  }

  const loc = locale === "en" ? "en" : "es";
  const str = (v) => (typeof v === "string" ? v : "");
  const errors = getContactFormErrors(
    { name: str(name), email: str(email), phone: str(phone), message: str(message) },
    loc,
  );
  if (contactFormHasErrors(errors)) {
    return NextResponse.json({ errors }, { status: 400 });
  }

  const n = str(name).trim();
  const c = str(company).trim();
  const em = str(email).trim();
  const ph = str(phone).trim();
  const tp = str(topic).trim() || "(sin tema)";
  const msg = str(message).trim();

  const textBody = [
    loc === "en" ? `Name: ${n}` : `Nombre: ${n}`,
    c ? (loc === "en" ? `Company: ${c}` : `Empresa: ${c}`) : null,
    loc === "en" ? `Email: ${em}` : `Correo: ${em}`,
    ph ? (loc === "en" ? `Phone: ${ph}` : `Teléfono: ${ph}`) : null,
    loc === "en" ? `Topic: ${tp}` : `Tema: ${tp}`,
    "",
    msg,
  ]
    .filter(Boolean)
    .join("\n");

  const payload = {
    name: n,
    email: em,
    _replyto: em,
    _subject: `[SYS Mantenimiento] ${tp} — ${n}`,
    message: textBody,
  };

  const upstream = await fetch(`https://formspree.io/f/${formId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!upstream.ok) {
    const detail = await upstream.text().catch(() => "");
    console.error("[api/contact] Formspree", upstream.status, detail);
    return NextResponse.json({ error: "UPSTREAM" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
