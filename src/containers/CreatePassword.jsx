import styled from '@emotion/styled'
import { Box, Typography } from '@mui/material'
import Grid from '@mui/material/Grid'
import Button from '../components/UI/Button'
import Img from '../assets/images/signIn.png'
import Password from '../components/UI/Password'

const CreatePassword = () => {
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
               <Box component="form" type="submit">
                  <Box>
                     <Password
                        title="Новый пароль:"
                        placeholder="Введите новый пароль"
                     />
                  </Box>
                  <Box>
                     <Password
                        title="Подтверждение:"
                        placeholder="Подтвердите пароль"
                     />
                  </Box>

                  <Box>
                     <ButtonStyle>Создать</ButtonStyle>
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
