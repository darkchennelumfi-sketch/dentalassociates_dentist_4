import Link from "next/link";
import { ToothMark } from "@/components/tooth-mark";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  tone?: "dark" | "light";
};

export function Logo({ className, tone = "dark" }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn("group flex items-center gap-3", className)}
    >
      <span
        className={cn(
          "relative grid size-11 place-items-center rounded-full transition-transform duration-500 group-hover:-rotate-6",
          tone === "dark" ? "bg-pine text-cream" : "bg-cream text-pine",
        )}
      >
        <ToothMark className="size-6" />
        <span
          className={cn(
            "absolute inset-0 rounded-full border transition-all duration-500 group-hover:scale-110",
            tone === "dark" ? "border-brass/50" : "border-brass/60",
          )}
        />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-[1.12rem] tracking-[-0.02em]",
            tone === "dark" ? "text-ink" : "text-cream",
          )}
        >
          Dental Associates
        </span>
        <span
          className={cn(
            "mt-1 text-[0.55rem] font-semibold uppercase tracking-[0.23em]",
            tone === "dark" ? "text-ink/65" : "text-cream/75",
          )}
        >
          Mandan, North Dakota
        </span>
      </span>
    </Link>
  );
}
