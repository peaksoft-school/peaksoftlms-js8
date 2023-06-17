/* eslint-disable import/no-cycle */
import { configureStore } from '@reduxjs/toolkit'
import { userSlice } from '../reducers/user/userSlice'
import instructorSlice from '../reducers/instructor/instructor.slice'
import { CourseSlice } from '../reducers/course/CourseSlice'
import authSlice from '../reducers/auth/auth.slice'

export const store = configureStore({
   reducer: {
      user: userSlice.reducer,
      [instructorSlice.name]: instructorSlice.reducer,
      course: CourseSlice.reducer,
      auth: authSlice.reducer,
   },
})
