/* eslint-disable import/no-cycle */
import { axiosInstance } from '../config/axiosInstance'

export const signInRequest = (userData) => {
   axiosInstance.post('authentication/login', userData)
}
