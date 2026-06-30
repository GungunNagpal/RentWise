import { Heart, MapPin, Star } from "lucide-react";

const PropertyCard = ({ property }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300">

      <div className="relative">

        <img
          src={property.image}
          alt={property.title}
          className="h-60 w-full object-cover"
        />

        <button className="absolute top-4 right-4 bg-white p-2 rounded-full shadow">
          <Heart size={18} />
        </button>

      </div>

      <div className="p-6">

        <h2 className="text-2xl font-semibold">
          {property.title}
        </h2>

        <p className="flex items-center gap-2 text-gray-500 mt-2">
          <MapPin size={16} />
          {property.city}
        </p>

        <h3 className="text-blue-600 text-2xl font-bold mt-4">
          {property.rent}
        </h3>

        <div className="flex justify-between items-center mt-6">

          <div className="flex items-center gap-2">

            <Star
              fill="gold"
              color="gold"
              size={18}
            />

            {property.rating}

          </div>

          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">

            Trust {property.trustScore}

          </span>

        </div>

        <button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl">

          View Details

        </button>

      </div>

    </div>
  );
};

export default PropertyCard;