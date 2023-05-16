import axios from 'axios'
import { store } from '../redux/store'

const BASE_URL = 'http://ec2-52-59-224-218.eu-central-1.compute.amazonaws.com/'

export const axiosInstance = axios.create({
   baseURL: BASE_URL,
})

axiosInstance.interceptors.request.use(
   (config) => {
      const newConfig = {
         ...config,
         headers: {
            ...config.headers,
            Authorization:
               'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbkBnbWFpbC5jb20iLCJpYXQiOjE2ODQyNDEwMTAsImV4cCI6MTY4NDI1NTQxMH0.cNR3qt7Q2sf5GatmReTAiViWNSFT40gpD8QbEDbScmw',
         },
      }
      return newConfig
   },
   (error) => {
      return Promise.reject(error)
   }
)
axiosInstance.interceptors.response.use(
   (response) => {
      if (response.status === 401) {
         store.dispatch()
      }
      return response
   },
   (error) => {
      return Promise.reject(error)
   }
)
