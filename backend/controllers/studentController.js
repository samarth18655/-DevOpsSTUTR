import Student from "../models/Student.js";

// ADD STUDENT
export const addStudent = async (
  req,
  res
) => {

  try {

    const {
      name,
      email,
      rollNo,
      year,
      division,
      branch,
    } = req.body;

    // CHECK EXISTING
    const existingStudent =
      await Student.findOne({

        $or: [
          { email },
          { rollNo },
        ],

      });

    if (existingStudent) {

      return res.status(400).json({

        success: false,
        message:
          "Student already exists",

      });

    }

    const student =
      await Student.create({

        name,
        email,
        rollNo,
        year,
        division,
        branch,

      });

    res.status(201).json({

      success: true,
      message:
        "Student added successfully",

      student,

    });

  } catch (error) {

    console.log(error);

    res.status(500).json({

      success: false,
      message:
        "Failed to add student",

    });

  }

};

// GET ALL STUDENTS
export const getStudents = async (
  req,
  res
) => {

  try {

    const students =
      await Student.find().sort({

        createdAt: -1,

      });

    res.json({

      success: true,
      students,

    });

  } catch (error) {

    console.log(error);

    res.status(500).json({

      success: false,
      message:
        "Failed to fetch students",

    });

  }

};

// DELETE STUDENT
export const deleteStudent = async (
  req,
  res
) => {

  try {

    const { id } = req.params;

    await Student.findByIdAndDelete(id);

    res.json({

      success: true,
      message:
        "Student deleted successfully",

    });

  } catch (error) {

    console.log(error);

    res.status(500).json({

      success: false,
      message:
        "Failed to delete student",

    });

  }

};