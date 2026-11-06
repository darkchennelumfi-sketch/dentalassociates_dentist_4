import type { ReactNode } from "react";
import Link from "next/link";
import { Phone } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs, site } from "@/lib/site";

type FaqSectionProps = {
  eyebrow?: string;
  title?: ReactNode;
  description?: string;
  className?: string;
};

export function FaqSection({
  eyebrow = "Good to know",
  title = "Questions, answered.",
  description = "A few of the things patients ask us most often. If your question is not here, a quick call is the easiest way to get an answer.",
  className = "border-t border-ink/10 bg-cream",
}: FaqSectionProps) {
  return (
    <section className={`py-20 md:py-28 ${className}`}>
      <div className="container-site grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <Reveal>
          <SectionHeading
            eyebrow={eyebrow}
            title={title}
            description={description}
          />
          <div className="mt-9 rounded-2xl border border-ink/10 bg-bone/80 p-6">
            <p className="text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-clay-deep">
              Still wondering?
            </p>
            <p className="mt-3 text-sm leading-relaxed text-ink/65">
              Call us today and we will help you find the right next step.
            </p>
            <a
              href={site.phoneHref}
              className="mt-4 inline-flex items-center gap-2 font-display text-2xl text-pine transition-colors hover:text-clay-deep"
            >
              <Phone className="size-5" aria-hidden="true" />
              {site.phoneDisplay}
            </a>
            <Link
              href="/contact-us"
              className="mt-3 block text-xs font-semibold uppercase tracking-[0.16em] text-ink/65 transition-colors hover:text-clay-deep"
            >
              Or send a message
            </Link>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <Accordion type="single" collapsible className="border-t border-ink/12">
            {faqs.map((faq, index) => (
              <AccordionItem key={faq.question} value={`faq-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
