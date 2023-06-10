import axios from 'axios'
import { store } from '../redux/store'

const BASE_URL = 'http://peaksoftlms.peaksoftprojects.com/api/'

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
               'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbkBnbWFpbC5jb20iLCJpYXQiOjE2ODYyNTA1MzQsImV4cCI6MTY4NzY5MDUzNH0.jsBYrAHPEyD3hnQNf8v_kXFzlTudBF7z54DaofVto00',
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
