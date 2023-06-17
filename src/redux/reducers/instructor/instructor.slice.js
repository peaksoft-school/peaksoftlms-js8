/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'
import { getCourses } from './instructorThunk'

const initialState = {
   course: [],
   isLoading: false,
   error: 'Error',
}

const instructorSlice = createSlice({
   name: 'instructor',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder.addCase(getCourses.fulfilled, (state, { payload }) => {
         state.course = payload
      })
   },
})

export const instructorAction = instructorSlice.actions
export default instructorSlice
