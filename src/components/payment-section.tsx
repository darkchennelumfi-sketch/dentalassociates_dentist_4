import Link from "next/link";
import { ArrowUpRight, Banknote, CreditCard, Wallet } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { paymentMethods, site } from "@/lib/site";

const paymentIcons = {
  card: CreditCard,
  cash: Banknote,
  debit: Wallet,
} as const;

export function PaymentSection() {
  return (
    <section className="border-y border-ink/10 bg-cream">
      <div className="container-site grid gap-12 py-20 md:py-24 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-20">
        <Reveal>
          <SectionHeading
            eyebrow="Payment options"
            title={
              <>
                Care that works with{" "}
                <em className="font-normal italic text-clay">your plans</em>.
              </>
            }
            description="We accept a range of payment methods, and CareCredit is available. If you have a question about payment, our team is happy to help when you call."
          />
          <Link
            href="/payment-options"
            className="link-sweep mt-7 text-sm font-semibold text-pine"
          >
            Explore payment options
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </Link>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {paymentMethods.map((method) => {
              const Icon = paymentIcons[method.kind];
              return (
                <div
                  key={method.label}
                  className="card-lift flex min-h-24 flex-col justify-between rounded-2xl border border-ink/10 bg-paper p-4"
                >
                  <Icon className="size-5 text-clay" aria-hidden="true" />
                  <span className="text-sm font-semibold text-ink/80">
                    {method.label}
                  </span>
                </div>
              );
            })}
          </div>
          <div className="mt-3 flex items-center justify-between gap-4 rounded-2xl border border-brass/35 bg-brass/10 p-5">
            <div>
              <p className="text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-clay-deep">
                Financing available
              </p>
              <p className="mt-1 font-display text-2xl text-pine">CareCredit</p>
            </div>
            <a
              href={site.phoneHref}
              className="rounded-full bg-pine px-4 py-2 text-xs font-semibold text-cream transition-colors hover:bg-pine-deep"
            >
              Ask our team
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
