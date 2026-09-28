import Classroom from "../models/classrooms.js";

// CREATE CLASSROOM
export const createClassroom =
  async (req, res) => {

    try {

      const {
        name,
        year,
        division,
        branch,
        description,
        code,
      } = req.body;

      const classroom =
        await Classroom.create({
          name,
          year,
          division,
          branch,
          description,
          code,
        });

      res.status(201).json({
        success: true,
        classroom,
      });

    } catch (error) {

      res.status(500).json({
        success: false,
        message: error.message,
      });

    }

  };

// GET ALL CLASSROOMS
export const getClassrooms =
  async (req, res) => {

    try {

      const classrooms =
        await Classroom.find();

      res.status(200).json({
        success: true,
        classrooms,
      });

    } catch (error) {

      res.status(500).json({
        success: false,
        message: error.message,
      });

    }

  };

// GET SINGLE CLASSROOM
export const getClassroomById =
  async (req, res) => {

    try {

      const classroom =
        await Classroom.findById(
          req.params.id
        ).populate("students");

      if (!classroom) {

        return res.status(404).json({
          success: false,
          message:
            "Classroom not found",
        });

      }

      res.status(200).json({
        success: true,
        classroom,
      });

    } catch (error) {

      res.status(500).json({
        success: false,
        message: error.message,
      });

    }

  };

// DELETE CLASSROOM
export const deleteClassroom =
  async (req, res) => {

    try {

      const classroom =
        await Classroom.findById(
          req.params.id
        );

      if (!classroom) {

        return res.status(404).json({
          success: false,
          message:
            "Classroom not found",
        });

      }

      await Classroom.findByIdAndDelete(
        req.params.id
      );

      res.status(200).json({
        success: true,
        message:
          "Classroom deleted successfully",
      });

    } catch (error) {

      res.status(500).json({
        success: false,
        message: error.message,
      });

    }

  };

// ADD MESSAGE
export const addMessage =
  async (req, res) => {

    try {

      const { text } = req.body;

      const classroom =
        await Classroom.findById(
          req.params.id
        );

      if (!classroom) {

        return res.status(404).json({
          success: false,
          message:
            "Classroom not found",
        });

      }

      classroom.messages.unshift({
        text,
      });

      await classroom.save();

      res.status(200).json({
        success: true,
        messages:
          classroom.messages,
      });

    } catch (error) {

      res.status(500).json({
        success: false,
        message: error.message,
      });

    }

  };

// ADD STUDENT
export const addStudentToClassroom =
  async (req, res) => {

    try {

      const { studentId } =
        req.body;

      const classroom =
        await Classroom.findById(
          req.params.id
        );

      if (!classroom) {

        return res.status(404).json({
          success: false,
          message:
            "Classroom not found",
        });

      }

      if (
        classroom.students.includes(
          studentId
        )
      ) {

        return res.status(400).json({
          success: false,
          message:
            "Student already exists",
        });

      }

      classroom.students.push(
        studentId
      );

      await classroom.save();

      res.status(200).json({
        success: true,
        classroom,
      });

    } catch (error) {

      res.status(500).json({
        success: false,
        message: error.message,
      });

    }

  };

// REMOVE STUDENT
export const removeStudentFromClassroom =
  async (req, res) => {

    try {

      const { studentId } =
        req.body;

      const classroom =
        await Classroom.findById(
          req.params.id
        );

      if (!classroom) {

        return res.status(404).json({
          success: false,
          message:
            "Classroom not found",
        });

      }

      classroom.students =
        classroom.students.filter(
          (student) =>
            student.toString() !==
            studentId
        );

      await classroom.save();

      res.status(200).json({
        success: true,
        classroom,
      });

    } catch (error) {

      res.status(500).json({
        success: false,
        message: error.message,
      });

    }

  };