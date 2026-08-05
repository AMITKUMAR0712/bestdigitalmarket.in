import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiCheckCircle } from "react-icons/fi";
import { products, type Product } from "@/lib/products";

export function ProductDetail({ product }: { product: Product }) {
  return (
    <article className="premium-card overflow-hidden rounded-[2rem] border border-[var(--border-warm)] bg-[var(--card-white)] p-5 sm:p-7">
      <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-terracotta">{product.family}</p>
      <div className="mt-1.5 flex flex-wrap items-start justify-between gap-3">
        <h1 className="text-2xl font-black text-charcoal sm:text-3xl">{product.name}</h1>
        <span className="inline-flex rounded-full bg-charcoal px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-cream-50">
          {product.tag}
        </span>
      </div>
      <p className="mt-3 max-w-3xl text-sm leading-6 text-charcoal-light">
        <span className="font-bold text-charcoal">What it does. </span>
        {product.whatItDoes}
      </p>

      <div className="mt-6 grid gap-5 lg:grid-cols-2">
        <div>
          <div className="overflow-hidden rounded-2xl border border-[var(--border-warm)] bg-white p-2 shadow-soft">
            <Image
              src={product.dashboardScreen.image}
              alt={`${product.name} dashboard screen`}
              width={product.dashboardScreen.width}
              height={product.dashboardScreen.height}
              quality={75}
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="h-auto w-full rounded-lg object-contain"
              priority
            />
          </div>
          <p className="mt-2 text-[12px] italic leading-5 text-charcoal-light">{product.dashboardScreen.caption}</p>
        </div>
        <div>
          <div className="overflow-hidden rounded-2xl border border-[var(--border-warm)] bg-white p-2 shadow-soft">
            <Image
              src={product.detailScreen.image}
              alt={`${product.name} detail and mobile screens`}
              width={product.detailScreen.width}
              height={product.detailScreen.height}
              quality={75}
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="h-auto w-full rounded-lg object-contain"
            />
          </div>
          <p className="mt-2 text-[12px] italic leading-5 text-charcoal-light">
            {product.detailScreen.caption} {product.mobileCaption}
          </p>
        </div>
      </div>

      <p className="mt-6 text-[11px] font-bold uppercase tracking-[0.16em] text-terracotta">Core Modules</p>
      <div className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {product.coreModules.map((moduleName) => (
          <div
            key={moduleName}
            className="flex items-center gap-2 rounded-2xl border border-[var(--border-warm)] bg-cream-50 px-4 py-3 text-[13px] text-charcoal-light"
          >
            <FiCheckCircle className="shrink-0 text-terracotta" />
            {moduleName}
          </div>
        ))}
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        <div className="rounded-2xl border border-[var(--border-warm)] bg-white p-4">
          <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-charcoal-muted">Problem It Solves</p>
          <p className="mt-2 text-[13px] leading-6 text-charcoal-light">{product.problemItSolves}</p>
        </div>
        <div className="rounded-2xl border border-[var(--border-warm)] bg-white p-4">
          <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-charcoal-muted">Best Suited For</p>
          <p className="mt-2 text-[13px] leading-6 text-charcoal-light">{product.bestSuitedFor}</p>
        </div>
        <div className="rounded-2xl border border-[var(--border-warm)] bg-white p-4">
          <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-charcoal-muted">Business Outcome</p>
          <p className="mt-2 text-[13px] leading-6 text-charcoal-light">{product.businessOutcome}</p>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-2 rounded-2xl border border-[var(--border-warm)] bg-cream-50 px-4 py-3">
        <span className="text-[11px] font-bold uppercase tracking-wide text-charcoal-muted">Works well with</span>
        {product.worksWellWith.map((name) => {
          const linked = products.find((item) => item.name === name);
          if (!linked) {
            return (
              <span key={name} className="rounded-full bg-white px-3 py-1 text-[11px] font-semibold text-charcoal-light">
                {name}
              </span>
            );
          }
          return (
            <Link
              key={name}
              href={`/products/${linked.slug}`}
              className="rounded-full bg-white px-3 py-1 text-[11px] font-semibold text-charcoal-light transition hover:bg-terracotta/10 hover:text-terracotta"
            >
              {name}
            </Link>
          );
        })}
      </div>

      <Link
        href={`/contact?need=${encodeURIComponent(product.name)}`}
        className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-terracotta"
      >
        Get this built for my business <FiArrowRight />
      </Link>
    </article>
  );
}
