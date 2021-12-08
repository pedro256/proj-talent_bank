import axios, { AxiosInstance } from "axios";

export const api:AxiosInstance  = axios.create(
    {
       baseURL: process.env.API_URL||'http://localhost:3001/api'
    }
)