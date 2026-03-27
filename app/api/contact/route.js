import { NextResponse } from "next/server";
import { forwardLead } from "@/lib/lead-routing";

export async function POST(request) {
  const body = await request.json();
  const { name, email, phone, message } = body;

  if (!name || !email || !message) {
    return NextResponse.json({ message: "Name, email, and message are required." }, { status: 400 });
  }

  try {
    await forwardLead({
      type: "contact",
      payload: { name, email, phone, message }
    });
  } catch (error) {
    return NextResponse.json(
      { message: "Your request was received, but lead delivery failed. Please verify webhook settings." },
      { status: 500 }
    );
  }

  return NextResponse.json({
    message: "Your message has been sent. We will be in touch shortly."
  });
}
