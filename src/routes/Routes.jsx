import React from 'react'
import {
   BrowserRouter as Router,
   Navigate,
   Route,
   Routes,
} from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Groups } from '../pages/admin/Groups'
import { Courses } from '../pages/admin/Courses'
import { Courses as InstructorCourses } from '../pages/instructor/courses/Courses'
import { Instructors } from '../pages/admin/Instructors'
import { Students } from '../pages/admin/Students'
import { AdminLayout } from '../layout/AdminLayout'
import { ProtectedRoute } from './ProtectedRoute'
import { CURRENT_PATH, USER_ROLES } from '../utlis/constants/commons'
import { MyCourses } from '../pages/student/my-courses/MyCourses'
import SignInSide from '../containers/SignIn'
import InstructorLayout from '../layout/InstructorLayout'
import StudentLayout from '../layout/StudentLayout'
import { AuthManagementRoute } from './AuthManagementRoute'

export const AppRoutes = () => {
   const role = useSelector((state) => state.auth.role)
   const isAuthorized = useSelector((state) => state.auth.isAuthorized)

   const isAllowed = (roles) => {
      const rolesValues = Object.values(roles)

      return rolesValues.includes(role)
   }

   return (
      <Router>
         <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route
               path="/login"
               element={
                  <AuthManagementRoute
                     isAuth={isAuthorized}
                     component={SignInSide}
                  />
               }
            />
            <Route
               path={`/${CURRENT_PATH.admin.ADMIN}/*`}
               element={
                  <ProtectedRoute
                     isAllowed={isAllowed(USER_ROLES)}
                     role={role}
                     isAuth={isAuthorized}
                     component={AdminLayout}
                  />
               }
            >
               <Route path={CURRENT_PATH.admin.GROUPS} element={<Groups />} />
               <Route path={CURRENT_PATH.admin.COURSES} element={<Courses />} />
               <Route
                  path={CURRENT_PATH.admin.INSTRUCTOR}
                  element={<Instructors />}
               />
               <Route
                  path={CURRENT_PATH.admin.STUDENTS}
                  element={<Students />}
               />
            </Route>
            <Route
               path={`/${CURRENT_PATH.instructor.INSTRUCTOR}/*`}
               element={
                  <ProtectedRoute
                     isAllowed={isAllowed(USER_ROLES)}
                     isAuth={isAuthorized}
                     fallBackPath="."
                     component={InstructorLayout}
                  />
               }
            >
               <Route
                  path={CURRENT_PATH.instructor.COURSES}
                  element={<InstructorCourses />}
               />
            </Route>

            <Route
               path={`/${CURRENT_PATH.student.STUDENT}/*`}
               element={
                  <ProtectedRoute
                     isAllowed={isAllowed(USER_ROLES)}
                     isAuth={isAuthorized}
                     fallBackPath="."
                     component={StudentLayout}
                  />
               }
            >
               <Route
                  path={CURRENT_PATH.student.COURSES}
                  element={<MyCourses />}
               />
            </Route>
         </Routes>
      </Router>
   )
}
