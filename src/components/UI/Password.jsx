import styled from '@emotion/styled'
import { useState } from 'react'
import {
   IconButton,
   InputAdornment,
   OutlinedInput,
   InputLabel,
} from '@mui/material'
import { ReactComponent as Visibility } from '../../assets/icons/visibility.svg'
import { ReactComponent as VisibilityOff } from '../../assets/icons/visibilityOff.svg'

const Password = ({ title, placeholder }) => {
   const [showPassword, setShowPassword] = useState(true)

   const handleClickShowPassword = () => setShowPassword((show) => !show)

   const handleMouseDownPassword = (event) => {
      event.preventDefault()
   }
   return (
      <>
         <PasswordInputLabelStyle htmlFor="outlined-adornment-password">
            {title}
         </PasswordInputLabelStyle>
         <OutlinedInputStyle
            id="outlined-adornment-password"
            placeholder={placeholder}
            type={showPassword ? 'password' : 'text'}
            endAdornment={
               <InputAdornment position="end">
                  <IconButton
                     aria-label="toggle password visibility"
                     onClick={handleClickShowPassword}
                     onMouseDown={handleMouseDownPassword}
                     edge="end"
                  >
                     {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
               </InputAdornment>
            }
         />
      </>
   )
}

export default Password

const OutlinedInputStyle = styled(OutlinedInput)`
   margin-left: 20%;
   margin-top: 10px;
   width: 440px;
   height: 56px;
   border-radius: 10px;
   padding: 10px, 8px, 10px, 22px;
`
const PasswordInputLabelStyle = styled(InputLabel)`
   margin-left: 20%;
   margin-top: 30px;
   font-family: ${(props) => props.theme.typography.allVariants.fontFamily};
   font-weight: 400;
   font-size: 16px;
   line-height: 21.79px;
`
