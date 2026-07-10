import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";
import { SITE } from "@/share/config";

export const dynamic = "force-dynamic";

const resend = new Resend(process.env.RESEND_API_KEY);
const TO_EMAIL = process.env.CONTACT_TO_EMAIL || SITE.email;

const schema = z.object({
  name: z.string().min(2).max(80),
  email: z.string().email(),
  subject: z.string().max(120).optional().or(z.literal("")),
  message: z.string().min(10).max(4000),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = schema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { success: false, error: "Invalid form data." },
        { status: 400 },
      );
    }

    const { name, email, subject, message } = parsed.data;

    const { error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: TO_EMAIL,
      replyTo: email,
      subject: subject
        ? `Portfolio — ${subject} (from ${name})`
        : `Portfolio message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject || "—"}\n\nMessage:\n${message}`,
    });

    if (error) {
      return NextResponse.json(
        { success: false, error: "Email service error." },
        { status: 502 },
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { success: false, error: "Unexpected server error." },
      { status: 500 },
    );
  }
}
