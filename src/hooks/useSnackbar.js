import styled from '@emotion/styled'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const useSnackbar = () => {
   const notify = (type, message) => {
      return toast[type](<div>{message}</div>)
   }
   return {
      notify,
      Snackbar: <SnackBox />,
   }
}

const SnackBox = styled(ToastContainer)`
   width: fit-content;
   margin: 0;
   .Toastify__toast {
      width: fit-content;
      padding: 0;
      color: white;
      border-radius: 10px;
      font-weight: 400;
      font-size: 16px;
      line-height: 22px;
      color: #ffffff;
   }
   .Toastify__toast-body {
      flex-direction: row-reverse;
      gap: 10px;
      padding: 0 24px;
   }
   .Toastify__toast-icon > svg {
      fill: white;
   }
   .Toastify__toast--success {
      background-color: #36ac0c;
   }
   .Toastify__toast--error {
      background-color: #c91e1e;
   }
   .Toastify__close-button {
      display: none;
   }
`
