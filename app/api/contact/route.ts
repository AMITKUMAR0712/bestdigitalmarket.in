import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  phone?: string;
  email?: string;
  business?: string;
  service?: string;
  message?: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^[0-9+\-\s()]{8,16}$/;

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function validate(payload: ContactPayload) {
  const data = {
    name: clean(payload.name),
    phone: clean(payload.phone),
    email: clean(payload.email),
    business: clean(payload.business),
    service: clean(payload.service),
    message: clean(payload.message),
  };

  if (!data.name) return { error: "Please enter your name." };
  if (!phonePattern.test(data.phone)) return { error: "Please enter a valid phone number." };
  if (!emailPattern.test(data.email)) return { error: "Please enter a valid email address." };
  if (!data.business) return { error: "Please enter your business name." };
  if (!data.service) return { error: "Please select a service." };
  if (data.message.length < 10) return { error: "Please share a short message about your requirement." };

  return { data };
}

export async function POST(request: Request) {
  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_APP_PASSWORD;
  const to = process.env.CONTACT_RECEIVER_EMAIL || user;

  if (!user || !pass || !to) {
    return NextResponse.json({ error: "Email service is not configured yet." }, { status: 500 });
  }

  let payload: ContactPayload;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid form request." }, { status: 400 });
  }

  const result = validate(payload);

  if ("error" in result) {
    return NextResponse.json({ error: result.error }, { status: 400 });
  }

  const { data } = result;
  const submittedAt = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
  const subject = `New website enquiry from ${data.name}`;
  const text = [
    "New website enquiry",
    "",
    `Name: ${data.name}`,
    `Phone: ${data.phone}`,
    `Email: ${data.email}`,
    `Business: ${data.business}`,
    `Service: ${data.service}`,
    `Message: ${data.message}`,
    `Submitted at: ${submittedAt}`,
  ].join("\n");

  const html = `
    <div style="font-family:Arial,sans-serif;line-height:1.6;color:#0f172a">
      <h2>New website enquiry</h2>
      <p><strong>Name:</strong> ${escapeHtml(data.name)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(data.phone)}</p>
      <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
      <p><strong>Business:</strong> ${escapeHtml(data.business)}</p>
      <p><strong>Service:</strong> ${escapeHtml(data.service)}</p>
      <p><strong>Message:</strong><br>${escapeHtml(data.message).replace(/\n/g, "<br>")}</p>
      <p><strong>Submitted at:</strong> ${escapeHtml(submittedAt)}</p>
    </div>
  `;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user, pass },
  });

  try {
    await transporter.sendMail({
      from: `"Website Lead" <${user}>`,
      to,
      replyTo: data.email,
      subject,
      text,
      html,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form email failed", error);
    return NextResponse.json({ error: "Unable to send message right now." }, { status: 500 });
  }
}
