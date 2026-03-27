# Ecconnex

High-converting real estate wholesaling website for motivated sellers and investors.

## Local development

```bash
npm install
npm run dev
```

Production checks:

```bash
npm run lint
npm run build
npm start
```

## Lead routing

Both form endpoints can forward submissions to one or more webhook destinations such as:

- Zapier Catch Hook
- Make webhook
- HubSpot workflow webhook
- a custom CRM intake endpoint

Configure one shared webhook or separate seller/contact webhooks in `.env.local`:

```bash
LEAD_WEBHOOK_URL=
SELLER_LEAD_WEBHOOK_URL=
CONTACT_LEAD_WEBHOOK_URL=
LEAD_RECIPIENT_EMAIL=ecconnex@gmail.com
GMAIL_USER=ecconnex@gmail.com
GMAIL_APP_PASSWORD=
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

Notes:

- `LEAD_WEBHOOK_URL` receives all lead types.
- `SELLER_LEAD_WEBHOOK_URL` only receives `/api/offer` submissions.
- `CONTACT_LEAD_WEBHOOK_URL` only receives `/api/contact` submissions.
- Multiple webhook URLs can be provided as a comma-separated list.
- If `GMAIL_APP_PASSWORD` is set, both forms will also send an email to `LEAD_RECIPIENT_EMAIL`.
- For Gmail, use a Google App Password instead of your normal account password.

Payloads include `leadType`, `receivedAt`, and `source`.

## Deploying

This project is ready for Next.js hosting. Vercel is the cleanest path for App Router deployments.

Current official docs used:

- [Next.js on Vercel](https://vercel.com/docs/frameworks/nextjs)
- [Vercel custom domains](https://vercel.com/docs/domains/set-up-custom-domain)
- [GitHub repositories docs](https://docs.github.com/en/repositories)

Typical flow:

1. Create a GitHub repo and push this project.
2. Import the repo into Vercel.
3. Add environment variables from `.env.local`.
4. Add the custom domain in Vercel and update DNS.

## Current blockers on this machine

- `git` cannot be used yet because Apple Command Line Tools are missing.
- No GitHub CLI is installed or authenticated.
- No Vercel CLI is installed or authenticated.
- A real domain and CRM destination require your account access and credentials.
