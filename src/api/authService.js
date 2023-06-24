/* eslint-disable import/no-cycle */
import { axiosInstance } from '../config/axiosInstance'

export const signInRequest = (userData) => {
   return axiosInstance.post('authentication/login', userData)
}

export const resetPassword = (data) => {
   return axiosInstance.post(`authentication/reset_password`, data)
}
