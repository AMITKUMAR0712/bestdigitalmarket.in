import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";
import { FloatingActions } from "@/components/FloatingActions";
import { SpaceBackground } from "@/components/SpaceBackground";
import { faqs, serviceCategories } from "@/lib/data";
import { siteConfig } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    locale: "en_IN",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Premium Digital Marketing Agency Delhi NCR",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${siteConfig.url}/#localbusiness`,
  name: siteConfig.name,
  url: siteConfig.url,
  telephone: `+91${siteConfig.callNumber}`,
  email: siteConfig.email,
  description: siteConfig.description,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Sector MU-1",
    addressLocality: "Greater Noida",
    postalCode: "201310",
    addressRegion: "Uttar Pradesh",
    addressCountry: "IN",
  },
  areaServed: siteConfig.areas.map((area) => ({ "@type": "City", name: area })),
  priceRange: "₹₹",
  sameAs: [siteConfig.social.linkedin, siteConfig.social.github, siteConfig.social.instagram, siteConfig.social.facebook].filter(
    (url) => url !== "#"
  ),
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${siteConfig.url}/#services`,
  name: siteConfig.name,
  url: siteConfig.url,
  telephone: `+91${siteConfig.callNumber}`,
  areaServed: siteConfig.areas,
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Digital Marketing Services",
    itemListElement: serviceCategories.flatMap((category) =>
      category.services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service,
          serviceType: category.title,
        },
      }))
    ),
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en-IN" className={inter.variable}>
      <body>
        <SpaceBackground />
        {children}
        <FloatingActions />
        {[localBusinessSchema, serviceSchema, faqSchema].map((schema, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }}
          />
        ))}
      </body>
    </html>
  );
}
