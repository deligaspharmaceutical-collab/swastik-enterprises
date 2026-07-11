"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Megaphone, Globe, Monitor, Smartphone, Compass, Eye } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const badges = [
    {
      id: "experience",
      title: "11+",
      desc: "Years of Excellence",
      icon: Megaphone,
      position: "left-[2%] lg:left-[5%] xl:left-[8%] top-[12%]",
    },
    {
      id: "happy-clients",
      title: "1000+",
      desc: "Happy Clients",
      icon: Monitor,
      position: "left-[0%] lg:left-[2%] xl:left-[4%] top-[48%]",
    },
    {
      id: "products",
      title: "10+",
      desc: "Products",
      icon: Globe,
      position: "right-[2%] lg:right-[5%] xl:right-[8%] top-[14%]",
    },
    {
      id: "pan-india",
      title: "PAN India",
      desc: "Serving Across India",
      icon: Smartphone,
      position: "right-[0%] lg:right-[2%] xl:right-[4%] top-[52%]",
    }
  ];

  useGSAP(() => {
    // Only run on desktop (width >= 1024px)
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      // Use setTimeout to ensure both Hero and Products sections are fully mounted in the DOM
      const timer = setTimeout(() => {
        const floatBadges = gsap.utils.toArray<HTMLElement>(".floating-badge");
        const refreshListeners: Array<() => void> = [];

        floatBadges.forEach((badge) => {
          const badgeId = badge.getAttribute("data-badge-id");
          const targetSlot = document.getElementById(`badge-landing-${badgeId}`);
          const targetRealBadge = document.getElementById(`badge-landing-real-${badgeId}`);
          if (!targetSlot || !targetRealBadge) return;

          let deltaX = 0;
          let deltaY = 0;

          const updateCoordinates = () => {
            // Temporarily reset transform to get original positions
            gsap.set(badge, { x: 0, y: 0, scale: 1 });
            const sourceRect = badge.getBoundingClientRect();
            const targetRect = targetSlot.getBoundingClientRect();

            deltaX = targetRect.left - sourceRect.left;
            deltaY = targetRect.top - sourceRect.top;
          };

          // Initialize positions
          updateCoordinates();

          // Recalculate on refresh
          const onRefresh = () => {
            updateCoordinates();
          };
          ScrollTrigger.addEventListener("refresh", onRefresh);
          refreshListeners.push(onRefresh);

          // Timeline for the scroll-trigger
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: "#products-showcase",
              start: "top bottom", // Starts when products section enters bottom of screen
              end: "top 30%",       // Ends when products section is near the top of viewport
              scrub: 1,             // Smooth scrub
            }
          });

          tl.to(badge, {
            x: () => deltaX,
            y: () => deltaY,
            scale: 0.8,
            opacity: 0,
            ease: "none"
          }, 0)
            .to(targetRealBadge, {
              opacity: 1,
              ease: "none"
            }, 0.65); // Real badge fades in at the landing zone in the final 35% of the transition
        });

        // Save listeners globally to clean them up properly
        (window as any)._badgeRefreshListeners = refreshListeners;
      }, 100);

      return () => {
        clearTimeout(timer);
        const listeners = (window as any)._badgeRefreshListeners;
        if (listeners) {
          listeners.forEach((listener: any) => {
            ScrollTrigger.removeEventListener("refresh", listener);
          });
        }
      };
    });

    return () => {
      mm.revert();
    };
  }, []);

  return (
    <section id="home" className="relative w-full overflow-hidden bg-[radial-gradient(circle_at_30%_30%,#FFDCD0_0%,#FFF5F0_50%,#FFFFFF_100%)] pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-12 md:pb-24">
      {/* Background soft geometric shape */}
      <div className="absolute right-0 top-0 -z-10 h-[600px] w-[600px] rounded-full bg-brand-light-gray opacity-70 blur-3xl" />

      <div className="mx-auto flex max-w-7xl flex-col items-center px-4 sm:px-6 text-center md:px-12">
        {/* Main Visual Container */}
        <div className="relative z-0 w-full max-w-6xl my-2 sm:my-4 md:my-8 flex items-center justify-center min-h-[310px] sm:min-h-[380px] md:min-h-[350px] lg:min-h-[300px]">
          {/* Background Text "SW" on left */}
          <div className="absolute left-[1%] lg:left-[2%] top-[45%] -translate-y-1/2 -z-10 pointer-events-none select-none">
            <span className="font-montserrat font-semibold text-[24vw] md:text-[18vw] lg:text-[20vw] tracking-[-0.04em] text-transparent bg-clip-text bg-gradient-to-br from-[#FFA07A] via-[#FF5722] to-[#B71C1C] opacity-95 select-none leading-none uppercase">
              SW
            </span>
          </div>

          {/* Background Text "STIK" on right */}
          <div className="absolute right-[1%] lg:right-[2%] top-[45%] -translate-y-1/2 -z-10 pointer-events-none select-none">
            <span className="font-montserrat font-semibold text-[24vw] md:text-[18vw] lg:text-[20vw] tracking-[-0.04em] text-transparent bg-clip-text bg-gradient-to-br from-[#FFA07A] via-[#FF5722] to-[#B71C1C] opacity-95 select-none leading-none uppercase">
              STIK
            </span>
          </div>

          {/* Central Image: Can + Smoke (Transparent PNG) */}
          <div className="relative w-[300px] sm:w-[360px] md:w-[420px] lg:w-[480px] xl:w-[540px] aspect-[1306/1204] z-10 animate-float">
            <Image
              src="/images/swastik-product-image.png"
              alt="Swastik Enterprises Lamination Adhesive"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Floating Badges - Desktop Only */}
          {badges.map((badge) => {
            const Icon = badge.icon;
            return (
              <div
                key={badge.id}
                data-badge-id={badge.id}
                className={`absolute ${badge.position} floating-badge hidden lg:flex items-center gap-3 rounded-xl border border-gray-100 bg-white/95 backdrop-blur-sm p-3.5 shadow-md shadow-gray-100/50 hover:shadow-lg transition-[box-shadow,background-color,border-color,opacity] duration-300 z-20`}
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-orange-50 text-brand-orange">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="text-left">
                  <h4 className="font-display text-sm font-bold text-brand-dark leading-tight">{badge.title}</h4>
                  <p className="font-body text-xs text-gray-400 leading-tight mt-0.5">{badge.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Floating Badges - Mobile & Tablet Grid (Hidden on Desktop) */}
        <div className="mt-4 mb-6 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 w-full max-w-4xl lg:hidden px-1">
          {badges.map((badge) => {
            const Icon = badge.icon;
            return (
              <div key={badge.id} className="flex items-center gap-2.5 sm:gap-3 rounded-xl border border-gray-100 bg-white p-3 sm:p-3.5 shadow-sm">
                <div className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-lg bg-orange-50 text-brand-orange">
                  <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
                <div className="text-left">
                  <h4 className="font-display text-xs sm:text-sm font-bold text-brand-dark leading-tight">{badge.title}</h4>
                  <p className="font-body text-[10px] sm:text-xs text-gray-400 leading-tight mt-0.5">{badge.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Explore Our Products Button */}
        <div className="flex justify-center w-full px-1">
          <Link
            href="/products"
            className="group flex w-full sm:w-auto items-center justify-center gap-3 rounded-full bg-brand-orange px-8 py-3.5 sm:py-4 font-sans text-sm sm:text-base font-bold text-white transition-all duration-300 hover:bg-brand-orange-hover hover:shadow-lg hover:shadow-brand-orange/25"
          >
            Explore Our Products
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white transition-transform duration-300 group-hover:translate-x-1">
              <ArrowRight className="h-3.5 w-3.5 text-brand-orange" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}


