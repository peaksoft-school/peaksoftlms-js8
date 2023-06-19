import { configureStore } from '@reduxjs/toolkit'
import { userSlice } from '../reducers/user/userSlice'
import { CourseSlice } from '../reducers/course/CourseSlice'
import authSlice from '../reducers/auth/auth.slice'
import { groupSlice } from '../reducers/group/groupSilce'

export const store = configureStore({
   reducer: {
      user: userSlice.reducer,
      course: CourseSlice.reducer,
      auth: authSlice.reducer,
      groups: groupSlice.reducer,
   },
})
