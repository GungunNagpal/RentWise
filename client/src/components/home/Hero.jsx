import { Search } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
      <div className="max-w-7xl mx-auto px-8 py-36 text-center">

        <h1 className="text-6xl font-extrabold leading-tight">
          Find Your Next Rental
          <br />
          With Complete Confidence
        </h1>

        <p className="mt-8 text-xl text-blue-100 max-w-3xl mx-auto">
          Search verified rental properties, compare prices,
          explore real tenant experiences and make smarter
          renting decisions with RentWise.
        </p>

        <div className="mt-10 flex justify-center gap-5">

          <Link
            to="/properties"
            className="bg-white text-blue-700 px-8 py-4 rounded-xl font-semibold hover:scale-105 transition"
          >
            Browse Properties
          </Link>

          <Link
            to="/register"
            className="border border-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-700 transition"
          >
            Get Started
          </Link>

        </div>

      </div>
    </section>
  );
};

export default Hero;