import mongoose from "mongoose"

const teacherSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    password: String,
    subject: String,
    department: String,
  },
  {
    timestamps: true,
  }
)

const Teacher = mongoose.model("Teacher", teacherSchema)

export default Teacher