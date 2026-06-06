import Attendance from "../models/Attendance.js";

// START SESSION
export const startSession = async (
  req,
  res
) => {

  try {

    const { teacherId } = req.body;

    const sessionCode =
      Math.random()
        .toString(36)
        .substring(2, 8)
        .toUpperCase();

    const session =
      await Attendance.create({

        teacher: teacherId,

        sessionCode,

        active: true,

      });

    res.status(201).json({

      success: true,

      session,

    });

  } catch (error) {

    console.log(error);

    res.status(500).json({

      success: false,
      message: "Failed to start session",

    });

  }

};

// END SESSION
export const endSession = async (
  req,
  res
) => {

  try {

    const { sessionId } = req.body;

    const session =
      await Attendance.findByIdAndUpdate(

        sessionId,

        {
          active: false,
        },

        {
          new: true,
        }

      );

    res.json({

      success: true,
      session,

    });

  } catch (error) {

    console.log(error);

    res.status(500).json({

      success: false,
      message: "Failed to end session",

    });

  }

};

// MARK ATTENDANCE
export const markAttendance = async (
  req,
  res
) => {

  try {

    const {
      sessionCode,
      studentId,
      name,
      rollNo,
    } = req.body;

    const session =
      await Attendance.findOne({

        sessionCode,
        active: true,

      });

    if (!session) {

      return res.status(404).json({

        success: false,
        message: "Session not found",

      });

    }

    // CHECK DUPLICATE
    const alreadyMarked =
      session.students.find(

        (s) =>
          s.studentId?.toString() ===
          studentId

      );

    if (alreadyMarked) {

      return res.status(400).json({

        success: false,
        message:
          "Attendance already marked",

      });

    }

    session.students.push({

      studentId,
      name,
      rollNo,
      status: "verified",

    });

    await session.save();

    res.json({

      success: true,
      message:
        "Attendance marked successfully",

      session,

    });

  } catch (error) {

    console.log(error);

    res.status(500).json({

      success: false,
      message:
        "Failed to mark attendance",

    });

  }

};

// GET SESSION
export const getSession = async (
  req,
  res
) => {

  try {

    const { sessionCode } = req.params;

    const session =
      await Attendance.findOne({

        sessionCode,

      });

    if (!session) {

      return res.status(404).json({

        success: false,
        message: "Session not found",

      });

    }

    res.json({

      success: true,
      session,

    });

  } catch (error) {

    console.log(error);

    res.status(500).json({

      success: false,
      message:
        "Failed to get session",

    });

  }

};