import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeading } from "@/components/SectionHeading";
import { processSteps } from "@/data/site";

export function HowItWorks() {
  return (
    <AnimatedSection className="section-padding">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="How It Works"
          title="A clean, pressure-free process built for speed."
          copy="We make selling straightforward. Share the property, review the offer, and choose a closing date that fits your timeline."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {processSteps.map((step, index) => (
            <div key={step.title} className="surface-card rounded-[1.75rem] p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[color:var(--gold)]/15 text-lg font-semibold text-[color:var(--gold-soft)]">
                {index + 1}
              </div>
              <h3 className="mt-6 text-2xl font-semibold text-white">{step.title}</h3>
              <p className="mt-4 text-base leading-7 text-[color:var(--muted)]">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
