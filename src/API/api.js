import axios from "axios";

const API = axios.create({
  baseURL: "https://react-ecommerce-project-backend.onrender.com"
});

export default API;