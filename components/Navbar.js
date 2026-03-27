"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/data/site";
import { ButtonLink } from "@/components/ButtonLink";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/8 bg-black/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-14 w-14 overflow-hidden rounded-full border border-[color:var(--gold)]/35 bg-black/40 shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
            <Image src="/ecconnex-logo.png" alt="Ecconnex logo" fill className="object-cover object-center" sizes="56px" />
          </div>
          <div>
            <div className="text-lg font-semibold tracking-[0.2em] text-[color:var(--gold-soft)] uppercase">Ecconnex</div>
            <div className="text-xs tracking-[0.26em] text-[color:var(--green-soft)] uppercase">
              Rooted in Fast Solutions
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-white/80 transition hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <ButtonLink href="/contact" variant="primary">
            Get Offer
          </ButtonLink>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white lg:hidden"
        >
          <span className="text-xl">{open ? "×" : "≡"}</span>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-white/8 bg-black/90 lg:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-5 sm:px-8">
              {navLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-base text-white/85"
                >
                  {item.label}
                </Link>
              ))}
              <ButtonLink href="/contact" variant="primary" className="w-full" onClick={() => setOpen(false)}>
                Get Offer
              </ButtonLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
