import axios from "axios";

const $axios = axios.create({
  baseURL: import.meta.env.VITE_URL as string,
});

export default $axios;
