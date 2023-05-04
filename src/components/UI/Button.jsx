import React from 'react'
import { Button as MuiButton } from '@mui/material'

const Button = ({
   children,
   onClick,
   variant = 'contained',
   borderStyle = 'rounded',
   ...props
}) => {
   return (
      <MuiButton
         {...props}
         onClick={onClick}
         borderStyle={borderStyle}
         variant={variant}
      >
         {children}
      </MuiButton>
   )
}

export default Button
