import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeading } from "@/components/SectionHeading";
import { benefits } from "@/data/site";

export function WhyChooseUs() {
  return (
    <AnimatedSection className="section-padding">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Why Sellers Choose Ecconnex"
          title="A faster, cleaner path out of difficult property situations."
          copy="We help homeowners who need certainty, speed, and simplicity. That means fewer steps, less waiting, and a straightforward offer you can actually evaluate."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-8 transition duration-300 hover:-translate-y-1 hover:border-[color:var(--gold)]/35">
              <div className="text-sm tracking-[0.22em] text-[color:var(--gold-soft)] uppercase">Trust Signal</div>
              <h3 className="mt-4 text-2xl font-semibold text-white">{benefit.title}</h3>
              <p className="mt-4 text-base leading-7 text-[color:var(--muted)]">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
