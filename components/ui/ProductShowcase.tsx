"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useLenis } from "@/components/ui/SmoothScroll";

gsap.registerPlugin(ScrollTrigger);

// Define the product details structure
interface Product {
  name: string;
  category: string;
  desc: string;
  image: string;
  color: string;
  formulation: string;
  strength: string;
  curingTime: string;
}

const products: Product[] = [
  {
    name: "Wood Adhesives",
    category: "Bonding & Joints",
    desc: "High-performance water-based emulsion engineered for maximum strength and fast curing. Perfect for premium wood assembly and structural carpentry.",
    image: "/images/prod_wood.svg",
    color: "#FF5722", // Swastik Orange
    formulation: "Water-Based Emulsion",
    strength: "High Tack",
    curingTime: "2-4 Hours",
  },
  {
    name: "Lamination Adhesives",
    category: "Flexible Laminates",
    desc: "Specialized synthetic resins designed for smooth, bubble-free lamination on diverse substrates. Delivers durable moisture and temperature resistance.",
    image: "/images/prod_lamination.svg",
    color: "#D84315", // Deep Rust Orange
    formulation: "Synthetic Resin",
    strength: "Extra Strong",
    curingTime: "Immediate",
  },
  {
    name: "Coatings",
    category: "Protective Finishes",
    desc: "Industrial-grade liquid coatings providing a resilient barrier against abrasions, chemical attacks, and environmental wear. Ideal for heavy-duty applications.",
    image: "/images/prod_coatings.svg",
    color: "#1A1A1A", // Charcoal Black
    formulation: "Liquid Polymer",
    strength: "Protective Shield",
    curingTime: "12-24 Hours",
  },
  {
    name: "Heat Seal Coatings",
    category: "Thermal Packaging",
    desc: "Advanced hot-melt thermal coatings engineered for airtight seals under heat and pressure. Trusted widely in flexible packaging and lid seals.",
    image: "/images/prod_heat_seal.svg",
    color: "#777777", // Steel Gray
    formulation: "Thermal Polymer",
    strength: "Heat Resistant",
    curingTime: "Instant Seal",
  },
  {
    name: "Specialty Adhesives",
    category: "Custom Formulations",
    desc: "Bespoke adhesive formulations engineered for unique industrial requirements and structural engineering projects. Exceptional shear resistance.",
    image: "/images/prod_specialty.svg",
    color: "#E64A19", // Vibrant Rust
    formulation: "Tailored Resin Blend",
    strength: "High Shear",
    curingTime: "Customized",
  },
];

