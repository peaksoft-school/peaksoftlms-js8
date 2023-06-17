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
            Authorization: `Bearer ${store.getState().auth.accessToken}`,
            ...config.headers,
            'Content-Type': 'application/json',
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
export const fileInstance = axios.create({
   baseURL: BASE_URL,
   headers: {
      'Content-Type': 'multipart/form-data',
   },
})
fileInstance.interceptors.request.use(
   function (config) {
      const newConfig = {
         ...config,
         headers: {
            ...config.headers,
            Authorization: `Bearer ${store.getState().auth.accessToken}`,
         },
      }
      return newConfig
   },
   function (error) {
      return Promise.reject(error)
   }
)
fileInstance.interceptors.response.use(
   function (response) {
      return response
   },
   function (error) {
      if (error.response && error.response.status === 401) {
         throw new Error('401 unauthorized')
      }
      return Promise.reject(error)
   }
)
