import styled from '@emotion/styled'
import TextField from '@mui/material/TextField'
import { useRef } from 'react'

function Input({ variant, placeholder, value, onChange, ...rest }) {
   const inputRef = useRef(null)

   return (
      <StyledInput
         ref={inputRef}
         variant={variant}
         onChange={onChange}
         placeholder={placeholder}
         value={value}
         {...rest}
      />
   )
}
export default Input

const StyledInput = styled(TextField)({
   height: 42,
})
