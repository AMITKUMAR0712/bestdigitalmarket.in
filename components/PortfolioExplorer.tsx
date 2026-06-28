"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { FiArrowRight, FiExternalLink, FiSearch } from "react-icons/fi";
import {
  portfolioCategories,
  portfolioProjects,
  portfolioStats,
  type PortfolioCategory,
} from "@/lib/portfolio";
import { whatsappLink } from "@/lib/site";

const PAGE_SIZE = 9;

export function PortfolioExplorer() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<PortfolioCategory>("All Categories");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return portfolioProjects.filter((project) => {
      const matchesCategory = category === "All Categories" || project.category === category;
      const matchesQuery =
        !normalized ||
        project.title.toLowerCase().includes(normalized) ||
        project.client.toLowerCase().includes(normalized) ||
        project.description.toLowerCase().includes(normalized) ||
        project.category.toLowerCase().includes(normalized);
      return matchesCategory && matchesQuery;
    });
  }, [category, query]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const paginated = filtered.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);
  const start = filtered.length === 0 ? 0 : (currentPage - 1) * PAGE_SIZE + 1;
  const end = Math.min(currentPage * PAGE_SIZE, filtered.length);

  function resetFilters() {
    setQuery("");
    setCategory("All Categories");
    setPage(1);
  }

  function handleCategoryChange(next: PortfolioCategory) {
    setCategory(next);
    setPage(1);
  }

  return (
    <>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {[
          { value: portfolioStats.activeProjects, label: "Active Projects" },
          { value: portfolioStats.featuredWork, label: "Featured Work" },
          { value: portfolioStats.categories, label: "Categories" },
          { value: portfolioStats.label, label: portfolioStats.labelText },
        ].map((stat) => (
          <div key={stat.label} className="rounded-2xl border border-[var(--border-warm)] bg-[var(--card-white)] p-4 text-center shadow-soft">
            <p className="text-2xl font-bold text-terracotta sm:text-3xl">{stat.value}</p>
            <p className="mt-1 text-[11px] font-medium text-charcoal-light sm:text-xs">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-2xl border border-[var(--border-warm)] bg-[var(--card-white)] p-4 shadow-soft sm:p-5">
        <div className="grid gap-3 lg:grid-cols-[1fr_220px_auto] lg:items-end">
          <label className="block">
            <span className="mb-1.5 block text-xs font-semibold text-charcoal">Search Portfolio</span>
            <div className="relative">
              <FiSearch className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-charcoal-light" />
              <input
                type="search"
                value={query}
                onChange={(event) => {
                  setQuery(event.target.value);
                  setPage(1);
                }}
                placeholder="Search by project, client or category..."
                className="w-full rounded-xl border border-[var(--border-warm)] bg-cream-50 py-2.5 pl-10 pr-3 text-sm text-charcoal outline-none transition focus:border-terracotta/40 focus:bg-white"
              />
            </div>
          </label>
          <label className="block">
            <span className="mb-1.5 block text-xs font-semibold text-charcoal">Category</span>
            <select
              value={category}
              onChange={(event) => handleCategoryChange(event.target.value as PortfolioCategory)}
              className="w-full rounded-xl border border-[var(--border-warm)] bg-cream-50 px-3 py-2.5 text-sm text-charcoal outline-none transition focus:border-terracotta/40 focus:bg-white"
            >
              {portfolioCategories.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </label>
          <button
            type="button"
            onClick={resetFilters}
            className="rounded-xl border border-[var(--border-warm)] px-4 py-2.5 text-sm font-semibold text-charcoal transition hover:border-terracotta/30 hover:text-terracotta"
          >
            Reset
          </button>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {portfolioCategories.slice(1).map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => handleCategoryChange(item)}
              className={`rounded-full px-3 py-1.5 text-[11px] font-semibold transition sm:text-xs ${
                category === item
                  ? "bg-terracotta text-white"
                  : "border border-[var(--border-warm)] bg-cream-50 text-charcoal-light hover:border-terracotta/30 hover:text-terracotta"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-lg font-bold text-charcoal sm:text-xl">Portfolio Projects</h2>
          <p className="mt-1 text-sm text-charcoal-light">
            Showing {start} to {end} of {filtered.length} projects.
          </p>
        </div>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-terracotta px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-terracotta-600"
        >
          Start Your Project <FiArrowRight />
        </Link>
      </div>

      <div className="mt-5 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {paginated.map((project) => (
          <article
            key={project.id}
            className="portfolio-card premium-card group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-[var(--border-warm)] bg-[var(--card-white)]"
          >
            <div className="portfolio-card-media relative overflow-hidden bg-cream-200">
              <Image
                src={project.image}
                alt={project.title}
                width={640}
                height={360}
                className="h-52 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-56"
              />
              <div className="portfolio-card-media-overlay absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/10 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
              <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                <span className="inline-flex rounded-full border border-white/20 bg-white/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-terracotta backdrop-blur-sm">
                  {project.category}
                </span>
                {project.featured && (
                  <span className="inline-flex rounded-full bg-terracotta px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
                    Featured
                  </span>
                )}
              </div>
            </div>

            <div className="flex flex-1 flex-col p-5">
              <h3 className="text-xl font-bold leading-snug text-charcoal transition group-hover:text-terracotta">{project.title}</h3>
              <p className="mt-2 text-xs font-semibold text-charcoal-light">Client: {project.client}</p>
              <p className="mt-3 line-clamp-4 flex-1 text-[13px] leading-6 text-charcoal-light">{project.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-terracotta px-4 py-2.5 text-sm font-bold text-white transition hover:bg-terracotta-600"
                >
                  Visit Project <FiExternalLink className="text-sm" />
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1 rounded-xl border border-[var(--border-warm)] px-4 py-2.5 text-sm font-semibold text-charcoal transition hover:border-terracotta/30 hover:text-terracotta"
                >
                  Similar Project
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="mt-8 rounded-2xl border border-[var(--border-warm)] bg-[var(--card-white)] p-8 text-center shadow-soft">
          <p className="text-base font-semibold text-charcoal">No projects found</p>
          <p className="mt-2 text-sm text-charcoal-light">Try another keyword or reset filters to browse all portfolio work.</p>
        </div>
      )}

      {totalPages > 1 && (
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
          <p className="text-sm text-charcoal-light">
            Showing {start} to {end} of {filtered.length} results
          </p>
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              disabled={currentPage === 1}
              onClick={() => setPage((value) => Math.max(1, value - 1))}
              className="rounded-full border border-[var(--border-warm)] px-4 py-2 text-sm font-semibold text-charcoal transition enabled:hover:border-terracotta/30 disabled:opacity-40"
            >
              Previous
            </button>
            {Array.from({ length: totalPages }).map((_, index) => {
              const pageNumber = index + 1;
              return (
                <button
                  key={pageNumber}
                  type="button"
                  onClick={() => setPage(pageNumber)}
                  className={`grid h-9 min-w-9 place-items-center rounded-full px-3 text-sm font-semibold transition ${
                    currentPage === pageNumber
                      ? "bg-terracotta text-white"
                      : "border border-[var(--border-warm)] text-charcoal hover:border-terracotta/30 hover:text-terracotta"
                  }`}
                >
                  {pageNumber}
                </button>
              );
            })}
            <button
              type="button"
              disabled={currentPage === totalPages}
              onClick={() => setPage((value) => Math.min(totalPages, value + 1))}
              className="rounded-full border border-[var(--border-warm)] px-4 py-2 text-sm font-semibold text-charcoal transition enabled:hover:border-terracotta/30 disabled:opacity-40"
            >
              Next
            </button>
          </div>
        </div>
      )}

      <div className="mt-10 rounded-[1.75rem] border border-terracotta/15 bg-gradient-to-br from-terracotta/10 via-[var(--card-white)] to-cream-100 p-6 text-center shadow-soft sm:p-8">
        <h2 className="text-xl font-bold text-charcoal sm:text-2xl">Want to Build a Similar Website, Software or App?</h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-charcoal-light">
          Share your requirement with us and our team will suggest the right solution for your business.
        </p>
        <div className="mt-5 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-terracotta px-6 py-3 text-sm font-semibold text-white transition hover:bg-terracotta-600">
            Get Free Consultation <FiArrowRight />
          </Link>
          <a href={whatsappLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-[var(--border-warm)] bg-[var(--card-white)] px-6 py-3 text-sm font-semibold text-charcoal transition hover:border-terracotta/30">
            WhatsApp Us
          </a>
        </div>
      </div>
    </>
  );
}
