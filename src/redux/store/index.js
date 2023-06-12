<<<<<<< HEAD
// import { configureStore } from '@reduxjs/toolkit'
// import adminSlice from '../reducers/admin/adminSlice'

// export const store = configureStore({
//    reducer: {
//       [adminSlice.name]: adminSlice.reducer,
//    },
// })
=======
/* eslint-disable import/no-cycle */
import { configureStore } from '@reduxjs/toolkit'
import { userSlice } from '../reducers/user/userSlice'
import { CourseSlice } from '../reducers/course/CourseSlice'
import authSlice from '../reducers/auth/auth.slice'

export const store = configureStore({
   reducer: {
      user: userSlice.reducer,
      course: CourseSlice.reducer,
      auth: authSlice.reducer,
   },
})
>>>>>>> e0c288f8e2449d9aa9fe4631f4cd964ab63e86c8
