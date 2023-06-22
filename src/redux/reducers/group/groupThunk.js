import { createAsyncThunk } from '@reduxjs/toolkit'
import { getGroupRequest } from '../../../api/groupService'

export const getGroup = createAsyncThunk(
   'groups/getGroup',
   async ({ pageSize, pagination }) => {
      try {
         const { data } = await getGroupRequest({ pageSize, pagination })
         return data
      } catch (error) {
         return error.response?.data.message
      }
   }
)
