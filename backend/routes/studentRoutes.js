import express from "express"
import Student from "../models/Student.js"

const router = express.Router()

// REGISTER STUDENT
router.post("/register", async (req, res) => {
  try {
    const { name, email, password, rollNumber, department } = req.body

    const studentExists = await Student.findOne({ email })

    if (studentExists) {
      return res.status(400).json({
        message: "Student already exists",
      })
    }

    const student = await Student.create({
      name,
      email,
      password,
      rollNumber,
      department,
    })

    res.status(201).json({
      message: "Student registered successfully",
      student,
    })
  } catch (error) {
    res.status(500).json({
      message: error.message,
    })
  }
})

// LOGIN STUDENT
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body

    const student = await Student.findOne({ email })

    if (!student) {
      return res.status(400).json({
        message: "Student not found",
      })
    }

    if (student.password !== password) {
      return res.status(400).json({
        message: "Invalid password",
      })
    }

    res.status(200).json({
      message: "Login successful",
      student,
    })
  } catch (error) {
    res.status(500).json({
      message: error.message,
    })
  }
})

export default router