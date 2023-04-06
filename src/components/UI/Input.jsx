import * as React from 'react'
import TextField from '@mui/material/TextField'

function FullWidthTextField({ variant, placeholder, value, ...rest }) {
   return (
      <TextField
         variant={variant}
         placeholder={placeholder}
         value={value}
         {...rest}
      />
   )
}
export default FullWidthTextField
