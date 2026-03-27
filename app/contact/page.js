import { AnimatedSection } from "@/components/AnimatedSection";
import { ContactForm } from "@/components/ContactForm";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata = {
  title: "Contact",
  description:
    "Contact Ecconnex to request a cash offer, ask about investor opportunities, or speak with our team."
};

const teamContacts = [
  {
    name: "Candace Everett",
    phone: "(804) 683-9086",
    email: "ecconnex@gmail.com"
  },
  {
    name: "Grayson Cromwell",
    phone: "(804) 944-6173",
    email: "ecconnexdisp@gmail.com"
  },
  {
    name: "Josh Pope",
    phone: "(804) 245-9679",
    email: "ecconnexaq@gmail.com"
  }
];

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
            <div className="text-sm tracking-[0.2em] text-[color:var(--gold-soft)] uppercase">Meet the Team</div>
            <div className="mt-5 space-y-4 text-base leading-7 text-[color:var(--muted)]">
              <p>
                Ecconnex is a three-person operation built by longtime friends who have known each other since high
                school. We have all had our share of real life, hard seasons, and learning curves, and that is part of
                why we care so much about treating people directly, respectfully, and without the runaround.
              </p>
              <p>
                When you reach out, you are talking to a small team that actually knows the deals, answers the phones,
                and stays involved from first conversation to closing.
              </p>
            </div>
            <div className="mt-6 rounded-[1.5rem] border border-[color:var(--green)]/20 bg-[color:var(--green)]/10 p-4 text-sm leading-6 text-[color:var(--green-soft)]">
              Sellers can request an offer. Investors can share their buy box. Our team replies quickly.
            </div>
            <div className="mt-6 grid gap-4">
              {teamContacts.map((person) => (
                <div key={person.email} className="rounded-[1.5rem] border border-white/10 bg-black/20 p-5">
                  <div className="text-lg font-semibold text-white">{person.name}</div>
                  <div className="mt-2 text-sm leading-7 text-[color:var(--muted)]">
                    <div>Phone: {person.phone}</div>
                    <div>Email: {person.email}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <ContactForm />
      </div>
    </AnimatedSection>
  );
}
