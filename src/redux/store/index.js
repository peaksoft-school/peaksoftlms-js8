import { configureStore } from '@reduxjs/toolkit'
import { userSlice } from '../reducers/user/userSlice'
import adminStudentSlice from '../reducers/adminStudent/adminStudent.Slice'

export const store = configureStore({
   reducer: {
      user: userSlice.reducer,
      [adminStudentSlice.name]: adminStudentSlice.reducer,
   },
})
