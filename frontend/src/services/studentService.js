import axios from "axios";

const API =
  "http://localhost:5001/api/student-management";


// GET STUDENTS
export const getStudents =
  async () => {

    const response =
      await axios.get(API);

    return response.data;

};


// ADD STUDENT
export const addStudent =
  async (studentData) => {

    const response =
      await axios.post(
        API,
        studentData
      );

    return response.data;

};


// UPDATE STUDENT
export const updateStudent =
  async (
    id,
    studentData
  ) => {

    const response =
      await axios.put(

        `${API}/${id}`,

        studentData

      );

    return response.data;

};


// DELETE STUDENT
export const deleteStudent =
  async (id) => {

    const response =
      await axios.delete(
        `${API}/${id}`
      );

    return response.data;

};