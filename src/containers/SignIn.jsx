import styled from '@emotion/styled'
import { useForm } from 'react-hook-form'
import { Box, InputLabel, Link, Typography } from '@mui/material'
import Grid from '@mui/material/Grid'
import Input from '../components/UI/Input'
import Button from '../components/UI/Button'
import Img from '../assets/images/signIn.png'
import Password from '../components/UI/Password'

const SignInSide = () => {
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm()

   const onSubmit = (data) => {
      console.log(data)
   }

   return (
      <GridContainerStyle container>
         <GridStyle1>
            <BoxStyle>
               <img src={Img} alt="" />
            </BoxStyle>
         </GridStyle1>
         <GridStyle2>
            <Box container>
               <TypographyStyle align="center">
                  Добро пожаловать в <span>PEAKSOFT LMS</span> !
               </TypographyStyle>
               <Box component="form" onSubmit={handleSubmit(onSubmit)}>
                  <Box>
                     <LoginInputLabelStyle htmlFor="outlined-adornment-password">
                        Логин:
                     </LoginInputLabelStyle>
                     <InputStyle
                        helperText={errors.email?.message}
                        error={errors.email}
                        type="email"
                        placeholder="Введите логин"
                        {...register('email', {
                           required: 'Электронная почта обязательна',
                           pattern: {
                              value: /\S+@\S+\.\S+/,
                              message: 'Неверный формат электронной почты',
                           },
                        })}
                     />
                  </Box>
                  <Box>
                     <Password
                        helperText={errors.password?.message}
                        error={errors.password}
                        title="Пароль:"
                        type="password"
                        placeholder="Введите пароль"
                        {...register('password', {
                           required: 'Необходим пароль',
                           minLength: {
                              value: 8,
                              message:
                                 'Пароль должен содержать не менее 8 символов',
                           },
                        })}
                     />
                  </Box>

                  <LinkStyle to="/">Забыли пароль?</LinkStyle>

                  <Box>
                     <ButtonStyle type="submit">Войти</ButtonStyle>
                  </Box>
               </Box>
            </Box>
         </GridStyle2>
      </GridContainerStyle>
   )
}

export default SignInSide

const GridContainerStyle = styled(Grid)`
   width: 100%;
   height: 100vh;
   display: 'flex';
   justify-content: 'space-between';
`

const GridStyle1 = styled(Grid)`
   width: 46%;
   background-color: #3772ff;
`

const GridStyle2 = styled(Grid)`
   width: 54%;
   box-sizing: 'border-box';
   background-color: #ffffff;
`

const BoxStyle = styled(Box)`
   display: flex;
   justify-content: center;
   align-items: center;
   margin-top: 15%;
`
const TypographyStyle = styled(Typography)`
   font-family: ${(props) => props.theme.typography.allVariants.fontFamily};
   font-style: ' normal';
   font-weight: 600;
   font-size: 24px;
   color: #1f1f1f;
   line-height: 33px;
   span {
      color: #fa2349;
   }
   width: 254px;
   height: 66px;
   margin-top: 15%;
   margin-left: 33%;
`
const InputStyle = styled(Input)`
   margin-left: 20%;
   margin-top: 10px;
   width: 440px;
   height: 42px;
   border-radius: 10px;
   padding: 10px, 8px, 10px, 22px;
`
const LinkStyle = styled(Link)`
   margin-left: 65%;
   margin-top: 9px;
`
const ButtonStyle = styled(Button)`
   margin-left: 36%;
   margin-top: 28px;
   width: 214px;
   height: 51px;
   border-radius: 10px;
   background-color: #3772ff;
   font-family: ${(props) => props.theme.typography.allVariants.fontFamily};
   font-style: ' normal';
   font-weight: 600;
   font-size: 20px;
   line-height: 27.24px;
   color: #ffffff;
`
const LoginInputLabelStyle = styled(InputLabel)`
   margin-left: 20%;
   margin-top: 54px;
   font-family: ${(props) => props.theme.typography.allVariants.fontFamily};
   font-weight: 400;
   font-size: 16px;
   line-height: 21.79px;
`
