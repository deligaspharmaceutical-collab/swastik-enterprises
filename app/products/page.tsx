"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import SmoothScroll from "@/components/ui/SmoothScroll";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

interface ProductDetail {
  title: string;
  category: string;
  desc: string;
  img: string;
  href: string;
  features: string[];
  specs: { label: string; value: string }[];
}

const detailedProducts: ProductDetail[] = [
  {
    title: "Wood Adhesives",
    category: "Bonding & Carpentry",
    desc: "Premium water-based emulsion designed for woodworking, joinery, and structural wood assembly. Provides high tack and rapid setting times.",
    img: "/images/prod_wood.svg",
    href: "/contact?inquiry=wood-adhesives",
    features: [
      "Water-resistant formulation (D3 standard)",
      "Excellent heat and shear resistance",
      "Transparent glue line after drying",
      "Non-toxic and eco-friendly",
    ],
    specs: [
      { label: "Viscosity", value: "12000 - 18000 cPs" },
      { label: "Solid Content", value: "48% - 50%" },
      { label: "pH Value", value: "4.5 - 5.5" },
    ],
  },
  {
    title: "Lamination Adhesives",
    category: "Flexible субстраты & Films",
    desc: "High-performance synthetic resin adhesives optimized for dry lamination, paper-to-film, and film-to-film conversions. Offers exceptional print clarity and bonding.",
    img: "/images/prod_lamination.svg",
    href: "/contact?inquiry=lamination-adhesives",
    features: [
      "Superior bonding on polyester, BOPP, and metallized films",
      "Excellent chemical and heat resistance",
      "Low solvent retention and odor-free",
      "Optimal viscosity for high-speed coating machines",
    ],
    specs: [
      { label: "Solvent Type", value: "Ethyl Acetate / Alcohol" },
      { label: "Mixing Ratio", value: "100:10 (Adhesive:Catalyst)" },
      { label: "Coating Speed", value: "Up to 250 m/min" },
    ],
  },
  {
    title: "Coatings",
    category: "Surface Protection & Varnishes",
    desc: "Industrial-grade liquid polymer coatings and overprint varnishes that shield packaging substrates from physical abrasions, moisture, and chemical contact.",
    img: "/images/prod_coatings.svg",
    href: "/contact?inquiry=coatings",
    features: [
      "High gloss or deep matte finishes available",
      "Superior scuff and rub resistance",
      "Fast drying speeds on flexo/gravure presses",
      "FDA compliant for indirect food contact packaging",
    ],
    specs: [
      { label: "Dry Weight", value: "3.5 - 5.0 gsm" },
      { label: "Drying Temperature", value: "60°C - 80°C" },
      { label: "Diluent", value: "Water / IPA Blend" },
    ],
  },
  {
    title: "Heat Seal Coatings",
    category: "Packaging Seals",
    desc: "Heat-activated polymer coatings engineered to create airtight, peelable, or destructive seals on paper, foil, and plastic structures upon application of heat.",
    img: "/images/prod_heat_seal.svg",
    href: "/contact?inquiry=heat-seal-coatings",
    features: [
      "Consistent seal strength with clean peel profile",
      "Low sealing temperature initiation for high-speed lines",
      "Excellent hot tack performance",
      "Grease and moisture barrier options available",
    ],
    specs: [
      { label: "Sealing Temp", value: "120°C - 160°C" },
      { label: "Dwell Time", value: "0.5 - 1.0 seconds" },
      { label: "Substrates", value: "Alu Foil, PET, Paper, PVC" },
    ],
  },
  {
    title: "Specialty Adhesives",
    category: "Custom Industrial Blends",
    desc: "Bespoke adhesive formulations tailored for specific industrial substrates and assembly requirements, including shoe manufacturing, labels, and automotive interiors.",
    img: "/images/prod_specialty.svg",
    href: "/contact?inquiry=specialty-adhesives",
    features: [
      "Custom viscosity and open time matching",
      "Strong adhesion on difficult low-energy plastics",
      "Weather, UV, and aging resistant options",
      "Available in bulk packs (drums, IBC totes)",
    ],
    specs: [
      { label: "Base Polymer", value: "Polyurethane / Acrylic / Neoprene" },
      { label: "Application Method", value: "Spray, Roller, or Extrusion" },
      { label: "Packaging Type", value: "35kg bucket, 200kg drum, 1000kg IBC" },
    ],
  },
];

