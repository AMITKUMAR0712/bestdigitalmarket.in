import type { Metadata } from "next";
import { ContactFormSection } from "@/components/ContactFormSection";
import { PageHero } from "@/components/PageHero";
import { ProductsExplorer } from "@/components/ProductsExplorer";
import { Reveal } from "@/components/Reveal";
import { SiteFooter } from "@/components/SiteFooter";
import { TrustBar } from "@/components/TrustBar";
import { productComparisonMatrix, productImplementationProcess, productOverviewStats } from "@/lib/products";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Software Products | CRM, ERP, HRMS, Institute & Custom Systems",
  description:
    "Ready-to-configure software products from TradeOrbit Global — CRM, ERP, HRMS, Billing, Coaching & School Management, Online Exam System, Custom Software, Property Portal and Real Estate CRM.",
  path: "/products",
  keywords: [
    "CRM software India",
    "ERP software company Noida",
    "HRMS software",
    "billing software",
    "coaching management software",
    "school management software",
    "online exam system",
    "property portal development",
    "real estate CRM software",
    "custom software development company",
  ],
});

export default function ProductsPage() {
  return (
    <main className="relative z-10 overflow-hidden bg-cream text-charcoal">
      <PageHero
        category="services"
        eyebrow="Software Products"
        title="Ready products for business, education and custom systems"
        description="Ten configurable products across three families, each shown with a web dashboard, a record or analytics view, and the mobile companion app — the module set, the problem it solves and the business outcome, before a single line of code is discussed."
      />
      <TrustBar compact showBadges={false} />

      <section className="app-section relative pt-0">
        <div className="app-container">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              { value: productOverviewStats.readyProducts, label: "Ready Products" },
              { value: productOverviewStats.screenPreviews, label: "Screen Previews" },
              { value: productOverviewStats.solutionCategories, label: "Solution Categories" },
              { value: productOverviewStats.customisable, label: "Customisable" },
            ].map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-[var(--border-warm)] bg-[var(--card-white)] p-4 text-center shadow-soft">
                <p className="text-2xl font-bold text-terracotta sm:text-3xl">{stat.value}</p>
                <p className="mt-1 text-[11px] font-medium text-charcoal-light sm:text-xs">{stat.label}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      <section className="app-section relative pt-0">
        <div className="app-container">
          <ProductsExplorer />
        </div>
      </section>

      <section className="app-section relative border-t border-[var(--border-warm)] bg-white/60">
        <div className="app-container">
          <Reveal>
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-terracotta">Quick Comparison</p>
            <h2 className="mt-2 text-2xl font-bold text-charcoal">Product comparison matrix</h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-charcoal-light">
              A quick side-by-side view to identify the right starting product. Multiple products can be combined into one connected platform.
            </p>
          </Reveal>

          <div className="mt-6 overflow-x-auto rounded-2xl border border-[var(--border-warm)] bg-[var(--card-white)] shadow-soft">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead>
                <tr className="border-b border-[var(--border-warm)] bg-cream-50 text-[11px] font-bold uppercase tracking-wide text-charcoal-muted">
                  <th className="px-5 py-3">Product</th>
                  <th className="px-5 py-3">Category</th>
                  <th className="px-5 py-3">Primary Users</th>
                  <th className="px-5 py-3">Core Value</th>
                </tr>
              </thead>
              <tbody>
                {productComparisonMatrix.map((row, index) => (
                  <tr key={row.product} className={index % 2 === 1 ? "bg-cream-50/50" : ""}>
                    <td className="px-5 py-3 font-bold text-charcoal">{row.product}</td>
                    <td className="px-5 py-3 text-charcoal-light">{row.category}</td>
                    <td className="px-5 py-3 text-charcoal-light">{row.primaryUsers}</td>
                    <td className="px-5 py-3 text-charcoal-light">{row.coreValue}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="app-section relative">
        <div className="app-container">
          <Reveal>
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-terracotta">How We Deliver</p>
            <h2 className="mt-2 text-2xl font-bold text-charcoal">Implementation process</h2>
          </Reveal>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {productImplementationProcess.map((step) => (
              <div key={step.step} className="rounded-2xl border border-[var(--border-warm)] bg-[var(--card-white)] p-5 shadow-soft">
                <p className="text-2xl font-black text-terracotta">{step.step}</p>
                <p className="mt-2 text-sm font-bold text-charcoal">{step.title}</p>
                <p className="mt-2 text-[13px] leading-6 text-charcoal-light">{step.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-[var(--border-warm)] bg-cream-50 p-5 text-[13px] leading-6 text-charcoal-light">
            <span className="font-bold text-charcoal">Every product in this catalogue is delivered as a configurable base. </span>
            Modules, user roles, report formats and screens are adapted to the client&apos;s workflow during requirement planning. Products can also be
            combined — for example a CRM connected to Billing, or an Institute ERP connected to the Online Exam System — so data flows across the
            platform instead of sitting in separate tools.
          </div>
        </div>
      </section>

      <section className="app-section relative border-t border-[var(--border-warm)] bg-white/60">
        <div className="app-container">
          <ContactFormSection compact />
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
