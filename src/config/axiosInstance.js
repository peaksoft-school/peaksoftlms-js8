import axios from 'axios'
import { store } from '../redux/store'

const BASE_URL = 'http://peaksoftlms.peaksoftprojects.com/api/'

export const axiosInstance = axios.create({
   baseURL: BASE_URL,
})

axiosInstance.interceptors.request.use(
   function (config) {
      const newConfig = {
         ...config,
         headers: {
            ...config.headers,
            Authorization:
               'Bearere eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbkBnbWFpbC5jb20iLCJpYXQiOjE2ODYwMzE2OTIsImV4cCI6MTY4NzQ3MTY5Mn0.f1jHWk5NQM1GXgj2Rxgrxr0DpLwhLFds_yiQ2Pi-TO4',
         },
      }
      return newConfig
   },
   function (error) {
      return Promise.reject(error)
   }
)
axiosInstance.interceptors.response.use(
   function (response) {
      if (response.status === 401) {
         store.dispatch()
      }
      return response
   },
   function (error) {
      return Promise.reject(error)
   }
)
