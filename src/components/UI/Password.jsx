import styled from '@emotion/styled'
import {
   IconButton,
   InputAdornment,
   InputLabel,
   TextField,
} from '@mui/material'
import { forwardRef } from 'react'
import { ReactComponent as Visibility } from '../../assets/icons/visibility.svg'
import { ReactComponent as VisibilityOff } from '../../assets/icons/visibilityOff.svg'
import { usePasswordShow } from '../../hooks/passwordShow'

const Password = forwardRef(
   ({ title, placeholder, password, error, ...rest }, ref) => {
      const [showPassword, handleClickShowPassword, handleMouseDownPassword] =
         usePasswordShow()
      return (
         <>
            <PasswordInputLabelStyle htmlFor="outlined-adornment-password">
               {title}
            </PasswordInputLabelStyle>
            <TextFieldStyle
               error={Boolean(error)}
               ref={ref}
               value={password}
               placeholder={placeholder}
               type={showPassword ? 'text' : 'password'}
               {...rest}
               InputProps={{
                  endAdornment: (
                     <InputAdornment position="end">
                        <IconButton
                           onClick={handleClickShowPassword}
                           onMouseDown={handleMouseDownPassword}
                        >
                           {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                     </InputAdornment>
                  ),
               }}
            />
         </>
      )
   }
)

export default Password

const TextFieldStyle = styled(TextField)`
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
