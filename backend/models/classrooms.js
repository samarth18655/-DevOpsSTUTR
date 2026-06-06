import mongoose from "mongoose";

const classroomSchema =
  new mongoose.Schema(
    {
      name: {
        type: String,
        required: true,
      },

      year: {
        type: String,
        required: true,
      },

      division: {
        type: String,
        required: true,
      },

      branch: {
        type: String,
        required: true,
      },

      description: {
        type: String,
      },

      code: {
        type: String,
        unique: true,
      },

      students: [
        {
          type:
            mongoose.Schema.Types.ObjectId,
          ref: "Student",
        },
      ],

      messages: [
        {
          text: String,
          createdAt: {
            type: Date,
            default: Date.now,
          },
        },
      ],
    },
    {
      timestamps: true,
    }
  );

export default mongoose.model(
  "Classroom",
  classroomSchema
);