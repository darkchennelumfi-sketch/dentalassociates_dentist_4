import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check, Quote } from "lucide-react";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { PaymentSection } from "@/components/payment-section";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { ServiceIcon } from "@/components/service-icon";
import { ToothMark } from "@/components/tooth-mark";
import { Button } from "@/components/ui/button";
import { site, values } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Dental Associates Inc., a caring family dental office in Mandan, North Dakota, offering general dentistry, pediatric dentistry, and family dental care.",
};

const promises = [
  {
    title: "General dentistry",
    description:
      "From routine dental checkups to tooth extractions, we care for every general dentistry need.",
  },
  {
    title: "Pediatric dentistry",
    description:
      "We offer pediatric dentistry and treat patients of any age, so the whole family is welcome.",
  },
  {
    title: "A caring experience",
    description:
      "Our dentists and staff cannot wait to give you the best dental patient experience you have ever had.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title={
          <>
            A <em className="font-normal italic text-clay">caring</em> team. A
            trusted dental home.
          </>
        }
        description="Dental Associates Inc. is a family dental office in Mandan, North Dakota, built on trusted dentists, complete general dentistry, and a truly caring staff."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button asChild>
            <a href={site.phoneHref}>Call {site.phoneDisplay}</a>
          </Button>
          <Button asChild variant="outline">
            <Link href="/contact-us">
              Schedule a visit
              <ArrowUpRight aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </PageHero>

      <section className="bg-bone py-20 md:py-28">
        <div className="container-site grid items-center gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20">
          <Reveal>
            <div className="relative mx-auto max-w-md">
              <div
                aria-hidden="true"
                className="arch-sm absolute -inset-3 border border-ink/10"
              />
              <div className="arch-sm relative aspect-[4/5] overflow-hidden border border-ink/10 bg-sage-light shadow-card">
                <Image
                  src="/images/care.jpg"
                  alt="Dental care at Dental Associates Inc. in Mandan, North Dakota"
                  fill
                  sizes="(max-width: 1024px) 88vw, 38vw"
                  className="object-cover"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-pine-deep/60 via-transparent to-transparent"
                />
                <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/50 bg-cream/90 p-4 backdrop-blur-md">
                  <p className="text-[0.56rem] font-semibold uppercase tracking-[0.2em] text-clay-deep">
                    All ages welcome
                  </p>
                  <p className="mt-1 font-display text-xl text-ink">
                    Pediatric &amp; family dentistry
                  </p>
                </div>
              </div>
              <div className="absolute -right-3 -top-3 grid size-16 place-items-center rounded-full border border-brass/40 bg-bone text-clay shadow-card md:-right-5 md:-top-5 md:size-20">
                <ToothMark className="size-8 md:size-9" />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <SectionHeading
              eyebrow="Our practice"
              title={
                <>
                  The kind of dental office you can feel{" "}
                  <em className="font-normal italic text-clay">
                    at home
                  </em>{" "}
                  in.
                </>
              }
              description="When you need dental care to restore the health and beauty of your smile, turn to Dental Associates Inc."
            />
            <div className="mt-6 space-y-4 text-[0.95rem] leading-relaxed text-ink/65">
              <p>
                We provide the best dental care in Mandan, North Dakota, with
                general dentistry provided by some of the most trusted dentists
                and a truly caring staff.
              </p>
              <p>
                Let us give you the dental care services you deserve. From
                routine dental checkups to tooth extractions, we care for every
                general dentistry need.
              </p>
              <p>
                We offer pediatric dentistry and treat patients of any age, so
                if you need someone to take care of your entire family&rsquo;s
                oral health, you have found the right place.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 border-t border-ink/10 pt-6">
              {["Trusted dentists", "Caring staff", "Every age welcome"].map(
                (item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-2 text-xs font-medium text-ink/70"
                  >
                    <Check className="size-3.5 text-clay" aria-hidden="true" />
                    {item}
                  </span>
                ),
              )}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-ink/10 bg-cream py-20 md:py-28">
        <div className="container-site">
          <Reveal>
            <SectionHeading
              eyebrow="What guides us"
              title={
                <>
                  The details that make a{" "}
                  <em className="font-normal italic text-clay">difference</em>.
                </>
              }
              description="Everything we do comes back to a simple idea: care for people well. These are the values that shape every visit."
            />
          </Reveal>

          <div className="mt-12 border-b border-ink/12">
            {values.map((value, index) => (
              <Reveal key={value.title} delay={index * 0.06}>
                <div className="group grid gap-4 border-t border-ink/12 px-3 py-6 sm:grid-cols-[3rem_2.6rem_minmax(0,0.8fr)_minmax(0,1.2fr)] sm:items-center sm:gap-6 sm:px-5">
                  <span className="text-[0.62rem] font-semibold tracking-[0.16em] text-ink/65">
                    0{index + 1}
                  </span>
                  <span className="grid size-10 place-items-center rounded-full border border-ink/12 text-clay transition-colors group-hover:border-clay group-hover:bg-clay group-hover:text-cream">
                    <ServiceIcon name={value.icon} />
                  </span>
                  <h3 className="font-display text-2xl leading-tight text-ink">
                    {value.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-ink/70">
                    {value.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="grain relative overflow-hidden bg-pine py-20 text-cream md:py-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-24 top-0 size-[28rem] rounded-full bg-teal/40 blur-[100px]"
        />
        <div className="container-site relative z-10 grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-20">
          <Reveal>
            <p className="eyebrow text-brass">Our promise</p>
            <Quote
              className="mt-7 size-9 text-brass/70 md:size-11"
              aria-hidden="true"
            />
            <blockquote className="mt-5 font-display text-[clamp(1.9rem,4.1vw,3.6rem)] leading-[1.06] text-cream">
              &ldquo;Our dentists and staff cannot wait to give you the best
              dental patient experience you have ever had.&rdquo;
            </blockquote>
            <p className="mt-6 text-sm text-cream/70">
              — The team at Dental Associates Inc.
            </p>
            <div className="mt-8">
              <Button asChild variant="light">
                <Link href="/dental-services">
                  Explore our services
                  <ArrowUpRight aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </Reveal>

          <div className="grid gap-3">
            {promises.map((promise, index) => (
              <Reveal key={promise.title} delay={0.08 * index}>
                <div className="rounded-2xl border border-cream/12 bg-cream/5 p-5 backdrop-blur-sm">
                  <div className="flex items-start gap-4">
                    <span className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-full bg-brass/15 text-brass">
                      <Check className="size-4" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="font-display text-xl text-cream">
                        {promise.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-cream/75">
                        {promise.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <PaymentSection />
      <CtaBand />
    </>
  );
}
