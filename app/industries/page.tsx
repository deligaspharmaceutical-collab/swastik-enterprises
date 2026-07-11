"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import SmoothScroll from "@/components/ui/SmoothScroll";
import Link from "next/link";
import {
  Hammer,
  Archive,
  Printer,
  Sparkles,
  Award,
  ArrowRight,
  CheckCircle2,
  Factory,
  Layers,
  BookOpen,
  Car,
  ShoppingBag,
} from "lucide-react";

const industries = [
  {
    icon: Hammer,
    title: "Woodworking & Carpentry",
    category: "Furniture & Joinery",
    desc: "From premium furniture assembly to structural carpentry and door manufacturing, our water-based PVA and SB-latex wood adhesives deliver exceptional bond strength, fast setting times, and clean glue lines.",
    applications: [
      "Furniture assembly & edge banding",
      "Door and window frame joints",
      "Plywood and MDF lamination",
      "Structural carpentry bonding",
    ],
    products: ["Wood Adhesives", "Specialty Adhesives"],
    gradient: "from-amber-50 to-orange-50",
    accentColor: "bg-amber-100 text-amber-700",
    borderColor: "hover:border-amber-300",
  },
  {
    icon: Archive,
    title: "Flexible Packaging",
    category: "Pouch & Bag Manufacturing",
    desc: "Our lamination adhesives are engineered for high-speed flexible packaging lines. They offer superior adhesion on polyester, BOPP, nylon, and aluminium foil structures with excellent chemical resistance.",
    applications: [
      "Dry lamination of multi-layer films",
      "Stand-up pouch & retort packaging",
      "Aluminium foil laminates",
      "Food-grade flexible structures",
    ],
    products: ["Lamination Adhesives", "Heat Seal Coatings"],
    gradient: "from-blue-50 to-sky-50",
    accentColor: "bg-blue-100 text-blue-700",
    borderColor: "hover:border-blue-300",
  },
  {
    icon: Printer,
    title: "Printing & Paper Converting",
    category: "Labels, Stationery & Press",
    desc: "We supply specialized overprint varnishes, water-based coatings, and adhesives tailored for offset, flexo, and gravure printed substrates — delivering scuff resistance, gloss, and printability.",
    applications: [
      "Overprint varnish for packaging labels",
      "Paper-to-paper cold lamination",
      "Sticker and pressure-sensitive labels",
      "Book binding & notebook production",
    ],
    products: ["Coatings", "Specialty Adhesives"],
    gradient: "from-purple-50 to-violet-50",
    accentColor: "bg-purple-100 text-purple-700",
    borderColor: "hover:border-purple-300",
  },
  {
    icon: Sparkles,
    title: "Lamination & Converting",
    category: "Film & Foil Lamination",
    desc: "Our solvent-based and water-based lamination adhesives are optimized for film-to-film, film-to-foil, and paper-to-film conversion processes across both single and double-side lamination setups.",
    applications: [
      "BOPP & PET thermal lamination",
      "Metallized film lamination",
      "Paper-to-film structures",
      "High-barrier flexible laminates",
    ],
    products: ["Lamination Adhesives", "Coatings"],
    gradient: "from-emerald-50 to-teal-50",
    accentColor: "bg-emerald-100 text-emerald-700",
    borderColor: "hover:border-emerald-300",
  },
  {
    icon: Award,
    title: "Footwear Manufacturing",
    category: "Shoes & Leather Goods",
    desc: "Our contact adhesives and specialty bonding solutions are trusted by footwear manufacturers for lasting sole-to-upper bonds, insole fixing, and assembly of synthetic leather and foam components.",
    applications: [
      "Sole-to-upper bonding",
      "Insole and midsole attachment",
      "Synthetic leather lamination",
      "Foam and fabric assembly",
    ],
    products: ["Specialty Adhesives", "Wood Adhesives"],
    gradient: "from-rose-50 to-pink-50",
    accentColor: "bg-rose-100 text-rose-700",
    borderColor: "hover:border-rose-300",
  },
  {
    icon: Layers,
    title: "Surface Coating & Finishing",
    category: "Industrial Varnishes & Primers",
    desc: "Our industrial liquid coatings protect packaging substrates and printed surfaces from moisture ingress, abrasion, UV exposure, and chemical contact — available in high gloss, matte, and satin finishes.",
    applications: [
      "Carton board gloss/matte coating",
      "Flexible packaging varnishing",
      "Waterproof barriers for paper",
      "Anti-scuff protective coatings",
    ],
    products: ["Coatings", "Heat Seal Coatings"],
    gradient: "from-yellow-50 to-amber-50",
    accentColor: "bg-yellow-100 text-yellow-700",
    borderColor: "hover:border-yellow-300",
  },
  {
    icon: Factory,
    title: "Industrial Manufacturing",
    category: "Automotive & Electronics",
    desc: "We develop custom adhesive formulations for specialized industrial applications including automotive interior assembly, electronics potting, and structural bonding across diverse material substrates.",
    applications: [
      "Automotive interior trim bonding",
      "Electronics assembly & encapsulation",
      "Gasket bonding & sealing",
      "Industrial filter assembly",
    ],
    products: ["Specialty Adhesives"],
    gradient: "from-slate-50 to-gray-50",
    accentColor: "bg-slate-100 text-slate-700",
    borderColor: "hover:border-slate-300",
  },
  {
    icon: BookOpen,
    title: "Stationery & Publishing",
    category: "Book Binding & Office Products",
    desc: "Our range of book-binding adhesives and spine glues are formulated for durability, flexibility, and compatibility across PUR, EVA hot-melt, and cold-glue binding systems.",
    applications: [
      "Perfect book binding",
      "Notebook & diary assembly",
      "Envelope and mailer sealing",
      "Office product manufacturing",
    ],
    products: ["Wood Adhesives", "Specialty Adhesives"],
    gradient: "from-indigo-50 to-blue-50",
    accentColor: "bg-indigo-100 text-indigo-700",
    borderColor: "hover:border-indigo-300",
  },
];

