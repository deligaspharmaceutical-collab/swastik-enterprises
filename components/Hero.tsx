"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, FileText, CheckCircle, Shield, Users } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative w-full overflow-hidden bg-white py-16 md:py-24">
      {/* Background soft geometric shape */}
      <div className="absolute right-0 top-0 -z-10 h-[600px] w-[600px] rounded-full bg-brand-light-gray opacity-70 blur-3xl" />
      
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-12 md:px-12">
        {/* Left Side Content */}
        <div className="flex flex-col gap-6 md:col-span-6 lg:col-span-7">
          {/* Subheading */}
          <div className="flex items-center gap-2">
            <span className="h-0.5 w-8 bg-brand-orange" />
            <span className="font-display text-xs font-extrabold tracking-wider text-brand-orange">
              LIQUID ADHESIVES & COATINGS
            </span>
          </div>

          {/* Main Title */}
          <h1 className="font-display text-4xl font-black leading-tight tracking-tight text-brand-dark sm:text-5xl lg:text-6xl">
            Stronger Bonds. <br />
            <span className="text-brand-orange">Better Tomorrow.</span>
          </h1>

          {/* Paragraph */}
          <p className="max-w-xl font-body text-base leading-relaxed text-gray-500 md:text-lg">
            High-performance adhesive solutions engineered for strength, durability and industrial excellence.
          </p>

          {/* Call to Actions */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="#products"
              className="flex items-center gap-2 rounded-full bg-brand-orange px-8 py-4 font-sans text-sm font-bold text-white transition-all duration-300 hover:bg-brand-orange-hover hover:shadow-lg hover:shadow-brand-orange/25"
            >
              Explore Products
              <ArrowRight className="h-4 w-4" />
            </Link>
            
            <Link
              href="#contact-us"
              className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-8 py-4 font-sans text-sm font-bold text-brand-dark transition-all duration-300 hover:border-brand-orange hover:text-brand-orange hover:shadow-md"
            >
              Request a Sample
              <FileText className="h-4 w-4 text-brand-gray group-hover:text-brand-orange" />
            </Link>
          </div>

          {/* Trust badges */}
          <div className="grid grid-cols-1 gap-6 border-t border-gray-100 pt-8 sm:grid-cols-3">
            {/* Feature 1 */}
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-50 text-brand-orange">
                <Shield className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-display text-sm font-bold text-brand-dark">High Performance</h4>
                <p className="font-body text-xs text-gray-400">Engineered for maximum strength</p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-50 text-brand-orange">
                <CheckCircle className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-display text-sm font-bold text-brand-dark">Eco Conscious</h4>
                <p className="font-body text-xs text-gray-400">Environment-friendly & sustainable</p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-50 text-brand-orange">
                <Users className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-display text-sm font-bold text-brand-dark">Trusted by Industry</h4>
                <p className="font-body text-xs text-gray-400">Serving 1000+ satisfied clients</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side Visual */}
        <div className="flex justify-center md:col-span-6 lg:col-span-5">
          <div className="relative w-full max-w-lg aspect-square animate-float">
            <Image
              src="/images/hero_containers.svg"
              alt="Swastik Enterprises Adhesive Containers: IBC tote, black steel drum, white bucket, jerrycan"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
