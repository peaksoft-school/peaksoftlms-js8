import { axiosInstance } from '../config/axiosInstance'

export const getAllInstructors = (page = 1, size = 10) => {
   return axiosInstance.get(`/instructors?size=${size}&page=${page}`)
}
export const getInstructorsById = (id) => {
   return axiosInstance.get(`instructors/findById?instructorId=${id}`)
}
export const instructorPost = (data) => {
   return axiosInstance.post('/instructors', data)
}
export const instructorPut = (id, value) => {
   return axiosInstance.put(`/instructors?instructorId=${id}`, value)
}
export const instructorDelete = (id) => {
   return axiosInstance.delete('/instructors', {
      params: { instructorId: `${id}` },
   })
}
