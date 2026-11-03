import { NextResponse } from "next/server";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_NAME_LENGTH = 120;
const MAX_EMAIL_LENGTH = 254;
const MAX_MESSAGE_LENGTH = 5000;

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL;

  if (!apiKey || !from || !to) {
    return NextResponse.json(
      { error: "The contact form is not configured yet. Please try again later." },
      { status: 503 },
    );
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch (error) {
    if (error instanceof SyntaxError) {
      return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
    }
    throw error;
  }

  if (!payload || typeof payload !== "object" || Array.isArray(payload)) {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, message } = payload as Record<string, unknown>;
  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof message !== "string"
  ) {
    return NextResponse.json(
      { error: "Please provide your name, a valid email address, and a message." },
      { status: 400 },
    );
  }

  const trimmedName = name.trim();
  const trimmedEmail = email.trim();
  const trimmedMessage = message.trim();

  if (
    !trimmedName ||
    trimmedName.length > MAX_NAME_LENGTH ||
    !EMAIL_PATTERN.test(trimmedEmail) ||
    trimmedEmail.length > MAX_EMAIL_LENGTH ||
    !trimmedMessage ||
    trimmedMessage.length > MAX_MESSAGE_LENGTH
  ) {
    return NextResponse.json(
      {
        error:
          "Please provide a name (up to 120 characters), a valid email address, and a message (up to 5000 characters).",
      },
      { status: 400 },
    );
  }

  let response: Response;
  try {
    response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: trimmedEmail,
        subject: `Portfolio contact from ${trimmedName.replace(/[\r\n]+/g, " ")}`,
        text: `Name: ${trimmedName}\nEmail: ${trimmedEmail}\n\n${trimmedMessage}`,
      }),
    });
  } catch {
    console.error("Unable to reach the Resend email service.");
    return NextResponse.json(
      { error: "The email service is temporarily unavailable. Please try again." },
      { status: 502 },
    );
  }

  if (!response.ok) {
    console.error(`Resend rejected a contact email (status ${response.status}).`);
    return NextResponse.json(
      { error: "Your message could not be sent. Please try again later." },
      { status: 502 },
    );
  }

  return NextResponse.json({ message: "Thanks for reaching out! Your message has been sent." });
}
