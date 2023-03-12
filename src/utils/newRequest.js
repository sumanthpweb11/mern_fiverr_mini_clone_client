import axios from "axios";

const newRequest = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  // withCredentials: true,
  headers: {
    "Content-type": "application/json",
  },
  // withCredentials: true, // for cookies to come
});

export default newRequest;
