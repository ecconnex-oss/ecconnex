function parseWebhookTargets(value) {
  if (!value) {
    return [];
  }

  return value
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

async function postJson(url, payload) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(`Webhook ${url} responded with ${response.status}: ${message}`);
  }
}

export async function forwardLead({ type, payload }) {
  const targets = [
    ...parseWebhookTargets(process.env.LEAD_WEBHOOK_URL),
    ...parseWebhookTargets(type === "offer" ? process.env.SELLER_LEAD_WEBHOOK_URL : process.env.CONTACT_LEAD_WEBHOOK_URL)
  ];

  if (!targets.length) {
    return { delivered: false };
  }

  const enrichedPayload = {
    leadType: type,
    receivedAt: new Date().toISOString(),
    source: "ecconnex-website",
    ...payload
  };

  await Promise.all(targets.map((target) => postJson(target, enrichedPayload)));

  return { delivered: true, targets: targets.length };
}
