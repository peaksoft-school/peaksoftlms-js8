import styled from '@emotion/styled'
import TextField from '@mui/material/TextField'
import { forwardRef } from 'react'

const Input = forwardRef(
   ({ variant, placeholder, value, onChange, error, ...rest }, ref) => {
      return (
         <StyledInput
            error={Boolean(error)}
            ref={ref}
            variant={variant}
            onChange={onChange}
            placeholder={placeholder}
            classes={{ root: 'input', focused: 'focus', error: 'invalid' }}
            value={value}
            {...rest}
         />
      )
   }
)
export default Input

const StyledInput = styled(TextField)`
   fieldset {
      border-radius: 10px;
      padding: 10px 8px 10px 18px;
      height: 42px;
   }
   /* width: 30%; */
   input:focus {
      border-radius: 10px;
      border: 2px solid #1f6ed4;
   }
   input:invalid {
      border-radius: 10px;
      border: 2px solid #c91e1e;
   }
`
