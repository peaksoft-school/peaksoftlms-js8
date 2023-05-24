/* eslint-disable no-param-reassign */
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
         .addCase(asyncSignIn.fulfilled, (state, { payload }) => {
            state.isAuthorized = payload.isAuthorized
            state.isLoading = false
            state.role = payload.role
         })
   },
})
export const authActions = authSlice.actions

export default authSlice
