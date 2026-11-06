"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as Dialog from "@radix-ui/react-dialog";
import { ArrowUpRight, Menu, Phone, X } from "lucide-react";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { navigation, site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-ink/10 bg-bone/82 shadow-[0_10px_40px_-24px_rgba(17,36,31,0.4)] backdrop-blur-xl"
          : "border-b border-transparent bg-bone/40 backdrop-blur-sm",
      )}
    >
      <div className="container-site flex h-[4.65rem] items-center justify-between gap-6 md:h-20">
        <Logo />

        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-1 lg:flex"
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={cn(
                "relative rounded-full px-3.5 py-2 text-sm transition-colors duration-300",
                isActive(item.href)
                  ? "font-semibold text-pine"
                  : "text-ink/65 hover:text-ink",
              )}
            >
              {item.label}
              <span
                className={cn(
                  "absolute bottom-0.5 left-1/2 size-1 -translate-x-1/2 rounded-full bg-clay transition-opacity duration-300",
                  isActive(item.href) ? "opacity-100" : "opacity-0",
                )}
              />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <a href={site.phoneHref}>
              <Phone aria-hidden="true" />
              <span className="hidden md:inline">{site.phoneDisplay}</span>
              <span className="md:hidden">Call</span>
            </a>
          </Button>

          <Dialog.Root open={open} onOpenChange={setOpen}>
            <Dialog.Trigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="lg:hidden"
                aria-label="Open menu"
              >
                <Menu className="size-5" aria-hidden="true" />
              </Button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 z-50 bg-ink/45 backdrop-blur-sm data-[state=open]:animate-fade" />
              <Dialog.Content className="fixed inset-y-0 right-0 z-50 flex w-[min(90vw,26rem)] flex-col overflow-y-auto bg-cream p-6 shadow-2xl data-[state=open]:animate-slide-in-right">
                <div className="flex items-center justify-between">
                  <Logo />
                  <Dialog.Close asChild>
                    <Button variant="ghost" size="icon" aria-label="Close menu">
                      <X className="size-5" aria-hidden="true" />
                    </Button>
                  </Dialog.Close>
                </div>

                <Dialog.Title className="sr-only">Site menu</Dialog.Title>
                <Dialog.Description className="sr-only">
                  Jump to a page or contact Dental Associates Inc.
                </Dialog.Description>

                <nav aria-label="Mobile navigation" className="mt-10 flex-1">
                  <ul className="space-y-1">
                    {navigation.map((item, index) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          onClick={() => setOpen(false)}
                          className={cn(
                            "group flex items-center justify-between border-b border-ink/10 py-4 font-display text-2xl transition-colors",
                            isActive(item.href)
                              ? "text-clay-deep"
                              : "text-ink hover:text-clay-deep",
                          )}
                        >
                          <span className="flex items-baseline gap-4">
                            <span className="font-sans text-[0.62rem] font-semibold tracking-[0.2em] text-ink/65">
                              0{index + 1}
                            </span>
                            {item.label}
                          </span>
                          <ArrowUpRight className="size-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>

                <div className="mt-8 rounded-2xl bg-pine p-5 text-cream">
                  <p className="text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-cream/75">
                    Call us today
                  </p>
                  <a
                    href={site.phoneHref}
                    className="mt-2 block font-display text-2xl text-cream"
                  >
                    {site.phoneDisplay}
                  </a>
                  <p className="mt-3 text-sm leading-relaxed text-cream/75">
                    {site.address.full}
                  </p>
                  <a
                    href={site.emailHref}
                    className="mt-2 block break-all text-sm text-brass"
                  >
                    {site.email}
                  </a>
                </div>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </div>
    </header>
  );
}
