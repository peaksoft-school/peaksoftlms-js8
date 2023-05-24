import { axiosInstance } from '../config/axiosInstance'

export const studentPostRequests = (data) => {
   console.log(data.phoneNumber, 'dataPost')
   return axiosInstance.post('/students')
}
export const getStudentRequests = () => {
   return axiosInstance.get('students')
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
