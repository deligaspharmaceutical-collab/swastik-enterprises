"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, X } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Industries", href: "/#industries" },
    { name: "Why Us", href: "/#why-us" },
    { name: "Contact Us", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href.startsWith("/#")) {
      return pathname === "/";
    }
    return pathname === href;
  };

  return (
    <header 
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ease-in-out ${
        visible ? "translate-y-0" : "-translate-y-full"
      } ${
        isScrolled || mobileMenuOpen
          ? "bg-gradient-to-r from-[#FFDCD0]/90 via-white/90 to-[#FFF0EA]/90 backdrop-blur-md shadow-sm border-b border-orange-100/20 py-2" 
          : "bg-transparent py-4"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 md:px-12">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="relative h-20 w-52 md:w-72" >
            <Image
              src="/images/logo-final.png"
              alt="Swastik Enterprises Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.name}
                href={link.href}
                className="group relative font-display text-sm font-semibold text-brand-dark transition-colors duration-200 hover:text-brand-orange"
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
          className="rounded-lg p-2 text-brand-dark hover:bg-gray-50 lg:hidden"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-x-0 top-[81px] bottom-0 z-40 bg-white px-6 py-8 shadow-inner animate-fade-in-up lg:hidden">
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-display text-lg font-bold text-brand-dark transition-colors hover:text-brand-orange border-b border-gray-50 pb-3"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 rounded-full bg-brand-orange py-4 font-sans font-bold text-white transition-all hover:bg-brand-orange-hover"
            >
              Get in Touch
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
