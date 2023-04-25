import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Groups } from '../pages/admin/Groups'
import { Courses } from '../pages/admin/Courses'
import { Courses as InstructorCourses } from '../pages/instructor/courses/Courses'
import { Instructors } from '../pages/admin/Instructors'
import { Students } from '../pages/admin/Students'
import { AdminLayout } from '../layout/AdminLayout'
import { ProtectedRoute } from './ProtectedRoute'
import { USER_ROLES } from '../utlis/constants/commons'
import { MyCourses } from '../pages/student/my-courses/MyCourses'

export const AppRoutes = () => {
   const currentrole = ''
   const isAllowed = (roles) => {
      return roles.includes(currentrole)
   }
   return (
      <Routes>
         <Route
            path="admin"
            element={
               <ProtectedRoute
                  isAllowed={isAllowed(USER_ROLES.ADMIN)}
                  fallBackPath="/"
                  component={AdminLayout}
               />
            }
         />
         <Route
            path="groups"
            element={
               <ProtectedRoute
                  isAllowed={isAllowed(USER_ROLES.ADMIN)}
                  fallBackPath="/"
                  component={Groups}
               />
            }
         />
         <Route
            path="courses"
            element={
               <ProtectedRoute
                  isAllowed={isAllowed(USER_ROLES.ADMIN)}
                  fallBackPath="/"
                  component={Courses}
               />
            }
         />
         <Route
            path="instructor"
            element={
               <ProtectedRoute
                  isAllowed={isAllowed(USER_ROLES.ADMIN)}
                  fallBackPath="/"
                  component={Instructors}
               />
            }
         />
         <Route
            path="students"
            element={
               <ProtectedRoute
                  isAllowed={isAllowed(USER_ROLES.ADMIN)}
                  fallBackPath="/"
                  component={Students}
               />
            }
         />
         <Route
            path="instCourses"
            element={
               <ProtectedRoute
                  isAllowed={isAllowed(USER_ROLES.INSTRUCTOR)}
                  fallBackPath="/"
                  component={InstructorCourses}
               />
            }
         />
         <Route
            path="MyCourses"
            element={
               <ProtectedRoute
                  isAllowed={isAllowed(USER_ROLES.STUDENT)}
                  fallBackPath="/"
                  component={MyCourses}
               />
            }
         />
      </Routes>
   )
}
