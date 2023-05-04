/* eslint-disable import/no-cycle */
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   isLoading: false,
   error: '',
}
export const CourseSlice = createSlice({
   name: 'course',
   initialState,
   reducers: {},
})
