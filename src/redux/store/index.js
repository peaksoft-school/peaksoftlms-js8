/* eslint-disable import/no-cycle */
import { configureStore } from '@reduxjs/toolkit'
import authSlice from '../reducers/auth/authSlice'
import { userSlice } from '../reducers/user/userSlice'

export const store = configureStore({
   reducer: {
      [authSlice.name]: authSlice.reducer,
      user: userSlice.reducer,
   },
})
