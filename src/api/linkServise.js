import { axiosInstance } from '../config/axiosInstance'

export const postLinkReq = (data) => {
   return axiosInstance.post('link', data)
}
