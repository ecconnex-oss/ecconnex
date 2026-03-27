import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeading } from "@/components/SectionHeading";
import { LeadForm } from "@/components/LeadForm";
import { CTASection } from "@/components/CTASection";
import { SellerScenarios } from "@/components/SellerScenarios";

export const metadata = {
  title: "Sell Your Property Without Repairs or Fees",
  description:
    "Sell your property as-is with Ecconnex. No repairs, no commissions, no hidden fees, and a fast cash offer."
};

const painPoints = [
  "Behind on payments or facing foreclosure timelines",
  "Tired of an unwanted rental or inherited house",
  "Property needs major repairs or cleanup",
  "Need certainty without listing delays"
];

export default function SellersPage() {
  return (
    <>
      <AnimatedSection className="section-padding">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.95fr]">
          <div>
            <SectionHeading
              eyebrow="For Homeowners"
              title="Sell Your Property Without Repairs, Fees, or Delays"
              copy="If the property is creating stress, expenses, or urgency, Ecconnex can help you move on quickly. We buy distressed, inherited, vacant, tenant-occupied, and outdated homes in as-is condition."
            />
            <div className="mt-10 grid gap-4">
              {painPoints.map((point) => (
                <div key={point} className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] px-5 py-4 text-base text-white/90">
                  {point}
                </div>
              ))}
            </div>
          </div>

          <LeadForm
            title="Get a serious cash offer started now"
            description="Send us your information and we’ll review the property quickly, explain the next steps clearly, and help you decide if a direct sale makes sense."
            ctaLabel="Get My Cash Offer"
          />
        </div>
      </AnimatedSection>

      <SellerScenarios />

      <CTASection
        eyebrow="Need Speed"
        title="When the situation is urgent, the process should feel easier, not harder."
        copy="We keep communication simple, explain the numbers clearly, and help you avoid the delays, repairs, and buyer fallout that often come with listing traditionally."
        primaryHref="/contact"
        primaryLabel="Talk to Our Team"
        secondaryHref="/"
        secondaryLabel="See How It Works"
        supportingPoints={["No agent commissions", "No repairs required", "Close on your timeline"]}
      />
    </>
  );
}
