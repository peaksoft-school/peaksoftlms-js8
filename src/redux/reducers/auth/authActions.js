/* eslint-disable import/no-cycle */
import { createAsyncThunk } from '@reduxjs/toolkit'
import { signInRequest } from '../../../api/authService'
import { addItemToStorage } from '../../../utlis/helpers/storageHelper'
import {
   CURRENT_PATH,
   JWT_TOKEN_KEY,
   USER_INFO,
   USER_ROLES,
} from '../../../utlis/constants/commons'
import { axiosInstance } from '../../../config/axiosInstance'

export const asyncSignIn = createAsyncThunk(
   'auth/signIn-request',
   async ({ email, navigate }, thunkMethods) => {
      try {
         const userData = {
            email: email.email,
            password: email.password,
         }
         const { data } = await signInRequest(userData)
         const serverData = {
            token: data.token,
            role: data.role,
            email: data.email,
            isAuthorized: data.role !== null && data.token !== null,
         }
         addItemToStorage(serverData.token, JWT_TOKEN_KEY)
         addItemToStorage(
            { role: serverData.role, email: serverData.email },
            USER_INFO
         )

         axiosInstance.defaults.headers.Authorization = `Bearer ${serverData.token}`
         if (data.role === USER_ROLES.ADMIN) {
            navigate(
               `/${CURRENT_PATH.admin.ADMIN}/${CURRENT_PATH.admin.GROUPS}`
            )
         } else if (serverData.role === USER_ROLES.INSTRUCTOR) {
            navigate(
               `/${CURRENT_PATH.instructor.INSTRUCTOR}/${CURRENT_PATH.instructor.COURSES}`
            )
         } else if (serverData.role === USER_ROLES.STUDENT) {
            navigate(
               `/${CURRENT_PATH.student.STUDENT}/${CURRENT_PATH.student.COURSES}`
            )
         }
         return serverData
      } catch (error) {
         return thunkMethods.rejectWithValue(error)
      }
   }
)
