import styled from '@emotion/styled'
import React from 'react'
import { ToastContainer, toast } from 'react-toastify'

export const SnackBar = ({ text, type }) => {
   const notify = () => toast[type](text)

   return (
      <div>
         <button type="submit" onClick={notify}>
            Notify!
         </button>
         <Snackbar autoClose={false} type={type} />
      </div>
   )
}

const Snackbar = styled(ToastContainer)`
   .Toastify__toast {
      color: white;
      background-color: ${({ type }) => (type === 'success' ? 'green' : 'red')};
      border-radius: 10px;
   }
   .Toastify__toast-body {
      display: flex;
      flex-direction: row-reverse;
   }
   .Toastify__toast-icon {
   }
`
