import Link from "next/link";
import { Shield, FlaskConical, Users, Handshake, ArrowRight } from "lucide-react";

export default function WhyChooseUs() {
  const cards = [
    {
      title: "Premium Quality",
      desc: "Raw materials & strict quality control.",
      icon: Shield,
    },
    {
      title: "Advanced Technology",
      desc: "Modern manufacturing for consistent performance.",
      icon: FlaskConical,
    },
    {
      title: "Expert Team",
      desc: "Skilled professionals driving excellence.",
      icon: Users,
    },
    {
      title: "Customer First",
      desc: "Focused on long-term partnerships.",
      icon: Handshake,
    },
  ];

  return (
    <section id="why-us" className="relative w-full bg-brand-dark overflow-hidden py-20 text-white">
      {/* Background Graphic Grid/Overlay for Industrial Context */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-800/40 via-brand-darker to-brand-darker opacity-80" />
      <div 
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      />

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 md:grid-cols-12 md:px-12">
        {/* Left Content */}
        <div className="flex flex-col gap-6 md:col-span-6 lg:col-span-5">
          <span className="font-display text-xs font-extrabold tracking-wider text-brand-orange uppercase">
            WHY CHOOSE US
          </span>
          <h2 className="font-display text-3xl font-black leading-tight tracking-tight sm:text-4xl">
            Built on Quality. <br />
            Driven by <span className="text-brand-orange">Innovation.</span>
          </h2>
          <p className="font-body text-sm leading-relaxed text-zinc-400">
            At Swastik Enterprises, quality isn't just a promise, it's our process. We combine advanced technology, strict quality control and skilled expertise to deliver adhesives you can rely on.
          </p>
          <div className="pt-2">
            <Link
              href="#about-us"
              className="inline-flex items-center gap-2 rounded-full bg-brand-orange px-8 py-4 font-sans text-sm font-bold text-white transition-all duration-300 hover:bg-brand-orange-hover hover:shadow-lg hover:shadow-brand-orange/20"
            >
              Know More About Us
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Right Cards Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:col-span-6 lg:col-span-7">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-orange/40 hover:bg-white/[0.05]"
              >
                {/* Glowing border accent on hover */}
                <span className="absolute inset-x-0 bottom-0 h-0.5 w-0 bg-brand-orange transition-all duration-300 group-hover:w-full" />
                
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-orange/10 text-brand-orange transition-all duration-300 group-hover:bg-brand-orange group-hover:text-white">
                  <Icon className="h-6 w-6 stroke-[1.5]" />
                </div>
                
                <h3 className="font-display text-base font-extrabold text-white transition-colors duration-300 group-hover:text-brand-orange">
                  {card.title}
                </h3>
                
                <p className="mt-2 font-body text-xs leading-relaxed text-zinc-400">
                  {card.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
