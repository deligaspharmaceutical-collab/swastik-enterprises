"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import SmoothScroll from "@/components/ui/SmoothScroll";
import Link from "next/link";
import {
  Shield,
  FlaskConical,
  Users,
  Handshake,
  ArrowRight,
  CheckCircle2,
  Truck,
  Microscope,
  HeartHandshake,
  Trophy,
  Clock,
  Star,
  BarChart3,
} from "lucide-react";

const pillars = [
  {
    icon: Shield,
    title: "Premium Quality",
    subtitle: "ISO-Grade Raw Materials",
    desc: "Every batch is manufactured using carefully sourced, high-purity raw materials. Our adhesives undergo rigorous in-house quality testing at every stage — from raw input to finished product — ensuring zero compromise on performance.",
    points: [
      "Multi-stage quality checkpoints",
      "Batch consistency guaranteed",
      "ISO-aligned QC protocols",
      "Certificate of Analysis with every shipment",
    ],
  },
  {
    icon: FlaskConical,
    title: "Advanced Technology",
    subtitle: "State-of-the-art R&D",
    desc: "Our modern manufacturing plant is equipped with precision reactors, climate-controlled mixing tanks, and automated filling lines. Our in-house R&D team continuously improves formulations to stay ahead of market demands.",
    points: [
      "Precision reaction control systems",
      "Automated viscosity & solids testing",
      "In-house R&D and reformulation",
      "Customized blends on demand",
    ],
  },
  {
    icon: Users,
    title: "Expert Team",
    subtitle: "Experienced Chemists & Technicians",
    desc: "Our workforce of trained chemists, production technicians, and quality inspectors brings decades of collective experience in polymer chemistry, emulsion technology, and industrial adhesive applications.",
    points: [
      "10+ years average team experience",
      "Dedicated technical support desk",
      "On-site application assistance",
      "Continuous skills development",
    ],
  },
  {
    icon: Handshake,
    title: "Customer First",
    subtitle: "Long-Term Partnership Focused",
    desc: "We believe in building relationships, not transactions. Our sales and support team works closely with each client to understand their unique requirements and recommend the optimal formulation and supply strategy.",
    points: [
      "Dedicated account managers",
      "Flexible supply agreements",
      "Technical data sheet & MSDS provided",
      "Custom packaging & labelling",
    ],
  },
  {
    icon: Truck,
    title: "Reliable Supply Chain",
    subtitle: "Pan-India Delivery Network",
    desc: "With a strategic location in Tronica City, Ghaziabad and a network of trusted logistics partners, we ensure consistent, on-time delivery anywhere in India. We handle bulk orders, drum packs, and IBC totes.",
    points: [
      "PAN India distribution network",
      "Bulk and drum supply available",
      "Short lead times & express dispatch",
      "Export-ready documentation",
    ],
  },
  {
    icon: Microscope,
    title: "Custom Formulations",
    subtitle: "Tailored to Your Substrate",
    desc: "No two applications are identical. We specialize in developing bespoke adhesive solutions for unique substrates, bonding challenges, and performance requirements — from low-energy plastics to high-speed packaging lines.",
    points: [
      "Custom viscosity & tack profiles",
      "Solvent and water-based options",
      "Small-batch sampling available",
      "Technical consultation included",
    ],
  },
];

const stats = [
  { value: "11+", label: "Years of Excellence", icon: Trophy },
  { value: "1000+", label: "Happy Clients", icon: HeartHandshake },
  { value: "10+", label: "Product Lines", icon: BarChart3 },
  { value: "24hr", label: "Inquiry Response", icon: Clock },
];

const testimonials = [
  {
    quote:
      "Swastik's lamination adhesives gave us consistent bond strength and excellent clarity. Their technical team was proactive in resolving our high-speed machine compatibility issue.",
    name: "Rajesh Kumar",
    role: "Production Head, FlexPack Industries",
    rating: 5,
  },
  {
    quote:
      "We've been sourcing wood adhesives from Swastik for 6 years. The product quality is unmatched and delivery is always on time. Highly recommended for any woodworking unit.",
    name: "Anil Sharma",
    role: "Owner, Sharma Furniture Works",
    rating: 5,
  },
  {
    quote:
      "Their specialty adhesive formulation for our shoe assembly line exceeded expectations. The open time and bond strength are perfectly calibrated for our process.",
    name: "Priya Mehta",
    role: "Operations Manager, StepRight Footwear",
    rating: 5,
  },
];

