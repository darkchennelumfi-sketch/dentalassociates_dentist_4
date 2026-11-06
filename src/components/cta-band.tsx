import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export function CtaBand() {
  return (
    <section className="grain relative overflow-hidden bg-pine text-cream">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 top-0 size-[26rem] rounded-full bg-teal/40 blur-[100px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 bottom-0 size-[22rem] rounded-full bg-clay/25 blur-[90px]"
      />
      <div className="container-site relative z-10 grid gap-10 py-16 md:py-24 lg:grid-cols-[1.4fr_0.8fr] lg:items-end">
        <div>
          <p className="eyebrow text-brass">Ready when you are</p>
          <h2 className="mt-5 max-w-2xl text-[clamp(2.4rem,5vw,4.6rem)] leading-[0.98] text-cream">
            We&rsquo;ll give you the care you{" "}
            <em className="font-normal italic text-brass">deserve</em>.
          </h2>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-cream/75 sm:text-base">
            Call us today to schedule an appointment. Our dentists and staff
            cannot wait to give you the best dental patient experience you have
            ever had.
          </p>
        </div>

        <div className="flex w-full flex-col gap-3 sm:max-w-sm lg:ml-auto">
          <Button asChild variant="clay" size="lg">
            <a href={site.phoneHref}>
              <Phone aria-hidden="true" />
              Call {site.phoneDisplay}
            </a>
          </Button>
          <Button asChild variant="light" size="lg">
            <Link href="/contact-us">
              Send a message
              <ArrowRight aria-hidden="true" />
            </Link>
          </Button>
          <p className="mt-2 text-center text-xs leading-relaxed text-cream/75 lg:text-left">
            {site.address.full}
          </p>
        </div>
      </div>
    </section>
  );
}
