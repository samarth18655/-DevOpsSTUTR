import { BrowserRouter, Routes, Route } from "react-router-dom";

import Hero from "./components/Hero/Hero";

import StudentLogin from "./pages/StudentLogin";
import Register from "./pages/Register";

import StudentDashboard from "./pages/StudentDashboard";
import TeacherDashboard from "./pages/TeacherDashboard";
import AdminDashboard from "./pages/AdminDashboard";

import Students from "./pages/Students";

import Classrooms from "./pages/Classrooms";

import ClassroomDetails from "./pages/ClassroomDetails";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        {/* HOME PAGE */}
        <Route
          path="/"
          element={<Hero />}
        />

        {/* LOGIN */}
        <Route
          path="/login"
          element={<StudentLogin />}
        />

        {/* REGISTER */}
        <Route
          path="/register"
          element={<Register />}
        />

        {/* STUDENTS PAGE */}
        <Route
          path="/students"
          element={<Students />}
        />

        {/* CLASSROOMS PAGE */}
        <Route
          path="/classrooms"
          element={<Classrooms />}
        />

        {/* CLASSROOM DETAILS PAGE */}
        <Route
          path="/classroom/:id"
          element={<ClassroomDetails />}
        />

        {/* DASHBOARDS */}
        <Route
          path="/student-dashboard"
          element={<StudentDashboard />}
        />

        <Route
          path="/teacher-dashboard"
          element={<TeacherDashboard />}
        />

        <Route
          path="/admin-dashboard"
          element={<AdminDashboard />}
        />

      </Routes>

    </BrowserRouter>

  );

}

export default App;