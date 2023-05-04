import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   token: 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbkBnbWFpbC5jb20iLCJpYXQiOjE2ODMwMjI3MTMsImV4cCI6MTY4MzAyNDE1M30.IOsuDHOsRJYseM2GxLp7LSJiUgWa68tLLEVaOYj_Clk',
}

export const authSlice = createSlice({
   name: 'auth',
   initialState,
   reducers: {},
})
