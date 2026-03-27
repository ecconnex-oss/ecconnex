"use client";

import { useState } from "react";

const initialState = {
  name: "",
  phone: "",
  propertyAddress: ""
};

export function LeadForm({
  endpoint = "/api/offer",
  title = "Request your no-obligation cash offer",
  description = "Share a few details and our team will reach out quickly.",
  ctaLabel = "Get My Cash Offer"
}) {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState({ type: "idle", message: "" });
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    setStatus({ type: "idle", message: "" });

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong.");
      }

      setStatus({ type: "success", message: data.message });
      setForm(initialState);
    } catch (error) {
      setStatus({ type: "error", message: error.message || "Unable to submit right now." });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="surface-card rounded-[2rem] p-6 sm:p-8">
      <div className="text-xs tracking-[0.24em] text-[color:var(--gold-soft)] uppercase">Fast Response</div>
      <h3 className="mt-4 text-3xl font-semibold text-white">{title}</h3>
      <p className="mt-4 text-base leading-7 text-[color:var(--muted)]">{description}</p>
      <div className="mt-5 rounded-[1.5rem] border border-[color:var(--green)]/20 bg-[color:var(--green)]/10 p-4 text-sm leading-6 text-[color:var(--green-soft)]">
        Most sellers hear back the same day. No obligations, no fees, and no pressure to accept.
      </div>

      <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
        <label className="block">
          <span className="mb-2 block text-sm text-white/85">Name</span>
          <input
            required
            value={form.name}
            onChange={(event) => setForm({ ...form, name: event.target.value })}
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-[color:var(--gold)]"
            placeholder="Your full name"
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-sm text-white/85">Phone</span>
          <input
            required
            value={form.phone}
            onChange={(event) => setForm({ ...form, phone: event.target.value })}
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-[color:var(--gold)]"
            placeholder="Best number to reach you"
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-sm text-white/85">Property Address</span>
          <input
            required
            value={form.propertyAddress}
            onChange={(event) => setForm({ ...form, propertyAddress: event.target.value })}
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-[color:var(--gold)]"
            placeholder="Street, city, state"
          />
        </label>

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-full bg-[linear-gradient(135deg,var(--gold),var(--gold-soft))] px-5 py-3 text-sm font-semibold tracking-[0.18em] text-black uppercase transition hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {loading ? "Submitting..." : ctaLabel}
        </button>

        <p className="text-center text-xs leading-6 text-[color:var(--muted)]">
          By submitting, you agree to be contacted about your property by phone or email.
        </p>

        {status.message ? (
          <p className={status.type === "success" ? "text-sm text-[color:var(--green-soft)]" : "text-sm text-red-300"}>
            {status.message}
          </p>
        ) : null}
      </form>
    </div>
  );
}
