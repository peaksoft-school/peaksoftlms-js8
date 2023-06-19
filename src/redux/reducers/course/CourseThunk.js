import { createAsyncThunk } from '@reduxjs/toolkit'
import { getCoursesRequest } from '../../../api/courseService'

export const asyncGetCourses = createAsyncThunk(
   'course/getCourse',
   async ({ pageSize, pagination }) => {
      try {
         const { data } = await getCoursesRequest({ pageSize, pagination })
         return data.courseResponses
      } catch (error) {
         return error.response?.data.message
      }
   }
)
