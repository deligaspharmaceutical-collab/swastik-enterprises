import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about-us" },
    { name: "Products", href: "#products" },
    { name: "Industries", href: "#industries" },
    { name: "Why Us", href: "#why-us" },
    { name: "Contact Us", href: "#contact-us" },
  ];

  const productsList = [
    { name: "Wood Adhesives", href: "#products-wood" },
    { name: "Lamination Adhesives", href: "#products-lamination" },
    { name: "Coatings", href: "#products-coatings" },
    { name: "Heat Seal Coatings", href: "#products-heat-seal" },
    { name: "Specialty Adhesives", href: "#products-specialty" },
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://linkedin.com",
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
      )
    },
    {
      name: "Instagram",
      href: "https://instagram.com",
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
      )
    },
    {
      name: "YouTube",
      href: "https://youtube.com",
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17z"/><polygon points="10 15 15 12 10 9"/></svg>
      )
    }
  ];

  return (
    <footer id="contact-us" className="w-full bg-brand-darker text-zinc-400 font-sans">
      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-12">
          {/* Brand Info Column */}
          <div className="flex flex-col gap-6 lg:col-span-4">
            <Link href="#home" className="inline-block">
              {/* White Logo variant using filter invert */}
              <div className="relative h-12 w-48 invert brightness-0">
                <Image
                  src="/images/logo.svg"
                  alt="Swastik Enterprises Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
            <p className="font-body text-sm leading-relaxed text-zinc-500 max-w-sm">
              Manufacturer of high-performance liquid adhesives & coatings. Delivering strength, quality & trust since 2013.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map((soc, idx) => {
                return (
                  <a
                    key={idx}
                    href={soc.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-zinc-400 transition-all duration-300 hover:bg-brand-orange hover:text-white"
                    aria-label={soc.name}
                  >
                    {soc.svg}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="flex flex-col gap-4 lg:col-span-2 lg:col-start-6">
            <h3 className="font-display text-sm font-bold text-white uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-3 text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="transition-colors duration-200 hover:text-brand-orange"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Products Column */}
          <div className="flex flex-col gap-4 lg:col-span-3">
            <h3 className="font-display text-sm font-bold text-white uppercase tracking-wider">
              Our Products
            </h3>
            <ul className="flex flex-col gap-3 text-sm">
              {productsList.map((prod) => (
                <li key={prod.name}>
                  <Link
                    href={prod.href}
                    className="transition-colors duration-200 hover:text-brand-orange"
                  >
                    {prod.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us Column */}
          <div className="flex flex-col gap-4 lg:col-span-3">
            <h3 className="font-display text-sm font-bold text-white uppercase tracking-wider">
              Contact Us
            </h3>
            <ul className="flex flex-col gap-4 text-sm">
              {/* Address */}
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 shrink-0 text-brand-orange mt-0.5" />
                <span className="leading-relaxed">
                  Tronica City, Loni,<br />
                  Ghaziabad – 201102, U.P., India
                </span>
              </li>
              
              {/* Phone */}
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-brand-orange" />
                <a href="tel:+918882024111" className="hover:text-brand-orange transition-colors">
                  +91 8882 024 111
                </a>
              </li>

              {/* Email */}
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0 text-brand-orange" />
                <a href="mailto:info@swastikenterprises.in" className="hover:text-brand-orange transition-colors break-all">
                  info@swastikenterprises.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="mt-16 border-t border-white/5 pt-8 text-center text-xs text-zinc-600">
          <p>© {new Date().getFullYear()} Swastik Enterprises. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
