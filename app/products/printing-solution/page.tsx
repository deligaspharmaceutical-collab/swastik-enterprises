"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import SmoothScroll from "@/components/ui/SmoothScroll";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ChevronRight, Award, ShieldCheck, Printer, Zap } from "lucide-react";

export default function PrintingSolutionPage() {
  const specs = [
    { label: "Dry Weight", value: "3.5 - 5.0 gsm" },
    { label: "Drying Temperature", value: "60°C - 80°C" },
    { label: "Diluent", value: "Water / Isopropyl Alcohol (IPA) Blend" },
    { label: "Viscosity", value: "20 - 30 seconds (Ford Cup 4)" },
    { label: "pH Range", value: "8.0 - 9.0 (for water-based varnishes)" },
    { label: "Finish Options", value: "High Gloss, Satin, Deep Matte" },
  ];

  const features = [
    {
      title: "Scuff & Rub Resistance",
      desc: "Protects printed designs from friction, scratching, and abrasive wear during logistics and handling.",
      icon: ShieldCheck,
    },
    {
      title: "Fast Drying Profile",
      desc: "Optimized for high-speed flexo and gravure printing presses, ensuring smudge-free rewinding.",
      icon: Zap,
    },
    {
      title: "Excellent Ink Compatibility",
      desc: "Can be applied directly over standard water-based and solvent-based inks without color bleeding.",
      icon: Printer,
    },
    {
      title: "Premium Finish Options",
      desc: "Tailored gloss levels from high reflective shine to smooth, anti-glare matte.",
      icon: Award,
    },
  ];

  const applications = [
    "Overprint Varnishes for Mono-Cartons",
    "Labels & Tags Protective Gloss Coatings",
    "Flexographic & Gravure Ink Additives",
    "Paper Board Packaging Varnishing",
    "Book Covers & Magazine Gloss Laminates",
    "Fast-drying Corrugated Box Coating",
  ];

  return (
    <SmoothScroll>
      <div className="flex min-h-screen flex-col bg-white">
        <Header darkHero />

        <main className="flex-1">
          {/* Hero Banner Section */}
          <section className="relative overflow-hidden bg-brand-dark pt-32 pb-20 text-white md:pt-44 md:pb-32">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,87,34,0.15),transparent_50%)]" />
            <div className="mx-auto max-w-7xl px-6 md:px-12 relative z-10">
              {/* Breadcrumbs */}
              <div className="flex items-center gap-2 text-xs font-semibold text-zinc-400 mb-6 uppercase tracking-wider">
                <Link href="/" className="hover:text-brand-orange transition-colors">Home</Link>
                <ChevronRight className="h-3 w-3" />
                <Link href="/products" className="hover:text-brand-orange transition-colors">Products</Link>
                <ChevronRight className="h-3 w-3" />
                <span className="text-zinc-200">Printing Solution</span>
              </div>

              <div className="max-w-3xl">
                <span className="font-display text-xs font-extrabold tracking-wider text-brand-orange uppercase">
                  Surface Protection & Aesthetics
                </span>
                <h1 className="mt-4 font-display text-4xl font-black tracking-tight sm:text-6xl text-white">
                  Printing Solutions & Varnishes
                </h1>
                <p className="mt-6 font-body text-lg text-zinc-300 leading-relaxed">
                  Industrial overprint varnishes, gloss/matte protective coatings, and press performance chemicals designed for high-resolution packaging aesthetics.
                </p>
              </div>
            </div>
          </section>

          {/* Product Deep Dive Section */}
          <section className="py-16 md:py-24 bg-brand-light-gray">
            <div className="mx-auto max-w-7xl px-6 md:px-12">
              <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
                
                {/* Left: Product Description & Features */}
                <div className="lg:col-span-7 space-y-12">
                  <div className="space-y-6">
                    <h2 className="font-display text-3xl font-black text-brand-dark">
                      Superior Print Enhancement & Durability
                    </h2>
                    <p className="font-body text-base text-zinc-600 leading-relaxed">
                      Our range of Printing Solutions and protective varnishes is designed to give your packaging a premium look while shielding graphics from external damage. Formulated to adhere strongly to diverse paper boards and synthetic materials, they form a protective shield against moisture, handling oils, and physical scratches. With our quick-drying polymer compounds, printers can push press speeds to the max without risking set-off or blocking.
                    </p>
                  </div>

                  {/* Feature Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {features.map((feat, idx) => {
                      const Icon = feat.icon;
                      return (
                        <div key={idx} className="bg-white rounded-2xl p-6 border border-zinc-100 shadow-xs hover:shadow-md transition-shadow">
                          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 text-brand-orange mb-4">
                            <Icon className="h-5 w-5" />
                          </div>
                          <h3 className="font-display text-base font-bold text-brand-dark">{feat.title}</h3>
                          <p className="mt-2 font-body text-xs text-zinc-500 leading-relaxed">{feat.desc}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Right: Technical Specs & Applications */}
                <div className="lg:col-span-5 space-y-10">
                  {/* Technical Specifications */}
                  <div className="bg-white rounded-3xl p-8 border border-zinc-100 shadow-sm">
                    <h3 className="font-display text-lg font-black text-brand-dark mb-6 border-b border-zinc-100 pb-4">
                      Technical Specifications
                    </h3>
                    <div className="divide-y divide-zinc-100">
                      {specs.map((spec, idx) => (
                        <div key={idx} className="flex justify-between py-3 font-body text-sm">
                          <span className="text-zinc-500">{spec.label}</span>
                          <span className="font-bold text-brand-dark text-right">{spec.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Industry Applications */}
                  <div className="bg-brand-dark text-white rounded-3xl p-8 shadow-md">
                    <h3 className="font-display text-lg font-bold mb-6 text-brand-orange uppercase tracking-wider">
                      Recommended Applications
                    </h3>
                    <ul className="space-y-4">
                      {applications.map((app, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm font-medium text-zinc-300">
                          <CheckCircle2 className="h-5 w-5 text-brand-orange shrink-0 mt-0.5" />
                          <span>{app}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8">
                      <Link
                        href="/contact?inquiry=printing-solution"
                        className="flex items-center justify-center gap-2.5 rounded-full bg-brand-orange px-6 py-4 font-display text-sm font-bold text-white transition-all hover:bg-brand-orange-hover hover:shadow-lg hover:shadow-brand-orange/25"
                      >
                        Request Quote & TDS
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>

                </div>
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
