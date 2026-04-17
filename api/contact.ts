import { Resend } from "resend";
import type { VercelRequest, VercelResponse } from "@vercel/node";

const resend = new Resend(process.env.RESEND_API_KEY);

/** Company inbox – contact form submissions are sent here */
const TO_EMAIL = process.env.CONTACT_TO_EMAIL || "info@grau-eng.de";
/**
 * Sender-Adresse für alle ausgehenden E-Mails (an euch und an den Kunden).
 * Standard: reine Adresse ohne Namen.
 */
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || "info@grau-eng.de";

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
  const baseStyles = `
    font-family: Arial, Helvetica, sans-serif;
    background-color: #f5f5f5;
    margin: 0;
    padding: 24px 0;
  `;
  const cardStyles = `
    max-width: 640px;
    margin: 0 auto;
    background-color: #ffffff;
    border-radius: 8px;
    border: 1px solid #e0e0e0;
    padding: 24px 28px 22px;
  `;
  const headingStyles = `
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 0.03em;
    text-transform: none;
    color: #1f2933;
    margin: 0 0 6px;
  `;
  const subheadingStyles = `
    font-size: 13px;
    color: #6e7b85;
    margin: 0 0 18px;
    line-height: 1.6;
  `;
  const labelStyles = `
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: #9aa5b1;
    margin: 18px 0 4px;
  `;
  const valueStyles = `
    font-size: 13px;
    color: #1f2933;
    margin: 0;
    line-height: 1.5;
  `;
  const footerStyles = `
    font-size: 12px;
    color: #9ca3af;
    margin-top: 24px;
    border-top: 1px solid #e5e7eb;
    padding-top: 12px;
  `;
  const signatureHtml = `
    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;font-family:Arial,Helvetica,sans-serif;margin-top:24px;">
      <tr>
        <td colspan="2" height="2" bgcolor="#1b5e35" style="font-size:0;line-height:0;">&nbsp;</td>
      </tr>
      <tr>
        <td valign="top" style="padding:22px 22px 18px 22px;width:280px;">
          <div style="font-size:19px;font-weight:700;color:#111111;margin-bottom:2px;line-height:1.2;">Rafael Grau</div>
          <div style="font-size:9px;color:#999999;letter-spacing:0.4px;margin-bottom:12px;">Geschäftsführung</div>
          <table cellpadding="0" cellspacing="0" border="0" style="margin-bottom:12px;"><tr><td width="26" height="2" bgcolor="#1b5e35" style="font-size:0;line-height:0;">&nbsp;</td></tr></table>
          <div style="font-size:12px;color:#222222;margin-bottom:9px;">+49&#8203; 172&#8203; 321&#8203; 1514</div>
          <div style="font-size:12px;color:#222222;">rafael.grau&#8203;@&#8203;grau-eng.de</div>
        </td>
              width="60"
              style="display:block;margin-left:auto;border:0;height:auto;max-width:60px;"
              alt="GRAU Engineering"
            />
          </div>
          <div style="font-size:12px;font-weight:700;color:#111111;margin-bottom:5px;">GRAU Engineering GmbH</div>
          <div style="font-size:12px;color:#888888;line-height:1.75;">
            Obere Mühle 42<br>
            58644 Iserlohn<br>
            www.grau&#8203;-engineering&#8203;.de<br>
            info&#8203;@&#8203;grau-eng&#8203;.de
          </div>
        </td>
      </tr>
      <tr>
        <td colspan="2" height="2" bgcolor="#1b5e35" style="font-size:0;line-height:0;">&nbsp;</td>
      </tr>
      <tr>
        <td colspan="2" style="padding:11px 22px;background:#f9f9f9;">
          <p style="margin:0;font-size:9px;color:#bbbbbb;line-height:1.6;font-family:Arial,Helvetica,sans-serif;">
            Diese E-Mail enthält vertrauliche und rechtlich geschützte Informationen. Wenn Sie nicht der richtige Adressat sind oder diese E-Mail irrtümlich erhalten haben, informieren Sie bitte sofort den Absender und löschen Sie diese Nachricht. Das unerlaubte Kopieren, Weiterleiten oder Verwenden der Inhalte ist nicht gestattet.
          </p>
        </td>
      </tr>
      <tr>
        <td colspan="2" height="2" bgcolor="#1b5e35" style="font-size:0;line-height:0;">&nbsp;</td>
      </tr>
    </table>
  `;

  const htmlToCompany = `
    <html>
      <body style="${baseStyles}">
        <table role="presentation" width="100%" cellPadding="0" cellSpacing="0">
          <tr>
            <td>
              <div style="${cardStyles}">
                <h1 style="${headingStyles}">Kontaktanfrage</h1>
                <p style="${subheadingStyles}">Es ist eine neue Anfrage über das Kontaktformular eingegangen.</p>

                <p style="${labelStyles}">Name</p>
                <p style="${valueStyles}">${escapeHtml(name)}</p>

                ${
                  firma
                    ? `<p style="${labelStyles}">Firma</p>
                       <p style="${valueStyles}">${escapeHtml(firma)}</p>`
                    : ""
                }

                <p style="${labelStyles}">E-Mail</p>
                <p style="${valueStyles}">${escapeHtml(email)}</p>

                <p style="${labelStyles}">Nachricht</p>
                <p style="${valueStyles}">${escapeHtml(nachricht).replace(/\n/g, "<br>")}</p>

                <p style="${footerStyles}">
                  Diese E-Mail wurde automatisch über das Kontaktformular auf der Website grau-engineering.de generiert.
                </p>
                ${signatureHtml}
              </div>
            </td>
          </tr>
        </table>
      </body>
    </html>
  `;

  const confirmSubject = "Eingang Ihrer Anfrage";
  const htmlToCustomer = `
    <html>
      <body style="${baseStyles}">
        <table role="presentation" width="100%" cellPadding="0" cellSpacing="0">
          <tr>
            <td>
              <div style="${cardStyles}">
                <h1 style="${headingStyles}">Vielen Dank für Ihre Anfrage</h1>
                <p style="${subheadingStyles}">
                  Guten Tag ${escapeHtml(
                    name,
                  )},<br/>wir haben Ihre Nachricht erhalten und melden uns zeitnah bei Ihnen.
                </p>

                ${
                  firma
                    ? `<p style="${labelStyles}">Firma</p>
                       <p style="${valueStyles}">${escapeHtml(firma)}</p>`
                    : ""
                }

                <p style="${labelStyles}">Ihre Nachricht</p>
                <p style="${valueStyles}">${escapeHtml(nachricht).replace(/\n/g, "<br>")}</p>

                <p style="${footerStyles}">
                  Bitte antworten Sie auf diese E-Mail, falls Sie noch Rückfragen oder Ergänzungen zu Ihrer Anfrage haben.
                </p>
                ${signatureHtml}
              </div>
            </td>
          </tr>
        </table>
      </body>
    </html>
  `;

  try {
    const [companyResult, customerResult] = await Promise.all([
      resend.emails.send({
        from: FROM_EMAIL,
        to: [TO_EMAIL],
        replyTo: email,
        subject,
        html: htmlToCompany,
      }),
      resend.emails.send({
        from: FROM_EMAIL,
        to: [email],
        subject: confirmSubject,
        html: htmlToCustomer,
      }),
    ]);

    if (companyResult.error || customerResult.error) {
      console.error("Resend error (company):", companyResult.error);
      console.error("Resend error (customer):", customerResult.error);
      return res.status(500).json({
        error: "E-Mail konnte nicht gesendet werden. Bitte versuchen Sie es später erneut.",
      });
    }

    return res.status(200).json({
      success: true,
      companyId: companyResult.data?.id,
      customerId: customerResult.data?.id,
    });
  } catch (error) {
    console.error("Resend exception:", error);
    return res
      .status(500)
      .json({ error: "E-Mail konnte nicht gesendet werden. Bitte versuchen Sie es später erneut." });
  }
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
