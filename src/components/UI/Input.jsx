import styled from '@emotion/styled'
import TextField from '@mui/material/TextField'

function Input({ variant, placeholder, value, onChange, ...rest }) {
   return (
      <StyledInput
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
   width: '492px',
   height: '42px',
})
