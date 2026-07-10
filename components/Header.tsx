"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about-us" },
    { name: "Products", href: "#products" },
    { name: "Industries", href: "#industries" },
    { name: "Why Us", href: "#why-us" },
    { name: "Contact Us", href: "#contact-us" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 md:px-12">
        {/* Logo */}
        <Link href="#home" className="flex items-center">
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
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="group relative font-sans text-sm font-semibold text-brand-dark transition-colors duration-200 hover:text-brand-orange"
            >
              {link.name}
              {link.name === "Home" && (
                <span className="absolute -bottom-1.5 left-0 h-0.5 w-full bg-brand-orange rounded-full" />
              )}
              {link.name !== "Home" && (
                <span className="absolute -bottom-1.5 left-0 h-0.5 w-0 bg-brand-orange rounded-full transition-all duration-300 group-hover:w-full" />
              )}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <Link
            href="#contact-us"
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
                className="font-sans text-lg font-bold text-brand-dark transition-colors hover:text-brand-orange border-b border-gray-50 pb-3"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="#contact-us"
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
