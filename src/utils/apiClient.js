import axios from "axios";
import { store } from "../vuex/store";

export default function apiClient() {
  const token = store.state.auth.data.token;
  const instance = axios.create({
    baseURL: `http://127.0.0.1:8000`,
    withCredentials: true,
  });

  instance.interceptors.request.use(function (config) {
    config.headers.Authorization = token ? `Bearer ${token}` : "";
    return config;
  });

  instance.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error?.response?.status === 401) {
        store.dispatch("deleteUser");
        return Promise.reject();
      }

      return Promise.reject(error);
    }
  );

  return instance;
}
