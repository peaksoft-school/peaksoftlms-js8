import { createSlice } from '@reduxjs/toolkit'

const initState = {
   userId: 0,
   token: '',
   role: 'ADMIN',
   isAuthorized: false,
   isLoading: false,
}
const authSlice = createSlice({
   name: 'auth',
   initialState: initState,
   reducers: {
      login(state, { payload }) {
         console.log(state.token)
         // eslint-disable-next-line no-param-reassign
         state.token = payload.accessToken
         // eslint-disable-next-line no-param-reassign
         state.role = payload.role
         // eslint-disable-next-line no-param-reassign
         state.userId = payload.id
         // eslint-disable-next-line no-param-reassign
         state.isAuthorized = true
      },
   },
   //    extraReducers: (builder) => {
   //       builder
   //          .addCase(asyncLogin.pending, (state) => {
   //             state.isLoading = true
   //          })
   //          .addCase(asyncLogin.rejected, (state, { payload }) => {
   //             state.isLoading = false
   //             state.error = payload
   //          })
   //          .addCase(asyncLogin.fulfilled, (state, { payload }) => {
   //             state.isLoading = false
   //             state.isAuthorized = payload.isAuthorized
   //          })
   //    },
})
export const authActions = authSlice.actions
export default authSlice
