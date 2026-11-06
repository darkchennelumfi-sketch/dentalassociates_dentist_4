import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  Banknote,
  Check,
  CreditCard,
  Phone,
  Wallet,
} from "lucide-react";
import { CtaBand } from "@/components/cta-band";
import { FaqSection } from "@/components/faq-section";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { paymentMethods, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Payment Options",
  description:
    "Dental Associates Inc. accepts Visa, MasterCard, Discover, American Express, cash, and debit. CareCredit is also accepted in our Mandan, ND office.",
};

const paymentIcons = {
  card: CreditCard,
  cash: Banknote,
  debit: Wallet,
} as const;

const paymentKinds = {
  card: "Credit card",
  cash: "Cash",
  debit: "Debit card",
} as const;

const details = [
  "Visa, MasterCard, Discover, and American Express",
  "Cash and debit payments",
  "CareCredit accepted",
  "Ask our team if you have a question",
];

export default function PaymentOptionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Payment options"
        title={
          <>
            Simple, flexible ways to{" "}
            <em className="font-normal italic text-clay">care for your smile</em>.
          </>
        }
        description="We accept a range of payment methods, and CareCredit is available. If you have a question about payment, our team is happy to help when you call."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button asChild>
            <a href={site.phoneHref}>
              <Phone aria-hidden="true" />
              Call {site.phoneDisplay}
            </a>
          </Button>
          <Button asChild variant="outline">
            <Link href="/contact-us">
              Ask a question
              <ArrowUpRight aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </PageHero>

      <section className="bg-bone py-20 md:py-28">
        <div className="container-site grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <Reveal>
            <SectionHeading
              eyebrow="Ways to pay"
              title={
                <>
                  Payment that fits{" "}
                  <em className="font-normal italic text-clay">real life</em>.
                </>
              }
              description="Use the payment method that works best for you. Our team will be glad to answer any questions when you call or visit."
            />
            <div className="mt-8 space-y-3">
              {details.map((detail) => (
                <div
                  key={detail}
                  className="flex items-center gap-3 text-sm text-ink/65"
                >
                  <span className="grid size-6 shrink-0 place-items-center rounded-full bg-sage-light text-pine">
                    <Check className="size-3.5" aria-hidden="true" />
                  </span>
                  {detail}
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="grid gap-3 sm:grid-cols-2">
              {paymentMethods.map((method) => {
                const Icon = paymentIcons[method.kind];
                return (
                  <div
                    key={method.label}
                    className="card-lift flex items-center gap-4 rounded-2xl border border-ink/10 bg-cream p-5"
                  >
                    <span className="grid size-11 shrink-0 place-items-center rounded-full border border-ink/10 bg-bone text-clay">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block text-sm font-semibold text-ink">
                        {method.label}
                      </span>
                      <span className="mt-0.5 block text-[0.62rem] uppercase tracking-[0.14em] text-ink/65">
                        {paymentKinds[method.kind]}
                      </span>
                    </span>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-ink/10 bg-cream py-20 md:py-24">
        <div className="container-site">
          <Reveal>
            <div className="grain relative overflow-hidden rounded-[2rem] bg-pine p-7 text-cream sm:p-10 md:p-14">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-20 -top-20 size-72 rounded-full bg-teal/40 blur-[90px]"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-24 -left-16 size-64 rounded-full bg-clay/20 blur-[90px]"
              />
              <div className="relative grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
                <div>
                  <p className="eyebrow text-brass">Financing available</p>
                  <h2 className="mt-4 font-display text-[clamp(2.2rem,4.5vw,3.6rem)] leading-none text-cream">
                    CareCredit
                  </h2>
                  <p className="mt-5 max-w-xl text-sm leading-relaxed text-cream/75 sm:text-base">
                    CareCredit is accepted at Dental Associates Inc. Ask our
                    team about CareCredit when you call to schedule your
                    appointment.
                  </p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                  <Button asChild variant="clay" size="lg">
                    <a href={site.phoneHref}>
                      <Phone aria-hidden="true" />
                      Ask our team
                    </a>
                  </Button>
                  <Button asChild variant="light" size="lg">
                    <Link href="/contact-us">
                      Send a message
                      <ArrowUpRight aria-hidden="true" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <FaqSection
        eyebrow="Payment questions"
        title="A little clarity goes a long way."
        description="Common questions about paying for care at Dental Associates Inc."
      />
      <CtaBand />
    </>
  );
}
