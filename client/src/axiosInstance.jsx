import axios from "axios";

// Create a new Axios instance
const axiosInstance = axios.create();

// Add a request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // Store the start time in the request config
    config.metadata = { startTime: new Date() };
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    // Calculate the response time
    const endTime = new Date();
    const startTime = response.config.metadata.startTime;
    const duration = endTime - startTime;

    // Log the response time
    console.log(`Response time for ${response.config.url}: ${duration}ms`);

    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
