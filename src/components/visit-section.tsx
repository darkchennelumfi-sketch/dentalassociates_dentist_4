import { Mail, MapPin, Phone, Star } from "lucide-react";
import { FacebookIcon } from "@/components/facebook-icon";
import { MapCard } from "@/components/map-card";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { site } from "@/lib/site";

export function VisitSection() {
  return (
    <section className="bg-bone py-20 md:py-28">
      <div className="container-site grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
        <Reveal>
          <SectionHeading
            eyebrow="Find us"
            title={
              <>
                Right in the heart of{" "}
                <em className="font-normal italic text-clay">Mandan</em>.
              </>
            }
            description="Stop in, call ahead, or send a message. We are here to make your next dental visit feel simple and welcoming."
          />

          <div className="mt-9 grid gap-3 sm:grid-cols-2">
            <a
              href={site.maps}
              target="_blank"
              rel="noopener noreferrer"
              className="card-lift group rounded-2xl border border-ink/10 bg-paper p-5"
            >
              <MapPin className="size-5 text-clay" aria-hidden="true" />
              <p className="mt-4 text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-ink/65">
                Our location
              </p>
              <p className="mt-1 text-sm leading-relaxed text-ink/75">
                {site.address.full}
              </p>
            </a>
            <a
              href={site.phoneHref}
              className="card-lift group rounded-2xl border border-ink/10 bg-paper p-5"
            >
              <Phone className="size-5 text-clay" aria-hidden="true" />
              <p className="mt-4 text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-ink/65">
                Call us today
              </p>
              <p className="mt-1 text-sm leading-relaxed text-ink/75">
                {site.phoneDisplay}
              </p>
            </a>
            <a
              href={site.emailHref}
              className="card-lift group rounded-2xl border border-ink/10 bg-paper p-5 sm:col-span-2"
            >
              <Mail className="size-5 text-clay" aria-hidden="true" />
              <p className="mt-4 text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-ink/65">
                Email
              </p>
              <p className="mt-1 break-all text-sm leading-relaxed text-ink/75">
                {site.email}
              </p>
            </a>
          </div>

          <div className="mt-6 flex items-center gap-3">
            <a
              href={site.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-ink/12 px-4 py-2 text-xs font-semibold text-ink/65 transition-colors hover:border-pine hover:text-pine"
            >
              <FacebookIcon className="size-3.5" />
              Facebook
            </a>
            <a
              href={site.googleReviews}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-ink/12 px-4 py-2 text-xs font-semibold text-ink/65 transition-colors hover:border-pine hover:text-pine"
            >
              <Star className="size-3.5" aria-hidden="true" />
              Google reviews
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <MapCard />
        </Reveal>
      </div>
    </section>
  );
}
