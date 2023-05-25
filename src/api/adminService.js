import { axiosInstance } from '../config/axiosInstance'

export const getAllInstructors = (page = 1, size = 10) => {
   return axiosInstance.get(`api/instructors?size=${size}&page=${page}`)
}
// export const getInstructors = () => {
//    return axiosInstance.get('instructors/findById')
// }
export const instructorPost = (data) => {
   return axiosInstance.post('api/instructors', data)
}
export const instructorPut = (teacher, teacherId) => {
   return axiosInstance.put(`api/instructors/${teacherId}`, teacher)
}
export const instructorDelete = (id) => {
   return axiosInstance.delete(`api/instructors/${id}`)
}
