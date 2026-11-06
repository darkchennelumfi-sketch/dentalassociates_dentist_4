import * as React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        ref={ref}
        data-slot="input"
        className={cn(
          "flex h-12 w-full rounded-xl border border-ink/15 bg-paper/70 px-4 py-3 text-sm text-ink shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] transition-colors placeholder:text-ink/65 focus-visible:border-clay focus-visible:bg-paper focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
