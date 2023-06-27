import { axiosInstance, fileInstance } from '../config/axiosInstance'

export const getCoursesRequest = ({ pageSize, pagination }) => {
   return axiosInstance.get(
      `courses/pagination?size=${pageSize}&page=${pagination}`
   )
}

export const deleteCourseById = (id) => {
   return axiosInstance.delete(`courses/${id}`)
}
export const putCourses = (data) => {
   console.log(data)
   return axiosInstance.put(`courses?courseId=${data.courseId}`, data)
}

export const imagePostService = (payload) => {
   return fileInstance.post('file', payload)
}

export const getStudentsRequest = (id) => {
   return axiosInstance.get(`students?courseId=${id}`)
}
export const getTeacherDetail = () => {
   return axiosInstance.get('instructors?size=50&page=1')
}
export const postAsiign = (instructor, courseId) => {
   return axiosInstance.post('/courses/assign', {
      instructorIds: [instructor],
      courseId,
   })
}
