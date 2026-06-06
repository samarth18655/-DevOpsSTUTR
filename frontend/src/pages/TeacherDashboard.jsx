import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { QRCodeCanvas } from "qrcode.react";
import { FiBell, FiMenu } from "react-icons/fi";

import TeacherSidebar from "../components/TeacherSidebar";

import {
  startAttendanceSession,
  endAttendanceSession,
} from "../services/attendanceService";

function TeacherDashboard() {

  const navigate = useNavigate();

  const [sessionActive, setSessionActive] = useState(false);

  const [sessionCode, setSessionCode] = useState("");

  const [sessionId, setSessionId] = useState("");

  const [totalSessions, setTotalSessions] = useState(0);

  const [sidebarOpen, setSidebarOpen] =
    useState(false);

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
    if (user.role !== "teacher") {

      navigate("/login");

    }

  }, [navigate]);

  // LOGOUT
  const handleLogout = () => {

    localStorage.removeItem("user");

    navigate("/login");

  };

  // START SESSION
  const handleStartSession = async () => {

    try {

      const user = JSON.parse(
        localStorage.getItem("user")
      );

      const data =
        await startAttendanceSession(
          user._id
        );

      setSessionCode(
        data.session.sessionCode
      );

      setSessionId(
        data.session._id
      );

      setSessionActive(true);

      setTotalSessions((prev) => prev + 1);

    } catch (error) {

      console.log(error);

      alert("Failed to start session");

    }

  };

  // END SESSION
  const handleEndSession = async () => {

    try {

      await endAttendanceSession(
        sessionId
      );

      setSessionActive(false);

      setSessionCode("");

      setSessionId("");

    } catch (error) {

      console.log(error);

      alert("Failed to end session");

    }

  };

  return (

    <div className="min-h-screen bg-[#050505] text-white relative overflow-x-hidden">

      {/* SIDEBAR */}
      <TeacherSidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      {/* OVERLAY */}
      {

        sidebarOpen && (

          <div
            onClick={() =>
              setSidebarOpen(false)
            }
            className="fixed inset-0 bg-black/60 z-40"
          />

        )

      }

      {/* TOP NAVBAR */}
      <div className="flex items-center justify-between px-8 py-6 border-b border-white/10 backdrop-blur-xl bg-black/30 sticky top-0 z-30">

        <div className="flex items-center gap-5">

          {/* LOGO */}
          <div>

            <h1 className="text-3xl font-black">
              STUTR
            </h1>

            <p className="text-gray-500 text-sm">
              Teacher Panel
            </p>

          </div>

          {/* MENU BUTTON */}
          <button
            onClick={() =>
              setSidebarOpen(true)
            }
            className="bg-white/5 hover:bg-white/10 p-3 rounded-2xl transition"
          >

            <FiMenu size={22} />

          </button>

          {/* TITLE */}
          <div>

            <h1 className="text-3xl font-black">
              Teacher Dashboard
            </h1>

            <p className="text-gray-400 mt-1">
              Manage attendance sessions efficiently.
            </p>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4">

          {/* NOTIFICATION BUTTON */}
          <button className="relative bg-white/5 hover:bg-white/10 p-3 rounded-2xl transition">

            <FiBell size={22} />

            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              3
            </span>

          </button>

          {/* LOGOUT */}
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 transition px-5 py-2 rounded-xl font-semibold"
          >
            Logout
          </button>

        </div>

      </div>

      {/* MAIN */}
      <div className="p-8">

        {/* WELCOME */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl mb-8">

          <h2 className="text-2xl font-bold mb-2">
            Welcome Teacher 👋
          </h2>

          <p className="text-gray-400">
            Start and monitor attendance sessions in real-time.
          </p>

        </div>

        {/* STATS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6">

            <h3 className="text-gray-400 mb-2">
              Total Sessions
            </h3>

            <p className="text-4xl font-black">
              {totalSessions}
            </p>

          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6">

            <h3 className="text-gray-400 mb-2">
              Students Present
            </h3>

            <p className="text-4xl font-black">
              0
            </p>

          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6">

            <h3 className="text-gray-400 mb-2">
              Active Session
            </h3>

            {

              sessionActive ? (

                <div>

                  <p className="text-2xl font-bold text-green-400">
                    Session Live
                  </p>

                  <p className="text-gray-400 mt-2">
                    Code: {sessionCode}
                  </p>

                </div>

              ) : (

                <p className="text-2xl font-bold text-red-400">
                  No Active Session
                </p>

              )

            }

          </div>

        </div>

        {/* SESSION PANEL */}
        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-white/10 rounded-3xl p-8 mb-8">

          <div className="flex items-center justify-between mb-6">

            <div>

              <h2 className="text-3xl font-bold mb-2">
                Attendance Session
              </h2>

              <p className="text-gray-300">
                Generate QR code and allow students to mark attendance.
              </p>

            </div>

            {

              sessionActive && (

                <div className="bg-green-500/20 border border-green-500/30 px-4 py-2 rounded-2xl">

                  <p className="text-green-400 font-bold">
                    LIVE SESSION
                  </p>

                </div>

              )

            }

          </div>

          {

            !sessionActive ? (

              <button
                onClick={handleStartSession}
                className="bg-white text-black px-8 py-4 rounded-2xl font-bold hover:scale-105 transition duration-300"
              >
                Start Attendance
              </button>

            ) : (

              <div className="flex flex-col items-center">

                <div className="bg-white p-6 rounded-3xl mb-6 shadow-2xl">

                  <QRCodeCanvas
                    value={sessionCode}
                    size={220}
                  />

                </div>

                <p className="text-2xl font-bold mb-2">
                  Session Code
                </p>

                <p className="text-4xl font-black tracking-[8px] text-green-400 mb-6">
                  {sessionCode}
                </p>

                <div className="flex gap-4">

                  <button
                    className="bg-yellow-500 hover:bg-yellow-600 px-6 py-3 rounded-2xl font-bold transition duration-300"
                  >
                    Random Verification
                  </button>

                  <button
                    onClick={handleEndSession}
                    className="bg-red-500 hover:bg-red-600 px-8 py-3 rounded-2xl font-bold transition duration-300"
                  >
                    End Session
                  </button>

                </div>

              </div>

            )

          }

        </div>

        {/* RECENT SESSIONS */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

          <div className="flex items-center justify-between mb-6">

            <h2 className="text-3xl font-bold">
              Recent Sessions
            </h2>

            <div className="text-purple-400">
              Session History
            </div>

          </div>

          {

            totalSessions === 0 ? (

              <div className="text-gray-400">
                No sessions created yet.
              </div>

            ) : (

              <div className="space-y-4">

                <div className="bg-black/30 border border-white/10 rounded-2xl p-5 flex items-center justify-between">

                  <div>

                    <p className="text-xl font-bold">
                      Session #{totalSessions}
                    </p>

                    <p className="text-gray-400 text-sm mt-1">
                      Last active attendance session
                    </p>

                  </div>

                  <div className="text-right">

                    <p className="text-green-400 text-2xl font-black">
                      {sessionCode || "ENDED"}
                    </p>

                    <p className="text-gray-500 text-sm mt-1">
                      Completed
                    </p>

                  </div>

                </div>

              </div>

            )

          }

        </div>

      </div>

    </div>

  );

}

export default TeacherDashboard;