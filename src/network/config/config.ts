import axios, { AxiosRequestConfig } from "axios";
import { API_URL } from "config/envVariables";
import { errorHandling } from "./utils";

export class AxiosService {
  instance = axios.create({
    baseURL: API_URL,
  });

  get<T>(
    url: string,
    params?: any,
    config: AxiosRequestConfig = {}
  ): Promise<T> {
    return this.instance
      .get(url, { params, ...config })
      .then(({ data }) => data)
      .catch((error) => errorHandling(error));
  }

  post<T>(
    url: string,
    params?: any,
    config: AxiosRequestConfig = {}
  ): Promise<T> {
    return this.instance
      .post(url, params, config)
      .then(({ data }) => data)
      .catch((error) => errorHandling(error));
  }

  delete<T>(
    url: string,
    params?: any,
    config: AxiosRequestConfig = {}
  ): Promise<T> {
    return this.instance
      .delete(url, { data: params, ...config })
      .then(({ data }) => data)
      .catch(errorHandling);
  }

  put<T>(
    url: string,
    params: any,
    config: AxiosRequestConfig = {}
  ): Promise<T> {
    return this.instance
      .put(url, params, config)
      .then(({ data }) => data)
      .catch(errorHandling);
  }
}
