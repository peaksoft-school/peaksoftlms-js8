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
               'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbkBnbWFpbC5jb20iLCJpYXQiOjE2ODQxNDI0NzgsImV4cCI6MTY4NDE1Njg3OH0.3WlURBcLgra_3LWYsoto6_asc_wBAi-6QUpJV9eSxBw',
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
