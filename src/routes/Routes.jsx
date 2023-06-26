import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Courses } from '../pages/admin/course/Courses'
import { Courses as InstructorCourses } from '../pages/instructor/courses/Courses'
import { Instructors } from '../pages/admin/Instructors'
import { Students } from '../pages/admin/Students'
import { AdminLayout } from '../layout/AdminLayout'
import { ProtectedRoute } from './ProtectedRoute'
import { CURRENT_PATH, USER_ROLES } from '../utlis/constants/commons'
import { MyCourses } from '../pages/student/my-courses/MyCourses'
import InstructorLayout from '../layout/InstructorLayout'
import BasicTabs from '../pages/admin/course/Tabs'
import SignInSide from '../containers/SignIn'
import StudentLayout from '../layout/StudentLayout'
import { AuthManagementRoute } from './AuthManagementRoute'
import { Groups } from '../pages/admin/groups/Groups'
import GroupsInnerPage from '../pages/admin/groups/GroupsInnerPage'
import { CoursesInstructor } from '../pages/admin/CoursesInstructor'
import CreatePassword from '../containers/CreatePassword'
import MyCourseInnerPage from '../pages/student/my-courses/MyCourseInnerPage'
import Materials from '../pages/instructor/courses/Materials'
import TabsMaterials from '../pages/instructor/courses/TabsMaterial/TabsMaterial'
import InstructorStudents from '../pages/instructor/courses/Students'

export const AppRoutes = () => {
   const role = useSelector((state) => state.auth.role)
   const isAuthorized = useSelector((state) => state.auth.isAuthorized)
   const isAllowed = (roles) => {
      const rolesValues = Object.values(roles)

      return rolesValues.includes(role)
   }
   return (
      <Routes>
         <Route path="/" element={<Navigate to="/login" />} />
         <Route path="login/:userId" element={<CreatePassword />} />
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
            <Route
               path={CURRENT_PATH.admin.GROUPS_DETAIL}
               element={<GroupsInnerPage />}
            />
            <Route path={CURRENT_PATH.admin.COURSES} element={<Courses />} />
            <Route path="courses/:courseId" element={<BasicTabs />} />

            <Route
               path={CURRENT_PATH.admin.INSTRUCTOR}
               element={<Instructors />}
            />
            <Route path={CURRENT_PATH.admin.STUDENTS} element={<Students />} />
         </Route>

         <Route
            path={`/${CURRENT_PATH.instructor.INSTRUCTOR}/*`}
            element={
               <ProtectedRoute
                  isAllowed={isAllowed(USER_ROLES)}
                  isAuth={isAuthorized}
                  component={InstructorLayout}
               />
            }
         >
            <Route
               path={CURRENT_PATH.instructor.COURSES}
               element={<InstructorCourses />}
            />
            <Route
               path={CURRENT_PATH.instructor.COURSES}
               element={<CoursesInstructor />}
            />
            <Route
               path={CURRENT_PATH.instructor.MATERIALS}
               element={<Materials />}
            />{' '}
            <Route
               path={CURRENT_PATH.instructor.COURSES_DETAIL}
               element={<InstructorStudents />}
            />
            <Route path="courses/:courseId" element={<TabsMaterials />} />
         </Route>
         <Route
            path={CURRENT_PATH.admin.INSTRUCTOR}
            element={
               <ProtectedRoute
                  isAllowed={isAllowed(USER_ROLES.ADMIN)}
                  fallBackPath="/"
                  component={Instructors}
               />
            }
         />

         <Route
            path={`/${CURRENT_PATH.student.STUDENT}/*`}
            element={
               <ProtectedRoute
                  isAllowed={isAllowed(USER_ROLES)}
                  isAuth={isAuthorized}
                  component={StudentLayout}
               />
            }
         >
            <Route
               path={CURRENT_PATH.student.COURSES}
               element={<MyCourses />}
            />
            <Route
               path={CURRENT_PATH.student.COURSES_DETAIL}
               element={<MyCourseInnerPage />}
            />
         </Route>
      </Routes>
   )
}
