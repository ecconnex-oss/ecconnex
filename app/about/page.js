import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeading } from "@/components/SectionHeading";
import { testimonials } from "@/data/site";

export const metadata = {
  title: "About",
  description:
    "Learn about the Ecconnex mission, our approach to helping sellers, and how we serve investors with professionalism and urgency."
};

const teamValues = [
  {
    title: "Built on real trust",
    description:
      "Ecconnex is a three-person operation built by friends who have known each other since high school and still work side by side today."
  },
  {
    title: "Grounded in real life",
    description:
      "We know that sellers are often dealing with pressure, uncertainty, or a property that has become emotionally and financially draining."
  },
  {
    title: "Hands-on from start to finish",
    description:
      "You are not getting passed into a giant system. The same small team that answers your questions is the team working the deal."
  }
];

export default function AboutPage() {
  return (
    <>
      <AnimatedSection className="section-padding">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <SectionHeading
              eyebrow="Our Mission"
              title="Create better outcomes for sellers under pressure and investors moving decisively."
              copy="Ecconnex was built around a simple idea: distressed property situations need a calm, professional solution, and serious investors need a more reliable source of off-market opportunities. We combine direct communication, disciplined underwriting, and a service mindset that puts trust first."
            />
            <div className="mt-10 space-y-6 text-base leading-8 text-[color:var(--muted)]">
              <p>
                We are a small team, and that is intentional. Ecconnex was built by three longtime friends who have
                been through enough life to understand that people usually call a company like ours because they want
                clarity, speed, and a straight answer.
              </p>
              <p>
                For homeowners, that means straightforward cash offers, flexible closings, and zero pressure to repair,
                clean, or list a property they no longer want. For investors, it means access to opportunities presented
                with enough context to make decisions quickly.
              </p>
              <p>
                We believe credibility is built through consistency. That is why our process prioritizes responsiveness,
                transparent expectations, and follow-through from first call to closing table.
              </p>
            </div>
          </div>

          <div className="surface-card rounded-[2rem] p-8">
            <div className="text-xs tracking-[0.24em] text-[color:var(--gold-soft)] uppercase">How We Work</div>
            <div className="mt-6 space-y-5">
              {teamValues.map((item) => (
                <div key={item.title} className="rounded-[1.5rem] border border-white/8 bg-white/[0.03] p-5">
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-padding">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Reputation"
            title="Relationships matter more than one transaction."
            copy="Our best growth comes from repeat investors and referrals from sellers who felt taken care of during stressful situations."
            align="center"
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {testimonials.map((item) => (
              <div key={item.name} className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-8">
                <p className="text-base leading-7 text-white/90">{item.quote}</p>
                <div className="mt-6 text-sm text-[color:var(--muted)]">
                  {item.name} • {item.role}
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
