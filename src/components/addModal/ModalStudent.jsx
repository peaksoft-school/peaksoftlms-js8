import styled from '@emotion/styled'
import { useFormik } from 'formik'
import { useEffect, useState } from 'react'
import Select from 'react-select/creatable'
import PhoneInput from 'react-phone-input-2'
import { useSearchParams } from 'react-router-dom'
import Input from '../UI/Input'
import ModalWindow from '../UI/Modal'
import Button from '../UI/Button'
import 'react-phone-input-2/lib/style.css'
import useGetAllGroup from '../../hooks/getAllGroup'
import { getStudentById } from '../../api/adminStudent'

const onlyCountries = ['kg', 'ru', 'kz']
export const ModalStudent = ({ addNewData, open, onClose, onSubmit }) => {
   const [searchParams] = useSearchParams()
   const [formLearning, setFormLearning] = useState('')
   const { groups, selectedGroupID, handleGroupChange } = useGetAllGroup()
   const optionsFormat = [
      { value: 'online', label: 'ONLINE' },
      { value: 'offline', label: 'OFFLINE' },
   ]
   const onSubmitHandler = ({
      firstName,
      lastName,
      email,
      password,
      phoneNumber,
   }) => {
      const newData = {
         firstName,
         lastName,
         phoneNumber,
         email,
         password,
         groupId: selectedGroupID.value,
         formLearning: formLearning.label,
      }
      addNewData(newData)
   }
   const formik = useFormik({
      initialValues: {
         firstName: '',
         lastName: '',
         email: '',
         password: 'dgdsfdsfds',
         phoneNumber: '',
      },
      onSubmit: onSubmitHandler,
   })
   const { handleChange, handleSubmit, values, setValues, setFieldValue } =
      formik
   const isEmailValid = () => {
      return (
         values.email.length === 0 ||
         (values.email.length > 0 && values.email.includes('@'))
      )
   }
   const handlePhoneChange = (value) => {
      setFieldValue('phoneNumber', value)
   }

   const groupOptions = groups.map((group) => ({
      value: group.id,
      label: group.name,
   }))
   useEffect(() => {
      const studentId = searchParams.get('studentId')
      if (open && searchParams.get('modal') === 'edit' && studentId) {
         getStudentById(studentId)
            .then(({ data }) => {
               const splittedUsername = data?.fullName.split(' ')
               return setValues({
                  ...data,
                  phoneNumber: data.phoneNumber,
                  firstName: splittedUsername[0],
                  lastName: splittedUsername[1],
                  groupName: data.groupName,
                  formLearning: data.formLearning,
               })
            })
            .catch((error) => {
               console.error('Error fetching student data:', error)
            })
      }
   }, [open])

   const submitHandler = () => {
      if (searchParams.get('modal') === 'edit') {
         onSubmit(values.id, values)
      } else {
         addNewData(values)
      }
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
                  value={values.firstName || ''}
                  onChange={handleChange}
                  name="firstName"
               />
               <Input
                  placeholder="Фамилия"
                  value={values.lastName || ''}
                  onChange={handleChange}
                  name="lastName"
               />
               <PhoneInput
                  country="kg"
                  onlyCountries={onlyCountries}
                  value={values.phoneNumber}
                  onChange={handlePhoneChange}
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
               <PasswordInput
                  placeholder="Пароль"
                  type="password"
                  value="dfdsfdsf"
                  onChange={handleChange}
                  name="password"
               />
               <Select
                  options={groupOptions}
                  value={selectedGroupID}
                  onChange={handleGroupChange}
                  placeholder="Группа"
               />
               <Select
                  options={optionsFormat}
                  value={formLearning}
                  placeholder="Формат обучения"
                  onChange={(value) => setFormLearning(value)}
               />
               <BtnContainer>
                  <Button variant="outlined" onClick={onClose}>
                     Отмена
                  </Button>
                  <Button variant="contained" onClick={submitHandler}>
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
   Select {
      margin-bottom: 20px;
   }
`
const BtnContainer = styled.div`
   display: flex;
   justify-content: flex-end;
   Button {
      margin-left: -5px;
      margin-right: 25px;
   }
`
const PasswordInput = styled(Input)`
   display: flex;
`
