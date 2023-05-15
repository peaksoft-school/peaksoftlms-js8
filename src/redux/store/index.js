import { configureStore } from '@reduxjs/toolkit'
import { userSlice } from '../reducers/user/userSlice'
import authSlice from '../reducers/auth/auth.slice'

export const store = configureStore({
   reducer: {
      user: userSlice.reducer,
      [authSlice.name]: authSlice.reducer,
   },
})
