import { Navigate } from 'react-router-dom'

export const ProtectedRoute = ({
   component: Component,
   fallBackPath,
   isAllowed,
}) => {
   if (!isAllowed) {
      return <Navigate to={fallBackPath} />
   }
   return <Component />
}
