import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeading } from "@/components/SectionHeading";
import { testimonials } from "@/data/site";

export function Testimonials() {
  return (
    <AnimatedSection className="section-padding">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Proof"
          title="Trusted by sellers who needed certainty and investors who needed quality."
          copy="Real estate decisions move faster when the process feels transparent, responsive, and professional."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((item) => (
            <div key={item.name} className="surface-card rounded-[1.75rem] p-8">
              <div className="text-4xl leading-none text-[color:var(--gold-soft)]">“</div>
              <p className="mt-5 text-base leading-7 text-white/90">{item.quote}</p>
              <div className="mt-8 border-t border-white/10 pt-5">
                <div className="font-semibold text-white">{item.name}</div>
                <div className="mt-1 text-sm text-[color:var(--muted)]">{item.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
