import { axiosInstance } from '../config/axiosInstance'

export const postVideoLesson = (lessonId, data) => {
   return axiosInstance.post('videos', {
      lessonId,
      ...data,
   })
}
