import * as React from "react";
import { cn } from "@/lib/utils";

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <textarea
      ref={ref}
      data-slot="textarea"
      className={cn(
        "flex min-h-32 w-full resize-y rounded-xl border border-ink/15 bg-paper/70 px-4 py-3.5 text-sm text-ink shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] transition-colors placeholder:text-ink/65 focus-visible:border-clay focus-visible:bg-paper focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

export { Textarea };
