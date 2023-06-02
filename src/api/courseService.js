import { axiosInstance } from '../config/axiosInstance'

export const getCoursesRequest = ({ pageSize, pagination }) => {
   return axiosInstance.get(
      `api/courses/pagination?size=${pageSize}&page=${pagination}`
   )
}

export const deleteCourseById = (id) => {
   return axiosInstance.delete(`api/courses/${id}`)
}
export const putCourses = (data) => {
   return axiosInstance.put(`api/courses`, data)
}

export const imagePostService = (payload) => {
   return axiosInstance.post('api/file', payload)
}

export const getStudentsRequest = (id) => {
   return axiosInstance.get(`api/students?courseId=${id}`)
}
export const getTeacherDetail = () => {
   return axiosInstance.get('api/instructors?size=50&page=1')
}
export const postAsiign = () => {
   return axiosInstance.post('api/courses/assign')
}
