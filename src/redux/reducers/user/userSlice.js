import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   user: [],
   email: '',
   password: '',
   isAuthorized: false,
   isLoading: false,
   error: '',
}

export const userSlice = createSlice({
   name: 'user',
   initialState,
   reducers: {},
   extraReducers: {},
})
export const userActions = userSlice.actions
