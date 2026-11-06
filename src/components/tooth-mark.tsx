import { cn } from "@/lib/utils";

export function ToothMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={cn("size-6", className)}
    >
      <path
        d="M24 5.2c-4.5 0-6.1 1.8-9.4 1.8-3 0-4.9-1.4-6.8 1.2-2.1 2.8-1.2 6.2 0 9.3 1.3 3.1 1.7 6.2 2.2 10.2.5 4.1 1.3 10.7 4.4 10.7 3.3 0 2.1-9 4.4-12.3 1.1-1.6 4.5-1.6 5.6 0 2.3 3.3 1.1 12.3 4.4 12.3 3.1 0 3.9-6.6 4.4-10.7.5-4 .9-7.1 2.2-10.2 1.2-3.1 2.1-6.5 0-9.3-1.9-2.6-3.8-1.2-6.8-1.2-3.3 0-4.9-1.8-9.4-1.8Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.4 12.2c1.7-.8 3.7-1 5.6-.4"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}
