import { axiosInstance } from '../config/axiosInstance'

export const getGroupRequest = ({ pageSize, pagination }) => {
   return axiosInstance.get(
      `groups/pagination?size=${pageSize}&page=${pagination}`
   )
}
export const deleteGroupsId = (id) => {
   return axiosInstance.delete(`/groups?groupId=${id}`)
}
export const postGroupRequest = (data) => {
   return axiosInstance.post('/post', data)
}
