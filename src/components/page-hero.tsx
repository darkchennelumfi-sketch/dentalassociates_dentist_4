import type { ReactNode } from "react";
import { ToothMark } from "@/components/tooth-mark";

type PageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  description: ReactNode;
  children?: ReactNode;
};

export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: PageHeroProps) {
  return (
    <section className="grain relative overflow-hidden border-b border-ink/10 bg-bone">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-32 size-[32rem] rounded-full bg-sage-light/70 blur-[100px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 bottom-0 size-[24rem] rounded-full bg-clay/10 blur-[90px]"
      />
      <div className="container-site relative z-10 grid gap-10 py-14 md:py-20 lg:grid-cols-[minmax(0,1fr)_16rem] lg:items-end">
        <div className="max-w-4xl">
          <p className="eyebrow text-clay-deep">{eyebrow}</p>
          <h1 className="mt-5 text-[clamp(2.8rem,7vw,6.1rem)] leading-[0.94] text-ink">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-[0.98rem] leading-relaxed text-ink/65 sm:text-base">
            {description}
          </p>
          {children ? <div className="mt-8">{children}</div> : null}
        </div>

        <div className="hidden justify-end lg:flex" aria-hidden="true">
          <div className="relative grid size-52 place-items-center rounded-full border border-ink/10">
            <div className="absolute inset-4 animate-spin-slow rounded-full border border-dashed border-clay/30" />
            <div className="absolute inset-9 rounded-full border border-ink/9" />
            <ToothMark className="size-20 text-pine/20" />
            <span className="absolute -bottom-2 rounded-full border border-ink/10 bg-cream px-3 py-1 text-[0.58rem] font-semibold uppercase tracking-[0.22em] text-ink/65">
              Mandan, ND
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
