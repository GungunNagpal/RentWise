import {
  Building2,
  Users,
  ShieldCheck,
  Star,
} from "lucide-react";

import StatCard from "./StatCard";

const stats = [
  {
    id: 1,
    icon: <Building2 size={30} />,
    number: "12,000+",
    title: "Verified Properties",
    subtitle: "Carefully verified rental listings across multiple cities.",
  },
  {
    id: 2,
    icon: <Users size={30} />,
    number: "35,000+",
    title: "Registered Renters",
    subtitle: "A growing community making smarter rental decisions.",
  },
  {
    id: 3,
    icon: <ShieldCheck size={30} />,
    number: "98%",
    title: "Verified Reviews",
    subtitle: "Authentic tenant experiences you can actually trust.",
  },
  {
    id: 4,
    icon: <Star size={30} />,
    number: "4.9",
    title: "Average Rating",
    subtitle: "Highly rated by renters for transparency and reliability.",
  },
];

const Stats = () => {
  return (
    <section className="bg-white py-24">

      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto">

          <span className="text-blue-700 font-semibold uppercase tracking-widest">
            Why RentWise
          </span>

          <h2 className="mt-4 text-4xl font-bold text-slate-900">
            Trusted by Thousands of Renters
          </h2>

          <p className="mt-6 text-lg text-slate-600 leading-8">
            Helping people compare rental prices, verify listings,
            and make confident housing decisions through trusted
            community-driven insights.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mt-16">

          {stats.map((item) => (
            <StatCard
              key={item.id}
              icon={item.icon}
              number={item.number}
              title={item.title}
              subtitle={item.subtitle}
            />
          ))}

        </div>

      </div>

    </section>
  );
};

export default Stats;