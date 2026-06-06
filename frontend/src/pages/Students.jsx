import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiBell, FiMenu } from "react-icons/fi";

import TeacherSidebar from "../components/TeacherSidebar";

import {
  addStudent,
  getStudents,
  deleteStudent,
  updateStudent,
} from "../services/studentService";

function Students() {

  const navigate = useNavigate();

  const [sidebarOpen, setSidebarOpen] =
    useState(false);

  // STUDENT STATES
  const [students, setStudents] =
    useState([]);

  const [studentName, setStudentName] =
    useState("");

  const [studentEmail, setStudentEmail] =
    useState("");

  const [studentPhone, setStudentPhone] =
    useState("");

  const [studentRollNo, setStudentRollNo] =
    useState("");

  const [studentYear, setStudentYear] =
    useState("");

  const [studentDivision, setStudentDivision] =
    useState("");

  const [studentBranch, setStudentBranch] =
    useState("");

  const [editingStudentId, setEditingStudentId] =
    useState(null);

  // FILTER STATES
  const [searchTerm, setSearchTerm] =
    useState("");

  const [filterYear, setFilterYear] =
    useState("");

  const [filterClassroom, setFilterClassroom] =
    useState("");

  const [filterBranch, setFilterBranch] =
    useState("");

  const [filterDivision, setFilterDivision] =
    useState("");

  useEffect(() => {

    const user = JSON.parse(
      localStorage.getItem("user")
    );

    if (!user) {

      navigate("/login");

      return;

    }

    if (user.role !== "teacher") {

      navigate("/login");

    }

    fetchStudents();

  }, [navigate]);

  // FETCH STUDENTS
  const fetchStudents = async () => {

    try {

      const data =
        await getStudents();

      setStudents(data.students);

    } catch (error) {

      console.log(error);

    }

  };

  // ADD / UPDATE STUDENT
  const handleAddStudent = async () => {

    try {

      const studentData = {

        name: studentName,
        email: studentEmail,
        phoneNumber: studentPhone,
        rollNo: studentRollNo,
        year: studentYear,
        division: studentDivision,
        branch: studentBranch,

      };

      if (editingStudentId) {

        await updateStudent(
          editingStudentId,
          studentData
        );

        alert("Student Updated");

      } else {

        await addStudent(studentData);

        alert("Student Added");

      }

      setStudentName("");
      setStudentEmail("");
      setStudentPhone("");
      setStudentRollNo("");
      setStudentYear("");
      setStudentDivision("");
      setStudentBranch("");

      setEditingStudentId(null);

      fetchStudents();

    } catch (error) {

      console.log(error);

      alert(
        error.response?.data?.message ||
        error.message ||
        "Failed to add student"
      );

    }

  };

  // DELETE STUDENT
  const handleDeleteStudent =
    async (id) => {

      try {

        await deleteStudent(id);

        fetchStudents();

      } catch (error) {

        console.log(error);

      }

    };

  // EDIT STUDENT
  const handleEditStudent =
    (student) => {

      setStudentName(student.name);

      setStudentEmail(student.email);

      setStudentPhone(
        student.phoneNumber
      );

      setStudentRollNo(student.rollNo);

      setStudentYear(student.year);

      setStudentDivision(
        student.division
      );

      setStudentBranch(student.branch);

      setEditingStudentId(
        student._id
      );

    };

  // LOGOUT
  const handleLogout = () => {

    localStorage.removeItem("user");

    navigate("/login");

  };

  // FILTERED STUDENTS
  const filteredStudents =
    students.filter((student) => {

      const matchesSearch =

        student.name
          ?.toLowerCase()
          .includes(
            searchTerm.toLowerCase()
          ) ||

        student.email
          ?.toLowerCase()
          .includes(
            searchTerm.toLowerCase()
          ) ||

        student.rollNo
          ?.toLowerCase()
          .includes(
            searchTerm.toLowerCase()
          );

      const matchesYear =
        filterYear === "" ||
        student.year === filterYear;

      const matchesBranch =
        filterBranch === "" ||
        student.branch === filterBranch;

      const matchesDivision =
        filterDivision === "" ||
        student.division === filterDivision;

      // CLASSROOM FILTER
      const matchesClassroom =
        filterClassroom === "" || true;

      return (
        matchesSearch &&
        matchesYear &&
        matchesBranch &&
        matchesDivision &&
        matchesClassroom
      );

    });

  return (

    <div className="min-h-screen bg-[#050505] text-white">

      {/* SIDEBAR */}
      {
        sidebarOpen && (
          <TeacherSidebar
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
          />
        )
      }

      {/* TOP NAVBAR */}
      <div className="flex items-center justify-between px-8 py-6 border-b border-white/10 backdrop-blur-xl bg-black/30 sticky top-0 z-40">

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

          {/* PAGE TITLE */}
          <div>

            <h1 className="text-4xl font-black">
              Students
            </h1>

            <p className="text-gray-400">
              Manage all students from here.
            </p>

          </div>

        </div>

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
            className="bg-red-500 hover:bg-red-600 transition px-5 py-3 rounded-2xl font-semibold"
          >
            Logout
          </button>

        </div>

      </div>

      {/* MAIN */}
      <div className="p-8">

        {/* ADD STUDENT */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 mb-8">

          <div className="flex items-center justify-between mb-8">

            <div>

              <h2 className="text-3xl font-bold">
                Student Database
              </h2>

              <p className="text-gray-400 mt-1">
                Add, update and remove students.
              </p>

            </div>

            <div className="bg-blue-500/20 border border-blue-500/30 px-4 py-2 rounded-2xl">

              <p className="text-blue-400 font-bold">
                {students.length} STUDENTS
              </p>

            </div>

          </div>

          {/* FORM */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mb-8">

            <input
              type="text"
              placeholder="Student Name"
              value={studentName}
              onChange={(e) =>
                setStudentName(
                  e.target.value
                )
              }
              className="bg-black/40 border border-white/10 rounded-2xl px-4 py-3 outline-none"
            />

            <input
              type="email"
              placeholder="Email"
              value={studentEmail}
              onChange={(e) =>
                setStudentEmail(
                  e.target.value
                )
              }
              className="bg-black/40 border border-white/10 rounded-2xl px-4 py-3 outline-none"
            />

            <input
              type="text"
              placeholder="Phone Number"
              value={studentPhone}
              onChange={(e) =>
                setStudentPhone(
                  e.target.value
                )
              }
              className="bg-black/40 border border-white/10 rounded-2xl px-4 py-3 outline-none"
            />

            <input
              type="text"
              placeholder="Roll Number"
              value={studentRollNo}
              onChange={(e) =>
                setStudentRollNo(
                  e.target.value
                )
              }
              className="bg-black/40 border border-white/10 rounded-2xl px-4 py-3 outline-none"
            />

            <input
              type="text"
              placeholder="Year"
              value={studentYear}
              onChange={(e) =>
                setStudentYear(
                  e.target.value
                )
              }
              className="bg-black/40 border border-white/10 rounded-2xl px-4 py-3 outline-none"
            />

            <input
              type="text"
              placeholder="Division"
              value={studentDivision}
              onChange={(e) =>
                setStudentDivision(
                  e.target.value
                )
              }
              className="bg-black/40 border border-white/10 rounded-2xl px-4 py-3 outline-none"
            />

            <input
              type="text"
              placeholder="Branch"
              value={studentBranch}
              onChange={(e) =>
                setStudentBranch(
                  e.target.value
                )
              }
              className="bg-black/40 border border-white/10 rounded-2xl px-4 py-3 outline-none"
            />

          </div>

          <button
            onClick={handleAddStudent}
            className="bg-white text-black px-8 py-3 rounded-2xl font-bold hover:scale-105 transition duration-300"
          >

            {
              editingStudentId
                ? "Save Changes"
                : "Add Student"
            }

          </button>

        </div>

        {/* FILTER SECTION */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 mb-8">

          <div className="flex items-center justify-between mb-6">

            <div>

              <h2 className="text-3xl font-bold">
                Filters
              </h2>

              <p className="text-gray-400 mt-1">
                Quickly find students using filters.
              </p>

            </div>

            <button
              onClick={() => {

                setSearchTerm("");

                setFilterYear("");

                setFilterClassroom("");

                setFilterBranch("");

                setFilterDivision("");

              }}
              className="bg-red-500 hover:bg-red-600 px-5 py-3 rounded-2xl font-semibold transition duration-300"
            >
              Clear Filters
            </button>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-4">

            {/* YEAR */}
            <select
              value={filterYear}
              onChange={(e) =>
                setFilterYear(
                  e.target.value
                )
              }
              className="bg-black/40 text-white border border-white/10 rounded-2xl px-4 py-3 outline-none"
            >

              <option value="">
                Select Year
              </option>

              <option value="1">
                First Year
              </option>

              <option value="2">
                Second Year
              </option>

              <option value="3">
                Third Year
              </option>

            </select>

            {/* CLASSROOM */}
            <select
              value={filterClassroom}
              onChange={(e) =>
                setFilterClassroom(
                  e.target.value
                )
              }
              className="bg-black/40 text-white border border-white/10 rounded-2xl px-4 py-3 outline-none"
            >

              <option value="">
                Select Classroom
              </option>

              <option value="A">
                Classroom A
              </option>

              <option value="B">
                Classroom B
              </option>

              <option value="C">
                Classroom C
              </option>

            </select>

            {/* BRANCH */}
            <select
              value={filterBranch}
              onChange={(e) =>
                setFilterBranch(
                  e.target.value
                )
              }
              className="bg-black/40 text-white border border-white/10 rounded-2xl px-4 py-3 outline-none"
            >

              <option value="">
                Select Branch
              </option>

              <option value="Computer">
                Computer
              </option>

              <option value="IT">
                IT
              </option>

              <option value="Mechanical">
                Mechanical
              </option>

              <option value="Civil">
                Civil
              </option>

              <option value="EXTC">
                EXTC
              </option>

            </select>

            {/* DIVISION */}
            <select
              value={filterDivision}
              onChange={(e) =>
                setFilterDivision(
                  e.target.value
                )
              }
              className="bg-black/40 text-white border border-white/10 rounded-2xl px-4 py-3 outline-none"
            >

              <option value="">
                Select Division
              </option>

              <option value="A">
                Division A
              </option>

              <option value="B">
                Division B
              </option>

              <option value="C">
                Division C
              </option>

              <option value="D">
                Division D
              </option>

            </select>

            {/* SEARCH */}
            <input
              type="text"
              placeholder="Search student..."
              value={searchTerm}
              onChange={(e) =>
                setSearchTerm(
                  e.target.value
                )
              }
              className="bg-black/40 text-white border border-white/10 rounded-2xl px-4 py-3 outline-none"
            />

          </div>

        </div>

        {/* TABLE */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 overflow-x-auto">

          <table className="w-full">

            <thead>

              <tr className="border-b border-white/10 text-left text-gray-400">

                <th className="pb-4">
                  Name
                </th>

                <th className="pb-4">
                  Email
                </th>

                <th className="pb-4">
                  Phone
                </th>

                <th className="pb-4">
                  Roll No
                </th>

                <th className="pb-4">
                  Year
                </th>

                <th className="pb-4">
                  Division
                </th>

                <th className="pb-4">
                  Branch
                </th>

                <th className="pb-4">
                  Action
                </th>

              </tr>

            </thead>

            <tbody className="divide-y divide-white/5">

              {

                filteredStudents.map(
                  (student) => (

                    <tr key={student._id}>

                      <td className="py-5">
                        {student.name}
                      </td>

                      <td className="py-5 text-gray-400">
                        {student.email}
                      </td>

                      <td className="py-5 text-gray-400">
                        {
                          student.phoneNumber
                        }
                      </td>

                      <td className="py-5 text-gray-400">
                        {student.rollNo}
                      </td>

                      <td className="py-5 text-gray-400">
                        {student.year}
                      </td>

                      <td className="py-5 text-gray-400">
                        {
                          student.division
                        }
                      </td>

                      <td className="py-5 text-gray-400">
                        {student.branch}
                      </td>

                      <td className="py-5">

                        <div className="flex gap-3">

                          <button
                            onClick={() =>
                              handleEditStudent(
                                student
                              )
                            }
                            className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-xl font-semibold"
                          >
                            Edit
                          </button>

                          <button
                            onClick={() =>
                              handleDeleteStudent(
                                student._id
                              )
                            }
                            className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-xl font-semibold"
                          >
                            Remove
                          </button>

                        </div>

                      </td>

                    </tr>

                  )
                )

              }

            </tbody>

          </table>

        </div>

      </div>

    </div>

  );

}

export default Students;