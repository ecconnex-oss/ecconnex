import { AnimatedSection } from "@/components/AnimatedSection";
import { ContactForm } from "@/components/ContactForm";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata = {
  title: "Contact",
  description:
    "Contact Ecconnex to request a cash offer, ask about investor opportunities, or speak with our team."
};

export default function ContactPage() {
  return (
    <AnimatedSection className="section-padding">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <SectionHeading
            eyebrow="Contact Us"
            title="Start the conversation with a team that moves quickly."
            copy="Whether you need to sell a difficult property or want access to upcoming investor deals, we’ll respond with clear next steps and real follow-through."
          />
          <div className="mt-10 rounded-[2rem] border border-white/10 bg-white/[0.03] p-8">
            <div className="text-sm tracking-[0.2em] text-[color:var(--gold-soft)] uppercase">Direct Contact</div>
            <div className="mt-5 space-y-4 text-base leading-7 text-[color:var(--muted)]">
              <p>Email: ecconnex@gmail.com</p>
              <p>Phone: (555) 214-8800</p>
              <p>Hours: Monday through Sunday, 8:00 AM to 8:00 PM</p>
            </div>
            <div className="mt-6 rounded-[1.5rem] border border-[color:var(--green)]/20 bg-[color:var(--green)]/10 p-4 text-sm leading-6 text-[color:var(--green-soft)]">
              Sellers can request an offer. Investors can share their buy box. Our team replies quickly.
            </div>
          </div>
        </div>

        <ContactForm />
      </div>
    </AnimatedSection>
  );
}
