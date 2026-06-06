import express from "express";

import {
  startSession,
  endSession,
  markAttendance,
  getSession,
} from "../controllers/attendanceController.js";

const router = express.Router();

// START SESSION
router.post(
  "/start",
  startSession
);

// END SESSION
router.post(
  "/end",
  endSession
);

// MARK ATTENDANCE
router.post(
  "/mark",
  markAttendance
);

// GET SESSION
router.get(
  "/:sessionCode",
  getSession
);

export default router;