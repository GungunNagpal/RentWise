import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import AuthLayout from "../../components/auth/AuthLayout";
import AuthInput from "../../components/auth/AuthInput";
import RoleSelector from "../../components/auth/RoleSelector";

import { registerUser } from "../../services/authService";
import useAuth from "../../hooks/useAuth";

const Register = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    phone: "",
    city: "",
  });

  const [role, setRole] = useState("tenant");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData((previous) => ({
      ...previous,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      const response = await registerUser({
        ...formData,
        role,
      });

      login({
        token: response.token,
        user: response.user,
      });

      navigate("/");

    } catch (err) {

      setError(
        err.response?.data?.message ||
        "Registration failed."
      );

    } finally {

      setLoading(false);

    }
  };

  return (
    <AuthLayout
      title="Create Account"
      subtitle="Join RentWise today."
    >
      <form onSubmit={handleSubmit}>

        <AuthInput
          label="Full Name"
          name="fullName"
          placeholder="Enter your full name"
          value={formData.fullName}
          onChange={handleChange}
        />

        <AuthInput
          label="Email"
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
        />

        <AuthInput
          label="Phone"
          name="phone"
          placeholder="Enter your phone number"
          value={formData.phone}
          onChange={handleChange}
        />

        <AuthInput
          label="City"
          name="city"
          placeholder="Enter your city"
          value={formData.city}
          onChange={handleChange}
        />

        <AuthInput
          label="Password"
          type="password"
          name="password"
          placeholder="Create a password"
          value={formData.password}
          onChange={handleChange}
        />

        <RoleSelector
          role={role}
          setRole={setRole}
        />

        {error && (
          <p className="text-red-600 mb-4">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-xl transition duration-200"
        >
          {loading ? "Creating Account..." : "Create Account"}
        </button>

        <p className="text-center mt-6">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-blue-700 font-semibold"
          >
            Login
          </Link>
        </p>

      </form>
    </AuthLayout>
  );
};

export default Register;