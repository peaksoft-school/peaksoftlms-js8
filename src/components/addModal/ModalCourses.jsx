import styled from '@emotion/styled'
import { IconButton } from '@mui/material'
// import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import ModalWindow from '../UI/Modal'
import { ReactComponent as IconDeleteTeacher } from '../../assets/icons/deleteTeacher.svg'
import Button from '../UI/Button'
import 'react-phone-input-2/lib/style.css'
import MultiSelect from '../UI/Select'
// import { asyncGetInstructors } from '../../redux/reducers/admin/adminActions'

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

export const ModalCourses = ({ open, onClose }) => {
   const [name, setName] = useState('')
   const [teacher, setTeacher] = useState([])
   // const data = useSelector((state) => state.teacher)
   // const dispatch = useDispatch()

   // useEffect(() => {
   //    dispatch(asyncGetInstructors())
   // }, [])

   const changeName = (e) => {
      setName(e.target.value)
   }
   const onSubmitHandler = () => {
      setTeacher((prev) => [...prev, { ...prev, teacherName: name }])
      // const newData = {
      //    name,
      // }
      // addNewData(newData)
   }

   const handleDelete = (itemToDelete) => {
      const updatedItems = teacher.filter((item) => item !== itemToDelete)
      setTeacher(updatedItems)
   }

   return (
      <ModalWindowStyled>
         <ModalStyled open={open} onClose={onClose}>
            <ContentH3>
               <h3>Назначить учителя</h3>
            </ContentH3>
            <Container onSubmit={() => {}}>
               <StyleDiv>
                  <StyleUl>
                     {teacher.map((name) => (
                        <StyleLi key={name}>
                           {name.teacherName}
                           <IconButton onClick={() => handleDelete(name)}>
                              <IconDeleteTeacher />
                           </IconButton>
                        </StyleLi>
                     ))}
                  </StyleUl>
               </StyleDiv>
               <MultiSelect value={name} onChange={changeName} array={array} />
            </Container>
            <BtnContainer>
               <Button variant="outlined" onClick={onClose}>
                  Отмена
               </Button>
               <Button variant="contained" onClick={onSubmitHandler}>
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
   padding-top: 1px;
   color: #fff;
   height: 68px;
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

const StyleDiv = styled.div`
   border: 1px solid #b6bac2;
   border-radius: 4px;
   width: 524px;
   height: 55px;
   margin-left: 8px;
   margin-top: 16px;
   margin-bottom: 12px;
   overflow-y: scroll;
`
const StyleUl = styled.ul`
   list-style: none;
   padding-left: 10px;
`
const StyleLi = styled.li`
   display: flex;
   justify-content: space-between;
   align-items: center;
`
