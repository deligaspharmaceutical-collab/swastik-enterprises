import { Calendar, Users, Award, MapPin } from "lucide-react";

export default function StatsBar() {
  const stats = [
    {
      value: "11+",
      label: "Years of Excellence",
      icon: Award,
    },
    {
      value: "1000+",
      label: "Happy Clients",
      icon: Users,
    },
    {
      value: "50+",
      label: "Products",
      icon: Calendar, // Represents product catalogs/years
    },
    {
      value: "PAN India",
      label: "Serving Across India",
      icon: MapPin,
    },
  ];

  return (
    <section className="w-full bg-brand-orange text-white">
      <div className="mx-auto max-w-7xl px-6 py-8 md:px-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-4">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-4 border-r border-white/20 last:border-0 max-[480px]:col-span-2 max-[480px]:border-r-0 max-[480px]:border-b max-[480px]:pb-4 max-[480px]:last:border-b-0 max-[480px]:last:pb-0 md:justify-center"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                  <Icon className="h-6 w-6 stroke-[2]" />
                </div>
                <div>
                  <div className="font-display text-2xl font-black md:text-3xl">
                    {stat.value}
                  </div>
                  <div className="font-sans text-xs font-medium text-orange-100 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
