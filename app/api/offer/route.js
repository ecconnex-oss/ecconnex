import { NextResponse } from "next/server";
import { forwardLead } from "@/lib/lead-routing";

export async function POST(request) {
  const body = await request.json();
  const { name, phone, propertyAddress } = body;

  if (!name || !phone || !propertyAddress) {
    return NextResponse.json({ message: "Please complete all required fields." }, { status: 400 });
  }

  try {
    await forwardLead({
      type: "offer",
      payload: { name, phone, propertyAddress }
    });
  } catch (error) {
    return NextResponse.json(
      { message: "Your request was received, but lead delivery failed. Please verify webhook settings." },
      { status: 500 }
    );
  }

  return NextResponse.json({
    message: `Thanks ${name.split(" ")[0] || name}, your property details are in. An Ecconnex team member will contact you within 24 hours.`
  });
}
