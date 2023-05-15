import { createSlice } from '@reduxjs/toolkit'
import {
   asyncDeleteInstructor,
   asyncGetInstructors,
   asyncPostInstructor,
   asyncPutInstructor,
} from './adminActions'

const initialState = {
   teacher: [],
   isLoading: false,
   error: '',
   token: '',
}
const adminSlice = createSlice({
   name: 'admin',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(asyncPostInstructor.pending, (state) => {
            state.isLoading = true
            state.error = ''
         })
         .addCase(asyncPostInstructor.rejected, (state) => {
            state.isLoading = false
            state.error = 'error'
         })
         .addCase(asyncPostInstructor.fulfilled, (state, { payload }) => {
            state.isLoading = false
            state.error = ''
            state.teacher.push(payload)
         })
         .addCase(asyncGetInstructors.pending, (state) => {
            state.isLoading = true
            state.error = ''
         })
         .addCase(asyncGetInstructors.rejected, (state) => {
            state.isLoading = false
            state.error = 'error'
         })
         .addCase(asyncGetInstructors.fulfilled, (state, { payload }) => {
            state.isLoading = false
            state.error = ''
            state.teacher = payload
         })
         .addCase(asyncPutInstructor.pending, (state) => {
            state.isLoading = true
            state.error = ''
         })
         .addCase(asyncPutInstructor.rejected, (state) => {
            state.isLoading = false
            state.error = 'error'
         })
         .addCase(asyncPutInstructor.fulfilled, (state, { payload }) => {
            state.isLoading = false
            state.error = ''
            state.teacher = payload
         })
         .addCase(asyncDeleteInstructor.pending, (state) => {
            state.isLoading = true
         })
         .addCase(asyncDeleteInstructor.rejected, (state) => {
            state.isLoading = false
            state.error = 'error'
         })
         .addCase(asyncDeleteInstructor.fulfilled, (state, { payload }) => {
            state.isLoading = false
            state.error = ''
            state.teacher = state.teacher.filter(
               (item) => item.id !== payload.id
            )
         })
   },
})

export default adminSlice
