import { useEffect, useState } from "react";import { useNavigate } from "react-router-dom";
import { FiBell, FiMenu } from "react-icons/fi";
import {
  getClassrooms,
  createClassroom,
  deleteClassroom,
} from "../services/classroomService";
import TeacherSidebar from "../components/TeacherSidebar";

function Classrooms() {

  const navigate = useNavigate();

  const [sidebarOpen, setSidebarOpen] =
    useState(false);

  const [classrooms, setClassrooms] =
  useState([]);

  const [classroomName, setClassroomName] =
    useState("");

  const [classroomYear, setClassroomYear] =
    useState("");

  const [classroomDivision, setClassroomDivision] =
    useState("");

  const [classroomBranch, setClassroomBranch] =
    useState("");
    const fetchClassrooms =
  async () => {

    try {

      const data =
        await getClassrooms();

      setClassrooms(
        data.classrooms
      );

    } catch (error) {

      console.log(error);

    }

  };

useEffect(() => {

  fetchClassrooms();

}, []);

  const [classroomDescription, setClassroomDescription] =
    useState("");
const handleCreateClassroom =
  async () => {

    try {

      if (
        !classroomName ||
        !classroomYear ||
        !classroomDivision ||
        !classroomBranch
      ) {

        alert(
          "Please fill all required fields"
        );

        return;

      }

      await createClassroom({
        name: classroomName,
        year: classroomYear,
        division:
          classroomDivision,
        branch:
          classroomBranch,
        description:
          classroomDescription,
        code: generateCode(),
      });

      await fetchClassrooms();

      setClassroomName("");
      setClassroomYear("");
      setClassroomDivision("");
      setClassroomBranch("");
      setClassroomDescription("");

    } catch (error) {

      console.log(error);

      alert(
        "Failed to create classroom"
      );

    }

  };
  // LOGOUT
  const handleLogout = () => {

    localStorage.removeItem("user");

    navigate("/login");

  };

  // GENERATE RANDOM CLASSROOM CODE
  const generateCode = () => {

    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

    let result = "";

    for (let i = 0; i < 6; i++) {

      result += chars.charAt(
        Math.floor(
          Math.random() * chars.length
        )
      );

    }

    return result;

  };

  

  // DELETE CLASSROOM
  const handleDeleteClassroom =
  async (id) => {

    try {

      await deleteClassroom(id);

      await fetchClassrooms();

    } catch (error) {

      console.log(error);

    }

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

          {/* MENU BUTTON */}
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
              Classrooms
            </h1>

            <p className="text-gray-400">
              Manage digital classrooms.
            </p>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4">

          {/* NOTIFICATION */}
          <button className="relative bg-white/5 hover:bg-white/10 p-3 rounded-2xl transition">

            <FiBell size={22} />

            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              3
            </span>

          </button>

          {/* LOGOUT */}
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

        {/* CREATE CLASSROOM */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 mb-8">

          <div className="flex items-center justify-between mb-8">

            <div>

              <h2 className="text-3xl font-bold">
                Create Classroom
              </h2>

              <p className="text-gray-400 mt-1">
                Create and manage digital classrooms.
              </p>

            </div>

            <div className="bg-purple-500/20 border border-purple-500/30 px-4 py-2 rounded-2xl">

              <p className="text-purple-400 font-bold">
                {classrooms.length} CLASSROOMS
              </p>

            </div>

          </div>

          {/* FORM */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">

            <input
              type="text"
              placeholder="Classroom Name"
              value={classroomName}
              onChange={(e) =>
                setClassroomName(
                  e.target.value
                )
              }
              className="bg-black/40 border border-white/10 rounded-2xl px-4 py-3 outline-none"
            />

           <input
             type="text"
             placeholder="Year"
             value={classroomYear}
             onChange={(e) =>
             setClassroomYear(
             e.target.value
              )
             }
  className="bg-black/40 border border-white/10 rounded-2xl px-4 py-3 outline-none"
/>

              

            <input
              type="text"
              placeholder="Division"
              value={classroomDivision}
              onChange={(e) =>
                setClassroomDivision(
                  e.target.value
                )
              }
              className="bg-black/40 border border-white/10 rounded-2xl px-4 py-3 outline-none"
            />

            <input
  type="text"
  placeholder="Branch"
  value={classroomBranch}
  onChange={(e) =>
    setClassroomBranch(
      e.target.value
    )
  }
  className="bg-black/40 border border-white/10 rounded-2xl px-4 py-3 outline-none"
/>

              

          </div>

          {/* DESCRIPTION */}
          <textarea
            placeholder="Classroom Description"
            value={classroomDescription}
            onChange={(e) =>
              setClassroomDescription(
                e.target.value
              )
            }
            rows="4"
            className="w-full bg-black/40 border border-white/10 rounded-2xl px-4 py-3 outline-none mb-6"
          />

          {/* BUTTON */}
          <button
            onClick={
              handleCreateClassroom
            }
            className="bg-white text-black px-8 py-3 rounded-2xl font-bold hover:scale-105 transition duration-300"
          >
            Create Classroom
          </button>

        </div>

        {/* CLASSROOM CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

          {

            classrooms.map(
              (classroom) => (

                <div
                key={classroom._id}
                  className="bg-white/5 border border-white/10 rounded-3xl p-7"
                >

                  <div className="flex items-start justify-between mb-6">

                    <h2 className="text-3xl font-bold">
                      {classroom.name}
                    </h2>

                    <div className="bg-green-500/20 border border-green-500/30 px-4 py-2 rounded-2xl">

                      <p className="text-green-400 font-bold">
                        ACTIVE
                      </p>

                    </div>

                  </div>

                  <div className="space-y-4 mb-6">

                    <p>
                      <span className="font-bold">
                        Year:
                      </span>{" "}
                      {classroom.year}
                    </p>

                    <p>
                      <span className="font-bold">
                        Division:
                      </span>{" "}
                      {classroom.division}
                    </p>

                    <p>
                      <span className="font-bold">
                        Branch:
                      </span>{" "}
                      {classroom.branch}
                    </p>

                    <p>
                      <span className="font-bold">
                        Description:
                      </span>{" "}
                      {
                        classroom.description
                      }
                    </p>

                    <p>
                      <span className="font-bold">
                        Students:
                      </span>{" "}
                      {classroom.students?.length || 0}
                    </p>

                  </div>

                  {/* CLASSROOM CODE */}
                  <div className="bg-black/40 border border-white/10 rounded-2xl p-5 mb-6">

                    <p className="text-gray-400 mb-2">
                      Classroom Code
                    </p>

                    <h2 className="text-5xl font-black tracking-[6px] text-purple-400">
                      {classroom.code}
                    </h2>

                  </div>

                  {/* BUTTONS */}
                  <div className="flex gap-4">

                    <button
                      onClick={() =>
                        navigate(
  `/classroom/${classroom._id}`,
  {
    state: {
      classroom:
        classroom,
    },
  }
)
                      }
                      className="flex-1 bg-white text-black py-3 rounded-2xl font-bold hover:scale-105 transition duration-300"
                    >
                      Open
                    </button>

                    <button
                      onClick={() =>
                         handleDeleteClassroom(
                         classroom._id
                          )
                      }
                      className="bg-red-500 hover:bg-red-600 px-6 py-3 rounded-2xl font-bold transition duration-300"
                    >
                      Delete
                    </button>

                  </div>

                </div>

              )
            )

          }

        </div>

      </div>

    </div>

  );

}

export default Classrooms;