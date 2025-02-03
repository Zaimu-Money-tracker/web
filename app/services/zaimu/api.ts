import axios from "axios";
import { EnvConfig } from "~/config/env.config";

const env = EnvConfig();

export const api = axios.create({
  baseURL: env.zaimu_api_url,
  withCredentials: true,
});

api.interceptors.response.use(
  (res) => res,
  (err) => {
    return Promise.reject(err);
  }
);
