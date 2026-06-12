import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import type { ReactNode } from "react";
import "./globals.css";
import { FloatingActions } from "@/components/FloatingActions";
import { faqs, serviceCategories } from "@/lib/data";
import { siteConfig } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const googleAnalyticsId = "G-M7SQNWJVTB";
const googleTagManagerId = "GTM-K5WG7BSW";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.domainName}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: "Amit Kumar Talan" }],
  creator: "Amit Kumar Talan",
  publisher: siteConfig.domainName,
  applicationName: siteConfig.domainName,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.domainName,
    locale: "en_IN",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "TradeOrbit Global - SEO friendly website design and digital marketing agency in Noida",
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
  "@type": ["LocalBusiness", "ProfessionalService"],
  "@id": `${siteConfig.url}/#localbusiness`,
  name: siteConfig.domainName,
  alternateName: `${siteConfig.name} AI`,
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
  knowsAbout: siteConfig.keywords,
  priceRange: "₹₹",
  sameAs: [siteConfig.social.linkedin, siteConfig.social.github, siteConfig.social.instagram, siteConfig.social.facebook].filter(
    (url) => url !== "#"
  ),
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteConfig.url}/#website`,
  name: siteConfig.domainName,
  alternateName: siteConfig.name,
  url: siteConfig.url,
  inLanguage: "en-IN",
  publisher: {
    "@id": `${siteConfig.url}/#localbusiness`,
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${siteConfig.url}/#services`,
  name: `${siteConfig.domainName} Website Design, SEO and Digital Marketing Services`,
  url: siteConfig.url,
  telephone: `+91${siteConfig.callNumber}`,
  areaServed: siteConfig.areas,
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Website Development, Software and Digital Marketing Services",
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
    <html lang="en-IN" className={inter.variable} suppressHydrationWarning>
      <body>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${googleTagManagerId}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`} strategy="lazyOnload" />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${googleAnalyticsId}');
          `}
        </Script>
        <Script id="google-tag-manager" strategy="lazyOnload">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${googleTagManagerId}');
          `}
        </Script>
        {children}
        <FloatingActions />
        {[websiteSchema, localBusinessSchema, serviceSchema, faqSchema].map((schema, index) => (
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
