import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  Banknote,
  CreditCard,
  Mail,
  MapPin,
  Phone,
  Star,
  Wallet,
} from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { CtaBand } from "@/components/cta-band";
import { FacebookIcon } from "@/components/facebook-icon";
import { FaqSection } from "@/components/faq-section";
import { MapCard } from "@/components/map-card";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { paymentMethods, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Dental Associates Inc. in Mandan, North Dakota. Call 701-663-7545, email mandandentalassociates@gmail.com, or send us a message to schedule an appointment.",
};

const paymentIcons = {
  card: CreditCard,
  cash: Banknote,
  debit: Wallet,
} as const;

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact us"
        title={
          <>
            Let&rsquo;s take care of{" "}
            <em className="font-normal italic text-clay">your smile</em>.
          </>
        }
        description="Call us today to schedule an appointment. We'll give you the high-quality dental care that you deserve."
      >
        <div className="flex flex-wrap gap-3">
          <a
            href={site.phoneHref}
            className="inline-flex items-center gap-2 rounded-full bg-pine px-5 py-2.5 text-sm font-semibold text-cream transition-colors hover:bg-pine-deep"
          >
            <Phone className="size-4" aria-hidden="true" />
            {site.phoneDisplay}
          </a>
          <a
            href={site.emailHref}
            className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-paper/60 px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-pine hover:text-pine"
          >
            <Mail className="size-4" aria-hidden="true" />
            Email us
          </a>
        </div>
      </PageHero>

      <section className="bg-bone py-20 md:py-28">
        <div className="container-site grid gap-10 lg:grid-cols-[1.12fr_0.88fr] lg:items-start lg:gap-12">
          <Reveal>
            <ContactForm />
          </Reveal>

          <Reveal delay={0.12}>
            <aside className="space-y-3">
              <div className="grain relative overflow-hidden rounded-3xl bg-pine p-6 text-cream sm:p-7">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-10 -top-10 size-40 rounded-full bg-teal/40 blur-3xl"
                />
                <p className="relative text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-brass">
                  Call us today
                </p>
                <a
                  href={site.phoneHref}
                  className="relative mt-3 block font-display text-[clamp(2rem,4vw,3rem)] leading-none text-cream transition-colors hover:text-brass"
                >
                  {site.phoneDisplay}
                </a>
                <p className="relative mt-4 text-sm leading-relaxed text-cream/75">
                  Our dentists and staff cannot wait to give you the best dental
                  patient experience you have ever had.
                </p>
                <a
                  href={site.emailHref}
                  className="relative mt-5 inline-flex items-center gap-2 break-all text-sm font-medium text-brass transition-colors hover:text-cream"
                >
                  <Mail className="size-4 shrink-0" aria-hidden="true" />
                  {site.email}
                </a>
              </div>

              <div className="rounded-3xl border border-ink/10 bg-cream p-6">
                <p className="text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-clay-deep">
                  Visit us
                </p>
                <div className="mt-4 space-y-4 text-sm">
                  <a
                    href={site.maps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex gap-3"
                  >
                    <MapPin
                      className="mt-0.5 size-4 shrink-0 text-clay"
                      aria-hidden="true"
                    />
                    <span className="text-ink/70 transition-colors group-hover:text-pine">
                      {site.address.full}
                    </span>
                  </a>
                  <a href={site.phoneHref} className="group flex gap-3">
                    <Phone
                      className="mt-0.5 size-4 shrink-0 text-clay"
                      aria-hidden="true"
                    />
                    <span className="text-ink/70 transition-colors group-hover:text-pine">
                      {site.phoneDisplay}
                    </span>
                  </a>
                  <a href={site.emailHref} className="group flex gap-3">
                    <Mail
                      className="mt-0.5 size-4 shrink-0 text-clay"
                      aria-hidden="true"
                    />
                    <span className="break-all text-ink/70 transition-colors group-hover:text-pine">
                      {site.email}
                    </span>
                  </a>
                </div>
                <div className="mt-5 flex items-center gap-2 border-t border-ink/10 pt-5">
                  <a
                    href={site.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Dental Associates Inc. on Facebook"
                    className="grid size-9 place-items-center rounded-full border border-ink/12 text-ink/70 transition-colors hover:border-pine hover:text-pine"
                  >
                    <FacebookIcon className="size-3.5" />
                  </a>
                  <a
                    href={site.googleReviews}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Read reviews on Google"
                    className="grid size-9 place-items-center rounded-full border border-ink/12 text-ink/70 transition-colors hover:border-pine hover:text-pine"
                  >
                    <Star className="size-3.5" aria-hidden="true" />
                  </a>
                  <span className="ml-1 text-[0.62rem] text-ink/65">
                    Find us on Facebook and Google
                  </span>
                </div>
              </div>

              <div className="rounded-3xl border border-ink/10 bg-cream p-6">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-clay-deep">
                    Payment options
                  </p>
                  <Link
                    href="/payment-options"
                    className="inline-flex items-center gap-1 text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-pine transition-colors hover:text-clay-deep"
                  >
                    Details
                    <ArrowUpRight className="size-3" aria-hidden="true" />
                  </Link>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {paymentMethods.map((method) => {
                    const Icon = paymentIcons[method.kind];
                    return (
                      <span
                        key={method.label}
                        className="inline-flex items-center gap-1.5 rounded-full border border-ink/12 bg-bone/70 px-2.5 py-1 text-[0.62rem] font-medium text-ink/70"
                      >
                        <Icon className="size-3" aria-hidden="true" />
                        {method.label}
                      </span>
                    );
                  })}
                  <span className="inline-flex items-center rounded-full border border-brass/35 bg-brass/10 px-2.5 py-1 text-[0.62rem] font-semibold text-clay-deep">
                    CareCredit
                  </span>
                </div>
              </div>

              <div className="rounded-3xl border border-ink/10 bg-sage-light/60 p-6">
                <p className="font-display text-xl leading-snug text-ink">
                  Thank you for contacting us.
                </p>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">
                  We will get back to you as soon as possible.
                </p>
              </div>
            </aside>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-ink/10 bg-cream py-20 md:py-24">
        <div className="container-site grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal>
            <SectionHeading
              eyebrow="Find us"
              title={
                <>
                  Easy to find in{" "}
                  <em className="font-normal italic text-clay">Mandan</em>.
                </>
              }
              description="We are located at 204 3rd Ave NW, Mandan, ND 58554. Open the map for directions, or give us a call if you need a hand finding the office."
            />
            <a
              href={site.maps}
              target="_blank"
              rel="noopener noreferrer"
              className="link-sweep mt-7 inline-flex text-sm font-semibold text-pine"
            >
              Get directions
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
          </Reveal>
          <Reveal delay={0.12}>
            <MapCard />
          </Reveal>
        </div>
      </section>

      <FaqSection
        eyebrow="Before you call"
        title="A few quick answers."
        description="Helpful details about appointments, location, payment, and care for the whole family."
      />
      <CtaBand />
    </>
  );
}
