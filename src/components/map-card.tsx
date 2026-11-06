import { ArrowUpRight, MapPin } from "lucide-react";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function MapCard({ className }: { className?: string }) {
  return (
    <a
      href={site.maps}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open ${site.address.full} in Google Maps`}
      className={cn(
        "group relative block aspect-[4/3] overflow-hidden rounded-[2rem] border border-ink/10 bg-sage-light shadow-card",
        className,
      )}
    >
      <svg
        viewBox="0 0 800 600"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="map-bg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#e9e2d4" />
            <stop offset="100%" stopColor="#cfded2" />
          </linearGradient>
          <pattern
            id="map-grid"
            width="64"
            height="64"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 64 0 L 0 0 0 64"
              fill="none"
              stroke="#173d32"
              strokeOpacity="0.08"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="800" height="600" fill="url(#map-bg)" />
        <rect width="800" height="600" fill="url(#map-grid)" />
        <path
          d="M-40 470 C 120 430, 180 350, 320 360 S 560 470, 860 330"
          fill="none"
          stroke="#8fb5a3"
          strokeWidth="26"
          strokeOpacity="0.5"
        />
        <path
          d="M-40 470 C 120 430, 180 350, 320 360 S 560 470, 860 330"
          fill="none"
          stroke="#f4efe4"
          strokeWidth="2"
          strokeDasharray="8 12"
          strokeOpacity="0.8"
        />
        <path
          d="M90 -40 C 140 120, 250 160, 300 300 S 330 520, 420 660"
          fill="none"
          stroke="#fffdf8"
          strokeWidth="18"
          strokeOpacity="0.65"
        />
        <path
          d="M-20 180 C 160 200, 300 140, 430 180 S 650 250, 840 160"
          fill="none"
          stroke="#fffdf8"
          strokeWidth="12"
          strokeOpacity="0.7"
        />
        <path
          d="M560 -20 C 520 120, 600 260, 560 420 S 600 560, 640 640"
          fill="none"
          stroke="#fffdf8"
          strokeWidth="10"
          strokeOpacity="0.6"
        />
        <circle cx="96" cy="420" r="54" fill="#b7cbbd" opacity="0.55" />
        <circle cx="706" cy="130" r="74" fill="#b7cbbd" opacity="0.45" />
        <circle cx="640" cy="500" r="42" fill="#b7cbbd" opacity="0.5" />
      </svg>

      <span className="absolute left-4 top-4 rounded-full border border-white/60 bg-cream/85 px-3 py-1.5 text-[0.58rem] font-semibold uppercase tracking-[0.2em] text-ink/70 backdrop-blur-md">
        Mandan, North Dakota
      </span>

      <span className="absolute left-[52%] top-[42%] -translate-x-1/2 -translate-y-1/2">
        <span className="absolute inset-0 -m-5 animate-ping rounded-full bg-clay/20" />
        <span className="relative grid size-12 place-items-center rounded-full border-4 border-cream bg-clay text-cream shadow-lg">
          <MapPin className="size-5" aria-hidden="true" />
        </span>
      </span>

      <span className="absolute inset-x-4 bottom-4 flex items-center justify-between gap-4 rounded-2xl border border-white/70 bg-cream/92 p-4 backdrop-blur-md transition-colors group-hover:bg-cream">
        <span>
          <span className="block text-[0.56rem] font-semibold uppercase tracking-[0.2em] text-clay-deep">
            Dental Associates Inc.
          </span>
          <span className="mt-1 block text-sm font-semibold text-ink">
            {site.address.full}
          </span>
        </span>
        <span className="grid size-10 shrink-0 place-items-center rounded-full bg-pine text-cream transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </span>
      </span>
    </a>
  );
}
