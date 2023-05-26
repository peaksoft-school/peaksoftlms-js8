import axios from 'axios'
import { store } from '../redux/store'

const BASE_URL = 'http://peaksoftlms.peaksoftprojects.com'

export const axiosInstance = axios.create({
   baseURL: BASE_URL,
})

axiosInstance.interceptors.request.use(
   function (config) {
      const newConfig = {
         ...config,
         headers: {
            ...config.headers,
            Authorization: `Bearer ${store.getState().auth.token}`,
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
export const fileInstance = axios.create({
   baseURL: 'http://peaksoftlms.peaksoftprojects.com/',
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
            Authorization: `Bearer ${store.getState().auth.token}`,
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
