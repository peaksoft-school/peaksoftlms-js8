import { useState } from 'react'
import styled from '@emotion/styled'
import { useFormik } from 'formik'
import PhoneInput from 'react-phone-input-2'
import Input from '../UI/Input'
import ModalWindow from '../UI/Modal'
import Button from '../UI/Button'
import 'react-phone-input-2/lib/style.css'

const onlyCountries = ['kg', 'ru', 'kz']
export const ModalInstructor = ({ addNewData, open, onClose }) => {
   const [phoneNumber, setPhoneNumber] = useState('')

   const onSubmitHandler = ({
      firstName,
      lastName,
      email,
      password,
      special,
   }) => {
      const newData = {
         firstName,
         lastName,
         phoneNumber,
         email,
         password,
         special,
      }
      addNewData(newData)
   }

   const formik = useFormik({
      initialValues: {
         firstName: '',
         lastName: '',
         email: '',
         password: '',
         special: '',
      },
      onSubmit: (values) => {
         return onSubmitHandler(values)
      },
   })
   const { handleChange, handleSubmit, values } = formik
   const isEmailValid = () => {
      return (
         values.email.length === 0 ||
         (values.email.length > 0 && values.email.includes('@'))
      )
   }
   const isPasswordValid = () => {
      return (
         values.password.length === 0 ||
         (values.password.length > 0 && values.password >= 6)
      )
   }

   return (
      <ModalWindowStyled>
         <ModalStyled open={open} onClose={onClose}>
            <ContentH3>
               <h3>Добавить учителя</h3>
            </ContentH3>
            <Container onSubmit={handleSubmit}>
               <Input
                  placeholder="Имя"
                  value={values.firstName}
                  onChange={handleChange}
                  name="firstName"
               />
               <Input
                  placeholder="Фамилия"
                  value={values.lastName}
                  onChange={handleChange}
                  name="lastName"
               />
               <PhoneInput
                  country="kg"
                  onlyCountries={onlyCountries}
                  value={phoneNumber}
                  onChange={(phone) => setPhoneNumber(phone)}
                  name="phoneNumber"
                  type="tel"
               />
               <Input
                  placeholder="Email"
                  type="email"
                  error={!isEmailValid()}
                  value={values.email}
                  onChange={handleChange}
                  name="email"
               />
               <Input
                  placeholder="Пароль"
                  type="password"
                  error={!isPasswordValid()}
                  value={values.password}
                  onChange={handleChange}
                  name="password"
               />
               <Input
                  placeholder="Специализация"
                  value={values.special}
                  onChange={handleChange}
                  name="special"
               />
               <BtnContainer>
                  <Button variant="outlined" onClick={onClose}>
                     Отмена
                  </Button>
                  <Button variant="contained" type="submit">
                     Добавить
                  </Button>
               </BtnContainer>
            </Container>
         </ModalStyled>
      </ModalWindowStyled>
   )
}
const ModalWindowStyled = styled.div``
const ModalStyled = styled(ModalWindow)`
   .css-ybr8he {
      border-radius: 10px;
   }
`
const ContentH3 = styled.div`
   background: #1f6ed4;
   padding-top: 25px;
   padding-bottom: 16px;
   color: #fff;
   text-align: center;
   border-radius: 10px 10px 0 0;
`
const Container = styled.form`
   display: flex;
   flex-direction: column;
   width: 491px;
   margin-left: 25px;
   margin-right: 25px;
   margin-top: 16px;
   margin-bottom: 16px;
   Input {
      margin-bottom: 20px;
   }
   .form-control {
      width: 491px;
      margin-bottom: 12px !important;
      height: 42px;
   }
   .react-tel-input .selected-flag {
      position: absolute;
      top: 0;
      bottom: 0;
      background-color: none;
      border: none;
      height: 42px;
   }
   .flag-dropdown {
      border: none;
   }
`
const BtnContainer = styled.div`
   display: flex;
   justify-content: flex-end;
   Button {
      margin-left: -5px;
      margin-right: 25px;
      margin-bottom: 25px;
   }
`
