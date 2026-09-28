import axios from "axios";

const API =
  `${import.meta.env.VITE_API_URL}/api/attendance`;

// START SESSION
export const startAttendanceSession =
  async (teacherId) => {

    const response =
      await axios.post(

        `${API}/start`,

        {
          teacherId,
        }

      );

    return response.data;

  };

// END SESSION
export const endAttendanceSession =
  async (sessionId) => {

    const response =
      await axios.post(

        `${API}/end`,

        {
          sessionId,
        }

      );

    return response.data;

  };

// GET SESSION
export const getSession =
  async (sessionCode) => {

    const response =
      await axios.get(

        `${API}/${sessionCode}`

      );

    return response.data;

  };

// MARK ATTENDANCE
export const markAttendance =
  async (attendanceData) => {

    const response =
      await axios.post(

        `${API}/mark`,
        attendanceData

      );

    return response.data;

  };