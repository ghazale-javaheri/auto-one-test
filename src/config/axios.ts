import defaultAxios from "axios";
import { API_PREFIX, API_URL } from "config/constants";

const options = {
  timeout: 100000,
  baseURL: API_URL + API_PREFIX,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
};

export const axios = defaultAxios.create(options);
