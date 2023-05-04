import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../config/axiosInstance'

export const getCourses = createAsyncThunk('courses/getCourses', async (id) => {
   try {
      const response = await axiosInstance.get(`api/courses/${id}`)
      return response.data
   } catch (error) {
      return error
   }
})
export const getPagination = createAsyncThunk(
   'courses/getPagination',
   async () => {
      try {
         const response = await axiosInstance.get('api/courses/pagination')
         return response.data
      } catch (error) {
         return error
      }
   }
)
export const postCourse = createAsyncThunk(
   'courses/PostCourse',
   async (data) => {
      try {
         const response = await axiosInstance.post('api/courses/save', data)
         return response.data
      } catch (error) {
         return error
      }
   }
)
export const postAssign = createAsyncThunk('courses/postAssign', async () => {
   try {
      const response = await axiosInstance.get('api/courses/assign')
      return response.data
   } catch (error) {
      return error
   }
})
export const putCourses = createAsyncThunk('courses/putCourses', async (id) => {
   try {
      const response = await axiosInstance.get(`api/courses/${id}`)
      return response.data
   } catch (error) {
      return error
   }
})
export const deleteCourses = createAsyncThunk(
   'courses/deleteCourses',
   async (id) => {
      try {
         const response = await axiosInstance.get(`api/courses/${id}`)
         return response.data
      } catch (error) {
         return error
      }
   }
)
