import { createAsyncThunk } from '@reduxjs/toolkit'
import { getCoursesRequest } from '../../../api/instructorServis'

export const getCourses = createAsyncThunk('course/getCourses', async () => {
   try {
      const { data } = await getCoursesRequest()
      return data.courseResponses
   } catch (error) {
      return error.response.data.message
   }
})
