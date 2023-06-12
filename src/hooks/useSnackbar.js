import styled from '@emotion/styled'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const useSnackbar = () => {
   const [type, setType] = useState()
   const notify = (types, message) => {
      toast[types](message)
      setType(types)
   }
   return {
      notify,
      Snackbar: <SnackBox type={type} autoClose={1500} />,
   }
}

const SnackBox = styled(ToastContainer)`
   width: fit-content;
   margin: 0;
   .Toastify__toast {
      width: fit-content;
      padding: 0;
      background-color: ${(props) =>
         props.type === 'success' ? '#36AC0C' : '#C91E1E'};
      color: white;
      border-radius: 10px;
   }
   .Toastify__toast-body {
      flex-direction: row-reverse;
      gap: 10px;
      padding: 0 24px;
   }
   .Toastify__toast-icon > svg {
      fill: white;
   }
   .Toastify__close-button {
      display: none;
   }
   .Toastify__progress-bar {
      background-color: ${(props) =>
         props.type === 'success' ? '#36AC0C' : '#C91E1E'};
   }
`
