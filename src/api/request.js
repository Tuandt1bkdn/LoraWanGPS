import axios from "axios";

export default axios.create({
  baseURL: "https://back-end-datn.vercel.app/",
  header: {
    "Content-Type": "application/json",
  },
});
