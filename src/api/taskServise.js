import { axiosInstance } from '../config/axiosInstance'

export const postTaskReq = (data) => {
   return axiosInstance.post('/task', data)
}
