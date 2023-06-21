import { axiosInstance, fileInstance } from '../config/axiosInstance'

export const getGroupRequest = ({ pageSize, pagination }) => {
   return axiosInstance.get(
      `groups/pagination?size=${pageSize}&page=${pagination}`
   )
}
export const deleteGroupsId = (id) => {
   return axiosInstance.delete(`/groups?groupId=${id}`)
}
export const postGroupRequest = (data) => {
   return axiosInstance.post(`groups`, data)
}
export const fileRequest = (file) => {
   return fileInstance.post('file', file)
}
export const putGroupRequest = (data) => {
   return axiosInstance.put(`groups?groupId=${data.groupId}`, data)
}
export const getTableRequest = (id) => {
   return axiosInstance.get(`students/groupId?groupId=${id}`, id)
}
export const groupPostAssignRequest = (id) => {
   return axiosInstance.post(`/groups/assign?groupId=${id}&courseId=${id}`)
}
