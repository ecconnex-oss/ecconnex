import nodemailer from "nodemailer";

function getMailerConfig() {
  const user = process.env.GMAIL_USER || "ecconnex@gmail.com";
  const pass = process.env.GMAIL_APP_PASSWORD?.replace(/\s+/g, "");
  const recipient = process.env.LEAD_RECIPIENT_EMAIL || "ecconnex@gmail.com";

  return {
    user,
    pass,
    recipient
  };
}

function createTransport() {
  const { user, pass } = getMailerConfig();

  if (!pass) {
    return null;
  }

  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user,
      pass
    }
  });
}

function formatField(label, value) {
  return `${label}: ${value || "Not provided"}`;
}

export async function sendLeadEmail({ type, payload }) {
  const transport = createTransport();

  if (!transport) {
    return { delivered: false, reason: "missing_gmail_app_password" };
  }

  const { user, recipient } = getMailerConfig();
  const subjectPrefix = type === "offer" ? "New Seller Lead" : "New Contact Lead";
  const subject = `${subjectPrefix} • Ecconnex`;

  const text =
    type === "offer"
      ? [
          "A new seller lead was submitted on Ecconnex.",
          "",
          formatField("Name", payload.name),
          formatField("Phone", payload.phone),
          formatField("Property Address", payload.propertyAddress)
        ].join("\n")
      : [
          "A new contact lead was submitted on Ecconnex.",
          "",
          formatField("Name", payload.name),
          formatField("Email", payload.email),
          formatField("Phone", payload.phone),
          formatField("Message", payload.message)
        ].join("\n");

  await transport.sendMail({
    from: `"Ecconnex Website" <${user}>`,
    to: recipient,
    replyTo: payload.email || user,
    subject,
    text
  });

  return { delivered: true };
}
