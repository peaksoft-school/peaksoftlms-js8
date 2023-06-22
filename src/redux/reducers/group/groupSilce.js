import { createSlice } from '@reduxjs/toolkit'
import { getGroup } from './groupThunk'

const initialState = {
   groups: [],
   error: '',
   isLoading: false,
}

export const groupSlice = createSlice({
   name: 'groups',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(getGroup.fulfilled, (state, action) => {
            state.groups = action.payload
            state.isLoading = false
            state.error = ''
         })
         .addCase(getGroup.pending, (state) => {
            state.isLoading = true
         })
         .addCase(getGroup.rejected, (state, action) => {
            state.groups = action.payload
            state.isLoading = false
            state.error = action.payload
         })
   },
})
export const groupActions = groupSlice.actions
