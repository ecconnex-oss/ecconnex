import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeading } from "@/components/SectionHeading";
import { sellerScenarios } from "@/data/site";

export function SellerScenarios() {
  return (
    <AnimatedSection className="section-padding">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Common Situations"
          title="If the property is becoming a problem, we are built for that."
          copy="Our best-fit sellers are usually dealing with time pressure, property condition issues, or a home they simply do not want to keep managing."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {sellerScenarios.map((scenario) => (
            <div key={scenario.title} className="surface-card rounded-[1.9rem] p-7">
              <div className="text-xs tracking-[0.22em] text-[color:var(--gold-soft)] uppercase">{scenario.title}</div>
              <p className="mt-4 text-base leading-7 text-white/88">{scenario.description}</p>
              <div className="mt-6 rounded-[1.4rem] border border-[color:var(--green)]/25 bg-[color:var(--green)]/10 p-4 text-sm leading-6 text-[color:var(--green-soft)]">
                {scenario.outcome}
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
