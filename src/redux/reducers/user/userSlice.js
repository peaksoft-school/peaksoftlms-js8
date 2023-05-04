import { createSlice } from '@reduxjs/toolkit'
// import {
//    deleteCourses,
//    getAllCourses,
//    getPaginationCourses,
//    postAssignCourses,
//    postCourses,
//    putCourses,
// } from '../../../api/adminService'

const initialState = {
   user: [],
   isAuthorized: false,
   isLoading: false,
   error: '',
}

export const userSlice = createSlice({
   name: 'user',
   initialState,
   reducers: {},
   // extraReducers: (builder) => {
   //    builder
   //       .addCase(getAllCourses.fulfilled, () => {})
   //       .addCase(getAllCourses.pending, () => {})
   //       .addCase(getAllCourses.rejected, () => {})
   //    builder
   //       .addCase(getPaginationCourses.fulfilled, () => {})
   //       .addCase(getPaginationCourses.pending, () => {})
   //       .addCase(getPaginationCourses.rejected, () => {})
   //    builder
   //       .addCase(postCourses.rejected, () => {})
   //       .addCase(postCourses.fulfilled, () => {})
   //       .addCase(postCourses.pending, () => {})
   //    builder
   //       .addCase(postAssignCourses.fulfilled, () => {})
   //       .addCase(postAssignCourses.pending, () => {})
   //       .addCase(postAssignCourses.rejected, () => {})
   //    builder
   //       .addCase(putCourses.fulfilled, () => {})
   //       .addCase(putCourses.pending, () => {})
   //       .addCase(putCourses.rejected, () => {})
   //    builder
   //       .addCase(deleteCourses.fulfilled, () => {})
   //       .addCase(deleteCourses.pending, () => {})
   //       .addCase(deleteCourses.rejected, () => {})
   // },
})
export const userActions = userSlice.actions
