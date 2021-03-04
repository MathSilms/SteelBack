import axios, { AxiosInstance } from 'axios';

export const json: AxiosInstance = axios.create({
  baseURL: `https://jsonplaceholder.typicode.com`,
});
