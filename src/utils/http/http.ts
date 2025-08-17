import { message } from "antd";
import { store } from "../../store";

/**
 * Encapusulating axios instance
 * Create interceptor
 */

import axios, {
  AxiosInstance,
  InternalAxiosRequestConfig,
  AxiosResponse,
} from "axios";

// Create axios instance 'http', which can be used to send request
const http: AxiosInstance = axios.create({
  baseURL: "https://www.demo.com",
  timeout: 5000,
});

// Request interceptor: before sending request
http.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  console.log("Request interceptor activated");
  // Get token from Redux store
  const { token } = store.getState().authSlice;
  // Add token to http header

  if (token) {
    // `Authorizaion`is used to take authentication info
    // 'Bearer' indicates a token is taken with
    config.headers["Authorization"] = `Bearer ${token}`;
  }

  return config;
});

// Response interceptor: after receiving response
http.interceptors.response.use((response: AxiosResponse) => {
  console.log("Response interceptor activated");

  // Handle error
  const data = response.data;
  if (data.code != 200) {
    // antd static message method
    message.error(data.code + ":" + data.message);
    return Promise.reject(new Error(data.message));
  } else {
    message.info("Login successfully");
  }

  return response.data;
});

export default http;
