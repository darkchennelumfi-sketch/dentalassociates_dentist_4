import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold tracking-[0.01em] transition-all duration-300 ease-out disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "bg-pine text-cream shadow-[0_10px_30px_-16px_rgba(17,36,31,0.8)] hover:bg-pine-deep hover:shadow-[0_16px_36px_-16px_rgba(17,36,31,0.7)]",
        clay: "bg-clay text-paper shadow-[0_10px_30px_-16px_rgba(193,103,67,0.8)] hover:bg-clay-deep",
        outline:
          "border border-ink/20 bg-transparent text-ink hover:border-pine hover:bg-pine hover:text-cream",
        light:
          "border border-paper/25 bg-paper/10 text-paper backdrop-blur-sm hover:bg-paper hover:text-ink",
        ghost: "text-ink hover:bg-ink/5",
      },
      size: {
        sm: "h-9 px-4 text-xs",
        default: "h-11 px-6",
        lg: "h-13 px-7 text-[0.95rem]",
        icon: "size-11",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

export type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
