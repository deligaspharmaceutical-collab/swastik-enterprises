"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import SmoothScroll from "@/components/ui/SmoothScroll";
import Image from "next/image";
import { Award, ShieldCheck, Zap, Users2 } from "lucide-react";

export default function AboutPage() {
  const values = [
    {
      icon: <ShieldCheck className="h-8 w-8 text-brand-orange" />,
      title: "Uncompromising Quality",
      desc: "Every batch of adhesive undergoes rigorous testing to exceed industrial standards.",
    },
    {
      icon: <Zap className="h-8 w-8 text-brand-orange" />,
      title: "Innovation First",
      desc: "We continuously formulate customized blends to solve specific bonding challenges.",
    },
    {
      icon: <Award className="h-8 w-8 text-brand-orange" />,
      title: "Decade of Trust",
      desc: "Serving manufacturing, woodworking, and packaging leaders since 2013.",
    },
    {
      icon: <Users2 className="h-8 w-8 text-brand-orange" />,
      title: "Customer-Centric",
      desc: "Direct support and tailored supply solutions to optimize your production lines.",
    },
  ];

  return (
    <SmoothScroll>
      <div className="flex min-h-screen flex-col bg-white">
        <Header />

        <main className="flex-1">
          {/* Hero Banner Section */}
          <section className="relative overflow-hidden bg-brand-dark py-20 text-white md:py-32">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,87,34,0.15),transparent_50%)]" />
            <div className="mx-auto max-w-7xl px-6 md:px-12 relative z-10">
              <div className="max-w-3xl">
                <span className="font-display text-xs font-extrabold tracking-wider text-brand-orange uppercase">
                  Our Story
                </span>
                <h1 className="mt-4 font-display text-4xl font-black tracking-tight sm:text-6xl text-white">
                  About Swastik Enterprises
                </h1>
                <p className="mt-6 font-body text-lg text-zinc-300 leading-relaxed">
                  Established in 2013, we have grown into a leading manufacturer and supplier of high-performance liquid adhesives, coatings, and specialty resins for diverse industrial sectors.
                </p>
              </div>
            </div>
          </section>

          {/* History / Mission Section */}
          <section className="py-16 md:py-24">
            <div className="mx-auto max-w-7xl px-6 md:px-12">
              <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
                {/* Text Content */}
                <div className="space-y-6">
                  <h2 className="font-display text-3xl font-black text-brand-dark sm:text-4xl">
                    Engineered for Strength, Quality & Trust
                  </h2>
                  <p className="font-body text-base text-zinc-600 leading-relaxed">
                    At Swastik Enterprises, we understand that bonding is critical to the durability and integrity of your final products. Whether it is standard woodworking glues, flexible film lamination adhesives, heat seal coatings, or custom synthetic resins, our products are engineered to deliver reliable strength.
                  </p>
                  <p className="font-body text-base text-zinc-600 leading-relaxed">
                    Over the last decade, we have built a reputation for excellence through consistent batch quality, quick lead times, and expert formulation support. We serve woodworking, flexible packaging, paper converting, printing, and lamination industries nationwide.
                  </p>
                </div>
                {/* Visual Graphic Block */}
                <div className="relative aspect-video rounded-3xl overflow-hidden bg-brand-light-gray shadow-xl border border-gray-100 flex items-center justify-center p-8">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/5 to-transparent" />
                  <div className="relative h-full w-full">
                    <Image
                      src="/images/hero_containers.svg"
                      alt="Manufacturing Excellence"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Core Values Section */}
          <section className="bg-brand-light-gray py-16 md:py-24 border-y border-gray-100">
            <div className="mx-auto max-w-7xl px-6 md:px-12">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="font-display text-xs font-extrabold tracking-wider text-brand-orange uppercase">
                  Our Values
                </span>
                <h2 className="mt-4 font-display text-3xl font-black text-brand-dark sm:text-4xl">
                  The Pillars of Our Success
                </h2>
                <p className="mt-4 font-body text-base text-zinc-600">
                  We shape our operations, customer service, and formulation procedures around key values that assure consistent results.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {values.map((v, i) => (
                  <div
                    key={i}
                    className="flex flex-col bg-white border border-gray-100 rounded-3xl p-8 transition-all duration-300 hover:shadow-lg hover:border-brand-orange/20"
                  >
                    <div className="mb-6 rounded-2xl bg-brand-orange/5 p-3 w-fit">
                      {v.icon}
                    </div>
                    <h3 className="font-display text-xl font-bold text-brand-dark mb-3">
                      {v.title}
                    </h3>
                    <p className="font-body text-sm text-zinc-600 leading-relaxed">
                      {v.desc}
                    </p>
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