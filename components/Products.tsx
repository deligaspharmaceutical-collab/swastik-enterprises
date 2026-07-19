import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Products() {
  const productList = [
    {
      title: "Wood Adhesives",
      desc: "Strong bonding for all wood applications.",
      img: "/images/wood-adhesive.png",
      href: "/products#wood-adhesives",
    },
    {
      title: "Lamination Adhesives",
      desc: "High performance for lamination.",
      img: "/images/lamination-adhesive.png",
      href: "/products#lamination-adhesives",
    },
    {
      title: "Specialty Adhesives",
      desc: "Customized solutions for specific applications.",
      img: "/images/heat-seal-coatings.png",
      href: "/products#specialty-adhesives",
    },
  ];

  return (
    <section id="products-catalog" className="w-full bg-brand-light-gray py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-12 flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-xl">
            <span className="font-display text-xs font-extrabold tracking-wider text-brand-orange uppercase">
              OUR PRODUCTS
            </span>
            <h2 className="mt-2 font-display text-3xl font-black tracking-tight text-brand-dark sm:text-4xl">
              Wide Range. <span className="text-brand-orange">High Performance.</span>
            </h2>
          </div>
          <p className="max-w-md font-body text-sm leading-relaxed text-gray-500">
            From adhesives to specialty coatings, we offer a comprehensive range of products designed to deliver exceptional performance in every application.
          </p>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {productList.map((prod, idx) => (
            <div
              key={idx}
              className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-gray-100 bg-white p-5 transition-all duration-300 hover:-translate-y-2 hover:border-brand-orange hover:shadow-xl hover:shadow-brand-orange/5"
            >
              {/* Product Visual Container */}
              <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-gray-50 mb-4 flex items-center justify-center p-4">
                <Image
                  src={prod.img}
                  alt={prod.title}
                  fill
                  className="object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Title & Description & Arrow Button Container */}
              <div className="flex flex-1 flex-col justify-between">
                <div>
                  <h3 className="font-display text-base font-extrabold text-brand-dark transition-colors duration-300 group-hover:text-brand-orange">
                    {prod.title}
                  </h3>
                  <p className="mt-2 font-body text-xs leading-relaxed text-gray-400">
                    {prod.desc}
                  </p>
                </div>

                {/* Bottom Right Interactive Arrow */}
                <div className="mt-4 flex justify-end">
                  <Link
                    href={prod.href}
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-light-gray text-brand-dark transition-all duration-300 group-hover:bg-brand-orange group-hover:text-white"
                    aria-label={`View details of ${prod.title}`}
                  >
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
