import styled from '@emotion/styled'
import TextField from '@mui/material/TextField'

function Input({ variant, placeholder, value, onChange, ref, ...rest }) {
   return (
      <StyledInput
         variant={variant}
         onChange={onChange}
         placeholder={placeholder}
         value={value}
         ref={ref}
         {...rest}
      />
   )
}
export default Input

const StyledInput = styled(TextField)({
   height: '42px',
})
