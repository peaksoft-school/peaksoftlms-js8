import { axiosInstance } from '../config/axiosInstance'

export const studentPostRequests = (data) => {
   return axiosInstance.post('/students', {
      ...data,
      phoneNumber: `+${data.phoneNumber}`,
      link: 'http://localhost:3000/login/',
   })
}
export const getAllStudentRequests = (formStudy) => {
   return axiosInstance.get('/students/getAllForAdmin', {
      params: { formStudy: `${formStudy}` },
   })
}
export const deleteStudentRequests = (id) => {
   return axiosInstance.delete('/students', {
      params: { studentId: `${id}` },
   })
}
export const getGroupAllRequest = () => {
   return axiosInstance.get('/groups/pagination?size=2&page=1')
}
export const updateStudents = (id, values) => {
   return axiosInstance.put(`/students?studentId=${id}`, values)
}
export const getStudentById = (id) => {
   return axiosInstance.get('/students/getById', {
      params: { studentId: `${id}` },
   })
}
export const getStudentByCourseId = (id) => {
   return axiosInstance.get('/students', {
      params: { courseId: `${id}` },
   })
}
export const fileUploadDeleteRequest = (data) => {
   return axiosInstance.delete('/file', data)
}
export const fileUploadPostRequest = (fileLink) => {
   return axiosInstance.post(`/file/${fileLink}`)
}
export const getStudentByGroupId = (id) => {
   return axiosInstance.get('/students/groupId', {
      params: { groupId: `${id}` },
   })
}
export const getVideosRequest = (id) => {
   return axiosInstance.get(`videos/findByLessonId?lessonId=${id}`)
}
export const getPresentationRequest = (id) => {
   return axiosInstance.get(`presentations?lessonId=${id}`)
}

export const getLinkRequest = (id) => {
   return axiosInstance.get(`link?lessonId=${id}`)
}
export const getTaskRequest = (id) => {
   return axiosInstance.get(`task/getById?taskId=${id}`)
}
export const getTaskInnerRequest = (id) => {
   return axiosInstance.get(`task/getById?taskId=${id}`)
}
