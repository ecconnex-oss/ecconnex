import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Testimonials } from "@/components/Testimonials";
import { CTASection } from "@/components/CTASection";
import { SellerScenarios } from "@/components/SellerScenarios";
import { InvestorHighlights } from "@/components/InvestorHighlights";

export default function HomePage() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <WhyChooseUs />
      <SellerScenarios />
      <Testimonials />
      <InvestorHighlights />
      <CTASection
        eyebrow="Ready to Move"
        title="Need to sell quickly or want better investor inventory?"
        copy="Choose the path that fits your goal. Homeowners can request a fast no-obligation offer, and investors can join the buyer list for priority access to fresh opportunities."
        primaryHref="/contact"
        primaryLabel="Request My Offer"
        secondaryHref="/contact"
        secondaryLabel="Join Buyer List"
        supportingPoints={["24-hour offer goal", "Flexible closing", "Priority investor access"]}
      />
    </>
  );
}
