"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import SmoothScroll from "@/components/ui/SmoothScroll";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ChevronRight, Award, ShieldCheck, Box, Zap } from "lucide-react";

export default function PackingIndustryPage() {
  const specs = [
    { label: "Viscosity Range", value: "8,000 - 15,000 cPs (tailored per process)" },
    { label: "Solid Content", value: "40% - 55%" },
    { label: "pH Range", value: "4.5 - 6.5" },
    { label: "Setting Speed", value: "Ultra-fast (3 - 8 seconds)" },
    { label: "Water Resistance", value: "Medium to High options available" },
    { label: "Base Chemistry", value: "Modified Vinyl Acetate Polymer / Starch Blends" },
  ];

  const features = [
    {
      title: "High-Speed Machine Runnability",
      desc: "Designed for high-speed folding-carton and folder-gluer machines without splashing or stringing.",
      icon: Zap,
    },
    {
      title: "Excellent Fibre Tear",
      desc: "Establishes a deep destructive paper fibre bond, ensuring the security and tamper-evidence of packages.",
      icon: ShieldCheck,
    },
    {
      title: "Superior Heat & Cold Resistance",
      desc: "Maintains bond strength under extreme cargo shipping conditions (freezing containers or hot warehouse conditions).",
      icon: Box,
    },
    {
      title: "Clean Machining",
      desc: "Minimal build-up on glue rollers or nozzles, reducing maintenance downtime and cleaning intervals.",
      icon: Award,
    },
  ];

  const applications = [
    "Corrugated Box Side Flap Gluing",
    "Mono-Carton Folding & Flap Sealing",
    "Paper Bag Side Seaming & Bottom Pasting",
    "Paper Tube & Core Winding Applications",
    "Automatic Tray Forming & Envelope Gluing",
    "Shipper Carton Packaging & Palletizing",
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
                <span className="text-zinc-200">Packing Industry</span>
              </div>

              <div className="max-w-3xl">
                <span className="font-display text-xs font-extrabold tracking-wider text-brand-orange uppercase">
                  End-of-Line & Carton Sealing
                </span>
                <h1 className="mt-4 font-display text-4xl font-black tracking-tight sm:text-6xl text-white">
                  Adhesives for Packing Industry
                </h1>
                <p className="mt-6 font-body text-lg text-zinc-300 leading-relaxed">
                  Advanced water-based adhesives engineered for corrugated boards, automatic folder-gluers, paper bags, and heavy-duty structural cardboard cores.
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
                      Strength & Reliability for Modern Logistics
                    </h2>
                    <p className="font-body text-base text-zinc-600 leading-relaxed">
                      Our packaging adhesives are designed to keep pace with the fastest automated packaging lines. With instant tack and deep fiber penetration, they seal corrugated boxes and board folders in milliseconds, enabling seamless high-speed folding, gluing, and cartoning operations. We formulate our products to prevent nozzle clogging, reduce tailing, and optimize clean-up cycles to maximize your production uptime.
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
                        href="/contact?inquiry=packing-industry-adhesives"
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
