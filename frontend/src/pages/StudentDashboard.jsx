import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function StudentDashboard() {

  const navigate = useNavigate();

  useEffect(() => {

    const user = JSON.parse(
      localStorage.getItem("user")
    );

    // NOT LOGGED IN
    if (!user) {

      navigate("/login");

      return;

    }

    // WRONG ROLE
    if (user.role !== "student") {

      navigate("/login");

    }

  }, [navigate]);

  const handleLogout = () => {

    localStorage.removeItem("user");

    navigate("/login");

  };

  return (

    <div className="min-h-screen bg-black text-white p-10">

      <div className="flex justify-between items-center mb-10">

        <h1 className="text-4xl font-bold">
          Student Dashboard
        </h1>

        <button
          onClick={handleLogout}
          className="bg-red-500 px-5 py-2 rounded-xl"
        >
          Logout
        </button>

      </div>

      <div className="bg-zinc-900 p-6 rounded-2xl">

        <h2 className="text-2xl font-semibold mb-4">
          Welcome Student
        </h2>

        <p className="text-gray-400">
          Your attendance dashboard is secure.
        </p>

      </div>

    </div>

  );

}

export default StudentDashboard;