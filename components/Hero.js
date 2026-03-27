"use client";

import { motion } from "framer-motion";
import { ButtonLink } from "@/components/ButtonLink";
import { trustStats } from "@/data/site";
import { TrustBar } from "@/components/TrustBar";

export function Hero() {
  return (
    <section className="section-padding pb-10">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="relative">
          <div className="absolute -left-10 top-14 hidden h-40 w-40 rounded-full bg-[color:var(--gold)]/10 blur-3xl lg:block" />
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="inline-flex rounded-full border border-[color:var(--gold)]/25 bg-white/5 px-4 py-2 text-xs tracking-[0.22em] text-[color:var(--gold-soft)] uppercase"
          >
            Cash Offers for Sellers • Vetted Off-Market Deals for Investors
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="mt-8 max-w-4xl text-5xl font-semibold leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            We Buy Properties Fast. Any Condition.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="mt-6 max-w-2xl text-lg leading-8 text-[color:var(--muted)] sm:text-xl"
          >
            Get a cash offer in 24 hours. Sell your house as-is without repairs, agent fees, or delays, or join the
            buyer list for exclusive investment opportunities with real upside.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.24 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <div className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/88">
              No repairs required
            </div>
            <div className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/88">
              No commissions
            </div>
            <div className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/88">
              Flexible closing
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <ButtonLink href="/contact" variant="primary">
              Get My Cash Offer
            </ButtonLink>
            <ButtonLink href="/investors" variant="secondary">
              View Investor Deals
            </ButtonLink>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.36 }}
            className="mt-5 text-sm leading-7 text-[color:var(--muted)]"
          >
            Motivated sellers get a fast, no-pressure path forward. Investors get priority access to curated wholesale
            deals.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.25 }}
          className="surface-card gold-ring relative overflow-hidden rounded-[2rem] p-6 sm:p-8"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.2),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(39,176,125,0.18),transparent_30%)]" />
          <div className="relative">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm tracking-[0.2em] text-[color:var(--gold-soft)] uppercase">Fast Track Offer</p>
                <h2 className="mt-3 text-3xl font-semibold text-white">Close without repairs, listings, or fees.</h2>
                <p className="mt-3 max-w-lg text-sm leading-7 text-[color:var(--muted)]">
                  Tell us about the property, receive a serious offer quickly, and choose a timeline that works for you.
                </p>
              </div>
              <div className="rounded-full border border-white/10 bg-white/6 px-4 py-2 text-sm text-white/80">
                Trusted Process
              </div>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {trustStats.map((item) => (
                <div key={item.label} className="rounded-3xl border border-white/8 bg-black/30 p-5">
                  <div className="text-3xl font-semibold text-white">{item.value}</div>
                  <div className="mt-2 text-sm leading-6 text-[color:var(--muted)]">{item.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.75rem] border border-white/8 bg-black/35 p-6">
                <div>
                  <div className="text-sm tracking-[0.22em] text-[color:var(--gold-soft)] uppercase">Seller Promise</div>
                  <div className="mt-2 text-xl font-medium text-white">No cleaning. No showings. No waiting on buyers.</div>
                </div>
              </div>
              <div className="rounded-[1.75rem] border border-white/8 bg-black/35 p-6">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <div className="text-sm tracking-[0.22em] text-[color:var(--gold-soft)] uppercase">Investor Pulse</div>
                    <div className="mt-2 text-xl font-medium text-white">New off-market inventory added weekly.</div>
                  </div>
                  <div className="rounded-full bg-[color:var(--green)]/20 px-4 py-2 text-sm text-[color:var(--green-soft)]">
                    Buyer List Open
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <TrustBar />
    </section>
  );
}
