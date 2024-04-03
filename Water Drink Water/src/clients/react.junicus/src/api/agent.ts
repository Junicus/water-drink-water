import axios, { AxiosResponse } from "axios";
import { store } from "stores/store";
import { TokenData, UserLogin, Result, CurrentUser } from "lib/types";

axios.defaults.baseURL = import.meta.env.VITE_API_URL;

axios.interceptors.request.use((config) => {
  const token = store.authStore.token;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

const requests = {
  get: <T>(url: string) => axios.get<T>(url).then(responseBody),
  post: <T>(url: string, body: {}) =>
    axios.post<T>(url, body).then(responseBody),
  put: <T>(url: string, body: {}, options?: {}) =>
    axios.put<T>(url, body, options).then(responseBody),
  del: <T>(url: string) => axios.delete<T>(url).then(responseBody),
};

const Account = {
  current: () => requests.get<Result<CurrentUser>>("/profile"),
  login: (user: UserLogin) => requests.post<TokenData>("/login", user),
};

const Consumption = {
  logConsumption: () => requests.post("/logConsumption", {}),
};

const agent = {
  Account,
  Consumption,
};

export default agent;
