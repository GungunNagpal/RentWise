const StatCard = ({ icon, number, title, subtitle }) => {
  return (
    <div className="group bg-white rounded-3xl p-8 shadow-lg border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

      <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-700 mx-auto group-hover:scale-110 transition">
        {icon}
      </div>

      <h3 className="mt-6 text-4xl font-bold text-slate-900">
        {number}
      </h3>

      <h4 className="mt-3 text-lg font-semibold text-slate-800">
        {title}
      </h4>

      <p className="mt-2 text-sm text-slate-500 leading-6">
        {subtitle}
      </p>

    </div>
  );
};

export default StatCard;