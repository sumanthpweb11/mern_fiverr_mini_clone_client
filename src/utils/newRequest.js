import axios from "axios";

const newRequest = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  // withCredentials: true,
  headers: {
    Authorization: `Bearer ${localStorage.getItem("currentUser")}`,
  },
});

export default newRequest;
