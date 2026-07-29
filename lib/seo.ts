import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

type CreatePageMetadataInput = {
  title: string;
  description: string;
  /** Path only, e.g. "/" or "/services" */
  path: string;
  keywords?: string[];
  /** Use when title already includes the brand and must not get the layout template suffix */
  absoluteTitle?: boolean;
  ogImageAlt?: string;
};

export function createPageMetadata({
  title,
  description,
  path,
  keywords,
  absoluteTitle = false,
  ogImageAlt,
}: CreatePageMetadataInput): Metadata {
  const url = path === "/" ? siteConfig.url : `${siteConfig.url}${path}`;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    ...(keywords ? { keywords } : {}),
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: "website",
      url,
      title,
      description,
      siteName: siteConfig.domainName,
      locale: "en_IN",
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: ogImageAlt ?? `${title} | ${siteConfig.domainName}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/opengraph-image"],
    },
  };
}
