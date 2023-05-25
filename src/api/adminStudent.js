import { axiosInstance } from '../config/axiosInstance'

export const studentPostRequests = (data) => {
   return axiosInstance.post('/students', {
      ...data,
      phoneNumber: `+${data.phoneNumber}`,
   })
}
export const getStudentRequests = (courseId) => {
   return axiosInstance.get(`/students?courseId=${courseId}`)
}
// export const getAllStudentRequests = () => {
//    return axiosInstance.get('/api/students/all')
// }
// export const deleteStudentRequests = (id) => {
//    return axiosInstance.delete(`/api/students/${id}`)
// }
export const getGroupAllRequest = () => {
   return axiosInstance.get('/groups/pagination?size=2&page=1')
}
