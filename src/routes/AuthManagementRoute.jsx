import { Navigate } from 'react-router-dom'

export const AuthManagementRoute = ({ component: Component, isAuth }) => {
   if (isAuth) {
      return <Navigate replace to="/admin" />
   }

   return <Component />
}
