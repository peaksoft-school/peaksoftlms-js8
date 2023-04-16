import styled from '@emotion/styled'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Button from './Button'

export const Snackbar = ({ type = 'success', message, text }) => {
   const notify = () => toast[type](message)
   return (
      <>
         <Button type="submit" onClick={notify}>
            {text}
         </Button>
         <SnackBox
            position="top-right"
            pauseOnHover
            type={type}
            autoClose={3000}
         />
      </>
   )
}

const SnackBox = styled(ToastContainer)`
   width: fit-content;
   margin: 0;
   :root {
   }
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
