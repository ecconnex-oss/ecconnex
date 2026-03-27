import Link from "next/link";

export function ButtonLink({ href, children, variant = "primary", className = "", ...props }) {
  const styles = {
    primary:
      "bg-[linear-gradient(135deg,var(--gold),var(--gold-soft))] text-black hover:scale-[1.02]",
    secondary:
      "border border-white/15 bg-white/6 text-white hover:border-[color:var(--gold)] hover:bg-white/10",
    accent:
      "bg-[linear-gradient(135deg,var(--green),var(--green-soft))] text-white hover:scale-[1.02]"
  };

  return (
    <Link
      href={href}
      {...props}
      className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold tracking-[0.18em] uppercase transition duration-300 ${styles[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
