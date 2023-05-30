import axios from 'axios'

const BASE_URL = 'http://peaksoftlms.peaksoftprojects.com/'
const store = []

export const axiosInstance = axios.create({
   baseURL: BASE_URL,
})

axiosInstance.interceptors.request.use(
   function (config) {
      const newConfig = {
         ...config,
         headers: {
            ...config.headers,
            Authorization: store.getState().auth.token,
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
