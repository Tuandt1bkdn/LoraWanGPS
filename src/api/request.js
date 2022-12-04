import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:5000",
  header: {
    "Content-Type": "application/json",
  },
});