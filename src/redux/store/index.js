import { configureStore } from '@reduxjs/toolkit'
import adminSlice from '../reducers/admin/adminSlice'

export const store = configureStore({
   reducer: {
      [adminSlice.name]: adminSlice.reducer,
   },
})
