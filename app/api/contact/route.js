import { NextResponse } from "next/server";
import { forwardLead } from "@/lib/lead-routing";
import { sendLeadEmail } from "@/lib/mailer";

export async function POST(request) {
  const body = await request.json();
  const { name, email, phone, message } = body;

  if (!name || !email || !message) {
    return NextResponse.json({ message: "Name, email, and message are required." }, { status: 400 });
  }

  const results = await Promise.allSettled([
    forwardLead({
      type: "contact",
      payload: { name, email, phone, message }
    }),
    sendLeadEmail({
      type: "contact",
      payload: { name, email, phone, message }
    })
  ]);

  const failures = results.filter((result) => result.status === "rejected");

  if (failures.length === results.length) {
    console.error("Contact lead delivery failed", failures.map((result) => result.reason));

    return NextResponse.json(
      {
        message:
          "Thanks, we received your message, but our delivery system hit an issue. Please call (804) 683-9086 or email ecconnex@gmail.com so we can get back to you quickly."
      },
      { status: 202 }
    );
  }

  if (failures.length) {
    console.error("Contact lead delivery partially failed", failures.map((result) => result.reason));
  }

  return NextResponse.json({
    message: "Your message has been sent. We will be in touch shortly."
  });
}
