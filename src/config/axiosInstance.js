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
               'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbkBnbWFpbC5jb20iLCJpYXQiOjE2ODQ4NDk0MDgsImV4cCI6MTY4NDg2MzgwOH0.6E7QdU5ymcXwOi5nbBgI6CFsUAJaEbOqTmLMN1dr1Tg',
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
