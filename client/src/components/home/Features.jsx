import { features } from "../../data/homeData";

const Features = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center mb-16">

          <h2 className="text-5xl font-bold">
            Why Choose RentWise?
          </h2>

          <p className="text-gray-500 mt-5 text-lg max-w-3xl mx-auto">
            RentWise combines verified rental information,
            intelligent insights and transparent reviews
            to help renters make informed decisions.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map((feature) => {

            const Icon = feature.icon;

            return (
              <div
                key={feature.id}
                className="bg-slate-50 rounded-2xl p-8 shadow-sm hover:shadow-xl transition duration-300"
              >

                <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center">

                  <Icon
                    size={30}
                    className="text-blue-600"
                  />

                </div>

                <h3 className="mt-6 text-2xl font-semibold">
                  {feature.title}
                </h3>

                <p className="mt-3 text-gray-600 leading-7">
                  {feature.description}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default Features;