import { axiosInstance } from '../config/axiosInstance'

export const postPresentationReq = (data) => {
   return axiosInstance.post('presentations', data)
}
