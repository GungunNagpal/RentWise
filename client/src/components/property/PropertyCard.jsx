import {
  Heart,
  MapPin,
  Star,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const PropertyCard = ({ property }) => {
  return (
    <div className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">

      <div className="relative overflow-hidden">

        <img
          src={property.image}
          alt={property.title}
          className="h-64 w-full object-cover group-hover:scale-105 transition duration-500"
        />

        <button className="absolute top-4 right-4 bg-white/90 backdrop-blur p-2 rounded-full shadow hover:bg-red-50 transition">
          <Heart size={18} />
        </button>

        <span className="absolute left-4 bottom-4 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
          {property.fairness}
        </span>

      </div>

      <div className="p-6">

        <h3 className="text-2xl font-bold text-slate-900">
          {property.title}
        </h3>

        <div className="flex items-center gap-2 text-slate-500 mt-2">
          <MapPin size={16} />
          {property.city}
        </div>

        <div className="flex justify-between items-center mt-5">

          <span className="text-2xl font-bold text-blue-700">
            {property.rent}
          </span>

          <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
            Trust {property.trustScore}
          </span>

        </div>

        <div className="flex items-center gap-2 mt-5">

          <Star
            size={18}
            fill="#FACC15"
            color="#FACC15"
          />

          <span className="font-semibold">
            {property.rating}
          </span>

        </div>

        <div className="mt-6 rounded-2xl bg-blue-50 p-4">

          <div className="flex items-center gap-2 text-blue-700 font-semibold">

            <Sparkles size={18} />

            AI Insight

          </div>

          <p className="mt-2 text-sm text-slate-600 leading-6">
            {property.aiInsight}
          </p>

        </div>

        <button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-3 flex justify-center items-center gap-2 transition">

          View Details

          <ArrowRight size={18} />

        </button>

      </div>

    </div>
  );
};

export default PropertyCard;