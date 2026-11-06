import Link from "next/link";
import { ArrowLeft, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ToothMark } from "@/components/tooth-mark";
import { site } from "@/lib/site";

export default function NotFound() {
  return (
    <section className="grain relative overflow-hidden bg-bone">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-24 size-[32rem] rounded-full bg-sage-light/70 blur-[100px]"
      />
      <div className="container-site relative z-10 flex min-h-[70vh] flex-col items-center justify-center py-20 text-center">
        <span className="grid size-20 place-items-center rounded-full border border-ink/10 bg-cream text-clay shadow-card">
          <ToothMark className="size-9" />
        </span>
        <p className="eyebrow mt-8 text-clay-deep">Page not found</p>
        <h1 className="mt-5 max-w-2xl text-[clamp(2.5rem,7vw,5rem)] leading-[0.95] text-ink">
          This page has slipped away.
        </h1>
        <p className="mt-5 max-w-md text-sm leading-relaxed text-ink/70 sm:text-base">
          The page you are looking for is not here. Let us help you get back to
          your smile.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button asChild>
            <Link href="/">
              <ArrowLeft aria-hidden="true" />
              Back to home
            </Link>
          </Button>
          <Button asChild variant="outline">
            <a href={site.phoneHref}>
              <Phone aria-hidden="true" />
              Call {site.phoneDisplay}
            </a>
          </Button>
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs font-semibold uppercase tracking-[0.14em] text-ink/65">
          <Link href="/about-us" className="transition-colors hover:text-clay-deep">
            About us
          </Link>
          <Link
            href="/dental-services"
            className="transition-colors hover:text-clay-deep"
          >
            Dental services
          </Link>
          <Link
            href="/contact-us"
            className="transition-colors hover:text-clay-deep"
          >
            Contact us
          </Link>
        </div>
      </div>
    </section>
  );
}
