import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeading } from "@/components/SectionHeading";
import { PropertyCard } from "@/components/PropertyCard";
import { CTASection } from "@/components/CTASection";
import { investorDeals } from "@/data/site";
import { InvestorHighlights } from "@/components/InvestorHighlights";

export const metadata = {
  title: "Investor Deals",
  description:
    "Browse off-market wholesale opportunities from Ecconnex and join the buyer list for access to upcoming deals."
};

export default function InvestorsPage() {
  return (
    <>
      <AnimatedSection className="section-padding">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="For Investors"
            title="Curated wholesale inventory with cleaner upside and better context."
            copy="Ecconnex sources off-market opportunities for investors who value speed, transparency, and repeatable deal flow. Join the buyer list to see deals before they circulate more broadly."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {investorDeals.map((deal) => (
              <PropertyCard key={deal.title} deal={deal} />
            ))}
          </div>
        </div>
      </AnimatedSection>

      <InvestorHighlights />

      <CTASection
        eyebrow="Buyer List"
        title="Join the list to get priority access before deals are broadly released."
        copy="Tell us your buy box, target markets, and preferred strategy. We’ll reach out when inventory matches your criteria so you can move before the crowd."
        primaryHref="/contact"
        primaryLabel="Join Buyer List"
        secondaryHref="/about"
        secondaryLabel="Why Ecconnex"
        supportingPoints={["Priority deal alerts", "Transparent pricing context", "Built for repeat buyers"]}
      />
    </>
  );
}
