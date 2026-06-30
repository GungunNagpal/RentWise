import { features } from "../../data/homeData";
import FeatureCard from "./FeatureCard";

const Features = () => {
  return (
    <section className="py-24 bg-slate-50">

      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto">

          <span className="text-blue-700 uppercase tracking-widest font-semibold">
            Powerful Features
          </span>

          <h2 className="mt-4 text-4xl font-bold text-slate-900">
            Everything You Need to Rent Smarter
          </h2>

          <p className="mt-6 text-lg text-slate-600 leading-8">
            RentWise combines verified reviews, intelligent pricing,
            AI-powered insights and locality analysis to help you
            make confident rental decisions.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-16">

          {features.map((feature) => {

            const Icon = feature.icon;

            return (
              <FeatureCard
                key={feature.id}
                icon={<Icon size={30} />}
                title={feature.title}
                description={feature.description}
              />
            );

          })}

        </div>

      </div>

    </section>
  );
};

export default Features;