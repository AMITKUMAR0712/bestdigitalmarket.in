import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { ContactFormSection } from "@/components/ContactFormSection";
import { ProductDetail } from "@/components/ProductDetail";
import { SiteFooter } from "@/components/SiteFooter";
import { TrustBar } from "@/components/TrustBar";
import { products } from "@/lib/products";
import { createPageMetadata } from "@/lib/seo";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  if (!product) return {};

  return createPageMetadata({
    title: `${product.name} | ${product.tag} Software`,
    description: `${product.whatItDoes} Best suited for ${product.bestSuitedFor}`,
    path: `/products/${product.slug}`,
    keywords: [product.name, product.family, ...product.coreModules.slice(0, 5)],
  });
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  if (!product) notFound();

  const related = products.filter((item) => item.family === product.family && item.slug !== product.slug);

  return (
    <main className="relative z-10 overflow-hidden bg-cream text-charcoal">
      <section className="app-section relative pb-6 pt-28 sm:pt-32">
        <div className="app-container">
          <div className="flex flex-wrap items-center gap-1.5 text-xs font-semibold text-charcoal-light">
            <Link href="/products" className="inline-flex items-center gap-1 text-terracotta hover:underline">
              <FiArrowLeft className="text-sm" /> All Products
            </Link>
            <span>/</span>
            <span>{product.family}</span>
            <span>/</span>
            <span className="text-charcoal">{product.name}</span>
          </div>
        </div>
      </section>

      <TrustBar compact showBadges={false} />

      <section className="app-section relative pt-0">
        <div className="app-container">
          <ProductDetail product={product} />
        </div>
      </section>

      {related.length > 0 && (
        <section className="app-section relative border-t border-[var(--border-warm)] bg-white/60">
          <div className="app-container">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-terracotta">More in {product.family}</p>
            <h2 className="mt-2 text-xl font-bold text-charcoal sm:text-2xl">Related products</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  href={`/products/${item.slug}`}
                  className="premium-card group rounded-2xl border border-[var(--border-warm)] bg-[var(--card-white)] p-5 shadow-soft transition hover:border-terracotta/30"
                >
                  <span className="inline-flex rounded-full bg-terracotta/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-terracotta">
                    {item.tag}
                  </span>
                  <h3 className="mt-3 text-lg font-bold text-charcoal transition group-hover:text-terracotta">{item.name}</h3>
                  <p className="mt-2 line-clamp-2 text-[13px] leading-6 text-charcoal-light">{item.whatItDoes}</p>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-terracotta">
                    View product <FiArrowRight />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="app-section relative border-t border-[var(--border-warm)]">
        <div className="app-container">
          <ContactFormSection compact />
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
