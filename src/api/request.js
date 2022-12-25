import axios from "axios";

export default axios.create({
  baseURL: "https://back-end-datn-sor1.vercel.app/",
  header: {
    "Content-Type": "application/json",
  },
});
