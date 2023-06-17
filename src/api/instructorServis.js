import { axiosInstance } from '../config/axiosInstance'

export const getCoursesRequest = () => {
   return axiosInstance.get('/courses/pagination?size=2&page=1')
}
export const deleteCourseId = (id) => {
   return axiosInstance.delete(`/courses/${id}`)
}
