import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-white/8 bg-black/75">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-8 lg:grid-cols-[1.4fr_1fr_1fr] lg:px-12">
        <div className="max-w-md">
          <div className="flex items-center gap-4">
            <div className="relative h-16 w-16 overflow-hidden rounded-full border border-[color:var(--gold)]/35 bg-black/40">
              <Image src="/ecconnex-logo.png" alt="Ecconnex logo" fill className="object-cover object-center" sizes="64px" />
            </div>
            <div>
              <div className="text-lg font-semibold tracking-[0.18em] uppercase text-[color:var(--gold-soft)]">Ecconnex</div>
              <div className="text-xs tracking-[0.26em] uppercase text-[color:var(--green-soft)]">Sell Fast. Invest Smart.</div>
            </div>
          </div>
          <p className="mt-4 text-sm leading-7 text-[color:var(--muted)]">
            We help motivated homeowners sell without repairs, delays, or fees while giving investors access to
            well-vetted off-market opportunities.
          </p>
        </div>

        <div>
          <div className="text-sm font-semibold tracking-[0.2em] uppercase text-white">Navigation</div>
          <div className="mt-4 flex flex-col gap-3 text-sm text-[color:var(--muted)]">
            {navLinks.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <div className="text-sm font-semibold tracking-[0.2em] uppercase text-white">Contact</div>
          <div className="mt-4 space-y-3 text-sm text-[color:var(--muted)]">
            <p>ecconnex@gmail.com</p>
            <p>(555) 214-8800</p>
            <p>Available seven days a week for property inquiries and buyer list requests.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
