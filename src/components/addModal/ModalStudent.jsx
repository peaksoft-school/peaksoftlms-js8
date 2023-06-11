import styled from '@emotion/styled'
// eslint-disable-next-line import/no-extraneous-dependencies
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
import { getStudentById } from '../../api/studentService'
import { useSnackbar } from '../../hooks/useSnackbar'

const onlyCountries = ['kg', 'ru', 'kz']
const optionsFormat = [
   { value: 'ONLINE', label: 'ONLINE' },
   { value: 'OFFLINE', label: 'OFFLINE' },
]
export const ModalStudent = ({ addNewData, open, onClose, onSubmit }) => {
   const [searchParams] = useSearchParams()
   const { groups, selectedGroupID, setSelectedGroupID, refetchHandle } =
      useGetAllGroup()
   const { notify, Snackbar } = useSnackbar()
   const [formLearning, setFormLearning] = useState(null)
   const groupOptions = groups.map((group) => ({
      value: group.id,
      label: group.name,
   }))
   const onSubmitHandler = (values) => {
      if (searchParams.get('modal') === 'edit') {
         onSubmit(values.id, values)
         onClose()
      } else {
         const newData = {
            firstName: values.firstName,
            lastName: values.lastName,
            phoneNumber: values.phoneNumber,
            email: values.email,
            password: values.password,
            groupId: selectedGroupID.value,
            formLearning: formLearning.value,
         }
         addNewData(newData)
         refetchHandle()
      }
   }
   const formik = useFormik({
      initialValues: {
         firstName: '',
         lastName: '',
         email: '',
         password: 'Здесь будет линк create password',
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
   useEffect(() => {
      const studentId = searchParams.get('studentId')
      if (open && searchParams.get('modal') === 'edit' && studentId) {
         getStudentById(studentId)
            .then(({ data }) => {
               const splittedUsername = data?.fullName.split(' ')
               const selectedOption = optionsFormat.find(
                  (option) => option.value === data.formLearning
               )
               setFormLearning(selectedOption)
               const selectedGroup = groupOptions.find(
                  (option) => option.label === data.groupName
               )
               setSelectedGroupID(selectedGroup)
               return setValues({
                  ...data,
                  phoneNumber: data.phoneNumber,
                  firstName: splittedUsername[0],
                  lastName: splittedUsername[1],
               })
            })
            .catch((error) => {
               if (error.response) {
                  notify('error', error.response.data.message)
               }
            })
      }
   }, [open])
   return (
      <div>
         {Snackbar}
         <ModalStyled open={open} onClose={onClose}>
            <>
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
                  <Input
                     style={{ display: 'none' }}
                     placeholder="Пароль"
                     type="password"
                     value={values.password}
                     onChange={handleChange}
                     name="password"
                  />
                  <Select
                     options={groupOptions}
                     value={selectedGroupID}
                     placeholder="Группа"
                     onChange={(selectedOption) => {
                        setSelectedGroupID(selectedOption)
                     }}
                  />
                  <Select
                     options={optionsFormat}
                     value={formLearning}
                     placeholder="Формат обучения"
                     onChange={(selectedOption) => {
                        setFormLearning(selectedOption)
                     }}
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
            </>
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
   align-items: space-between;
   width: 491px;
   margin-left: 25px;
   margin-right: 25px;
   margin-top: 16px;
   margin-bottom: 12px;
   .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input {
      margin-bottom: 11px;
   }
   .css-1qaaf9z-MuiFormControl-root-MuiTextField-root fieldset {
      margin-bottom: 12px;
   }
   .css-13cymwt-control {
      display: flex;
      padding: 0.5rem;
      border-radius: 10px;
      margin-bottom: 12px;
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
