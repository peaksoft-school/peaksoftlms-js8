import { createSlice } from '@reduxjs/toolkit'
// import { getAllStudent, getStudent } from './adminStudent.Thunk'

const initialState = {
   students: [],
}
const adminStudentSlice = createSlice({
   name: 'adminStudent',
   initialState,
   reducers: {},
   extraReducers: () => {
      // builder.addCase(getStudent.fulfilled, (state, { payload }) => {
      //    // eslint-disable-next-line no-param-reassign
      //    state.students = payload
      // })
      // builder.addCase(getAllStudent.fulfilled, (state, action) => {
      //    // eslint-disable-next-line no-param-reassign
      //    state.students = action.payload
      // })
   },
})

export const adminStudentAction = adminStudentSlice.actions
export default adminStudentSlice
