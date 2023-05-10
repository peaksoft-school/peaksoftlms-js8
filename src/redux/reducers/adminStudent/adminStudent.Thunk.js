import { createAsyncThunk } from '@reduxjs/toolkit'
import {
   deleteStudentRequests,
   getAllStudentRequests,
   getStudentRequests,
   studentPostRequests,
} from '../../../api/adminStudent'

export const getStudent = createAsyncThunk(
   'students/getStudent',
   async (_, { rejectWithValue }) => {
      try {
         const { data } = await getStudentRequests()
         console.log(data, 'data')
         return data.data
      } catch (error) {
         console.log(error, 'error')
         return rejectWithValue('Error')
      }
   }
)

export const postStudent = createAsyncThunk(
   'students/postStudent',
   async (data, { dispatch, rejectWithValue }) => {
      console.log('post')
      try {
         await studentPostRequests(data)
         return dispatch(getStudent())
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

export const deleteStudent = createAsyncThunk(
   'students/deleteStudent',
   async (id, { dispatch, rejectWithValue }) => {
      try {
         await deleteStudentRequests(id)
         return dispatch(getStudent())
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

export const getAllStudent = createAsyncThunk(
   'students/getAllStudent',
   async (_, { rejectWithValue }) => {
      try {
         const { data } = await getAllStudentRequests()
         return data.data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)
