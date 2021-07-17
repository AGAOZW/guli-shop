import axios from "axios";
import Nprogress from "nprogress";
import "nprogress/nprogress.css";
let request = axios.create({
  baseURL: "/api",
});
request.interceptors.request.use(
  (config) => {
    Nprogress.start();
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
request.interceptors.response.use(
  (response) => {
    Nprogress.done();
    return response.data;
  },
  (error) => {
    console.log(error);
    return new Promise(() => {});
  }
);
export default request;
