import axios from "axios";
import { environment } from "@/infra/env/environment";

export const httpClient = axios.create({
  baseURL: environment.apiUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

httpClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("@avw:token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
