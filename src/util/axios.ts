import axios, { AxiosRequestConfig } from 'axios'

export const axiosConfig: AxiosRequestConfig = {
  baseURL: 'src/data/mock_data.json',
  timeout: 100000,
  headers: {
    'Content-Type': 'application/json',
  },
}

export const client = axios.create(axiosConfig)
