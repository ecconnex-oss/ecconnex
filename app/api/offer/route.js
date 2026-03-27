import { NextResponse } from "next/server";
import { forwardLead } from "@/lib/lead-routing";
import { sendLeadEmail } from "@/lib/mailer";

export async function POST(request) {
  const body = await request.json();
  const { name, phone, propertyAddress } = body;

  if (!name || !phone || !propertyAddress) {
    return NextResponse.json({ message: "Please complete all required fields." }, { status: 400 });
  }

  const results = await Promise.allSettled([
    forwardLead({
      type: "offer",
      payload: { name, phone, propertyAddress }
    }),
    sendLeadEmail({
      type: "offer",
      payload: { name, phone, propertyAddress }
    })
  ]);

  const failures = results.filter((result) => result.status === "rejected");

  if (failures.length === results.length) {
    console.error("Offer lead delivery failed", failures.map((result) => result.reason));

    return NextResponse.json(
      {
        message:
          "Thanks, we received your request, but our delivery system hit an issue. Please call (804) 683-9086 or email ecconnex@gmail.com so we can help right away."
      },
      { status: 202 }
    );
  }

  if (failures.length) {
    console.error("Offer lead delivery partially failed", failures.map((result) => result.reason));
  }

  return NextResponse.json({
    message: `Thanks ${name.split(" ")[0] || name}, your property details are in. An Ecconnex team member will contact you within 24 hours.`
  });
}
