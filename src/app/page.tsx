import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Phone,
  Quote,
  Sparkles,
} from "lucide-react";
import { CtaBand } from "@/components/cta-band";
import { FaqSection } from "@/components/faq-section";
import { Marquee } from "@/components/marquee";
import { PaymentSection } from "@/components/payment-section";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { ServiceIcon } from "@/components/service-icon";
import { ToothMark } from "@/components/tooth-mark";
import { Button } from "@/components/ui/button";
import { VisitSection } from "@/components/visit-section";
import { services, site, values } from "@/lib/site";

const familyPoints = [
  "Routine checkups",
  "Tooth extractions",
  "Pediatric dentistry",
  "Family dental care",
];

const promisePoints = [
  "Trusted dentists",
  "A truly caring staff",
  "Patients of any age",
];

export default function HomePage() {
  return (
    <>
      <section className="grain relative overflow-hidden bg-bone">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 -top-40 size-[36rem] rounded-full bg-sage-light/75 blur-[110px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-40 top-1/3 size-[28rem] rounded-full bg-clay/10 blur-[100px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-cream/40"
        />

        <div className="container-site relative z-10 grid items-center gap-12 pt-10 pb-16 md:pt-14 md:pb-24 lg:grid-cols-[1.04fr_0.96fr] lg:gap-16">
          <div>
            <p className="eyebrow animate-rise text-clay-deep">
              Dental Associates Inc. · Mandan, North Dakota
            </p>
            <h1 className="animate-rise delay-1 mt-6 text-[clamp(3.1rem,7.4vw,6.5rem)] leading-[0.92] text-ink">
              Your <em className="font-normal italic text-clay">caring</em>{" "}
              dental office.
            </h1>
            <p className="animate-rise delay-2 mt-7 max-w-xl text-[0.98rem] leading-relaxed text-ink/65 sm:text-[1.02rem]">
              When you need dental care to restore the health and beauty of your
              smile, turn to Dental Associates Inc. We provide the best dental
              care in Mandan, North Dakota, with general dentistry provided by
              some of the most trusted dentists and a truly caring staff.
            </p>

            <div className="animate-rise delay-3 mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <a href={site.phoneHref}>
                  <Phone aria-hidden="true" />
                  Call {site.phoneDisplay}
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact-us">
                  Schedule a visit
                  <ArrowRight aria-hidden="true" />
                </Link>
              </Button>
            </div>

            <div className="animate-rise delay-4 mt-9 flex flex-wrap gap-x-6 gap-y-3 border-t border-ink/10 pt-6">
              {familyPoints.map((point) => (
                <span
                  key={point}
                  className="inline-flex items-center gap-2 text-xs font-medium text-ink/70"
                >
                  <Check className="size-3.5 text-clay" aria-hidden="true" />
                  {point}
                </span>
              ))}
            </div>
          </div>

          <div className="animate-fade delay-2 relative mx-auto w-full max-w-[30rem] lg:max-w-none">
            <div
              aria-hidden="true"
              className="arch absolute -inset-3 border border-clay/25 md:-inset-5"
            />
            <div
              aria-hidden="true"
              className="absolute -right-3 -top-3 z-20 grid size-16 place-items-center rounded-full border border-brass/40 bg-bone text-clay shadow-card md:-right-5 md:-top-5 md:size-20"
            >
              <ToothMark className="size-8 md:size-10" />
            </div>

            <div className="arch relative aspect-[4/5] overflow-hidden border border-ink/10 bg-sage-light shadow-soft">
              <Image
                src="/images/clinic.jpg"
                alt="The welcoming dental office of Dental Associates Inc. in Mandan, North Dakota"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 42vw"
                className="object-cover"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-pine-deep/65 via-transparent to-transparent"
              />
              <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/50 bg-cream/90 p-4 backdrop-blur-md">
                <p className="text-[0.56rem] font-semibold uppercase tracking-[0.2em] text-clay-deep">
                  Your caring dental office
                </p>
                <div className="mt-2 flex items-end justify-between gap-3">
                  <div>
                    <p className="font-display text-xl leading-tight text-ink">
                      Care for every smile.
                    </p>
                    <p className="mt-1 text-xs text-ink/70">
                      {site.address.full}
                    </p>
                  </div>
                  <span className="grid size-9 shrink-0 place-items-center rounded-full bg-pine text-cream">
                    <Sparkles className="size-4" aria-hidden="true" />
                  </span>
                </div>
              </div>
            </div>

            <div className="absolute -left-3 top-8 hidden items-center gap-3 rounded-2xl border border-ink/10 bg-paper/95 p-3 pr-4 shadow-card backdrop-blur-md sm:flex md:-left-6">
              <span className="grid size-9 place-items-center rounded-full bg-sage-light text-pine">
                <Check className="size-4" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-xs font-semibold text-ink">
                  All ages welcome
                </span>
                <span className="block text-[0.62rem] text-ink/70">
                  Pediatric &amp; family dentistry
                </span>
              </span>
            </div>
          </div>
        </div>
      </section>

      <Marquee />

      <section className="bg-bone py-20 md:py-28">
        <div className="container-site grid items-center gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20">
          <Reveal className="order-2 lg:order-1">
            <div className="relative mx-auto max-w-md">
              <div
                aria-hidden="true"
                className="arch-sm absolute -inset-3 border border-ink/10"
              />
              <div className="arch-sm relative aspect-[4/5] overflow-hidden border border-ink/10 bg-sage-light shadow-card">
                <Image
                  src="/images/smile.jpg"
                  alt="A healthy, confident smile cared for by Dental Associates Inc."
                  fill
                  sizes="(max-width: 1024px) 88vw, 38vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-7 right-0 max-w-[14rem] rounded-2xl border border-ink/10 bg-cream p-5 shadow-card sm:-right-5">
                <Quote className="size-5 text-clay" aria-hidden="true" />
                <p className="mt-2 font-display text-xl leading-snug text-ink">
                  A truly caring staff.
                </p>
                <p className="mt-2 text-[0.62rem] uppercase tracking-[0.16em] text-ink/65">
                  Dental Associates Inc.
                </p>
              </div>
              <span className="absolute -left-2 top-6 rounded-full border border-ink/10 bg-paper px-3 py-1.5 text-[0.56rem] font-semibold uppercase tracking-[0.2em] text-ink/70 shadow-sm">
                Mandan, ND
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="order-1 lg:order-2">
            <SectionHeading
              eyebrow="Welcome"
              title={
                <>
                  A dental home for{" "}
                  <em className="font-normal italic text-clay">
                    every generation
                  </em>
                  .
                </>
              }
              description="From routine dental checkups to tooth extractions, we care for every general dentistry need. Our team is here for the whole family, with the kind of care that makes a dental visit feel easier."
            />

            <div className="mt-7 space-y-4 text-[0.95rem] leading-relaxed text-ink/65">
              <p>
                We offer pediatric dentistry and treat patients of any age, so
                if you need someone to take care of your entire family&rsquo;s
                oral health, you have found the right place.
              </p>
              <p>
                Our dentists and staff cannot wait to give you the best dental
                patient experience you have ever had.
              </p>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {familyPoints.map((point) => (
                <div
                  key={point}
                  className="flex items-center gap-3 rounded-xl border border-ink/10 bg-paper/60 px-4 py-3 text-sm text-ink/70"
                >
                  <span className="grid size-6 shrink-0 place-items-center rounded-full bg-sage-light text-pine">
                    <Check className="size-3.5" aria-hidden="true" />
                  </span>
                  {point}
                </div>
              ))}
            </div>

            <Link
              href="/about-us"
              className="link-sweep mt-8 inline-flex text-sm font-semibold text-pine"
            >
              Meet our practice
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-ink/10 bg-cream py-20 md:py-28">
        <div className="container-site">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <Reveal>
              <SectionHeading
                eyebrow="Dental services"
                title={
                  <>
                    Care that covers{" "}
                    <em className="font-normal italic text-clay">
                      every smile
                    </em>
                    .
                  </>
                }
                description="From the everyday essentials to the care your whole family needs, our services are built around you."
              />
            </Reveal>
            <Reveal delay={0.1}>
              <Button asChild variant="outline">
                <Link href="/dental-services">
                  View all dental services
                  <ArrowRight aria-hidden="true" />
                </Link>
              </Button>
            </Reveal>
          </div>

          <div className="mt-12 border-b border-ink/12">
            {services.map((service, index) => (
              <Reveal key={service.slug} delay={index * 0.04}>
                <Link
                  href={`/dental-services#${service.slug}`}
                  className="service-row group grid grid-cols-[2rem_1fr_auto] items-center gap-x-4 gap-y-3 border-t border-ink/12 px-3 py-6 hover:bg-pine hover:text-cream sm:grid-cols-[2.2rem_2.6rem_minmax(0,0.85fr)_minmax(0,1.15fr)_auto] sm:gap-6 sm:px-5"
                >
                  <span className="text-[0.62rem] font-semibold tracking-[0.16em] text-ink/65 transition-colors group-hover:text-cream/75">
                    0{index + 1}
                  </span>
                  <span className="hidden size-10 place-items-center rounded-full border border-ink/12 text-clay transition-colors group-hover:border-brass/40 group-hover:bg-brass/10 group-hover:text-brass sm:grid">
                    <ServiceIcon name={service.icon} />
                  </span>
                  <span className="font-display text-2xl leading-tight text-ink transition-colors group-hover:text-cream sm:text-[1.65rem]">
                    {service.title}
                  </span>
                  <span className="col-span-2 text-sm leading-relaxed text-ink/70 transition-colors group-hover:text-cream/75 sm:col-span-1">
                    {service.description}
                  </span>
                  <span className="service-arrow grid size-10 place-items-center rounded-full border border-ink/12 text-ink/70 transition-colors group-hover:border-cream/25 group-hover:text-brass">
                    <ArrowUpRight className="size-4" aria-hidden="true" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="grain relative overflow-hidden bg-pine py-20 text-cream md:py-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-32 top-10 size-[30rem] rounded-full bg-teal/40 blur-[110px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 bottom-0 size-[24rem] rounded-full bg-clay/20 blur-[100px]"
        />
        <div className="container-site relative z-10 grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <Reveal>
            <p className="eyebrow text-brass">Our promise</p>
            <blockquote className="mt-7">
              <Quote
                className="size-9 text-brass/70 md:size-11"
                aria-hidden="true"
              />
              <p className="mt-5 font-display text-[clamp(1.9rem,4.1vw,3.6rem)] leading-[1.06] text-cream">
                &ldquo;Our dentists and staff cannot wait to give you the best
                dental patient experience you have ever had.&rdquo;
              </p>
            </blockquote>
            <p className="mt-6 text-sm text-cream/70">
              — The team at Dental Associates Inc.
            </p>

            <div className="mt-9 flex flex-wrap gap-2.5">
              {promisePoints.map((point) => (
                <span
                  key={point}
                  className="inline-flex items-center gap-2 rounded-full border border-cream/15 bg-cream/5 px-3.5 py-2 text-xs font-medium text-cream/70"
                >
                  <Check className="size-3.5 text-brass" aria-hidden="true" />
                  {point}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="relative mx-auto max-w-md">
              <div
                aria-hidden="true"
                className="arch absolute -inset-3 border border-cream/15"
              />
              <div className="arch relative aspect-[4/5] overflow-hidden border border-cream/15 bg-teal">
                <Image
                  src="/images/dentist.jpg"
                  alt="A dentist providing attentive care at Dental Associates Inc."
                  fill
                  sizes="(max-width: 1024px) 88vw, 38vw"
                  className="object-cover"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-pine-deep/75 via-transparent to-transparent"
                />
                <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/15 bg-pine-deep/65 p-4 backdrop-blur-md">
                  <p className="text-[0.56rem] font-semibold uppercase tracking-[0.2em] text-brass">
                    Complete general dentistry
                  </p>
                  <p className="mt-1 font-display text-xl text-cream">
                    From checkups to extractions.
                  </p>
                </div>
              </div>
              <div className="absolute -right-3 -top-4 grid size-16 place-items-center rounded-full border border-brass/40 bg-pine-deep text-brass shadow-glow md:-right-5 md:size-20">
                <ToothMark className="size-8 md:size-9" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-bone py-20 md:py-28">
        <div className="container-site">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <Reveal>
              <SectionHeading
                eyebrow="Why families choose us"
                title={
                  <>
                    Care built around{" "}
                    <em className="font-normal italic text-clay">people</em>.
                  </>
                }
              />
            </Reveal>
            <Reveal delay={0.1}>
              <p className="max-w-sm text-sm leading-relaxed text-ink/70">
                The details that make a difference: trusted dentists, a caring
                team, and a practice where every age is welcome.
              </p>
            </Reveal>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {values.map((value, index) => (
              <Reveal key={value.title} delay={index * 0.08}>
                <article className="card-lift group flex h-full flex-col rounded-3xl border border-ink/10 bg-cream p-6">
                  <div className="flex items-start justify-between">
                    <span className="grid size-11 place-items-center rounded-full border border-ink/10 bg-bone text-clay transition-colors group-hover:border-clay group-hover:bg-clay group-hover:text-cream">
                      <ServiceIcon name={value.icon} />
                    </span>
                    <span className="text-[0.62rem] font-semibold tracking-[0.16em] text-ink/65">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="mt-7 text-xl leading-tight text-ink">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink/70">
                    {value.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <PaymentSection />
      <FaqSection />
      <VisitSection />
      <CtaBand />
    </>
  );
}
