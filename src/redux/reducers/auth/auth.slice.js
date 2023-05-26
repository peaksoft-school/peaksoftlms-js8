import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   linkPhoto: '',
   error: '',
   isloading: '',
   token: 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbkBnbWFpbC5jb20iLCJpYXQiOjE2ODUwMTkyNjUsImV4cCI6MTY4NjQ1OTI2NX0.uavXfXcGp8_TRffX5HulDlwPx3JkLlmj9EulxwCrzMY',
}
export const authSlice = createSlice({
   name: 'auth',
   initialState,
   reducers: {},
})

export const AuthActions = authSlice.actions
