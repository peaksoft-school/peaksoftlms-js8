// import { createAsyncThunk } from '@reduxjs/toolkit'
// import {
//    getAllInstructors,
//    instructorDelete,
//    instructorPost,
//    instructorPut,
//    //    instructorPut,
// } from '../../../api/adminService'

// export const asyncGetInstructors = createAsyncThunk(
//    'instructor/asyncGetInstructors',
//    async (_, { rejectWithValue }) => {
//       try {
//          const data = await getAllInstructors()
//          return data.data
//       } catch (error) {
//          return rejectWithValue(error)
//       }
//    }
// )

// export const asyncPostInstructor = createAsyncThunk(
//    'instructor/asyncPostInstructor',
//    async (newData, { rejectWithValue }) => {
//       try {
//          const { data } = await instructorPost(newData)
//          return data.data
//       } catch (error) {
//          return rejectWithValue(error)
//       }
//    }
// )

// export const asyncPutInstructor = createAsyncThunk(
//    'instructor/asyncPutInstructor',
//    async (payload, { rejectWithValue }) => {
//       try {
//          const data = await instructorPut(payload)
//          return data
//       } catch (error) {
//          return rejectWithValue(error)
//       }
//    }
// )

// export const asyncDeleteInstructor = createAsyncThunk(
//    'instructor/asyncDeleteInstructor',
//    async (id, { rejectWithValue }) => {
//       try {
//          return await instructorDelete(id)
//       } catch (error) {
//          return rejectWithValue(error)
//       }
//    }
// )
