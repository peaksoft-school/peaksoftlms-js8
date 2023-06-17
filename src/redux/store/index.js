import { configureStore } from '@reduxjs/toolkit'
import { userSlice } from '../reducers/user/userSlice'
import instructorSlice from '../reducers/instructor/instructor.slice'

export const store = configureStore({
   reducer: {
      user: userSlice.reducer,
      [instructorSlice.name]: instructorSlice.reducer,
   },
})
