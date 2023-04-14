import styled from '@emotion/styled'
import { useFormik } from 'formik'
import { useState } from 'react'
import Select from 'react-select/creatable'
import PhoneInput from 'react-phone-input-2'
import Input from '../UI/Input'
import ModalWindow from '../UI/Modal'
import Button from '../UI/Button'
import 'react-phone-input-2/lib/style.css'

export const AddModalStudent = ({ addNewData, open, onClose }) => {
   const [selectedValue, setSelectedValue] = useState([])
   const [selectedValue2, setSelectedValue2] = useState([])
   const onChangeSelect = (newValue) => {
      setSelectedValue(newValue)
   }
   const onChangeSelect2 = (newValue) => {
      setSelectedValue2(newValue)
   }
   const optionsGroup = [
      { value: 'option1', label: 'js-8' },
      { value: 'option2', label: 'js-9' },
      { value: 'option3', label: 'js-10' },
   ]
   const optionsFormat = [
      { value: 'option1', label: 'Online' },
      { value: 'option2', label: 'Offline' },
   ]
   const onSubmitHandler = ({
      name,
      lastName,
      phoneNumber,
      email,
      password,
   }) => {
      const newData = {
         name,
         lastName,
         phoneNumber,
         email,
         password,
      }
      addNewData(newData)
   }
   const formik = useFormik({
      initialValues: {
         name: '',
         lastName: '',
         phoneNumber: '',
         email: '',
         password: '',
      },
      onSubmit: onSubmitHandler,
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
               <h3>Добавить студента</h3>
            </ContentH3>
            <Container onSubmit={handleSubmit}>
               <Input
                  placeholder="Имя"
                  value={values.name}
                  onChange={handleChange}
                  name="name"
               />
               <Input
                  placeholder="Фамилия"
                  value={values.lastName}
                  onChange={handleChange}
                  name="lastName"
               />
               <PhoneInput
                  country="kg"
                  placeholder="+996 _ _ _ _ _ _"
                  value={values.phoneNumber}
                  onChange={handleChange}
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
               <Select
                  isClearable
                  isMulti
                  options={optionsGroup}
                  value={selectedValue}
                  onChange={onChangeSelect}
                  placeholder="Группа"
                  onCreateOption={(inputValue) => {
                     setSelectedValue([
                        ...selectedValue,
                        { value: inputValue, label: inputValue },
                     ])
                  }}
               />
               <Select
                  isClearable
                  isMulti
                  options={optionsFormat}
                  value={selectedValue2}
                  onChange={onChangeSelect2}
                  placeholder="Формат обучения"
                  onCreateOption={(inputValue) => {
                     setSelectedValue2([
                        ...selectedValue,
                        { value: inputValue, label: inputValue },
                     ])
                  }}
               />
            </Container>
            <BtnContainer>
               <Button variant="outlined" onClick={onClose}>
                  Отмена
               </Button>
               <Button
                  variant="contained"
                  type="submit"
                  onClick={onSubmitHandler}
               >
                  Добавить
               </Button>
            </BtnContainer>
         </ModalStyled>
      </ModalWindowStyled>
   )
}
const ModalWindowStyled = styled.div`
   width: 541px;
   height: 481px;
`
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
      margin-bottom: 12px;
   }
   .css-b62m3t-container {
      margin-bottom: 12px;
   }
   .css-13cymwt-control {
      display: flex;
      padding: 0.5rem;
      border-radius: 10px;
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
