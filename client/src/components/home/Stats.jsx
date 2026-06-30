import { Building2, Users, ShieldCheck, Star } from "lucide-react";

const stats = [
  {
    id: 1,
    icon: <Building2 size={34} />,
    number: "12,000+",
    title: "Verified Properties",
  },
  {
    id: 2,
    icon: <Users size={34} />,
    number: "35,000+",
    title: "Registered Renters",
  },
  {
    id: 3,
    icon: <ShieldCheck size={34} />,
    number: "98%",
    title: "Verified Reviews",
  },
  {
    id: 4,
    icon: <Star size={34} />,
    number: "4.9",
    title: "Average Rating",
  },
];

const Stats = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-8">

        <div className="grid md:grid-cols-4 gap-8">

          {stats.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-xl transition"
            >
              <div className="text-blue-600 flex justify-center mb-4">
                {item.icon}
              </div>

              <h2 className="text-3xl font-bold">
                {item.number}
              </h2>

              <p className="text-gray-500 mt-2">
                {item.title}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Stats;