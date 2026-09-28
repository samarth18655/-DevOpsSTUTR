import axios from "axios";

const API = `${import.meta.env.VITE_API_URL}/api/auth`;
// LOGIN
export const loginStudent = async (
  email,
  password,
  role
) => {

  const response = await axios.post(
    `${API}/login`,
    {
      email,
      password,
      role,
    }
  );

  return response.data;

};

// REGISTER
export const registerStudent = async (
  studentData
) => {

  const response = await axios.post(
    `${API}/register`,
    studentData
  );

  return response.data;

};