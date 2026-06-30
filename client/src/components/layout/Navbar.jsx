import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-8 h-16 flex justify-between items-center">

        <Link to="/" className="text-3xl font-bold text-blue-600">
          RentWise
        </Link>

        <div className="flex items-center gap-8">

          <Link
            to="/"
            className="hover:text-blue-600 transition"
          >
            Home
          </Link>

          <Link
            to="/properties"
            className="hover:text-blue-600 transition"
          >
            Properties
          </Link>

          <Link
            to="/login"
            className="hover:text-blue-600 transition"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Register
          </Link>

        </div>

      </div>
    </nav>
  );
};

export default Navbar;