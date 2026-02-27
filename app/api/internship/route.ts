import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  return NextResponse.json(
    { error: "Applications for Batch A are now closed. Stay tuned for future batches!" },
    { status: 403 }
  )
}

/*
export async function POST_DISABLED(req: Request) {
  try {
    const data = await req.json()
... rest of the code
*/
