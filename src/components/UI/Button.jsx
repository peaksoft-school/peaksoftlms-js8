import React from 'react'
import { Button as MuiButton } from '@mui/material'

const Button = ({ children, variant = 'contained', ...props }) => {
   return (
      <MuiButton {...props} variant={variant}>
         {children}
      </MuiButton>
   )
}

export default Button
