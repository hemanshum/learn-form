import axios from "axios";

export default axios.create({
  baseURL: "https://bfc4-2402-e280-3e63-12f-2140-6017-1f53-b176.ngrok-free.app",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
