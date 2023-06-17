import axios from 'axios'

const BASE_URL = 'http://peaksoftlms.peaksoftprojects.com/api'
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
            Authorization:
               'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJpbnN0cnVjdG9yQGdtYWlsLmNvbSIsImlhdCI6MTY4Njk4NzE5OSwiZXhwIjoxNjg4NDI3MTk5fQ.IeBElhDoH2DMbMMbSrDKAQ87TLPehl_4Hw96sfcG6VM',
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
