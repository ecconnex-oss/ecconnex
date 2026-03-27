import { AnimatedSection } from "@/components/AnimatedSection";
import { ButtonLink } from "@/components/ButtonLink";

export function CTASection({
  eyebrow,
  title,
  copy,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
  supportingPoints = []
}) {
  return (
    <AnimatedSection className="section-padding">
      <div className="mx-auto max-w-7xl">
        <div className="surface-card rounded-[2.25rem] p-8 sm:p-10 lg:flex lg:items-center lg:justify-between lg:gap-10">
          <div className="max-w-3xl">
            <div className="text-xs tracking-[0.24em] text-[color:var(--gold-soft)] uppercase">{eyebrow}</div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2>
            <p className="mt-5 text-base leading-8 text-[color:var(--muted)] sm:text-lg">{copy}</p>
            {supportingPoints.length ? (
              <div className="mt-6 flex flex-wrap gap-3">
                {supportingPoints.map((item) => (
                  <div key={item} className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/85">
                    {item}
                  </div>
                ))}
              </div>
            ) : null}
          </div>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row lg:mt-0">
            <ButtonLink href={primaryHref} variant="primary">
              {primaryLabel}
            </ButtonLink>
            {secondaryHref && secondaryLabel ? (
              <ButtonLink href={secondaryHref} variant="secondary">
                {secondaryLabel}
              </ButtonLink>
            ) : null}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
