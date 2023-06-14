import { axiosInstance } from '../config/axiosInstance'

export const getLessonByCourseId = ({ page, size, courseId }) => {
   return axiosInstance.get(
      `lessons?courseId=${courseId}&size=${size}&page=${page}`
   )
}
