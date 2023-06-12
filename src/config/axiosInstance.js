/* eslint-disable import/no-cycle */
import axios from 'axios'
import { store } from '../redux/store'

<<<<<<< HEAD
const BASE_URL = 'http://peaksoftlms.peaksoftprojects.com/api'
=======
const BASE_URL = 'http://peaksoftlms.peaksoftprojects.com/api/'
>>>>>>> e0c288f8e2449d9aa9fe4631f4cd964ab63e86c8

export const axiosInstance = axios.create({
   baseURL: BASE_URL,
})

axiosInstance.interceptors.request.use(
   (config) => {
<<<<<<< HEAD
=======
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
>>>>>>> e0c288f8e2449d9aa9fe4631f4cd964ab63e86c8
      const newConfig = {
         ...config,
         headers: {
            ...config.headers,
<<<<<<< HEAD
            Authorization:
               'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbkBnbWFpbC5jb20iLCJpYXQiOjE2ODYyNTA1MzQsImV4cCI6MTY4NzY5MDUzNH0.jsBYrAHPEyD3hnQNf8v_kXFzlTudBF7z54DaofVto00',
=======
            Authorization: `Bearer ${store.getState().auth.accessToken}`,
>>>>>>> e0c288f8e2449d9aa9fe4631f4cd964ab63e86c8
         },
      }
      return newConfig
   },
   (error) => {
      return Promise.reject(error)
   }
)
<<<<<<< HEAD
axiosInstance.interceptors.response.use(
   (response) => {
      if (response.status === 401) {
         store.dispatch()
      }
      return response
   },
   (error) => {
=======
fileInstance.interceptors.response.use(
   function (response) {
      return response
   },
   function (error) {
      if (error.response && error.response.status === 401) {
         throw new Error('401 unauthorized')
      }
>>>>>>> e0c288f8e2449d9aa9fe4631f4cd964ab63e86c8
      return Promise.reject(error)
   }
)
