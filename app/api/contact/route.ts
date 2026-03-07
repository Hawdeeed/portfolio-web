import { NextResponse } from "next/server";
import { Resend } from "resend";

export const dynamic = "force-dynamic";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, phone, message, organization } = await req.json();

    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "hadeeda980@gmail.com",
      subject: `Portfolio message from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Phone: ${phone || "Not provided"}
Organization: ${organization || "Not provided"}

Message:
${message}
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false });
  }
}
