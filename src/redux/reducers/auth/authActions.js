/* eslint-disable import/no-cycle */
import { createAsyncThunk } from '@reduxjs/toolkit'
import { signInRequest } from '../../../api/sign_in_service'

export const asyncSignIn = createAsyncThunk(
   'auth/signIn-request',
   async (payload, thunkMethods) => {
      try {
         const userData = {
            email: payload.email,
            password: payload.password,
         }
         const data = await signInRequest(userData)
         console.log(data)
         return data
      } catch (error) {
         return thunkMethods.rejectWithValue(error)
      }
   }
)
