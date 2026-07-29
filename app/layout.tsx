import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import type { ReactNode } from "react";
import "./globals.css";
import { FloatingActions } from "@/components/FloatingActions";
import { SiteNav, MobileBottomNav } from "@/components/SiteNav";
import { StickyConversionBar } from "@/components/StickyConversionBar";
import { serviceCategories } from "@/lib/data";
import { getOrganizationSameAs, siteConfig } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["400", "600", "700", "800"],
  preload: true,
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#ede6dc",
};

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
  openGraph: {
    type: "website",
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
  "@type": ["LocalBusiness", "ProfessionalService", "Organization"],
  "@id": `${siteConfig.url}/#organization`,
  name: siteConfig.legalName,
  legalName: siteConfig.legalName,
  alternateName: [...siteConfig.alternateNames, `${siteConfig.name} AI`],
  url: siteConfig.url,
  telephone: `+91${siteConfig.callNumber}`,
  email: siteConfig.email,
  description: siteConfig.description,
  slogan: siteConfig.entityTagline,
  logo: `${siteConfig.url}/icon`,
  image: `${siteConfig.url}/opengraph-image`,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.streetAddress,
    addressLocality: siteConfig.addressLocality,
    addressRegion: siteConfig.addressRegion,
    postalCode: siteConfig.postalCode,
    addressCountry: siteConfig.addressCountry,
  },
  areaServed: siteConfig.areas.map((area) => ({ "@type": "City", name: area })),
  knowsAbout: siteConfig.keywords,
  priceRange: "₹₹",
  foundingLocation: {
    "@type": "Place",
    name: "Greater Noida, Uttar Pradesh, India",
  },
  sameAs: getOrganizationSameAs(),
  disambiguatingDescription: siteConfig.disambiguation,
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteConfig.url}/#website`,
  name: siteConfig.legalName,
  alternateName: [...siteConfig.alternateNames, "bestdigitalmarket.in"],
  url: siteConfig.url,
  inLanguage: "en-IN",
  publisher: {
    "@id": `${siteConfig.url}/#organization`,
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${siteConfig.url}/#services`,
  name: `${siteConfig.legalName} AI Software, Custom Software, Website Design and Digital Marketing Services`,
  url: siteConfig.url,
  telephone: `+91${siteConfig.callNumber}`,
  areaServed: siteConfig.areas,
  provider: {
    "@id": `${siteConfig.url}/#organization`,
  },
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

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${siteConfig.url}/#founder`,
  name: "Amit Kumar Talan",
  jobTitle: "Founder",
  worksFor: {
    "@id": `${siteConfig.url}/#organization`,
  },
  url: `${siteConfig.url}/about`,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en-IN" className={inter.variable} suppressHydrationWarning>
      <body className="app-shell antialiased">
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
        <SiteNav />
        {children}
        <FloatingActions />
        <StickyConversionBar />
        <MobileBottomNav />
        {[websiteSchema, localBusinessSchema, serviceSchema, personSchema].map((schema, index) => (
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
