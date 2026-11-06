import type { Metadata, Viewport } from "next";
import { Fraunces, Instrument_Sans } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { site } from "@/lib/site";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.dentalassociatesmandan.com"),
  title: {
    default: "Dental Associates Inc. | Family Dentist in Mandan, ND",
    template: "%s | Dental Associates Inc.",
  },
  description: site.description,
  keywords: [
    "mandan",
    "north dakota",
    "dentists",
    "dental care",
    "family dentist",
    "pediatric dentistry",
    "dental associates",
  ],
  authors: [{ name: site.name }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.dentalassociatesmandan.com",
    siteName: site.name,
    title: "Dental Associates Inc. | Family Dentist in Mandan, ND",
    description: site.description,
    images: [
      {
        url: "/images/clinic.jpg",
        width: 1600,
        height: 1070,
        alt: "The caring team and office at Dental Associates Inc.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dental Associates Inc. | Family Dentist in Mandan, ND",
    description: site.description,
    images: ["/images/clinic.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#173d32",
  colorScheme: "light",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: site.name,
  description: site.description,
  url: "https://www.dentalassociatesmandan.com",
  telephone: "+1-701-663-7545",
  email: site.email,
  image: "https://www.dentalassociatesmandan.com/images/clinic.jpg",
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.state,
    postalCode: site.address.zip,
    addressCountry: "US",
  },
  sameAs: [site.facebook],
  medicalSpecialty: "Dentistry",
  priceRange: "$$",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${instrumentSans.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-bone text-ink">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-pine focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-cream"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <SiteFooter />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
