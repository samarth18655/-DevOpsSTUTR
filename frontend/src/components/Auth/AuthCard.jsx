import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginStudent } from "../../services/authService";

function AuthCard() {

  const navigate = useNavigate();

  const [role, setRole] = useState("student");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e) => {

    e.preventDefault();

    try {

      setLoading(true);
      setError("");

      const data = await loginStudent(
        email,
        password,
        role
      );

      console.log(data);

      // SAVE USER
      localStorage.setItem(
        "user",
        JSON.stringify(data.user)
      );

      alert("Login Successful");

      // ROLE BASED DASHBOARD
      if (role === "student") {

        navigate("/student-dashboard");

      }

      else if (role === "teacher") {

        navigate("/teacher-dashboard");

      }

      else if (role === "admin") {

        navigate("/admin-dashboard");

      }

    } catch (err) {

      console.log(err);

      setError(
        err.response?.data?.message ||
        "Login failed"
      );

    } finally {

      setLoading(false);

    }

  };

  return (

    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#0f0f0f",
      }}
    >

      <form
        onSubmit={handleLogin}
        style={{
          width: "350px",
          background: "#1a1a1a",
          padding: "30px",
          borderRadius: "16px",
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          boxShadow: "0 0 20px rgba(255,255,255,0.1)",
        }}
      >

        <h1
          style={{
            color: "white",
            fontSize: "40px",
          }}
        >
          Login
        </h1>

        <p style={{ color: "#aaa" }}>
          Select your role and login securely.
        </p>

        {/* ROLE */}
        <div>

          <label style={{ color: "white" }}>
            Role
          </label>

          <select
            value={role}
            onChange={(e) =>
              setRole(e.target.value)
            }
            style={{
              width: "100%",
              padding: "12px",
              marginTop: "8px",
              borderRadius: "10px",
              border: "1px solid #333",
              background: "#111",
              color: "white",
              outline: "none",
            }}
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

        {error && (
          <p style={{ color: "red" }}>
            {error}
          </p>
        )}

        {/* EMAIL */}
        <div>

          <label style={{ color: "white" }}>
            Email
          </label>

          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            style={{
              width: "100%",
              padding: "12px",
              marginTop: "8px",
              borderRadius: "10px",
              border: "1px solid #333",
              background: "#111",
              color: "white",
              outline: "none",
            }}
          />

        </div>

        {/* PASSWORD */}
        <div>

          <label style={{ color: "white" }}>
            Password
          </label>

          <input
            type="password"
            placeholder="********"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            style={{
              width: "100%",
              padding: "12px",
              marginTop: "8px",
              borderRadius: "10px",
              border: "1px solid #333",
              background: "#111",
              color: "white",
              outline: "none",
            }}
          />

        </div>

        <button
          type="submit"
          disabled={loading}
          style={{
            padding: "12px",
            borderRadius: "10px",
            border: "none",
            background: "white",
            color: "black",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >

          {loading
            ? "Logging in..."
            : "Login"}

        </button>

        <p
          style={{
            color: "white",
            textAlign: "center",
          }}
        >

          Don't have an account?{" "}

          <span
            onClick={() =>
              navigate("/register")
            }
            style={{
              color: "#4f46e5",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Register
          </span>

        </p>

      </form>

    </div>

  );

}

export default AuthCard;