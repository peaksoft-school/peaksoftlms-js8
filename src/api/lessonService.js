import { axiosInstance } from '../config/axiosInstance'

export const getLessonByCourseId = ({ page, size, courseId }) => {
   return axiosInstance.get(
      `lessons?courseId=${courseId}&size=${size}&page=${page}`
   )
}
export const postLessonRequest = (courseId, data) => {
   console.log(courseId)
   return axiosInstance.post('lessons', {
      courseId,
      name: data.lessonName,
   })
}
