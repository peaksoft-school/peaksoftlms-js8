import { axiosInstance } from '../config/axiosInstance'

export const postTaskReq = (lessonId, data) => {
   return axiosInstance.post('/task', {
      lessonId,
      ...data,
   })
}
