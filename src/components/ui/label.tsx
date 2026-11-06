import * as React from "react";
import { cn } from "@/lib/utils";

function Label({ className, ...props }: React.ComponentProps<"label">) {
  return (
    <label
      data-slot="label"
      className={cn(
        "mb-2 block text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-ink/70",
        className,
      )}
      {...props}
    />
  );
}

export { Label };
