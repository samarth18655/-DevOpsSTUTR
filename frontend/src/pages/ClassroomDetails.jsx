import {
  useNavigate,
  useParams,
  useLocation,
} from "react-router-dom";

import { useState } from "react";

import {
  FiBell,
  FiMenu,
} from "react-icons/fi";

import TeacherSidebar from "../components/TeacherSidebar";

function ClassroomDetails() {

  const navigate = useNavigate();

  const { id } = useParams();

  const location = useLocation();

 const classroom =
  location.state?.classroom || {};

  const [sidebarOpen, setSidebarOpen] =
    useState(false);

  const [message, setMessage] =
    useState("");

  const [messages, setMessages] =
    useState([
      {
        id: 1,
        text: "Welcome to classroom.",
      },
    ]);

  // CLASSROOM STUDENTS
  const [students, setStudents] =
    useState([
      {
        id: 1,
        name: "Samarth",
        rollNo: "FS23CO029",
      },

      {
        id: 2,
        name: "Ram",
        rollNo: "21",
      },
    ]);

  

  // SEND MESSAGE
  const handleSendMessage = () => {

    if (!message) return;

    const newMessage = {

      id: Date.now(),

      text: message,

    };

    setMessages([
      newMessage,
      ...messages,
    ]);

    setMessage("");

  };

  

  // REMOVE STUDENT
  const handleRemoveStudent =
    (studentId) => {

      setStudents(
        students.filter(
          (student) =>
            student.id !== studentId
        )
      );

    };

  // LOGOUT
  const handleLogout = () => {

    localStorage.removeItem("user");

    navigate("/login");

  };

  return (

    <div className="min-h-screen bg-black text-white">

      {/* SIDEBAR */}
      {

        sidebarOpen && (

          <TeacherSidebar
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
          />

        )

      }

      {/* NAVBAR */}
      <div className="flex items-center justify-between px-8 py-6 border-b border-white/10 bg-black/40 backdrop-blur-xl sticky top-0 z-40">

        <div className="flex items-center gap-5">

          {/* LOGO */}
          <div>

            <h1 className="text-5xl font-black tracking-tight">
              STUTR
            </h1>

            <p className="text-gray-400 text-sm">
              Teacher Panel
            </p>

          </div>

          {/* MENU */}
          <button
            onClick={() =>
              setSidebarOpen(
                !sidebarOpen
              )
            }
            className="bg-white/5 hover:bg-white/10 p-3 rounded-2xl transition"
          >

            <FiMenu size={24} />

          </button>

          {/* TITLE */}
          <div>

            <h1 className="text-4xl font-black">
              Classroom
            </h1>

            <p className="text-gray-400">
              Manage classroom activities.
            </p>

          </div>

        </div>

        <div className="flex items-center gap-4">

          <button className="relative bg-white/5 hover:bg-white/10 p-3 rounded-2xl transition">

            <FiBell size={22} />

            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              3
            </span>

          </button>

          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 transition px-5 py-3 rounded-2xl font-semibold"
          >
            Logout
          </button>

        </div>

      </div>

      {/* MAIN */}
      <div className="p-8">

        {/* CLASSROOM INFO */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 mb-8">

          <div className="flex items-center justify-between">

            <div>

              <h1 className="text-4xl font-black mb-3">
                {classroom?.name}
              </h1>

              <div className="space-y-2 text-gray-300">

                <p>
                  <span className="font-bold text-white">
                    Year:
                  </span>{" "}
                  {classroom?.year}
                </p>

                <p>
                  <span className="font-bold text-white">
                    Division:
                  </span>{" "}
                  {classroom?.division}
                </p>

                <p>
                  <span className="font-bold text-white">
                    Branch:
                  </span>{" "}
                  {classroom?.branch}
                </p>

                <p>
                  <span className="font-bold text-white">
                    Description:
                  </span>{" "}
                  {classroom?.description}
                </p>

                <p>
                  <span className="font-bold text-white">
                    Classroom ID:
                  </span>{" "}
                  {id}
                </p>

              </div>

            </div>

            <div className="bg-purple-500/20 border border-purple-500/30 px-5 py-4 rounded-2xl">

              <p className="text-gray-300 text-sm mb-2">
                Classroom Code
              </p>

              <p className="text-purple-400 text-3xl font-black tracking-[5px]">
                {classroom?.code}
              </p>

            </div>

          </div>

        </div>

        {/* MESSAGE SECTION */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 mb-8">

          <h2 className="text-3xl font-bold mb-6">
            Classroom Messages
          </h2>

          <div className="flex gap-4 mb-6">

            <input
              type="text"
              placeholder="Post classroom message..."
              value={message}
              onChange={(e) =>
                setMessage(
                  e.target.value
                )
              }
              className="flex-1 bg-black/40 border border-white/10 rounded-2xl px-4 py-3 outline-none"
            />

            <button
              onClick={
                handleSendMessage
              }
              className="bg-purple-500 hover:bg-purple-600 px-6 py-3 rounded-2xl font-bold transition"
            >
              Post
            </button>

          </div>

          <div className="space-y-4">

            {

              messages.map(
                (msg) => (

                  <div
                    key={msg.id}
                    className="bg-black/40 border border-white/10 rounded-2xl p-5"
                  >

                    {msg.text}

                  </div>

                )
              )

            }

          </div>

        </div>

        {/* STUDENTS */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

          <div className="flex items-center justify-between mb-8">

            <h2 className="text-3xl font-bold">
              Classroom Students
            </h2>

            <div className="bg-blue-500/20 border border-blue-500/30 px-4 py-2 rounded-2xl">

              <p className="text-blue-400 font-bold">
                {students.length} STUDENTS
              </p>

            </div>

          </div>

         

          {/* STUDENTS LIST */}
          <div className="space-y-4">

            {

              students.map(
                (student) => (

                  <div
                    key={student.id}
                    className="bg-black/40 border border-white/10 rounded-2xl p-5 flex items-center justify-between"
                  >

                    <div>

                      <h2 className="text-xl font-bold">
                        {student.name}
                      </h2>

                      <p className="text-gray-400">
                        {student.rollNo}
                      </p>

                    </div>

                    <button
                      onClick={() =>
                        handleRemoveStudent(
                          student.id
                        )
                      }
                      className="bg-red-500 hover:bg-red-600 px-5 py-2 rounded-xl font-semibold transition"
                    >
                      Remove
                    </button>

                  </div>

                )
              )

            }

          </div>

        </div>

      </div>

    </div>

  );

}

export default ClassroomDetails;