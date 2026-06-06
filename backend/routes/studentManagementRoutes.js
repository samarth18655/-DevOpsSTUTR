import express from "express";
import Student from "../models/Student.js";

const router = express.Router();


// GET ALL STUDENTS
router.get("/", async (req, res) => {

  try {

    const students =
      await Student.find();

    res.status(200).json({
      students,
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

});


// ADD STUDENT
router.post("/", async (req, res) => {

  try {

    const {
      name,
      email,
      phoneNumber,
      rollNo,
      year,
      division,
      branch,
    } = req.body;

    const existingStudent =
      await Student.findOne({
        email,
      });

    if (existingStudent) {

      return res.status(400).json({
        message:
          "Student already exists",
      });

    }

    const student =
      await Student.create({

        name,
        email,
        phoneNumber,
        rollNo,
        year,
        division,
        branch,

      });

    res.status(201).json({

      message:
        "Student added successfully",

      student,

    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

});


// UPDATE STUDENT
router.put("/:id", async (req, res) => {

  try {

    const updatedStudent =
      await Student.findByIdAndUpdate(

        req.params.id,

        req.body,

        {
          new: true,
        }

      );

    res.status(200).json({

      message:
        "Student updated successfully",

      student:
        updatedStudent,

    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

});


// DELETE STUDENT
router.delete("/:id", async (req, res) => {

  try {

    await Student.findByIdAndDelete(
      req.params.id
    );

    res.status(200).json({

      message:
        "Student deleted successfully",

    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

});

export default router;