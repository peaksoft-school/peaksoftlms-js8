import { createSlice } from '@reduxjs/toolkit'
import { asyncGetCourses } from './CourseThunk'

const initialState = {
   isLoading: false,
   error: '',
   course: [],
}
export const CourseSlice = createSlice({
   name: 'course',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder.addCase(asyncGetCourses.fulfilled, (state, { payload }) => {
         state.course = payload
      })
   },
})
