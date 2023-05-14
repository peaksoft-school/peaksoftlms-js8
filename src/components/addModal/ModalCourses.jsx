import styled from '@emotion/styled'
import { useState } from 'react'
import { useFormik } from 'formik'

import ModalWindow from '../UI/Modal'
import Button from '../UI/Button'
import 'react-phone-input-2/lib/style.css'

import MultiSelect from '../UI/Select'

const array = [
   {
      id: 1,
      name: 'Omina Mamatalieva',
      spets: 'teacher',
      phone: '0865434567',
      email: 'omina@gmail.com',
      action: 'delete',
   },
   {
      id: 2,
      name: 'ilya',
      spets: 'teacher',
      phone: '0865434567',
      email: 'omina@gmail.com',
      action: 'delete',
   },
   {
      id: 3,
      name: 'Asel',
      spets: 'teacher',
      phone: '0865434567',
      email: 'omina@gmail.com',
      action: 'delete',
   },
   {
      id: 4,
      name: 'Aibek',
      spets: 'teacher',
      phone: '0865434567',
      email: 'omina@gmail.com',
      action: 'delete',
   },
]

export const ModalCourses = ({ addNewData, open, onClose }) => {
   const [name, setName] = useState([])
   const changeName = (e) => {
      setName(e.target.value)
   }

   const onSubmitHandler = ({
      name,
      lastName,
      phoneNumber,
      email,
      password,
      specialization,
   }) => {
      const newData = {
         name,
         lastName,
         phoneNumber,
         email,
         password,
         specialization,
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
         specialization: '',
      },
      onSubmit: onSubmitHandler,
   })
   const { handleSubmit } = formik

   return (
      <ModalWindowStyled>
         <ModalStyled open={open} onClose={onClose}>
            <ContentH3>
               <h3>Naznachit uchitelya</h3>
            </ContentH3>
            <Container onSubmit={handleSubmit}>
               <MultiSelect value={name} onChange={changeName} array={array} />
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
const ModalWindowStyled = styled.div``
const ModalStyled = styled(ModalWindow)`
   height: '265px';
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
   width: 541px;
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
