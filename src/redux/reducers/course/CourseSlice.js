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
      builder
         .addCase(asyncGetCourses.fulfilled, (state, { payload }) => {
            state.course = payload
            state.isLoading = false
         })
         .addCase(asyncGetCourses.pending, (state) => {
            state.isLoading = true
         })
         .addCase(asyncGetCourses.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload
         })
   },
})
