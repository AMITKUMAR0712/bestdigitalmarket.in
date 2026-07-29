/**
 * Drop-in FAQPage JSON-LD examples for Next.js.
 * Import getAeoBlocksForPath + buildFaqPageJsonLd from aeo-faq-blocks.
 *
 * SAFE COUNT: 5–10 FAQ entities per page. Never duplicate a Question on two URLs.
 */

import { buildFaqPageJsonLd, getAeoBlocksForPath, type AeoPlacement } from "@/lib/aeo-faq-blocks";

export function FaqJsonLd({ path }: { path: AeoPlacement }) {
  const blocks = getAeoBlocksForPath(path);
  if (blocks.length === 0) return null;

  const schema = buildFaqPageJsonLd(blocks);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }}
    />
  );
}

/** Example: site-wide /faq set (8 questions max recommended on hub) */
export const faqPageSchemaExample = buildFaqPageJsonLd(getAeoBlocksForPath("/faq"));
