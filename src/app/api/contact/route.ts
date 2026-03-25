import { contactSchema } from "@/lib/contact-schema"

export async function POST(req: Request) {
  const body = await req.json()
  const parsed = contactSchema.safeParse(body)

  if (!parsed.success) {
    return Response.json(
      { errors: parsed.error.flatten().fieldErrors },
      { status: 422 }
    )
  }

  const { name, email, subject, message } = parsed.data

  // If SMTP is configured, send email via nodemailer
  if (process.env.SMTP_HOST) {
    const nodemailer = await import("nodemailer")
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    await transporter.sendMail({
      from: `"${name}" <${process.env.SMTP_USER}>`,
      replyTo: email,
      to: process.env.CONTACT_TO || "lazioreteitalianadisabili@gmail.com",
      subject: `[Sito Web] ${subject}`,
      text: `Nome: ${name}\nEmail: ${email}\n\n${message}`,
    })
  }

  return Response.json({ success: true })
}