export default function ProductShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const lenis = useLenis();

  // Scroll smoothly to a specific product slide
  const handleDotClick = (index: number) => {
    if (lenis && containerRef.current) {
      const start = containerRef.current.offsetTop;
      const totalScroll = containerRef.current.offsetHeight - window.innerHeight;
      const targetScroll = start + (index / (products.length - 1)) * totalScroll;
      lenis.scrollTo(targetScroll, { duration: 1.5 });
    }
  };

  // Scroll smoothly to the catalogue section below the showcase
  const handleSeeAllClick = () => {
    if (lenis) {
      lenis.scrollTo("#products-catalog", { duration: 1.5 });
    }
  };

  useGSAP(
    () => {
      if (!containerRef.current || !bgRef.current) return;

      const bottles = gsap.utils.toArray<HTMLElement>(".product-bottle");
      const textBlocks = gsap.utils.toArray<HTMLElement>(".product-text-block");

      // Set initial states
      gsap.set(bottles, { scale: 0.25, opacity: 0, rotation: -20 });
      gsap.set(textBlocks, { opacity: 0, y: 40 });

      // First item active
      gsap.set(bottles[0], { scale: 1, opacity: 1, rotation: 0 });
      gsap.set(textBlocks[0], { opacity: 1, y: 0 });

      // Create main ScrollTriggered timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
          onUpdate: (self) => {
            const rawProgress = self.progress;
            const targetIndex = Math.round(rawProgress * (products.length - 1));
            setActiveIndex(targetIndex);
          },
        },
      });

      // Orchestrate slide transitions
      products.forEach((_, i) => {
        if (i === products.length - 1) return;

        const currentBottle = bottles[i];
        const nextBottle = bottles[i + 1];
        const currentText = textBlocks[i];
        const nextText = textBlocks[i + 1];
        const nextColor = products[i + 1].color;

        // Timeline marker
        const label = `slide-${i}`;

        // 1. Fade/Shrink current slide out
        tl.to(
          currentBottle,
          {
            scale: 0.25,
            opacity: 0,
            rotation: 15,
            duration: 0.4,
            ease: "power2.inOut",
          },
          label
        )
          .to(
            currentText,
            {
              opacity: 0,
              y: -40,
              duration: 0.4,
              ease: "power2.inOut",
            },
            label
          )

          // 2. Morph background color
          .to(
            bgRef.current,
            {
              backgroundColor: nextColor,
              duration: 0.5,
              ease: "power1.inOut",
            },
            `${label}+=0.2`
          )

          // 3. Zoom/Fade next slide in (Small to Big)
          .to(
            nextBottle,
            {
              scale: 1,
              opacity: 1,
              rotation: 0,
              duration: 0.5,
              ease: "power2.out",
            },
            `${label}+=0.4`
          )
          .to(
            nextText,
            {
              opacity: 1,
              y: 0,
              duration: 0.5,
              ease: "power2.out",
            },
            `${label}+=0.4`
          );
      });

      // Continuous floating effect on active bottle container
      gsap.to(".float-wrapper", {
        y: -12,
        duration: 2.2,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });
    },
    { scope: containerRef }
  );

  const activeProduct = products[activeIndex] || products[0];

  return (
    <div
      ref={containerRef}
      id="products-showcase"
      className="relative h-[500vh] w-full bg-brand-darker z-10"
    >
      {/* Pinned Screen Viewport */}
      <div className="sticky top-0 left-0 h-screen w-full flex flex-col justify-between p-8 sm:p-12 overflow-hidden text-white">

        {/* Animated Background layer */}
        <div
          ref={bgRef}
          className="absolute inset-0 bg-[#FF5722] z-0 transition-colors duration-500"
        />

        {/* Top Header Placeholder (To align layout with fixed navbar) */}
        <div className="h-24 sm:h-32 z-10 select-none pointer-events-none" />

        {/* Interactive Layout Content Grid */}
        <div className="relative grid grid-cols-1 md:grid-cols-12 gap-8 items-center justify-between my-auto w-full z-10 max-w-7xl mx-auto px-4">

          {/* Left Column: Product Details Stack */}
          <div className="md:col-span-3 flex items-center min-h-[300px] relative">
            {products.map((product, index) => (
              <div
                key={index}
                className="product-text-block absolute top-0 left-0 w-full flex flex-col pointer-events-none select-none"
                style={{
                  pointerEvents: activeIndex === index ? "auto" : "none",
                  userSelect: activeIndex === index ? "auto" : "none",
                }}
              >
                <span className="font-display font-semibold tracking-widest text-xs sm:text-sm text-white/80 mb-2 uppercase">
                  {product.category}
                </span>
                <h2 className="text-3xl sm:text-5xl font-black leading-tight tracking-tight uppercase mb-4 text-white font-display">
                  {product.name}
                </h2>
                <p className="font-body text-xs sm:text-sm text-white/85 leading-relaxed max-w-sm mb-6">
                  {product.desc}
                </p>
                <div className="flex gap-4">
                  <div className="border border-white/20 bg-white/10 backdrop-blur-md py-2 px-4 rounded-lg flex flex-col">
                    <span className="text-[10px] uppercase text-white/70">Strength</span>
                    <span className="font-bold text-sm text-white font-display">{product.strength}</span>
                  </div>
                  <div className="border border-white/20 bg-white/10 backdrop-blur-md py-2 px-4 rounded-lg flex flex-col">
                    <span className="text-[10px] uppercase text-white/70">Curing Time</span>
                    <span className="font-bold text-sm text-white font-display">{product.curingTime}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Center Column: Product Bottle Stack */}
          <div className="md:col-span-6 flex flex-col items-center justify-center relative min-h-[320px] sm:min-h-[500px]">
            <div className="float-wrapper relative w-full h-72 sm:h-[420px] flex justify-center">
              {/* Product Shadow under the container */}
              <div className="absolute bottom-[-15px] sm:bottom-[-20px] w-48 sm:w-64 h-6 bg-black/25 blur-md rounded-[50%] z-0 scale-y-[0.3]" />

              {products.map((product, index) => (
                <div
                  key={index}
                  className="product-bottle absolute top-0 left-1/2 -translate-x-1/2 w-48 h-72 sm:w-72 sm:h-[420px] z-10"
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 640px) 192px, 288px"
                    priority
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Custom Selector Interface */}
          <div className="md:col-span-3 flex flex-col items-center md:items-end gap-8 text-center md:text-right">

            {/* Color/Slide Selectors */}
            <div className="flex flex-col items-center md:items-end gap-3 pointer-events-auto">
              <span className="font-display text-xs tracking-wider uppercase text-zinc-200">
                Choose Product
              </span>
              <div className="flex md:flex-col gap-3.5 mt-1">
                {products.map((product, index) => (
                  <button
                    key={index}
                    onClick={() => handleDotClick(index)}
                    className={`w-6 h-6 rounded-full border-2 transition-all duration-300 cursor-pointer ${activeIndex === index
                        ? "border-white ring-2 ring-white/60 scale-125 shadow-lg"
                        : "border-transparent opacity-60 hover:opacity-100 hover:scale-105"
                      }`}
                    style={{ backgroundColor: product.color }}
                    title={product.name}
                    aria-label={`Select ${product.name}`}
                  />
                ))}
              </div>
            </div>

            {/* Formulation Selector */}
            <div className="flex flex-col items-center md:items-end gap-3 pointer-events-auto">
              <span className="font-display text-xs tracking-wider uppercase text-zinc-200">
                Formulation
              </span>
              <div className="flex gap-2.5 mt-1">
                <button className="border border-white/20 bg-white/10 font-sans font-semibold text-xs tracking-wide py-2 px-4 rounded-full">
                  {activeProduct.formulation}
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Footer Panel */}
        <div className="flex justify-between items-center w-full max-w-7xl mx-auto z-10 border-t border-white/10 pt-6 mt-auto">
          {/* Brand Tagline */}
          <div className="flex gap-5 text-zinc-300 text-xs sm:text-sm font-sans tracking-wide">
            EST. 2013
          </div>

          {/* choose label */}
          <div className="hidden sm:block font-display text-[10px] tracking-[0.3em] uppercase text-zinc-200/60">
            SWASTIK HIGH-PERFORMANCE INDUSTRIAL ADHESIVES
          </div>

          {/* CTA */}
          <button
            onClick={handleSeeAllClick}
            className="bg-white/10 hover:bg-white text-white hover:text-zinc-950 font-display text-xs font-bold tracking-wider py-2 px-6 rounded-full transition-all duration-300 border border-white/25 hover:shadow-lg cursor-pointer"
          >
            See All Products
          </button>
        </div>

      </div>
    </div>
  );
}
