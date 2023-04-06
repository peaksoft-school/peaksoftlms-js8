import styled from '@emotion/styled'
import TextField from '@mui/material/TextField'
import { forwardRef } from 'react'

const Input = forwardRef(
   ({ variant, placeholder, value, onChange, ...rest }, ref) => {
      return (
         <StyledInput
            ref={ref}
            variant={variant}
            onChange={onChange}
            placeholder={placeholder}
            value={value}
            {...rest}
         />
      )
   }
)
export default Input

const StyledInput = styled(TextField)({
   width: '30%',
   borderRadius: 120,
})
