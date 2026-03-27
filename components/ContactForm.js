"use client";

import { useState } from "react";

const initialState = {
  name: "",
  email: "",
  phone: "",
  message: ""
};

export function ContactForm() {
  const [form, setForm] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "idle", message: "" });

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    setStatus({ type: "idle", message: "" });

    try {
      const response = await fetch("/api/contact", {
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
      setStatus({ type: "error", message: error.message || "Unable to send message right now." });
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="surface-card rounded-[2rem] p-6 sm:p-8">
      <div className="text-xs tracking-[0.24em] text-[color:var(--gold-soft)] uppercase">Reach Out</div>
      <h2 className="mt-4 text-3xl font-semibold text-white">Let’s talk about your property or buying criteria.</h2>
      <p className="mt-4 text-base leading-7 text-[color:var(--muted)]">
        Use the form below and our team will respond with next steps, deal details, or a cash offer review.
      </p>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-sm text-white/85">Name</span>
          <input
            required
            value={form.name}
            onChange={(event) => setForm({ ...form, name: event.target.value })}
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-[color:var(--gold)]"
            placeholder="Full name"
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-sm text-white/85">Email</span>
          <input
            required
            type="email"
            value={form.email}
            onChange={(event) => setForm({ ...form, email: event.target.value })}
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-[color:var(--gold)]"
            placeholder="name@email.com"
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-sm text-white/85">Phone</span>
          <input
            value={form.phone}
            onChange={(event) => setForm({ ...form, phone: event.target.value })}
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-[color:var(--gold)]"
            placeholder="Optional"
          />
        </label>

        <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5">
          <div className="text-sm font-semibold text-white">Direct Contact</div>
          <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">
            Email: hello@ecconnex.com
            <br />
            Phone: (555) 214-8800
          </p>
        </div>
      </div>

      <label className="mt-5 block">
        <span className="mb-2 block text-sm text-white/85">Message</span>
        <textarea
          required
          rows={5}
          value={form.message}
          onChange={(event) => setForm({ ...form, message: event.target.value })}
          className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-[color:var(--gold)]"
          placeholder="Tell us whether you are selling a property, joining the buyer list, or both."
        />
      </label>

      <button
        type="submit"
        disabled={loading}
        className="mt-6 inline-flex rounded-full bg-[linear-gradient(135deg,var(--green),var(--green-soft))] px-6 py-3 text-sm font-semibold tracking-[0.18em] text-white uppercase transition hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-70"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>

      {status.message ? (
        <p className={`mt-4 text-sm ${status.type === "success" ? "text-[color:var(--green-soft)]" : "text-red-300"}`}>
          {status.message}
        </p>
      ) : null}
    </form>
  );
}
