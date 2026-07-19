"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, X, ChevronDown } from "lucide-react";

interface HeaderProps {
  /** Set to true when the page hero behind the header is dark (e.g. About, Products, Contact).
   *  This makes nav text white in the transparent/unscrolled state so it stays readable. */
  darkHero?: boolean;
}

export default function Header({ darkHero = false }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileProductsExpanded, setMobileProductsExpanded] = useState(false);
  const [visible, setVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const lastScrollY = useRef(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      setIsScrolled(currentScrollY > 20);

      // If mobile menu is open, don't hide the navbar
      if (mobileMenuOpen) return;

      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        // Scrolling down and past navbar threshold: hide
        setVisible(false);
      } else {
        // Scrolling up or near top: show
        setVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Run once initially to capture initial position
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "About Us", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Industries", href: "/industries" },
    { name: "Why Us", href: "/why-us" },
    { name: "Contact Us", href: "/contact" },
  ];

  const productSubmenu = [
    { name: "Wood Working Adhesive", href: "/products/woodworking-adhesive" },
    { name: "Lamination Adhesive", href: "/products/lamination-adhesive" },
    { name: "Printing Solution", href: "/products/printing-solution" },
    { name: "Packing Industry", href: "/products/packing-industry" },
    { name: "Biodegradable Food Grade Coatings", href: "/products/biodegradable-food-grade-coatings" },
    { name: "Textile Industry", href: "/products/textile-industry" },
    { name: "Other Speciality Chemicals", href: "/products/other-speciality-chemicals" },
  ];

  const isActive = (href: string) => {
    return pathname === href || (href !== "/" && pathname.startsWith(href));
  };

  // When transparent (unscrolled): dark pages → white text, light pages → dark text
  const transparentTextClass = darkHero ? "text-white" : "text-brand-dark";
  const transparentHoverClass = darkHero
    ? "hover:text-orange-300"
    : "hover:text-brand-orange";
  const transparentHamburgerClass = darkHero
    ? "text-white hover:bg-white/10"
    : "text-brand-dark hover:bg-white/20";

  // When scrolled: always use dark text (light peach background)
  const scrolledTextClass = "text-brand-dark";
  const scrolledHoverClass = "hover:text-brand-orange";
  const scrolledHamburgerClass = "text-brand-dark hover:bg-orange-50";

  const navTextClass = isScrolled || mobileMenuOpen ? scrolledTextClass : transparentTextClass;
  const navHoverClass = isScrolled || mobileMenuOpen ? scrolledHoverClass : transparentHoverClass;
  const hamburgerClass = isScrolled || mobileMenuOpen ? scrolledHamburgerClass : transparentHamburgerClass;

  return (
    <header 
      className={`fixed top-0 left-0 z-[60] w-full transition-all duration-300 ease-in-out ${
        visible ? "translate-y-0" : "-translate-y-full"
      } ${
        isScrolled || mobileMenuOpen
          ? "bg-gradient-to-r from-[#FFDCD0]/90 via-white/90 to-[#FFF0EA]/90 backdrop-blur-md shadow-sm border-b border-orange-100/20 py-2" 
          : darkHero
            ? "bg-black/20 backdrop-blur-sm py-4"
            : "bg-transparent py-4"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 md:px-12">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="relative h-14 w-40 sm:h-16 sm:w-48 md:h-20 md:w-64">
            <Image
              src="/images/logo-final.png"
              alt="Swastik Enterprises Logo"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            if (link.name === "Products") {
              return (
                <div
                  key={link.name}
                  className="group relative py-4"
                >
                  <Link
                    href={link.href}
                    className={`flex items-center gap-1 font-display text-sm font-semibold transition-colors duration-200 ${navTextClass} ${navHoverClass}`}
                  >
                    {link.name}
                    <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
                    {active ? (
                      <span className="absolute bottom-2.5 left-0 h-0.5 w-full bg-brand-orange rounded-full" />
                    ) : (
                      <span className="absolute bottom-2.5 left-0 h-0.5 w-0 bg-brand-orange rounded-full transition-all duration-300 group-hover:w-full" />
                    )}
                  </Link>
                  
                  {/* Dropdown Menu */}
                  <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-64 pointer-events-none opacity-0 translate-y-2 transition-all duration-350 ease-out group-hover:pointer-events-auto group-hover:opacity-100 group-hover:translate-y-0 z-50">
                    <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-orange-100/30 py-3 px-2 flex flex-col gap-1">
                      {productSubmenu.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          className="block rounded-lg px-4 py-2.5 font-display text-xs font-semibold text-brand-dark transition-all duration-200 hover:bg-orange-50 hover:text-brand-orange"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`group relative font-display text-sm font-semibold transition-colors duration-200 ${navTextClass} ${navHoverClass}`}
              >
                {link.name}
                {active ? (
                  <span className="absolute -bottom-1.5 left-0 h-0.5 w-full bg-brand-orange rounded-full" />
                ) : (
                  <span className="absolute -bottom-1.5 left-0 h-0.5 w-0 bg-brand-orange rounded-full transition-all duration-300 group-hover:w-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="flex items-center gap-2 rounded-full bg-brand-orange px-6 py-3 font-sans text-sm font-bold text-white transition-all duration-300 hover:bg-brand-orange-hover hover:shadow-lg hover:shadow-brand-orange/25"
          >
            Get in Touch
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`flex items-center justify-center rounded-lg p-2 transition-colors lg:hidden ${hamburgerClass}`}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="absolute top-full inset-x-0 z-[60] bg-white px-6 py-8 shadow-2xl animate-fade-in-up lg:hidden overflow-y-auto max-h-[calc(100vh-64px)]">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => {
              if (link.name === "Products") {
                return (
                  <div key={link.name} className="border-b border-gray-100 py-4">
                    <button
                      onClick={() => setMobileProductsExpanded(!mobileProductsExpanded)}
                      className="flex w-full items-center justify-between font-display text-lg font-bold text-brand-dark transition-colors hover:text-brand-orange"
                    >
                      <span>{link.name}</span>
                      <ChevronDown className={`h-5 w-5 transition-transform duration-350 ${mobileProductsExpanded ? "rotate-180 text-brand-orange" : "text-gray-400"}`} />
                    </button>
                    <div className={`mt-2 flex flex-col gap-1 overflow-hidden transition-all duration-300 ease-in-out ${mobileProductsExpanded ? "max-h-[400px] opacity-100 py-2" : "max-h-0 opacity-0"}`}>
                      {productSubmenu.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block rounded-lg px-4 py-2 font-display text-sm font-semibold text-zinc-600 hover:text-brand-orange hover:bg-orange-50/50"
                        >
                          {sub.name}
                        </Link>
                      ))}
                      <Link
                        href="/products"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block rounded-lg px-4 py-2 font-display text-sm font-extrabold text-brand-orange hover:bg-orange-50"
                      >
                        All Products &rarr;
                      </Link>
                    </div>
                  </div>
                );
              }
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center font-display text-lg font-bold text-brand-dark transition-colors hover:text-brand-orange border-b border-gray-100 py-4"
                >
                  {link.name}
                </Link>
              );
            })}
            <div className="mt-6">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-brand-orange py-4 font-sans font-bold text-white transition-all hover:bg-brand-orange-hover"
              >
                Get in Touch
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
