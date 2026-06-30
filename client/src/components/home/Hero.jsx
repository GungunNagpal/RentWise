import {
  Search,
  ShieldCheck,
  History,
  Sparkles
} from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE */}

          <div>

            <span className="inline-flex items-center bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">
              Rental Intelligence Platform
            </span>

            <h1 className="mt-8 text-5xl lg:text-6xl font-extrabold leading-tight text-slate-900">

              Know the Truth

              <br />

              Before You Rent.

            </h1>

            <p className="mt-10 text-lg text-slate-600 leading-8 max-w-xl">

              Compare actual rents, discover landlord history,
              read verified tenant reviews and make informed
              rental decisions with confidence.

            </p>

            {/* Search */}

            <div className="mt-12 bg-white rounded-2xl shadow-md flex items-center px-3 py-2.5">

  <Search
    className="text-slate-400 ml-2"
    size={22}
  />

  <input
    type="text"
    placeholder="Search by city or locality..."
    className="flex-1 ml-3 outline-none text-slate-700"
  />

  <button
    className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-2.5 rounded-xl transition"
  >
    Search
  </button>

</div>

            {/* Buttons */}

            <div className="mt-8 flex flex-wrap gap-4">

              <Link
                to="/properties"
                className="bg-blue-700 hover:bg-blue-800 transition text-white px-7 py-4 rounded-xl font-semibold"
              >
                Explore Properties
              </Link>

              <Link
                to="/"
                className="border border-slate-300 hover:border-blue-700 hover:text-blue-800 transition px-7 py-4 rounded-xl font-semibold"
              >
                Check Rent Fairness
              </Link>

            </div>

            <p className="mt-8 text-slate-500 font-medium">

  ⭐ 4.8/5 from 6,100+ verified tenant reviews

</p>

            {/* Trust Indicators */}

            <div className="mt-10 flex flex-wrap gap-6 text-sm">

  <div className="flex items-center gap-2 text-slate-600">

    <ShieldCheck
      size={18}
      className="text-green-600"
    />

    <span>Verified Reviews</span>

  </div>

  <div className="flex items-center gap-2 text-slate-600">

    <History
      size={18}
      className="text-blue-600"
    />

    <span>Rent History</span>

  </div>

  <div className="flex items-center gap-2 text-slate-600">

    <Sparkles
      size={18}
      className="text-purple-600"
    />

    <span>AI Insights</span>

  </div>

</div>

          </div>

          {/* RIGHT SIDE */}

          <div className="flex justify-center lg:justify-end lg:-mt-10">

            <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-md transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(0,0,0,0.15)]">

              <div className="flex justify-between items-center">

                <div>

                  <p className="text-slate-500 text-sm">

                    Rent Fairness Score

                  </p>

                  <h2 className="text-5xl font-bold text-blue-800 mt-2">

                    92

                  </h2>

                </div>

                <div className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">

                  Excellent

                </div>

              </div>

              <div className="mt-10 space-y-6">

                <div className="flex justify-between">

                  <span className="text-slate-500">

                    Nearby Average

                  </span>

                  <strong>₹18,500</strong>

                </div>

                <div className="flex justify-between">

                  <span className="text-slate-500">

                    Listed Rent

                  </span>

                  <strong>₹18,000</strong>

                </div>

                <div className="flex justify-between">

                  <span className="text-slate-500">

                    Tenant Rating

                  </span>

                  <strong>4.8 ★</strong>

                </div>

              </div>

              <div className="mt-10 bg-blue-50 rounded-2xl p-5">

                <p className="font-semibold text-blue-700">

                  AI Recommendation

                </p>

                <p className="text-slate-600 mt-2">

                  This property is priced fairly and has
                  consistently positive tenant feedback.

                </p>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;