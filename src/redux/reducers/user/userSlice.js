<<<<<<< HEAD
=======
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   user: [],
   isAuthorized: false,
   isLoading: false,
   error: '',
}

export const userSlice = createSlice({
   name: 'user',
   initialState,
   reducers: {},
})
export const userActions = userSlice.actions
>>>>>>> e0c288f8e2449d9aa9fe4631f4cd964ab63e86c8
