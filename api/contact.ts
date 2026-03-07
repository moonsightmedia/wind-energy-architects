import { Resend } from "resend";
import type { VercelRequest, VercelResponse } from "@vercel/node";

const resend = new Resend(process.env.RESEND_API_KEY);

/** Company inbox – contact form submissions are sent here */
const TO_EMAIL = process.env.CONTACT_TO_EMAIL || "info@grau-eng.de";
/** Sender shown in Resend (must be a verified domain in Resend) */
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || "Kontaktformular <onboarding@resend.dev>";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY is not set");
    return res.status(500).json({ error: "E-Mail-Service ist nicht konfiguriert." });
  }

  const body = req.body as { name?: string; firma?: string; email?: string; nachricht?: string };
  const name = typeof body?.name === "string" ? body.name.trim() : "";
  const firma = typeof body?.firma === "string" ? body.firma.trim() : "";
  const email = typeof body?.email === "string" ? body.email.trim() : "";
  const nachricht = typeof body?.nachricht === "string" ? body.nachricht.trim() : "";

  if (!name || !email || !nachricht) {
    return res.status(400).json({ error: "Name, E-Mail und Nachricht sind erforderlich." });
  }

  const subject = `Kontaktanfrage von ${name}${firma ? ` (${firma})` : ""}`;
  const html = `
    <p><strong>Von:</strong> ${escapeHtml(name)}</p>
    <p><strong>E-Mail:</strong> ${escapeHtml(email)}</p>
    ${firma ? `<p><strong>Firma:</strong> ${escapeHtml(firma)}</p>` : ""}
    <p><strong>Nachricht:</strong></p>
    <p>${escapeHtml(nachricht).replace(/\n/g, "<br>")}</p>
  `;

  const { data, error } = await resend.emails.send({
    from: FROM_EMAIL,
    to: [TO_EMAIL],
    replyTo: email,
    subject,
    html,
  });

  if (error) {
    console.error("Resend error:", error);
    return res.status(500).json({ error: "E-Mail konnte nicht gesendet werden. Bitte versuchen Sie es später erneut." });
  }

  return res.status(200).json({ success: true, id: data?.id });
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
