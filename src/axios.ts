import axios from "axios";

const $axios = axios.create({
  baseURL: import.meta.env.VITE_URL as string,
  //   baseURL: "http://127.0.0.1:8100/",
});

export default $axios;