export default function ProductsPage() {
  return (
    <SmoothScroll>
      <div className="flex min-h-screen flex-col bg-white">
        <Header darkHero />

        <main className="flex-1">
          {/* Hero Banner Section */}
          <section className="relative overflow-hidden bg-brand-dark pt-32 pb-20 text-white md:pt-44 md:pb-32">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,87,34,0.15),transparent_50%)]" />
            <div className="mx-auto max-w-7xl px-6 md:px-12 relative z-10">
              <div className="max-w-3xl">
                <span className="font-display text-xs font-extrabold tracking-wider text-brand-orange uppercase">
                  Our Catalog
                </span>
                <h1 className="mt-4 font-display text-4xl font-black tracking-tight sm:text-6xl text-white">
                  Industrial Adhesives & Coatings
                </h1>
                <p className="mt-6 font-body text-lg text-zinc-300 leading-relaxed">
                  Explore our range of performance-tested liquid adhesives, lamination resins, surface coatings, and thermal sealing binders engineered for industrial excellence.
                </p>
              </div>
            </div>
          </section>

          {/* Product Listing Grid */}
          <section className="py-16 md:py-24 bg-brand-light-gray">
            <div className="mx-auto max-w-7xl px-6 md:px-12">
              <div className="space-y-16 lg:space-y-24">
                {detailedProducts.map((p, i) => (
                  <div
                    key={i}
                    id={p.title.toLowerCase().replace(/\s+/g, "-")}
                    className={`grid grid-cols-1 gap-12 lg:grid-cols-12 items-center bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-md ${
                      i % 2 === 1 ? "lg:flex-row-reverse" : ""
                    }`}
                  >
                    {/* Visual Container */}
                    <div
                      className={`lg:col-span-5 flex justify-center relative aspect-square max-w-md mx-auto w-full p-6 rounded-2xl bg-zinc-50 border border-gray-50 ${
                        i % 2 === 1 ? "lg:order-last" : ""
                      }`}
                    >
                      <Image
                        src={p.img}
                        alt={p.title}
                        fill
                        className="object-contain p-4"
                      />
                    </div>

                    {/* Content Stack */}
                    <div className="lg:col-span-7 space-y-6">
                      <div>
                        <span className="font-display text-xs font-bold tracking-wider text-brand-orange uppercase">
                          {p.category}
                        </span>
                        <h2 className="mt-2 font-display text-3xl font-black text-brand-dark sm:text-4xl">
                          {p.title}
                        </h2>
                      </div>
                      <p className="font-body text-base text-zinc-600 leading-relaxed">
                        {p.desc}
                      </p>

                      {/* Key Features Bullet List */}
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                        {p.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 font-body text-sm text-zinc-700">
                            <CheckCircle2 className="h-5 w-5 text-brand-orange shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Technical Specs Summary */}
                      <div className="border-t border-gray-100 pt-6 mt-4">
                        <h4 className="font-display text-xs font-extrabold tracking-wider text-zinc-400 uppercase mb-3.5">
                          Technical Specifications
                        </h4>
                        <div className="flex flex-wrap gap-6">
                          {p.specs.map((spec, idx) => (
                            <div key={idx} className="flex flex-col bg-zinc-50 rounded-xl px-4 py-2 border border-zinc-100/50">
                              <span className="text-[10px] uppercase text-zinc-400 font-sans">{spec.label}</span>
                              <span className="font-bold text-sm text-brand-dark font-display">{spec.value}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Action Button */}
                      <div className="pt-4">
                        <Link
                          href={p.href}
                          className="inline-flex items-center gap-2.5 rounded-full bg-brand-orange px-6 py-3 font-display text-sm font-bold text-white transition-all hover:bg-brand-orange-hover hover:shadow-lg"
                        >
                          Request Technical Data Sheet
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <CTA />
        </main>

        <Footer />
      </div>
    </SmoothScroll>
  );
}
