import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from '@emotion/styled'
import { authActions } from './redux/reducers/auth/auth.slice'
import { AppRoutes } from './routes/Routes'
import { JWT_TOKEN_KEY, USER_INFO } from './utlis/constants/commons'
import { getStoragedItem } from './utlis/helpers/storageHelper'

function App() {
   const dispatch = useDispatch()
   const [loading, setLoading] = useState(true)
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
      setLoading(false)
   }, [])

   return loading ? <Loader /> : <AppRoutes />
}

const Loader = styled.div`
   width: 66px;
   height: 66px;
   display: grid;
   position: absolute;
   top: 40%;
   left: 50%;
   border: 4.5px solid #0000;
   border-radius: 50%;
   border-color: #dbdcef #0000;
   animation: spinner-e04l1k 1s infinite linear;
   ::before,
   ::after {
      content: '';
      grid-area: 1/1;
      margin: 2.2px;
      border: inherit;
      border-radius: 50%;
   }

   ::before {
      border-color: #474bff #0000;
      animation: inherit;
      animation-duration: 0.5s;
      animation-direction: reverse;
   }

   ::after {
      margin: 8.9px;
   }

   @keyframes spinner-e04l1k {
      100% {
         transform: rotate(1turn);
      }
   }
`

export default App
