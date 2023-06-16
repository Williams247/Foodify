import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const axiosInstance = axios.create({ baseURL: "https://api.paystack.co" });

axiosInstance.defaults.headers.common[
  "Authorization"
] = `Bearer ${process.env.TEST_SECRET_KEY}`;

axiosInstance.defaults.headers.post["Content-Type"] = "application/json";

export { axiosInstance };
