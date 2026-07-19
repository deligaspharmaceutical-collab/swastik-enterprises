"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import SmoothScroll from "@/components/ui/SmoothScroll";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ChevronRight, Award, ShieldCheck, Droplets, Leaf } from "lucide-react";

export default function BiodegradableFoodGradeCoatingsPage() {
  const specs = [
    { label: "Compliance", value: "FDA 21 CFR 176.170 / 176.180 (Direct Food Contact)" },
    { label: "Biodegradability", value: "Compostable under standard municipal conditions" },
    { label: "Oil/Grease Resistance", value: "KIT Value up to 10 - 12" },
    { label: "Cobb 30 (Water Absorption)", value: "Below 15 g/m²" },
    { label: "Viscosity", value: "1,500 - 3,500 cPs" },
    { label: "Recommended Coat Weight", value: "4.0 - 8.0 gsm (dry)" },
  ];

  const features = [
    {
      title: "100% Biodegradable & Compostable",
      desc: "Eco-friendly polymer blend that breaks down completely without releasing harmful chemical residues.",
      icon: Leaf,
    },
    {
      title: "Superior Water & Oil Barrier",
      desc: "Protects food boxes and cups from structural collapse caused by oil soakage or condensation.",
      icon: Droplets,
    },
    {
      title: "FDA & EU Certified Food Grade",
      desc: "Fully certified for direct contact with fatty, aqueous, dry, and acidic foods at varying temperatures.",
      icon: ShieldCheck,
    },
    {
      title: "Heat Sealable Option",
      desc: "Can be formulated to act as both a barrier and heat-seal adhesive for quick automated paper cup forming.",
      icon: Award,
    },
  ];

  const applications = [
    "Paper Cups (Hot and Cold Beverages)",
    "Burger Boxes & Fast Food Clamshells",
    "Paper Plates & Bowls (Eco-Catering)",
    "Takeaway Food Trays & Wrapping Sheets",
    "Bakery Cartons & Pastry Cardboard Pads",
    "Greaseproof Liners for Dry Foods & Grains",
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
                <span className="text-zinc-200">Biodegradable Food Grade Coatings</span>
              </div>

              <div className="max-w-3xl">
                <span className="font-display text-xs font-extrabold tracking-wider text-brand-orange uppercase">
                  Sustainable Packaging Barrier
                </span>
                <h1 className="mt-4 font-display text-4xl font-black tracking-tight sm:text-6xl text-white">
                  Biodegradable Food Grade Coatings
                </h1>
                <p className="mt-6 font-body text-lg text-zinc-300 leading-relaxed">
                  FDA-certified, plastic-free compostable barrier coatings engineered to shield paper containers against hot liquids, condensation, and greasy foodstuffs.
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
                      Plastic-Free Sustainable Barriers
                    </h2>
                    <p className="font-body text-base text-zinc-600 leading-relaxed">
                      As global industries shift away from single-use PE-extruded linings, our Biodegradable Food Grade Coatings provide a high-performance, fully circular alternative. Specially developed using eco-friendly natural polymers, these liquid dispersion coatings form a water and oil-resistant film when dried. They are repulpable, biodegrade completely in composting systems, and leave no microplastics behind.
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
                        href="/contact?inquiry=biodegradable-food-grade-coatings"
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
