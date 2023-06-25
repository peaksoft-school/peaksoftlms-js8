import styled from '@emotion/styled'
import { Box, Typography } from '@mui/material'
import Grid from '@mui/material/Grid'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import Button from '../components/UI/Button'
import Img from '../assets/images/signIn.png'
import Password from '../components/UI/Password'
import { useConfirmPassword } from '../hooks/confirmPassword'
import { resetPassword } from '../api/authService'
import { removeItemFromStorage } from '../utlis/helpers/storageHelper'
import { JWT_TOKEN_KEY, USER_INFO } from '../utlis/constants/commons'

const CreatePassword = () => {
   const { userId } = useParams()
   const navigate = useNavigate()
   useEffect(() => {
      removeItemFromStorage(JWT_TOKEN_KEY)
      removeItemFromStorage(USER_INFO)
   }, [])

   const submitHandler = async (password) => {
      const data = {
         password,
         id: userId,
      }

      try {
         await resetPassword(data)
         return navigate('/login')
      } catch (error) {
         return error
      }
   }

   const [
      password,
      confirmPassword,
      error,
      handlePasswordChange,
      handleConfirmPasswordChange,
      handleSubmit,
   ] = useConfirmPassword(submitHandler)

   return (
      <GridContainerStyle container>
         <GridStyle1>
            <BoxStyle>
               <img src={Img} alt="" />
            </BoxStyle>
         </GridStyle1>
         <GridStyle2>
            <Box container>
               <TypographyStyle align="center">Создать пароль</TypographyStyle>
               <Box component="form" onSubmit={handleSubmit}>
                  <Box>
                     <Password
                        title="Новый пароль:"
                        placeholder="Введите новый пароль"
                        value={password}
                        onChange={handlePasswordChange}
                        error={!!error}
                        helperText={error}
                     />
                  </Box>
                  <Box>
                     <Password
                        title="Подтверждение:"
                        placeholder="Подтвердите пароль"
                        value={confirmPassword}
                        onChange={handleConfirmPasswordChange}
                        error={!!error}
                        helperText={error}
                     />
                  </Box>

                  <Box>
                     <ButtonStyle type="submit">Создать</ButtonStyle>
                  </Box>
               </Box>
            </Box>
         </GridStyle2>
      </GridContainerStyle>
   )
}

export default CreatePassword

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

const ButtonStyle = styled(Button)`
   margin-left: 36%;
   margin-top: 53px;
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
const TypographyStyle = styled(Typography)`
   font-family: ${(props) => props.theme.typography.allVariants.fontFamily};
   font-style: ' normal';
   font-weight: 600;
   font-size: 24px;
   color: #1f1f1f;
   line-height: 33px;
   width: 254px;
   height: 66px;
   margin-top: 15%;
   margin-left: 33%;
`
