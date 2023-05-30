import { axiosInstance } from '../config/axiosInstance'

export const GetCoursesRequest = () => {
   return axiosInstance.get('/api/courses/pagination')
}
