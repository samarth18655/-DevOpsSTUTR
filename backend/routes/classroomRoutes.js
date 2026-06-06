import express from "express";

import {
  createClassroom,
  getClassrooms,
  getClassroomById,
  deleteClassroom,
  addMessage,
  addStudentToClassroom,
  removeStudentFromClassroom,
} from "../controllers/classroomController.js";

const router = express.Router();

// CREATE CLASSROOM
router.post(
  "/",
  createClassroom
);

// GET ALL CLASSROOMS
router.get(
  "/",
  getClassrooms
);

// GET SINGLE CLASSROOM
router.get(
  "/:id",
  getClassroomById
);

// DELETE CLASSROOM
router.delete(
  "/:id",
  deleteClassroom
);

// ADD MESSAGE
router.post(
  "/:id/message",
  addMessage
);

// ADD STUDENT
router.post(
  "/:id/student",
  addStudentToClassroom
);

// REMOVE STUDENT
router.delete(
  "/:id/student",
  removeStudentFromClassroom
);

export default router;