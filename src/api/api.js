import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../config/axiosInstance'

export const getAllInstructors = createAsyncThunk(
   'courses/getallCourses',
   async () => {
      try {
         const response = await axiosInstance.get('url')
         return response.data
      } catch (error) {
         return error
      }
   }
)
