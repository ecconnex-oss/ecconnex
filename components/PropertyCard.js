"use client";

import { motion } from "framer-motion";
import { ButtonLink } from "@/components/ButtonLink";

export function PropertyCard({ deal }) {
  return (
    <motion.article
      whileHover={{ y: -8, scale: 1.01 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="surface-card group rounded-[1.9rem] p-6"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-xs tracking-[0.24em] text-[color:var(--gold-soft)] uppercase">Featured Deal</div>
          <h3 className="mt-4 text-2xl font-semibold text-white">{deal.title}</h3>
          <p className="mt-2 text-sm text-[color:var(--muted)]">{deal.location}</p>
          <div className="mt-4 inline-flex rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs tracking-[0.18em] text-white/80 uppercase">
            {deal.strategy}
          </div>
        </div>
        <div className="rounded-full border border-[color:var(--green)]/30 bg-[color:var(--green)]/12 px-4 py-2 text-sm font-medium text-[color:var(--green-soft)]">
          ROI {deal.roi}
        </div>
      </div>

      <p className="mt-6 text-base leading-7 text-[color:var(--muted)]">{deal.summary}</p>

      <div className="mt-8 grid grid-cols-2 gap-4">
        <div className="rounded-2xl border border-white/8 bg-black/25 p-4">
          <div className="text-xs tracking-[0.2em] text-white/55 uppercase">Price</div>
          <div className="mt-2 text-2xl font-semibold text-white">{deal.price}</div>
        </div>
        <div className="rounded-2xl border border-white/8 bg-black/25 p-4">
          <div className="text-xs tracking-[0.2em] text-white/55 uppercase">Estimated ARV</div>
          <div className="mt-2 text-2xl font-semibold text-white">{deal.arv}</div>
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <ButtonLink href="/contact" variant="secondary" className="group-hover:border-[color:var(--gold)] group-hover:text-[color:var(--gold-soft)]">
          Join Buyer List
        </ButtonLink>
        <ButtonLink href="/contact" variant="accent">
          Ask for Details
        </ButtonLink>
      </div>
    </motion.article>
  );
}