const steps = [
  { step: "01", title: "Share Your Requirements", desc: "Tell us your substrate, application, and performance targets via our contact form or phone." },
  { step: "02", title: "Technical Consultation", desc: "Our chemists review your specs and recommend the optimal adhesive formulation." },
  { step: "03", title: "Sample Dispatch", desc: "We send a free sample batch for you to trial on your production line." },
  { step: "04", title: "Bulk Order & Delivery", desc: "Upon approval, we manufacture and deliver your order within committed timelines." },
];

export default function WhyUsPage() {
  return (
    <SmoothScroll>
      <div className="flex min-h-screen flex-col bg-white">
        <Header darkHero />

        <main className="flex-1">
          {/* ── Hero Banner ── */}
          <section className="relative overflow-hidden bg-brand-dark pt-28 pb-16 text-white sm:pt-32 sm:pb-20 md:pt-40 md:pb-28 lg:pt-44 lg:pb-32">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,87,34,0.18),transparent_55%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,87,34,0.08),transparent_50%)]" />
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />
            <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-10 lg:px-12 relative z-10">
              <span className="font-display text-[10px] sm:text-xs font-extrabold tracking-wider text-brand-orange uppercase">
                Why Choose Us
              </span>
              <h1 className="mt-3 sm:mt-4 font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight max-w-3xl">
                Built on Quality.{" "}
                <span className="text-brand-orange">Driven by Innovation.</span>
              </h1>
              <p className="mt-4 sm:mt-6 font-body text-base sm:text-lg text-zinc-300 leading-relaxed max-w-xl sm:max-w-2xl">
                For over a decade, Swastik Enterprises has been the trusted adhesive partner for manufacturers, packagers, and woodworkers across India. Here's what sets us apart.
              </p>
              <div className="mt-6 sm:mt-8 flex flex-col xs:flex-row gap-3 sm:gap-4">
                <Link
                  href="/contact"
                  className="inline-flex w-full xs:w-auto items-center justify-center gap-2 rounded-full bg-brand-orange px-6 sm:px-8 py-3.5 sm:py-4 font-sans text-sm font-bold text-white transition-all hover:bg-brand-orange-hover hover:shadow-lg hover:shadow-brand-orange/30"
                >
                  Talk to Our Team
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/products"
                  className="inline-flex w-full xs:w-auto items-center justify-center gap-2 rounded-full border border-white/20 px-6 sm:px-8 py-3.5 sm:py-4 font-sans text-sm font-bold text-white transition-all hover:border-white/50 hover:bg-white/5"
                >
                  View Our Products
                </Link>
              </div>
            </div>
          </section>

          {/* ── Stats Bar ── */}
          <section className="bg-brand-orange">
            <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-12 py-8 sm:py-10">
              <div className="grid grid-cols-2 gap-6 sm:gap-8 md:grid-cols-4">
                {stats.map((stat, i) => {
                  const Icon = stat.icon;
                  return (
                    <div key={i} className="flex flex-col items-center text-center text-white">
                      <div className="mb-2 flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-white/20">
                        <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                      </div>
                      <span className="font-display text-2xl sm:text-3xl font-black">{stat.value}</span>
                      <span className="mt-1 font-body text-[10px] sm:text-xs font-medium text-orange-100 text-center">
                        {stat.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* ── Core Pillars ── */}
          <section className="py-14 sm:py-20 md:py-28 bg-white">
            <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-10 lg:px-12">
              {/* Section header */}
              <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 lg:mb-16">
                <span className="font-display text-[10px] sm:text-xs font-extrabold tracking-wider text-brand-orange uppercase">
                  Our Strengths
                </span>
                <h2 className="mt-3 sm:mt-4 font-display text-2xl sm:text-3xl md:text-4xl font-black text-brand-dark">
                  Six Reasons to Choose Swastik
                </h2>
                <p className="mt-3 sm:mt-4 font-body text-sm sm:text-base text-zinc-500 leading-relaxed">
                  Every decision we make — from sourcing to shipping — is guided by a commitment to quality, consistency, and customer success.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {pillars.map((pillar, i) => {
                  const Icon = pillar.icon;
                  return (
                    <div
                      key={i}
                      className="group relative flex flex-col rounded-2xl sm:rounded-3xl border border-gray-100 bg-white p-6 sm:p-7 lg:p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-brand-orange/20 hover:shadow-brand-orange/5"
                    >
                      <div className="absolute inset-x-0 bottom-0 h-1 w-0 rounded-b-3xl bg-brand-orange transition-all duration-500 group-hover:w-full" />

                      <div className="mb-4 sm:mb-5 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl sm:rounded-2xl bg-orange-50 text-brand-orange transition-all duration-300 group-hover:bg-brand-orange group-hover:text-white">
                        <Icon className="h-6 w-6 sm:h-7 sm:w-7" />
                      </div>

                      <span className="font-display text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-brand-orange">
                        {pillar.subtitle}
                      </span>
                      <h3 className="mt-1 font-display text-lg sm:text-xl font-black text-brand-dark">
                        {pillar.title}
                      </h3>
                      <p className="mt-2 sm:mt-3 font-body text-xs sm:text-sm leading-relaxed text-zinc-500">
                        {pillar.desc}
                      </p>

                      <ul className="mt-4 sm:mt-5 space-y-1.5 sm:space-y-2 border-t border-gray-100 pt-4 sm:pt-5">
                        {pillar.points.map((point, j) => (
                          <li key={j} className="flex items-start gap-2 sm:gap-2.5 font-body text-[11px] sm:text-xs text-zinc-600">
                            <CheckCircle2 className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0 mt-0.5 text-brand-orange" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* ── Testimonials ── */}
          <section className="py-14 sm:py-20 md:py-28 bg-brand-light-gray border-y border-gray-100">
            <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-10 lg:px-12">
              <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
                <span className="font-display text-[10px] sm:text-xs font-extrabold tracking-wider text-brand-orange uppercase">
                  Client Testimonials
                </span>
                <h2 className="mt-3 sm:mt-4 font-display text-2xl sm:text-3xl md:text-4xl font-black text-brand-dark">
                  Trusted by Industry Leaders
                </h2>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {testimonials.map((t, i) => (
                  <div
                    key={i}
                    className="flex flex-col rounded-2xl sm:rounded-3xl bg-white border border-gray-100 p-6 sm:p-8 shadow-sm"
                  >
                    <div className="flex gap-1 mb-3 sm:mb-4">
                      {Array.from({ length: t.rating }).map((_, s) => (
                        <Star key={s} className="h-3.5 w-3.5 sm:h-4 sm:w-4 fill-brand-orange text-brand-orange" />
                      ))}
                    </div>
                    <p className="font-body text-xs sm:text-sm leading-relaxed text-zinc-600 flex-1">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                    <div className="mt-5 sm:mt-6 border-t border-gray-100 pt-4 sm:pt-5">
                      <p className="font-display text-sm font-bold text-brand-dark">{t.name}</p>
                      <p className="font-body text-[11px] sm:text-xs text-zinc-400">{t.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── Process Section ── */}
          <section className="py-14 sm:py-20 md:py-28 bg-white">
            <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-10 lg:px-12">
              <div className="grid grid-cols-1 gap-10 sm:gap-14 lg:grid-cols-2 lg:gap-20 lg:items-center">
                {/* Left: Text */}
                <div>
                  <span className="font-display text-[10px] sm:text-xs font-extrabold tracking-wider text-brand-orange uppercase">
                    Our Process
                  </span>
                  <h2 className="mt-3 sm:mt-4 font-display text-2xl sm:text-3xl md:text-4xl font-black text-brand-dark">
                    From Inquiry to Delivery — Seamless.
                  </h2>
                  <p className="mt-3 sm:mt-4 font-body text-sm sm:text-base text-zinc-500 leading-relaxed">
                    We've designed a straightforward process to get you from initial inquiry to receiving high-quality adhesives at your facility with zero friction.
                  </p>
                </div>

                {/* Right: Steps */}
                <div>
                  {steps.map((step, i) => (
                    <div key={i} className="flex gap-4 sm:gap-6">
                      <div className="flex flex-col items-center">
                        <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full bg-brand-orange text-white font-display font-black text-xs sm:text-sm">
                          {step.step}
                        </div>
                        {i < steps.length - 1 && (
                          <div className="mt-1 h-full min-h-[40px] sm:min-h-[48px] w-0.5 bg-orange-100" />
                        )}
                      </div>
                      <div className="pb-6 sm:pb-8">
                        <h4 className="font-display text-sm sm:text-base font-bold text-brand-dark">{step.title}</h4>
                        <p className="mt-1 font-body text-xs sm:text-sm text-zinc-500 leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  ))}
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
