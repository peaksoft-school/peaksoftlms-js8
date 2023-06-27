import { axiosInstance } from '../config/axiosInstance'

export const postTaskReq = (lessonId, data) => {
   return axiosInstance.post(
      '/tasks',
      {
         ...data,
         lessonId,
      },
      {
         params: {
            lessonId,
         },
      }
   )
}
