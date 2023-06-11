import axios from "axios";

export const api = axios.create({
  // baseURL: "https://kenzieshoes.onrender.com/api/",
  baseURL: "http://localhost:3000/",
  timeout: 5000,
});
