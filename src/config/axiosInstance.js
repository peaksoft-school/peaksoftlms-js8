/* eslint-disable import/no-cycle */
import axios from 'axios'
import { store } from '../redux/store'

const BASE_URL =
   'http://ec2-52-59-224-218.eu-central-1.compute.amazonaws.com/api/'

export const axiosInstance = axios.create({
   baseURL: BASE_URL,
})

axiosInstance.interceptors.request.use(
   (config) => {
      const newConfig = {
         ...config,
         headers: {
            ...config.headers,
            'Content-Type': 'application/json',
            Authorization:
               'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbkBnbWFpbC5jb20iLCJpYXQiOjE2ODQwNTE0MjQsImV4cCI6MTY4NDA2NTgyNH0.jr-BZIgQ7lHCLAValTAYoNqML4MpmCxlv1Q2ztbKu_U',
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
