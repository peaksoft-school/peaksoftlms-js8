import styled from '@emotion/styled'
// eslint-disable-next-line import/no-extraneous-dependencies
import { ToastContainer, toast } from 'react-toastify'
// eslint-disable-next-line import/no-extraneous-dependencies
import 'react-toastify/dist/ReactToastify.css'

export const useSnackbar = (type, message) => {
   const notify = () => {
      return toast[type](<div>{message}</div>)
   }
   return {
      notify,
      Snackbar: <SnackBox type={type} />,
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
   .Toastify__close-button {
      display: none;
   }
   .Toastify__progress-bar {
      background-color: ${(props) =>
         props.type === 'success' ? '#36AC0C' : '#C91E1E'};
   }
`
