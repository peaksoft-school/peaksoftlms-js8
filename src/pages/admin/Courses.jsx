import React, { useEffect, useState } from 'react'
import { Grid, IconButton } from '@mui/material'
import styled from '@emotion/styled'
import { AppTable } from '../../utlis/constants/Table'
import Button from '../../components/UI/Button'
import { SideBar } from '../../layout/SideBar'
import { ReactComponent as AdminIcon } from '../../assets/icons/adminIcon.svg'
import { ReactComponent as ArrowIcon } from '../../assets/icons/arrow.svg'
import { ReactComponent as FixedIcon } from '../../assets/icons/fixed.svg'
import { ModalCourses } from '../../components/addModal/ModalCourses'
import { ReactComponent as DeleteIcon } from '../../assets/icons/tableDeleteTeacher.svg'

const columns = [
   {
      header: 'ID',
      key: 'id',
      id: 1,
   },
   {
      header: 'Имя Фамилия',
      key: 'userFullName',
      id: 2,
   },
   {
      header: 'Специализация',
      key: 'spets',
      id: 3,
   },
   {
      header: 'Номер Телефона',
      key: 'phone',
      id: 4,
   },
   {
      header: 'e-mail',
      key: 'email',
      id: 5,
   },
   {
      id: 6,
      header: 'Действия',
      key: 'actions',
      render: () => (
         <Grid>
            <IconButton>
               <DeleteIcon onClick={() => {}} />
            </IconButton>
         </Grid>
      ),
   },
]
export const Courses = () => {
   const [openModal, setOpenModal] = useState(false)

   useEffect(() => {}, [])

   const rows = [
      {
         id: 11,
         userFullName: 'Omina Mamatalieva',
         spets: 'teacher',
         phone: '0865434567',
         email: 'omina@gmail.com',
         action: 'delete',
      },
      {
         id: 11,
         userFullName: 'Omina Mamatalieva',
         spets: 'teacher',
         phone: '0865434567',
         email: 'omina@gmail.com',
         action: 'delete',
      },
      {
         id: 11,
         userFullName: 'Omina Mamatalieva',
         spets: 'teacher',
         phone: '0865434567',
         email: 'omina@gmail.com',
         action: 'delete',
      },
      {
         id: 11,
         userFullName: 'Omina Mamatalieva',
         spets: 'teacher',
         phone: '0865434567',
         email: 'omina@gmail.com',
         action: 'delete',
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
            <FixedIcon style={{ marginRight: '4px' }} />
            Назначить учителя
         </ButtonDiv>
         <AppTableDiv>
            <AppTable columns={columns} rows={rows} />
         </AppTableDiv>
         <ModalCourses open={openModal} onClose={closeModalHandler} />
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
   width: 207px;
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
