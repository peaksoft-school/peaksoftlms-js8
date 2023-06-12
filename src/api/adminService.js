import { axiosInstance } from '../config/axiosInstance'

export const getInstructorById = (id) => {
   return axiosInstance.get('/instructors/findById', {
      params: { instructorId: `${id}` },
   })
}
export const getAllInstructors = (page = 1, size = 10) => {
   return axiosInstance.get(`/instructors?size=${size}&page=${page}`)
}
export const instructorPost = (data) => {
   return axiosInstance.post('/instructors', data)
}
export const instructorPut = (id, values) => {
   console.log(values, 'put')
   return axiosInstance.put(`/instructors?instructorId=${id}`, values)
}
export const instructorDelete = (id) => {
   return axiosInstance.delete('/instructors', {
      params: { instructorId: `${id}` },
   })
}
