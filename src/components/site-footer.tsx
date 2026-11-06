import Link from "next/link";
import {
  ArrowUpRight,
  Banknote,
  CreditCard,
  MapPin,
  Phone,
  Star,
  Wallet,
} from "lucide-react";
import { FacebookIcon } from "@/components/facebook-icon";
import { Logo } from "@/components/logo";
import { footerNavigation, paymentMethods, site } from "@/lib/site";

const paymentIcons = {
  card: CreditCard,
  cash: Banknote,
  debit: Wallet,
} as const;

const year = 2026;

export function SiteFooter() {
  return (
    <footer className="grain relative overflow-hidden bg-pine-deep text-cream">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-10 size-[28rem] rounded-full bg-teal/30 blur-[110px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 bottom-0 size-[24rem] rounded-full bg-clay/20 blur-[100px]"
      />

      <div className="container-site relative z-10 pt-16 pb-10 md:pt-20">
        <div className="grid gap-12 border-b border-cream/10 pb-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Logo tone="light" />
            <p className="mt-6 max-w-sm font-display text-[1.7rem] leading-tight text-cream/90">
              Your caring dental office in Mandan, North Dakota.
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-cream/75">
              General dentistry, pediatric dentistry, and family dental care for
              patients of any age.
            </p>
            <div className="mt-7 flex items-center gap-3">
              <a
                href={site.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Dental Associates Inc. on Facebook"
                className="grid size-10 place-items-center rounded-full border border-cream/15 text-cream/75 transition-colors hover:border-brass hover:text-brass"
              >
                <FacebookIcon className="size-4" />
              </a>
              <a
                href={site.googleReviews}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Read reviews on Google"
                className="grid size-10 place-items-center rounded-full border border-cream/15 text-cream/75 transition-colors hover:border-brass hover:text-brass"
              >
                <Star className="size-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h2 className="text-[0.62rem] font-sans font-semibold uppercase tracking-[0.22em] text-brass">
              Explore
            </h2>
            <ul className="mt-5 space-y-3">
              {footerNavigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-1.5 text-sm text-cream/75 transition-colors hover:text-cream"
                  >
                    {item.label}
                    <ArrowUpRight className="size-3.5 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h2 className="text-[0.62rem] font-sans font-semibold uppercase tracking-[0.22em] text-brass">
              Visit or call
            </h2>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin
                  className="mt-0.5 size-4 shrink-0 text-sage"
                  aria-hidden="true"
                />
                <a
                  href={site.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cream/75 transition-colors hover:text-cream"
                >
                  {site.address.full}
                </a>
              </li>
              <li className="flex gap-3">
                <Phone
                  className="mt-0.5 size-4 shrink-0 text-sage"
                  aria-hidden="true"
                />
                <a
                  href={site.phoneHref}
                  className="text-cream/75 transition-colors hover:text-cream"
                >
                  {site.phoneDisplay}
                </a>
              </li>
            </ul>

            <div className="mt-7">
              <p className="text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-cream/75">
                Payment options
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {paymentMethods.map((method) => {
                  const Icon = paymentIcons[method.kind];
                  return (
                    <span
                      key={method.label}
                      className="inline-flex items-center gap-1.5 rounded-full border border-cream/12 bg-cream/5 px-2.5 py-1 text-[0.62rem] font-medium text-cream/75"
                    >
                      <Icon className="size-3" aria-hidden="true" />
                      {method.label}
                    </span>
                  );
                })}
                <span className="inline-flex items-center rounded-full border border-brass/30 bg-brass/10 px-2.5 py-1 text-[0.62rem] font-semibold text-brass">
                  CareCredit
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 pt-7 text-xs text-cream/75 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {site.name} All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <a
              href="https://www.thryv.com/client-terms-of-use/"
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="transition-colors hover:text-cream/70"
            >
              Terms of Use
            </a>
            <a
              href="https://www.thryv.com/client-privacy-policy/"
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="transition-colors hover:text-cream/70"
            >
              Privacy Policy
            </a>
            <a
              href={site.emailHref}
              className="break-all transition-colors hover:text-cream/70"
            >
              {site.email}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
