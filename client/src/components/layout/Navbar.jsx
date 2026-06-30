import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
  const { auth, logout } = useAuth();

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}

        <Link
  to="/"
  className="flex flex-col leading-none"
>
  <span className="text-3xl font-extrabold text-blue-700 tracking-tight">
    RentWise
  </span>

  <span className="text-xs text-gray-500 mt-1">
    Rental Intelligence Platform
  </span>
</Link>

        {/* Navigation */}

        <div className="hidden md:flex items-center gap-8 font-medium text-gray-700">

          <Link
  to="/"
  className="hover:text-blue-700 transition-colors"
>
  Home
</Link>

<Link
  to="/properties"
  className="hover:text-blue-700 transition-colors"
>
  Properties
</Link>

<Link
  to="/"
  className="hover:text-blue-700 transition-colors"
>
  Insights
</Link>

<Link
  to="/"
  className="hover:text-blue-700 transition-colors"
>
  About
</Link>

        </div>

        {/* Right Side */}

        {auth.user ? (

          <div className="flex gap-5 items-center">

            <Link
              to="/dashboard"
              className="font-medium"
            >
              Dashboard
            </Link>

            <div className="text-sm text-right">
  <p className="font-semibold text-gray-800">
    {auth.user.fullName}
  </p>

  <p className="text-gray-500 capitalize">
    {auth.user.role}
  </p>
</div>

            <button
              onClick={logout}
              className="bg-red-500 hover:bg-red-600 transition-all duration-300 text-white px-5 py-2 rounded-xl"
            >
              Logout
            </button>

          </div>

        ) : (

          <div className="flex items-center gap-4">

            <Link
  to="/login"
  className="font-medium hover:text-blue-700 transition-colors"
>
  Login
</Link>

            <Link
  to="/register"
  className="bg-blue-700 hover:bg-blue-800 text-white px-5 py-2 rounded-xl transition-all duration-300"
>
              Register
            </Link>

          </div>

        )}

      </div>
    </nav>
  );
};

export default Navbar;