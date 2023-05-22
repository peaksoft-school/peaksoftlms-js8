/* eslint-disable import/no-extraneous-dependencies */
import styled from '@emotion/styled'
import { useFormik } from 'formik'
import { useState } from 'react'
import Select from 'react-select/creatable'
import PhoneInput from 'react-phone-input-2'
import Input from '../UI/Input'
import ModalWindow from '../UI/Modal'
import Button from '../UI/Button'
import 'react-phone-input-2/lib/style.css'
// import { axiosInstance } from '../../config/axiosInstance'

export const ModalStudent = ({ addNewData, open, onClose }) => {
   const [formLearning, setFormLearning] = useState(null)
   const [groupId, setGroupId] = useState(null)
   const onChangeSelect = (newValue) => {
      setGroupId(newValue)
   }
   const onChangeSelect2 = (newValue) => {
      setFormLearning(newValue)
   }
   const optionsGroup = [
      { value: 'js-8', label: 'js-8' },
      { value: 'js-9', label: 'js-9' },
      { value: 'js-10', label: 'js-10' },
   ]
   // useEffect(() => {
   //    axiosInstance
   //       .get(`/groups?groupId=${id}`)
   //       .then((response) => {
   //          const options = response.data.map((item) => ({
   //             value: item.id,
   //             label: item.name,
   //          }))
   //          setGroupId(options)
   //       })
   //       .catch((error) => {
   //          console.error('Ошибка при получении данных:', error)
   //       })
   // }, [])
   const optionsFormat = [
      { value: 'online', label: 'ONLINE' },
      { value: 'offline', label: 'OFFLINE' },
   ]
   const onSubmitHandler = ({
      firstName,
      lastName,
      phoneNumber,
      email,
      password,
      // groupId,
      // formLearning,
   }) => {
      const newData = {
         firstName,
         lastName,
         phoneNumber,
         email,
         password,
         groupId,
         formLearning,
      }
      addNewData(newData)
   }
   const formik = useFormik({
      initialValues: {
         firstName: '',
         lastName: '',
         phoneNumber: '',
         email: '',
         password: '',
         // groupId: '',
         // formLearning: '',
      },
      onSubmit: onSubmitHandler,
   })
   const { handleChange, handleSubmit, values } = formik
   const onlyCountries = ['kg', 'ru', 'kz']
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
      <div>
         <ModalStyled open={open} onClose={onClose}>
            <ContentH3>
               <h3>Добавить студента</h3>
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
                  onlyCountries={onlyCountries}
                  value={+values.phoneNumber}
                  onChange={handleChange}
                  name="phoneNumber"
                  type="tel"
               />
               {/* <input
                  value={values.phoneNumber}
                  onChange={handleChange}
                  name="phoneNumber"
                  type="tel"
               /> */}
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
                  options={optionsGroup}
                  value={groupId}
                  placeholder="Группа"
                  onChange={onChangeSelect}
               />
               <Select
                  options={optionsFormat}
                  value={formLearning}
                  placeholder="Формат обучения"
                  onChange={onChangeSelect2}
               />
               {/* <select
                  value={values.groupId}
                  onChange={handleChange}
                  name="groupId"
               >
                  <option value="js-8">js-8</option>
                  <option value="js-9">js-9</option>
                  <option value="js-10">js-10</option>
               </select>
               <select
                  value={values.formLearning}
                  onChange={handleChange}
                  name="formLearning"
               >
                  <option value="online">ONLINE</option>
                  <option value="offline">OFFLINE</option>
               </select> */}
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
      </div>
   )
}

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
