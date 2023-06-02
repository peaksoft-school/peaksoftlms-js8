import { axiosInstance } from '../config/axiosInstance'

export const studentPostRequests = (data) => {
   console.log(data.phoneNumber)
   return axiosInstance.post('/students', {
      ...data,
      phoneNumber: `+${data.phoneNumber}`,
   })
}
// export const getStudentRequests = (courseId) => {
//    return axiosInstance.get(`/students?courseId=${courseId}`)
// }
export const getAllStudentRequests = (formStudy) => {
   console.log(formStudy, 'formstudy')
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
export const fileUploadPostRequest = (data) => {
   return axiosInstance.post('/file', data)
}

export const updateStudents = (id, values) => {
   console.log(values)
   return axiosInstance.put(
      '/students',
      {
         params: { studentId: `${id}` },
      },
      values
   )
}
export const getStudentById = (id) => {
   return axiosInstance.get('/students/getById', {
      params: { studentId: `${id}` },
   })
}
