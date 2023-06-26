import { axiosInstance } from '../config/axiosInstance'

export const getLessonByCourseId = ({ page, size, courseId }) => {
   return axiosInstance.get(
      `lessons?courseId=${courseId}&size=${size}&page=${page}`
   )
}
export const postLessonRequest = (courseId, data) => {
   return axiosInstance.post('lessons', {
      courseId,
      name: data.lessonName,
   })
}

export const deleteLessonReq = (lessonId) => {
   return axiosInstance.delete(`lessons/${lessonId}`)
}
