import axios from "axios";

const API =
  `${import.meta.env.VITE_API_URL}/api/classrooms`;

// GET ALL CLASSROOMS
export const getClassrooms =
  async () => {

    const response =
      await axios.get(API);

    return response.data;

  };

// GET SINGLE CLASSROOM
export const getClassroomById =
  async (id) => {

    const response =
      await axios.get(
        `${API}/${id}`
      );

    return response.data;

  };

// CREATE CLASSROOM
export const createClassroom =
  async (classroomData) => {

    const response =
      await axios.post(
        API,
        classroomData
      );

    return response.data;

  };

// DELETE CLASSROOM
export const deleteClassroom =
  async (id) => {

    const response =
      await axios.delete(
        `${API}/${id}`
      );

    return response.data;

  };

// ADD MESSAGE
export const addMessage =
  async (id, text) => {

    const response =
      await axios.post(
        `${API}/${id}/message`,
        { text }
      );

    return response.data;

  };

// ADD STUDENT
export const addStudentToClassroom =
  async (
    classroomId,
    studentId
  ) => {

    const response =
      await axios.post(
        `${API}/${classroomId}/student`,
        { studentId }
      );

    return response.data;

  };

// REMOVE STUDENT
export const removeStudentFromClassroom =
  async (
    classroomId,
    studentId
  ) => {

    const response =
      await axios.delete(
        `${API}/${classroomId}/student`,
        {
          data: {
            studentId,
          },
        }
      );

    return response.data;

  };