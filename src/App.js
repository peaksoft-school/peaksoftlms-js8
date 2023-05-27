import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { authActions } from './redux/reducers/auth/auth.slice'
import { AppRoutes } from './routes/Routes'
import { JWT_TOKEN_KEY, USER_INFO } from './utlis/constants/commons'
import { getStoragedItem } from './utlis/helpers/storageHelper'

function App() {
   const dispatch = useDispatch()
   useEffect(() => {
      const accessToken = getStoragedItem(JWT_TOKEN_KEY)
      const userInfo = getStoragedItem(USER_INFO)
      if (Boolean(accessToken) && Boolean(userInfo)) {
         const loggedUser = {
            token: accessToken,
            userInfo,
         }
         dispatch(authActions.autoLogin(loggedUser))
      }
   }, [])

   return <AppRoutes />
}

export default App
