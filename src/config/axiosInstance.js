import axios from 'axios'
import { store } from '../redux/store'

const BASE_URL = 'http://peaksoftlms.peaksoftprojects.com/'

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
               'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbkBnbWFpbC5jb20iLCJpYXQiOjE2ODUwMjM5NjgsImV4cCI6MTY4NjQ2Mzk2OH0.d_myYkQdDii0RCnrNA054FzAxMOE3t6w97ZoWnZ-1DM',
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
