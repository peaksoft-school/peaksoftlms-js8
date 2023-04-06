import React from 'react'
import { Button as MuiButton } from '@mui/material'

const Button = ({
   children,
   variant = 'contained',
   borderStyle = 'rounded',
   ...props
}) => {
   return (
      <MuiButton {...props} borderStyle={borderStyle} variant={variant}>
         {children}
      </MuiButton>
   )
}

export default Button
