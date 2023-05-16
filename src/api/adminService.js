import { axiosInstance } from '../config/axiosInstance'

export const getAllInstructors = (size = 10, page = 1) => {
   return axiosInstance.get(`api/instructors?size=${size}&page=${page}`)
}
// // export const getInstructors = () => {
// //    return axiosInstance.get('instructors/findById')
// // }
// export const instructorPost = () => {
//    return axiosInstance.post('api/instructors')
// }
// export const instructorPut = () => {
//    return axiosInstance.put('api/instructors')
// }
// export const instructorDelete = () => {
//    return axiosInstance.delete('api/instructors')
// }
