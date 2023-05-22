import { axiosInstance } from '../config/axiosInstance'

export const studentPostRequests = (data) => {
   return axiosInstance.post('/students', data)
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
