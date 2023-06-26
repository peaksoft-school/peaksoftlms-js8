import { axiosInstance } from '../config/axiosInstance'

export const getLessonsCourseId = (data) => {
   return axiosInstance.get(`/lessons?courseId=${data.id}&size=${data.size}&page=${data.page}
`)
}
