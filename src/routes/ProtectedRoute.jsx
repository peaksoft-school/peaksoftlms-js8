/* eslint-disable no-nested-ternary */
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { CURRENT_PATH, USER_ROLES } from '../utlis/constants/commons'

export const ProtectedRoute = ({
   component: Component,
   isAllowed,
   role,
   isAuth,
}) => {
   const location = useLocation()

   if (isAuth && isAllowed) {
      const mainRoute =
         role === USER_ROLES.ADMIN
            ? CURRENT_PATH.admin.ADMIN
            : role === USER_ROLES.STUDENT
            ? CURRENT_PATH.student.STUDENT
            : CURRENT_PATH.instructor.INSTRUCTOR

      const nestedRoute =
         role === USER_ROLES.ADMIN
            ? CURRENT_PATH.admin.GROUPS
            : role === USER_ROLES.STUDENT
            ? CURRENT_PATH.student.COURSES
            : CURRENT_PATH.instructor.COURSES

      if (location.pathname === '/admin') {
         return <Navigate to={`/${mainRoute}/${nestedRoute}`} />
      }
      return (
         <>
            <Component />
            <Outlet />
         </>
      )
   }

   return <Navigate replace to="/login" />
}
