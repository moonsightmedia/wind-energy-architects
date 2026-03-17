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
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    background-color: #f3f4f6;
    margin: 0;
    padding: 24px 0;
  `;
  const cardStyles = `
    max-width: 640px;
    margin: 0 auto;
    background-color: #ffffff;
    border-radius: 12px;
    border: 1px solid #e5e7eb;
    padding: 24px 24px 20px;
  `;
  const headingStyles = `
    font-size: 18px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #111827;
    margin: 0 0 8px;
  `;
  const subheadingStyles = `
    font-size: 14px;
    color: #6b7280;
    margin: 0 0 20px;
  `;
  const labelStyles = `
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: #6b7280;
    margin: 16px 0 4px;
  `;
  const valueStyles = `
    font-size: 14px;
    color: #111827;
    margin: 0;
  `;
  const footerStyles = `
    font-size: 12px;
    color: #9ca3af;
    margin-top: 24px;
    border-top: 1px solid #e5e7eb;
    padding-top: 12px;
  `;
  const signatureHtml = `
    <table width="560" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;font-family:Arial,Helvetica,sans-serif;background:#ffffff;border:1px solid #dedede;max-width:560px;margin-top:16px;">
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
        <td valign="top" align="right" style="padding:22px 22px 18px 22px;width:220px;">
          <div style="margin-bottom:14px;"><img src="data:image/png;base64,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" width="72" height="65" alt="GRAU Engineering" style="display:block;margin-left:auto;border:0;"></div>
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
                  Diese E-Mail wurde automatisch über das Kontaktformular auf der Website grau-eng.de generiert.
                </p>
              </div>
              ${signatureHtml}
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
              </div>
              ${signatureHtml}
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
