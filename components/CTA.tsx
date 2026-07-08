import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="w-full bg-gradient-to-r from-brand-orange to-[#FF8F00] text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 md:px-12 md:py-16">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          {/* Text Area */}
          <div className="max-w-2xl">
            <h2 className="font-display text-2xl font-black tracking-tight sm:text-3xl md:text-4xl">
              Let's Build Stronger <br className="hidden sm:inline" />
              Connections Together.
            </h2>
            <p className="mt-3 font-body text-sm font-medium text-orange-50/90 sm:text-base">
              Looking for the right adhesive solution? Our team is here to help you.
            </p>
          </div>

          {/* Action Button */}
          <div className="w-full shrink-0 md:w-auto">
            <Link
              href="#contact-us"
              className="group flex w-full items-center justify-center gap-2 rounded-full bg-white px-8 py-4 font-sans text-sm font-bold text-brand-orange shadow-lg transition-all duration-300 hover:bg-orange-50 hover:text-brand-orange-hover hover:shadow-xl md:w-auto"
            >
              Get in Touch
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
