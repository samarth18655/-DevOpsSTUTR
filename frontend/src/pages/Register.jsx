import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Register() {

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleRegister = async (e) => {

    e.preventDefault();

    try {

      setLoading(true);
      setError("");

      const response = await axios.post(
        "http://localhost:5001/api/auth/register",
        {
          name,
          email,
          password,
          role,
        }
      );

      console.log(response.data);

      alert("Registration Successful");

      navigate("/login");

    } catch (err) {

      console.log(err);

      setError(
        err.response?.data?.message ||
        "Registration failed"
      );

    } finally {

      setLoading(false);

    }

  };

  return (

    <div className="min-h-screen bg-black flex items-center justify-center px-4">

      <div className="w-full max-w-md bg-[#111111] border border-gray-800 rounded-3xl p-8 text-white shadow-2xl">

        <h1 className="text-5xl font-bold mb-3">
          Register
        </h1>

        <p className="text-gray-400 mb-8">
          Create your account securely.
        </p>

        {error && (
          <p className="text-red-500 mb-4">
            {error}
          </p>
        )}

        <form
          className="space-y-5"
          onSubmit={handleRegister}
        >

          <div>

            <label className="block mb-2">
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) =>
                setName(e.target.value)
              }
              className="w-full px-4 py-3 rounded-xl bg-black border border-gray-700 outline-none"
            />

          </div>

          <div>

            <label className="block mb-2">
              Email
            </label>

            <input
              type="email"
              placeholder="student@college.com"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              className="w-full px-4 py-3 rounded-xl bg-black border border-gray-700 outline-none"
            />

          </div>

          <div>

            <label className="block mb-2">
              Password
            </label>

            <input
              type="password"
              placeholder="********"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              className="w-full px-4 py-3 rounded-xl bg-black border border-gray-700 outline-none"
            />

          </div>

          <div>

            <label className="block mb-2">
              Role
            </label>

            <select
              value={role}
              onChange={(e) =>
                setRole(e.target.value)
              }
              className="w-full px-4 py-3 rounded-xl bg-black border border-gray-700 outline-none"
            >

              <option value="student">
                Student
              </option>

              <option value="teacher">
                Teacher
              </option>

              <option value="admin">
                Admin
              </option>

            </select>

          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-white text-black py-3 rounded-xl font-semibold"
          >

            {loading
              ? "Registering..."
              : "Register"}

          </button>

        </form>

        <p className="text-center mt-6 text-gray-400">

          Already have an account?{" "}

          <Link
            to="/login"
            className="text-purple-400"
          >
            Login
          </Link>

        </p>

      </div>

    </div>

  );

}

export default Register;