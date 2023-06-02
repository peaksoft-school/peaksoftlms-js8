import React from 'react'
import { Button as MuiButton } from '@mui/material'

const Button = ({
   children,
   variant = 'contained',
   borderstyle = 'rounded',
   ...props
}) => {
   return (
      <MuiButton {...props} borderstyle={borderstyle} variant={variant}>
         {children}
      </MuiButton>
   )
}

export default Button
