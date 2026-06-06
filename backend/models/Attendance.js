import mongoose from "mongoose";

const attendanceSchema = new mongoose.Schema({

  teacher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },

  sessionCode: {
    type: String,
    required: true,
  },

  active: {
    type: Boolean,
    default: true,
  },

  students: [
    {
      studentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },

      name: String,

      rollNo: String,

      status: {
        type: String,
        enum: [
          "verified",
          "pending",
          "failed",
        ],
        default: "pending",
      },

      markedAt: {
        type: Date,
        default: Date.now,
      },
    },
  ],

  createdAt: {
    type: Date,
    default: Date.now,
  },

});

const Attendance = mongoose.model(
  "Attendance",
  attendanceSchema
);

export default Attendance;