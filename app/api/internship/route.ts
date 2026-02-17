import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const data = await req.json()
    const { fullName, email, phoneNumber, courseOfStudy, level, department, reasons } = data

    const { data: resendData, error } = await resend.emails.send({
      from: "Internship Program <noreply@wakasub.com>",
      to: ["wakasub321@gmail.com"],
      subject: `New Internship Application: ${fullName}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #eee; padding: 20px; border-radius: 10px;">
          <h2 style="color: #3b82f6;">New Internship Application - Batch A</h2>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
          <p><strong>Name:</strong> ${fullName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone Number:</strong> ${phoneNumber}</p>
          <p><strong>Course of Study:</strong> ${courseOfStudy}</p>
          <p><strong>Level:</strong> ${level}</p>
          <p><strong>Preferred Department:</strong> ${department}</p>
          <p><strong>Reason for Joining:</strong></p>
          <p style="background-color: #f9fafb; padding: 15px; border-radius: 8px; font-style: italic;">"${reasons}"</p>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
          <p style="font-size: 12px; color: #666;">This application was submitted via the Wakasub Internship landing page.</p>
        </div>
      `,
    })

    if (error) {
      console.error("Resend Error:", error)
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
    }

    return NextResponse.json({ success: true, data: resendData })
  } catch (error) {
    console.error("API Error:", error)
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
  }
}
