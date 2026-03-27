import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeading } from "@/components/SectionHeading";
import { investorAdvantages } from "@/data/site";

export function InvestorHighlights() {
  return (
    <AnimatedSection className="section-padding">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Why Investors Opt In"
          title="Built for buyers who want cleaner deals and faster decisions."
          copy="We position Ecconnex as a reliable source of off-market opportunities, not a one-off blast list with missing details."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {investorAdvantages.map((item) => (
            <div key={item.title} className="rounded-[1.8rem] border border-white/10 bg-white/[0.03] p-8">
              <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
              <p className="mt-4 text-base leading-7 text-[color:var(--muted)]">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
