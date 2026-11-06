import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Check,
  Phone,
  Sparkles,
} from "lucide-react";
import { CtaBand } from "@/components/cta-band";
import { FaqSection } from "@/components/faq-section";
import { PageHero } from "@/components/page-hero";
import { PaymentSection } from "@/components/payment-section";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { ServiceIcon } from "@/components/service-icon";
import { Button } from "@/components/ui/button";
import { services, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Dental Services",
  description:
    "Explore dental services at Dental Associates Inc. in Mandan, ND: general dentistry, routine checkups, tooth extractions, pediatric dentistry, family dentistry, and smile care.",
};

const steps = [
  {
    title: "Call us today",
    description:
      "Call Dental Associates Inc. at 701-663-7545. Our team is ready to help you find the right next step.",
  },
  {
    title: "Schedule an appointment",
    description:
      "We will help you find a time that works for you and your family.",
  },
  {
    title: "Get the care you deserve",
    description:
      "We will give you the high-quality dental care that you deserve, with a truly caring team by your side.",
  },
];

const servicePoints = [
  "General dentistry",
  "Routine checkups",
  "Tooth extractions",
  "Pediatric care",
  "Family dentistry",
  "Smile care",
];

export default function DentalServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Dental services"
        title={
          <>
            Dental services for{" "}
            <em className="font-normal italic text-clay">every stage</em> of
            life.
          </>
        }
        description="From routine dental checkups to tooth extractions, we care for every general dentistry need. We offer pediatric dentistry and treat patients of any age."
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
              <ArrowRight aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </PageHero>

      <section className="bg-bone py-20 md:py-28">
        <div className="container-site grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16">
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <div className="relative mx-auto max-w-md lg:mx-0">
                <div className="arch overflow-hidden border border-ink/10 bg-sage-light shadow-card">
                  <div className="relative aspect-[4/5]">
                    <Image
                      src="/images/dentist.jpg"
                      alt="A dentist caring for a patient at Dental Associates Inc."
                      fill
                      sizes="(max-width: 1024px) 88vw, 32vw"
                      className="object-cover"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-t from-pine-deep/70 via-transparent to-transparent"
                    />
                    <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/15 bg-pine-deep/70 p-4 backdrop-blur-md">
                      <p className="text-[0.56rem] font-semibold uppercase tracking-[0.2em] text-brass">
                        Complete general dentistry
                      </p>
                      <p className="mt-1 font-display text-xl text-cream">
                        Care for every need.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="absolute -right-3 -top-3 grid size-16 place-items-center rounded-full border border-brass/40 bg-bone text-clay shadow-card md:-right-5 md:-top-5">
                  <Sparkles className="size-7" aria-hidden="true" />
                </div>
              </div>

              <div className="mt-8 rounded-2xl border border-ink/10 bg-cream p-6">
                <p className="text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-clay-deep">
                  Not sure where to start?
                </p>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">
                  Tell us what you need and our team will help you find the
                  right service.
                </p>
                <Button asChild className="mt-5 w-full" size="sm">
                  <a href={site.phoneHref}>
                    <Phone aria-hidden="true" />
                    Call {site.phoneDisplay}
                  </a>
                </Button>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <SectionHeading
                eyebrow="What we offer"
                title={
                  <>
                    A full range of{" "}
                    <em className="font-normal italic text-clay">
                      general dentistry
                    </em>
                    .
                  </>
                }
                description="Every service below is part of the caring, complete dental care we provide in Mandan."
              />
            </Reveal>

            <div className="mt-10 border-b border-ink/12">
              {services.map((service, index) => (
                <Reveal key={service.slug} delay={index * 0.04}>
                  <article
                    id={service.slug}
                    className="group scroll-mt-28 border-t border-ink/12 py-8 first:border-t-0 first:pt-0"
                  >
                    <div className="flex items-start gap-4">
                      <span className="grid size-11 shrink-0 place-items-center rounded-full border border-ink/12 bg-cream text-clay transition-colors group-hover:border-clay group-hover:bg-clay group-hover:text-cream">
                        <ServiceIcon name={service.icon} />
                      </span>
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                          <span className="text-[0.6rem] font-semibold tracking-[0.18em] text-ink/65">
                            0{index + 1}
                          </span>
                          <h3 className="font-display text-[1.65rem] leading-tight text-ink">
                            {service.title}
                          </h3>
                        </div>
                        <p className="mt-3 text-sm leading-relaxed text-ink/65">
                          {service.description}
                        </p>
                        <p className="mt-2 text-sm leading-relaxed text-ink/70">
                          {service.detail}
                        </p>
                        <Link
                          href="/contact-us"
                          className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-pine transition-colors hover:text-clay-deep"
                        >
                          Ask about this service
                          <ArrowUpRight className="size-3.5" aria-hidden="true" />
                        </Link>
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-ink/10 bg-cream py-20 md:py-28">
        <div className="container-site grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <Reveal>
            <SectionHeading
              eyebrow="How it works"
              title={
                <>
                  Getting started is{" "}
                  <em className="font-normal italic text-clay">simple</em>.
                </>
              }
              description="A quick call is all it takes to take the next step for your smile."
            />
            <div className="mt-8 flex flex-wrap gap-2.5">
              {servicePoints.map((point) => (
                <span
                  key={point}
                  className="inline-flex items-center gap-2 rounded-full border border-ink/12 bg-paper px-3.5 py-2 text-xs font-medium text-ink/70"
                >
                  <Check className="size-3.5 text-clay" aria-hidden="true" />
                  {point}
                </span>
              ))}
            </div>
          </Reveal>

          <div className="space-y-3">
            {steps.map((step, index) => (
              <Reveal key={step.title} delay={index * 0.08}>
                <div className="card-lift flex gap-5 rounded-2xl border border-ink/10 bg-paper p-5 sm:p-6">
                  <span className="grid size-11 shrink-0 place-items-center rounded-full bg-pine text-sm font-semibold text-cream">
                    0{index + 1}
                  </span>
                  <div>
                    <h3 className="font-display text-xl text-ink">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink/70">
                      {step.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
            <Reveal delay={0.28}>
              <Button asChild variant="outline" className="mt-2 w-full">
                <Link href="/contact-us">
                  <CalendarDays aria-hidden="true" />
                  Request an appointment
                </Link>
              </Button>
            </Reveal>
          </div>
        </div>
      </section>

      <PaymentSection />
      <FaqSection
        eyebrow="Service questions"
        title="Good to know before your visit."
        description="A few helpful answers about the care we provide and how to get started."
      />
      <CtaBand />
    </>
  );
}
