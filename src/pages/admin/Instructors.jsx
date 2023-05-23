import React, { useEffect, useState } from 'react'
import { Grid, IconButton } from '@mui/material'
import styled from '@emotion/styled'
import { AppTable } from '../../utlis/constants/Table'
import Button from '../../components/UI/Button'
import { SideBar } from '../../layout/SideBar'
import { ReactComponent as AdminIcon } from '../../assets/icons/adminIcon.svg'
import { ReactComponent as ArrowIcon } from '../../assets/icons/arrow.svg'
import { ModalInstructor } from '../../components/addModal/ModalInstructor'
import { ReactComponent as EditIcon } from '../../assets/icons/tableEditTeacher-3.svg'
import { ReactComponent as DeleteIcon } from '../../assets/icons/tableDeleteTeacher.svg'
import { ReactComponent as AddTeacherIcon } from '../../assets/icons/addTeacher.svg'
import {
   getAllInstructors,
   // getAllInstructors,
   instructorDelete,
   instructorPost,
} from '../../api/adminService'

export const Instructors = () => {
   const [openModal, setOpenModal] = useState(false)
   const [data, setData] = useState([])

   const getData = async () => {
      try {
         const { data } = await getAllInstructors()
         return setData(data.instructorResponses)
      } catch (error) {
         return error
      }
   }

   useEffect(() => {
      getData()
   }, [])

   // const handleDeleteItem = (itemId) => {
   //    instructorDelete(itemId)
   // }

   const handleDeleteItem = async (id) => {
      try {
         await instructorDelete()
         const deleted = data.filter((row) => row.id !== id)

         setData(deleted)
      } catch (error) {
         console.log(error)
      }
   }

   const addInstructor = (data) => {
      console.log(data)
      // instructorPost(data)
   }

   // const handleEditItem = () => {
   //    asyncPutInstructor(data)
   // }

   const columns = [
      {
         header: 'ID',
         key: 'id',
         id: 1,
      },
      {
         header: 'Имя Фамилия',
         key: 'fullName',
         id: 2,
      },
      {
         header: 'Специализация',
         key: 'special',
         id: 3,
      },
      {
         header: 'Номер Телефона',
         key: 'phoneNumber',
         id: 4,
      },
      {
         header: 'E-mail',
         key: 'email',
         id: 5,
      },
      {
         header: 'Действия',
         key: 'actions',
         render: () => (
            <Grid>
               <IconButton>
                  <EditIcon />
               </IconButton>
               <IconButton onClick={() => {}}>
                  <DeleteIcon onClick={() => handleDeleteItem(data.id)} />
               </IconButton>
            </Grid>
         ),
      },
   ]

   const closeModalHandler = () => {
      setOpenModal(false)
   }
   const openModalHandler = () => {
      setOpenModal(true)
   }

   return (
      <Container>
         <div>
            <SidBarDiv role="ADMIN" />
         </div>
         <Header>
            <AdminIconSpan>
               <AdminIcon />
            </AdminIconSpan>
            <AdminSpan>Администратор</AdminSpan>
            <div>
               <ArrowIcon />
            </div>
         </Header>
         <hr style={{ width: '78%', marginLeft: '20% ' }} />
         <ButtonDiv onClick={openModalHandler}>
            <StyleIcon />
            Добавить учителя
         </ButtonDiv>
         <AppTableDiv>
            <AppTable columns={columns} rows={data} />
         </AppTableDiv>
         <ModalInstructor
            open={openModal}
            onClose={closeModalHandler}
            addNewData={addInstructor}
         />
      </Container>
   )
}

const Container = styled.div`
   background-color: #eff0f4;
   width: 100%;
   height: 100vh;
`

const Header = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   margin-left: 82%;
   padding-top: 23px;
   padding-bottom: 10px;
`

const AdminIconSpan = styled.div`
   margin-right: 14px;
`
const AdminSpan = styled.div`
   font-weight: 400;
   font-size: 16px;
   line-height: 22px;
   margin-right: 14px;
   padding-bottom: 6px;
`
const ButtonDiv = styled(Button)`
   margin-left: 82%;
   border-radius: 8px;
   width: 199px;
   height: 40px;
   background-color: #3772ff;
   padding: 10px, 24px, 10px, 16px;
   font-size: 14px;
   font-weight: 600;
   line-height: 20px;
   margin-top: 15px;
   margin-bottom: 15px;
`
const SidBarDiv = styled(SideBar)`
   width: 17%;
   margin: 0%;
`
const AppTableDiv = styled.div`
   width: 78%;
   margin-left: 20%;
`

const StyleIcon = styled(AddTeacherIcon)`
   margin-right: 8px;
`
