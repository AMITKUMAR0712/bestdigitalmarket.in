"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import { productFamilies, products, type ProductFamily } from "@/lib/products";

const ALL_FAMILIES = "All Products" as const;
type FamilyFilter = ProductFamily | typeof ALL_FAMILIES;

export function ProductsExplorer() {
  const [family, setFamily] = useState<FamilyFilter>(ALL_FAMILIES);

  const visibleProducts = useMemo(
    () => (family === ALL_FAMILIES ? products : products.filter((item) => item.family === family)),
    [family],
  );

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2">
        <button
          type="button"
          onClick={() => setFamily(ALL_FAMILIES)}
          className={`rounded-full px-4 py-2 text-[11px] font-bold uppercase tracking-wide transition sm:text-xs ${
            family === ALL_FAMILIES
              ? "bg-terracotta text-white"
              : "border border-[var(--border-warm)] bg-cream-50 text-charcoal hover:border-terracotta/30 hover:text-terracotta"
          }`}
        >
          All Products
        </button>
        {productFamilies.map((item) => (
          <button
            key={item.title}
            type="button"
            onClick={() => setFamily(item.title)}
            className={`rounded-full px-4 py-2 text-[11px] font-bold uppercase tracking-wide transition sm:text-xs ${
              family === item.title
                ? "bg-terracotta text-white"
                : "border border-[var(--border-warm)] bg-cream-50 text-charcoal hover:border-terracotta/30 hover:text-terracotta"
            }`}
          >
            {item.title}
          </button>
        ))}
      </div>

      <div key={family} className="products-detail-fade mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {visibleProducts.map((item) => (
          <Link
            key={item.slug}
            href={`/products/${item.slug}`}
            className="premium-card group flex flex-col rounded-[1.75rem] border border-[var(--border-warm)] bg-[var(--card-white)] p-5 shadow-soft transition hover:border-terracotta/30 sm:p-6"
          >
            <div className="flex items-start justify-between gap-2">
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-terracotta">{item.family}</p>
              <span className="inline-flex rounded-full bg-charcoal px-2.5 py-1 text-[9px] font-bold uppercase tracking-wide text-cream-50">
                {item.tag}
              </span>
            </div>
            <h3 className="mt-3 text-lg font-black text-charcoal transition group-hover:text-terracotta sm:text-xl">{item.name}</h3>
            <p className="mt-2 line-clamp-3 flex-1 text-[13px] leading-6 text-charcoal-light">{item.whatItDoes}</p>
            <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-terracotta">
              View full details <FiArrowRight className="transition group-hover:translate-x-0.5" />
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
