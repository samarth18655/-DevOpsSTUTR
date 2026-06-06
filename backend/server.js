import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import studentManagementRoutes from "./routes/studentManagementRoutes.js";

import authRoutes from "./routes/authRoutes.js";
import attendanceRoutes from "./routes/attendanceRoutes.js";
import classroomRoutes from "./routes/classroomRoutes.js";

dotenv.config();

const app = express();


// MIDDLEWARE
app.use(cors());

app.use(express.json());


// ROUTES
app.use("/api/auth", authRoutes);

app.use(
  "/api/attendance",
  attendanceRoutes
);

app.use(
  "/api/student-management",
  studentManagementRoutes
);

app.use(
  "/api/classrooms",
  classroomRoutes
);


// TEST ROUTE
app.get("/", (req, res) => {

  res.send("API Running 🚀");

});


// DATABASE CONNECTION
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {

    console.log("MongoDB Connected");

    app.listen(5001, () => {

      console.log(
        "Server running on port 5001"
      );

    });

  })
  .catch((error) => {

    console.log(error);

  });