const whyTrustUs = [
  { icon: CheckCircle2, text: "Industry-specific formulation expertise" },
  { icon: CheckCircle2, text: "Free technical consultation & sampling" },
  { icon: CheckCircle2, text: "Bulk & custom packaging available" },
  { icon: CheckCircle2, text: "PAN India delivery with short lead times" },
];

const customItems = [
  { icon: Car, title: "Automotive", desc: "Interior trims, seals, and gasket bonding" },
  { icon: ShoppingBag, title: "Retail & FMCG", desc: "Consumer product packaging assembly" },
  { icon: Factory, title: "Industrial OEM", desc: "Custom specs for OEM production lines" },
  { icon: BookOpen, title: "Publishing", desc: "Book binding and archival adhesives" },
];

export default function IndustriesPage() {
  return (
    <SmoothScroll>
      <div className="flex min-h-screen flex-col bg-white">
        <Header darkHero />

        <main className="flex-1">
          {/* ── Hero Banner ── */}
          <section className="relative overflow-hidden bg-brand-dark pt-28 pb-16 text-white sm:pt-32 sm:pb-20 md:pt-40 md:pb-28 lg:pt-44 lg:pb-32">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,87,34,0.18),transparent_55%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,87,34,0.07),transparent_50%)]" />
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />
            <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-10 lg:px-12 relative z-10">
              <span className="font-display text-[10px] sm:text-xs font-extrabold tracking-wider text-brand-orange uppercase">
                Industries We Serve
              </span>
              <h1 className="mt-3 sm:mt-4 font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight max-w-3xl">
                Solutions for{" "}
                <span className="text-brand-orange">Every Industry.</span>
              </h1>
              <p className="mt-4 sm:mt-6 font-body text-base sm:text-lg text-zinc-300 leading-relaxed max-w-xl sm:max-w-2xl">
                From woodworking to flexible packaging, footwear to industrial manufacturing — our adhesives and coatings power production lines across diverse sectors.
              </p>
              <div className="mt-6 sm:mt-8 flex flex-col xs:flex-row gap-3 sm:gap-4">
                <Link
                  href="/contact"
                  className="inline-flex w-full xs:w-auto items-center justify-center gap-2 rounded-full bg-brand-orange px-6 sm:px-8 py-3.5 sm:py-4 font-sans text-sm font-bold text-white transition-all hover:bg-brand-orange-hover hover:shadow-lg hover:shadow-brand-orange/30"
                >
                  Request a Sample
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/products"
                  className="inline-flex w-full xs:w-auto items-center justify-center gap-2 rounded-full border border-white/20 px-6 sm:px-8 py-3.5 sm:py-4 font-sans text-sm font-bold text-white transition-all hover:border-white/50 hover:bg-white/5"
                >
                  View Product Catalog
                </Link>
              </div>
            </div>
          </section>

          {/* ── Trust Strip ── */}
          <section className="bg-brand-orange">
            <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-12 py-6 sm:py-8">
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4 lg:gap-6">
                {whyTrustUs.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="flex items-center gap-2.5 text-white">
                      <Icon className="h-4 w-4 shrink-0" />
                      <span className="font-body text-xs sm:text-sm font-semibold">{item.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* ── Industries Grid ── */}
          <section className="py-14 sm:py-20 md:py-28 bg-brand-light-gray">
            <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-10 lg:px-12">
              {/* Section header */}
              <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 lg:mb-16">
                <span className="font-display text-[10px] sm:text-xs font-extrabold tracking-wider text-brand-orange uppercase">
                  Sector Expertise
                </span>
                <h2 className="mt-3 sm:mt-4 font-display text-2xl sm:text-3xl md:text-4xl font-black text-brand-dark">
                  Industries We Power
                </h2>
                <p className="mt-3 sm:mt-4 font-body text-sm sm:text-base text-zinc-500 leading-relaxed">
                  Over a decade of application expertise across 8 major industry verticals. Our team understands the unique bonding challenges of each sector.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2">
                {industries.map((ind, i) => {
                  const Icon = ind.icon;
                  return (
                    <div
                      key={i}
                      className={`group relative overflow-hidden rounded-2xl sm:rounded-3xl border border-gray-100 bg-white p-6 sm:p-7 lg:p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${ind.borderColor}`}
                    >
                      {/* Gradient background on hover */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${ind.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-100`} />

                      <div className="relative z-10">
                        {/* Header row */}
                        <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-5">
                          <div className={`flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-xl sm:rounded-2xl ${ind.accentColor} transition-all duration-300`}>
                            <Icon className="h-6 w-6 sm:h-7 sm:w-7" />
                          </div>
                          <div>
                            <span className="font-display text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-brand-orange">
                              {ind.category}
                            </span>
                            <h3 className="mt-0.5 font-display text-lg sm:text-xl font-black text-brand-dark leading-snug">
                              {ind.title}
                            </h3>
                          </div>
                        </div>

                        <p className="font-body text-xs sm:text-sm leading-relaxed text-zinc-500 mb-4 sm:mb-6">
                          {ind.desc}
                        </p>

                        {/* Applications list */}
                        <div className="mb-4 sm:mb-5">
                          <h4 className="font-display text-[9px] sm:text-xs font-extrabold uppercase tracking-wider text-zinc-400 mb-2 sm:mb-3">
                            Key Applications
                          </h4>
                          <ul className="grid grid-cols-1 xs:grid-cols-2 gap-1.5 sm:gap-2">
                            {ind.applications.map((app, j) => (
                              <li key={j} className="flex items-start gap-1.5 sm:gap-2 font-body text-[11px] sm:text-xs text-zinc-600">
                                <CheckCircle2 className="h-3 w-3 sm:h-3.5 sm:w-3.5 shrink-0 mt-0.5 text-brand-orange" />
                                <span>{app}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Products + CTA row */}
                        <div className="flex flex-col xs:flex-row items-start xs:items-center justify-between gap-3 sm:gap-4 border-t border-gray-100 pt-4 sm:pt-5">
                          <div className="flex flex-wrap gap-1.5 sm:gap-2">
                            {ind.products.map((prod, k) => (
                              <span
                                key={k}
                                className="rounded-full border border-orange-200 bg-orange-50 px-2.5 sm:px-3 py-0.5 sm:py-1 font-display text-[9px] sm:text-[10px] font-bold uppercase tracking-wide text-brand-orange"
                              >
                                {prod}
                              </span>
                            ))}
                          </div>
                          <Link
                            href="/contact"
                            className="group/btn inline-flex items-center gap-1.5 font-display text-[11px] sm:text-xs font-bold text-brand-orange hover:text-brand-orange-hover transition-colors whitespace-nowrap"
                          >
                            Get a Quote
                            <ArrowRight className="h-3 w-3 sm:h-3.5 sm:w-3.5 transition-transform group-hover/btn:translate-x-1" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* ── Custom Solutions ── */}
          <section className="py-14 sm:py-20 md:py-28 bg-white">
            <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-10 lg:px-12">
              <div className="grid grid-cols-1 gap-10 sm:gap-14 lg:grid-cols-2 lg:gap-20 lg:items-center">
                {/* Left: Text */}
                <div>
                  <span className="font-display text-[10px] sm:text-xs font-extrabold tracking-wider text-brand-orange uppercase">
                    Don&apos;t See Your Industry?
                  </span>
                  <h2 className="mt-3 sm:mt-4 font-display text-2xl sm:text-3xl md:text-4xl font-black text-brand-dark leading-tight">
                    We Formulate Custom Adhesives for Any Application.
                  </h2>
                  <p className="mt-4 sm:mt-5 font-body text-sm sm:text-base text-zinc-500 leading-relaxed">
                    Our R&amp;D team specializes in developing bespoke adhesive and coating solutions for unique substrates and bonding challenges. If you have an unconventional requirement, we'd love to help solve it.
                  </p>
                  <p className="mt-3 font-body text-sm sm:text-base text-zinc-500 leading-relaxed">
                    Share your substrate, performance specifications, and production environment — our chemists will develop a tailored formulation and provide a free trial sample.
                  </p>
                  <div className="mt-6 sm:mt-8">
                    <Link
                      href="/contact"
                      className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-brand-orange px-6 sm:px-8 py-3.5 sm:py-4 font-sans text-sm font-bold text-white transition-all hover:bg-brand-orange-hover hover:shadow-lg hover:shadow-brand-orange/25"
                    >
                      Discuss Custom Requirements
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>

                {/* Right: Grid tiles */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  {customItems.map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={i}
                        className="rounded-xl sm:rounded-2xl border border-gray-100 bg-brand-light-gray p-4 sm:p-6 hover:border-brand-orange/30 hover:bg-white transition-all duration-300"
                      >
                        <div className="mb-2.5 sm:mb-3 flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-lg sm:rounded-xl bg-orange-50 text-brand-orange">
                          <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                        </div>
                        <h4 className="font-display text-xs sm:text-sm font-bold text-brand-dark">{item.title}</h4>
                        <p className="mt-1 font-body text-[10px] sm:text-xs text-zinc-400 leading-relaxed">{item.desc}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>

          {/* ── CTA ── */}
          <CTA />
        </main>

        <Footer />
      </div>
    </SmoothScroll>
  );
}
