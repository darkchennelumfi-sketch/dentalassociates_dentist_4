import { ToothMark } from "@/components/tooth-mark";
import { serviceMarquee } from "@/lib/site";

export function Marquee() {
  const items = [...serviceMarquee, ...serviceMarquee];

  return (
    <div className="overflow-hidden border-y border-ink/10 bg-cream/60 py-4">
      <div className="marquee-track" aria-hidden="true">
        {items.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="flex shrink-0 items-center gap-6 pr-6 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-ink/70"
          >
            {item}
            <ToothMark className="size-4 text-clay/70" />
          </span>
        ))}
      </div>
    </div>
  );
}
