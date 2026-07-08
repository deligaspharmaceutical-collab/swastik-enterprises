import Image from "next/image";
import { Hammer, Archive, Printer, Sparkles, Award } from "lucide-react";

export default function Industries() {
  const industries = [
    {
      title: "Woodworking",
      desc: "Strong adhesives for long-lasting wood bonding.",
      img: "/images/ind_woodworking.svg",
      icon: Hammer,
    },
    {
      title: "Packaging",
      desc: "Reliable bonding solutions for all types of packaging.",
      img: "/images/ind_packaging.svg",
      icon: Archive,
    },
    {
      title: "Printing & Paper",
      desc: "High-performance coatings and adhesives for print.",
      img: "/images/ind_printing.svg",
      icon: Printer,
    },
    {
      title: "Lamination",
      desc: "Specialized adhesives for smooth & durable lamination.",
      img: "/images/ind_lamination.svg",
      icon: Sparkles,
    },
    {
      title: "Footwear",
      desc: "Advanced bonding solutions for the footwear industry.",
      img: "/images/ind_footwear.svg",
      icon: Award,
    },
  ];

  return (
    <section id="industries" className="w-full bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-12 flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-xl">
            <span className="font-display text-xs font-extrabold tracking-wider text-brand-orange uppercase">
              INDUSTRIES WE SERVE
            </span>
            <h2 className="mt-2 font-display text-3xl font-black tracking-tight text-brand-dark sm:text-4xl">
              Solutions for <span className="text-brand-orange">Every Industry</span>
            </h2>
          </div>
          <p className="max-w-md font-body text-sm leading-relaxed text-gray-500">
            Our adhesive solutions are trusted across a wide range of industries for their consistency, performance and reliability.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {industries.map((ind, idx) => {
            const Icon = ind.icon;
            return (
              <div
                key={idx}
                className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white transition-all duration-300 hover:-translate-y-2 hover:border-brand-orange hover:shadow-xl hover:shadow-brand-orange/5"
              >
                {/* Image Container with Badge */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-50">
                  <Image
                    src={ind.img}
                    alt={ind.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Bottom-left Icon Badge */}
                  <div className="absolute bottom-3 left-3 flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-md transition-colors duration-300 group-hover:bg-brand-orange group-hover:text-white">
                    <Icon className="h-4.5 w-4.5 text-brand-orange transition-colors duration-300 group-hover:text-white" />
                  </div>
                </div>

                {/* Text Content */}
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-display text-base font-extrabold text-brand-dark transition-colors duration-300 group-hover:text-brand-orange">
                    {ind.title}
                  </h3>
                  <p className="mt-2 font-body text-xs leading-relaxed text-gray-400">
                    {ind.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
