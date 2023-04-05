import * as React from 'react'
import TextField from '@mui/material/TextField'

function FullWidthTextField({ variant, placeholder, value, ...rest }) {
   return (
      <div>
         <TextField
            variant={variant}
            placeholder={placeholder}
            value={value}
            {...rest}
         />
      </div>
   )
}
export default FullWidthTextField
