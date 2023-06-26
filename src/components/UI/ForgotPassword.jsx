import styled from '@emotion/styled'
import { useState } from 'react'
import Input from './Input'
import Button from './Button'
import ModalWindow from './Modal'
import { forgotPassword } from '../../api/authService'

const ForgotPassword = ({ open, onClose }) => {
   const [email, setEmail] = useState()

   const resetPasswordhandler = async () => {
      const data = {
         link: 'http://localhost:3000/login',
         email,
      }

      try {
         await forgotPassword(data)
      } catch (error) {
         console.log(error)
      }
   }

   const changeEmail = (e) => {
      setEmail(e.target.value)
   }

   return (
      <ModalWindow open={open} onClose={onClose}>
         <Container>
            <Header>
               <p>Забыли пароль</p>
            </Header>
            <div>
               <StyleP>Вам будет отправлена ссылка для сброса пароля</StyleP>
               <div>
                  <InputStyle
                     value={email}
                     onChange={changeEmail}
                     placeholder="Введите ваш Email"
                  />
               </div>
               <ButtonStyle onClick={resetPasswordhandler}>
                  Отправить
               </ButtonStyle>
            </div>
         </Container>
      </ModalWindow>
   )
}

export default ForgotPassword

const Container = styled.div`
   width: 541px;
   border-radius: 10px;
   box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
   margin: 0 auto;
`
const Header = styled.div`
   height: 68px;
   border-radius: 10px 10px 0px 0px;
   background-color: ${(props) => props.theme.palette.primary.main};
   display: flex;
   align-items: center;
   justify-content: center;
   p {
      width: 160px;
      height: 27px;
      font-family: ${(props) => props.theme.typography.allVariants.fontFamily};
      font-weight: 400;
      font-size: 20px;
      color: #ffffff;
      line-height: 27px;
      align-items: 'center';
   }
`

const StyleP = styled.p`
   margin-left: 25px;
   margin-top: 16px;
   color: #87898e;
   font-size: 14px;
   line-height: 16px;
`
const InputStyle = styled(Input)`
   width: 491px;
   margin-left: 25px;
`
const ButtonStyle = styled(Button)`
   width: 483px;
   height: 42px;
   margin-left: 30px;
   padding: 10px, 24px, 10px, 24px;
   margin-top: 20px;
   margin-bottom: 25px;
`
