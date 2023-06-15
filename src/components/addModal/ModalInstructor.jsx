import { useEffect } from 'react'
import styled from '@emotion/styled'
/* eslint-disable import/no-extraneous-dependencies */
import PhoneInput from 'react-phone-input-2'
import { useFormik } from 'formik'
import { useSearchParams } from 'react-router-dom'
import Input from '../UI/Input'
import ModalWindow from '../UI/Modal'
import Button from '../UI/Button'
import 'react-phone-input-2/lib/style.css'
import { getInstructorById } from '../../api/adminService'
import { useSnackbar } from '../../hooks/useSnackbar'

const onlyCountries = ['kg', 'ru', 'kz']
export const ModalInstructor = ({ addNewData, open, onClose, onSubmit }) => {
   const [searchParams] = useSearchParams()
   const { notify, Snackbar } = useSnackbar()
   const onSubmitHandler = (values) => {
      if (searchParams.get('modal') === 'edit') {
         const instructorId = searchParams.get('instuctorId')
         onSubmit(instructorId, values)
         onClose()
      } else {
         const newData = {
            firstName: values.firstName,
            lastName: values.lastName,
            phoneNumber: values.phoneNumber,
            email: values.email,
            password: values.password,
            special: values.special,
         }
         addNewData(newData)
      }
   }
   const formik = useFormik({
      initialValues: {
         firstName: '',
         lastName: '',
         phoneNumber: '',
         email: '',
         password: 'здесь будет link',
         special: '',
      },
      onSubmit: onSubmitHandler,
   })
   const { handleChange, handleSubmit, values, setValues, setFieldValue } =
      formik
   useEffect(() => {
      const instructorId = searchParams.get('instuctorId')
      if (open && searchParams.get('modal') === 'edit' && instructorId) {
         getInstructorById(instructorId)
            .then(({ data }) => {
               return setValues({
                  firstName: data.fullName,
                  lastName: data.fullName,
                  phoneNumber: data.phoneNumber,
                  email: data.email,
                  special: data.special,
               })
            })
            .catch((error) => {
               if (error.response) {
                  notify('error', error.response.data.message)
               }
            })
      }
   }, [open])
   const isEmailValid = () => {
      return (
         values.email?.length === 0 ||
         (values.email?.length > 0 && values.email.includes('@'))
      )
   }

   return (
      <ModalWindowStyled>
         {Snackbar}
         <ModalStyled open={open} onClose={onClose}>
            <ContentH3>
               <h3>Добавить учителя</h3>
            </ContentH3>
            <Container onSubmit={handleSubmit} name="form">
               <InputStyle
                  placeholder="Имя"
                  value={values.firstName}
                  onChange={handleChange}
                  name="firstName"
               />
               <InputStyle
                  placeholder="Фамилия"
                  value={values.lastName}
                  onChange={handleChange}
                  name="lastName"
               />
               <PhoneInputStyle
                  style={{ height: '50px' }}
                  country="kg"
                  onlyCountries={onlyCountries}
                  value={values.phoneNumber}
                  onChange={(value) => setFieldValue('phoneNumber', value)}
                  name="phoneNumber"
                  type="tel"
               />
               <InputStyle
                  placeholder="Email"
                  type="email"
                  error={!isEmailValid()}
                  value={values.email}
                  onChange={handleChange}
                  name="email"
               />
               <Input
                  style={{ display: 'none' }}
                  type="password"
                  value={values.password}
                  onChange={handleChange}
                  name="password"
               />
               <InputStyle
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

const InputStyle = styled(Input)`
   margin-bottom: 16px;
`
const PhoneInputStyle = styled(PhoneInput)`
   fieldset {
      border-radius: 10px;
      padding: 10px 8px 10px 18px;
   }
   /* width: 30%; */
   input:focus {
      border-radius: 10px;
      border: 2px solid #1f6ed4;
   }
   input:invalid {
      border-radius: 10px;
      border: 2px solid #c91e1e;
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
