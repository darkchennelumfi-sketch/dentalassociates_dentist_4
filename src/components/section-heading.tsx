import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  tone?: "dark" | "light";
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  tone = "dark",
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "eyebrow mb-5",
            tone === "dark" ? "text-clay-deep" : "text-brass",
            align === "center" && "justify-center",
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          "text-[clamp(2.15rem,4.6vw,4rem)] leading-[1.02]",
          tone === "dark" ? "text-ink" : "text-cream",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-6 max-w-2xl text-[0.98rem] leading-relaxed sm:text-base",
            align === "center" && "mx-auto",
            tone === "dark" ? "text-ink/65" : "text-cream/75",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
