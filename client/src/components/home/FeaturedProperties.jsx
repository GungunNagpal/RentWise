import PropertyCard from "../property/PropertyCard";
import { featuredProperties } from "../../data/propertyData";

const FeaturedProperties = () => {
  return (
    <section className="py-24 bg-slate-50">

      <div className="max-w-7xl mx-auto px-8">

        <div className="flex justify-between items-center mb-12">

          <div>

            <h2 className="text-5xl font-bold">

              Featured Properties

            </h2>

            <p className="text-gray-500 mt-4">

              Handpicked verified properties with high trust scores.

            </p>

          </div>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {featuredProperties.map((property) => (

            <PropertyCard
              key={property.id}
              property={property}
            />

          ))}

        </div>

      </div>

    </section>
  );
};

export default FeaturedProperties;