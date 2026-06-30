import { ArrowRight } from "lucide-react";

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="group bg-white rounded-3xl border border-slate-100 p-8 shadow-lg transition-all duration-300 min-h-[320px] hover:-translate-y-2 hover:shadow-2xl">

      <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-700 group-hover:scale-110 transition-transform duration-300 group-hover:bg-blue-600 group-hover:text-white">
        {icon}
      </div>

      <h3 className="mt-6 text-2xl font-bold text-slate-900">
        {title}
      </h3>

      <p className="mt-4 text-slate-600 leading-7">
        {description}
      </p>

      <button className="mt-8 flex items-center gap-2 text-blue-700 font-semibold group-hover:gap-3 transition-all duration-300">
    Learn More
    <ArrowRight size={18}/>
</button>

    </div>
  );
};

export default FeatureCard;