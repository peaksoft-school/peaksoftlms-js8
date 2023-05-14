/* eslint-disable import/no-cycle */
import { createSlice } from '@reduxjs/toolkit'
import { asyncSignIn } from './authActions'

const initialState = {
   userId: '',
   accessToken: '',
   role: '',
   isAuthorized: false,
   isLoading: false,
   error: null,
}

const authSlice = createSlice({
   name: 'auth',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(asyncSignIn.pending, (state) => {
            state.isLoading = true
         })
         .addCase(asyncSignIn.rejected, (state, { payload }) => {
            state.isLoading = false
            state.error = payload.error
         })
         .addCase(asyncSignIn.fulfilled, (state) => {
            state.isLoading = false
         })
   },
})
export const authActions = authSlice.actions

export default authSlice
