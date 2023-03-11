import axios from "axios";

const newRequest = axios.create({
  baseURL: import.meta.env.REACT_APP_DEV,
  // withCredentials: true,
  headers: {
    Authorization: localStorage.getItem("currentUser"),
  },
});

export default newRequest;
