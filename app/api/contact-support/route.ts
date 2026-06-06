import { NextResponse } from "next/server"
import { Resend } from "resend"
import { z } from "zod"

// Inbox that receives the support messages
const SUPPORT_INBOX = "wakasub321@gmail.com"
// Sends from the verified wakasub.com domain (same one the internship form uses).
const FROM_ADDRESS =
  process.env.CONTACT_FROM_EMAIL || "Wakasub Support <noreply@wakasub.com>"

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(120),
  email: z.string().trim().email("A valid email is required").max(200),
  subject: z.string().trim().min(1, "Subject is required").max(160),
  message: z.string().trim().min(1, "Message is required").max(5000),
})

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
}

export async function POST(req: Request) {
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json(
      { error: "Support email is not configured. Please try again later." },
      { status: 500 }
    )
  }

  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 })
  }

  const parsed = contactSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? "Invalid form submission." },
      { status: 400 }
    )
  }

  const { name, email, subject, message } = parsed.data

  try {
    const resend = new Resend(process.env.RESEND_API_KEY)
    const { error } = await resend.emails.send({
      from: FROM_ADDRESS,
      to: SUPPORT_INBOX,
      reply_to: email,
      subject: `[Support] ${subject}`,
      text: `New support message from the Wakasub website\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: -apple-system, Segoe UI, Roboto, sans-serif; max-width: 560px; margin: 0 auto; color: #0f172a;">
          <h2 style="margin: 0 0 4px;">New support message</h2>
          <p style="margin: 0 0 20px; color: #64748b;">Submitted via the Wakasub contact form</p>
          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <tr><td style="padding: 6px 0; color: #64748b; width: 90px;">Name</td><td style="padding: 6px 0; font-weight: 600;">${escapeHtml(name)}</td></tr>
            <tr><td style="padding: 6px 0; color: #64748b;">Email</td><td style="padding: 6px 0; font-weight: 600;"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
            <tr><td style="padding: 6px 0; color: #64748b;">Subject</td><td style="padding: 6px 0; font-weight: 600;">${escapeHtml(subject)}</td></tr>
          </table>
          <div style="margin-top: 16px; padding: 16px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; white-space: pre-wrap; font-size: 14px; line-height: 1.6;">${escapeHtml(message)}</div>
        </div>
      `,
    })

    if (error) {
      console.error("Resend error:", error)
      return NextResponse.json(
        { error: "We couldn't send your message. Please try again." },
        { status: 502 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error("Contact support error:", err)
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    )
  }
}
