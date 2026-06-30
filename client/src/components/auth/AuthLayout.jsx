const AuthLayout = ({ title, subtitle, children }) => {
  return (
    <div className="min-h-screen bg-slate-100 flex">

      {/* Left Side */}

      <div className="hidden lg:flex w-1/2 bg-blue-700 text-white items-center justify-center p-16">

        <div>

          <h1 className="text-6xl font-bold">

            RentWise

          </h1>

          <p className="text-xl mt-6 opacity-90 leading-9">

            India's Rental Transparency Platform.

            <br />

            Compare rents.

            <br />

            Read verified tenant reviews.

            <br />

            Rent confidently.

          </p>

        </div>

      </div>

      {/* Right Side */}

      <div className="flex-1 flex justify-center items-center">

        <div className="bg-white rounded-3xl shadow-xl p-10 w-full max-w-md">

          <h2 className="text-4xl font-bold">

            {title}

          </h2>

          <p className="text-gray-500 mt-2 mb-8">

            {subtitle}

          </p>

          {children}

        </div>

      </div>

    </div>
  );
};

export default AuthLayout;