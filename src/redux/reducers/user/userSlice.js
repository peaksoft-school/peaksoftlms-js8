import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   user: [],
   isLoading: false,
   error: '',
}

export const userSlice = createSlice({
   name: 'user',
   initialState,
   reducers: {},
})
export const userActions = userSlice.actions
