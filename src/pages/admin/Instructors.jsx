import React, { useEffect, useState } from 'react'
import { IconButton, TableCell } from '@mui/material'
import styled from '@emotion/styled'
import { useSearchParams } from 'react-router-dom'
import { AppTable } from '../../utlis/constants/Table'
import Button from '../../components/UI/Button'
import { ReactComponent as AdminIcon } from '../../assets/icons/adminIcon.svg'
import { ReactComponent as ArrowIcon } from '../../assets/icons/arrow.svg'
import { ModalInstructor } from '../../components/addModal/ModalInstructor'
import { ReactComponent as EditIcon } from '../../assets/icons/tableEditTeacher-3.svg'
import { ReactComponent as DeleteIcon } from '../../assets/icons/tableDeleteTeacher.svg'
import { ReactComponent as AddTeacherIcon } from '../../assets/icons/addTeacher.svg'
import { ReactComponent as LogOut } from '../../assets/icons/logout.svg'
import {
   getAllInstructors,
   instructorDelete,
   instructorPost,
   instructorPut,
} from '../../api/adminService'
import { removeItemFromStorage } from '../../utlis/helpers/storageHelper'
import { JWT_TOKEN_KEY, USER_INFO } from '../../utlis/constants/commons'
import { useSnackbar } from '../../hooks/useSnackbar'
// import { CoursesInstructor } from './CoursesInstructor'

export const Instructors = () => {
   const [page, setPage] = useState(1)
   const [searchParams, setSearchParams] = useSearchParams()
   const [instructors, setInstructors] = useState([])
   const [showLogoutIcon, setShowLogoutIcon] = useState(false)
   const { notify, Snackbar } = useSnackbar()

   const getData = async (_page) => {
      try {
         const { data } = await getAllInstructors(_page)
         return setInstructors(data.instructorResponses)
      } catch (error) {
         return notify('error', error.response.data.message)
      }
   }

   useEffect(() => {
      getData(page)
   }, [page])

   const handleDeleteItem = async (id) => {
      try {
         await instructorDelete(id)
         getData(1)
         getData()
      } catch (error) {
         notify('error', error.response.data.message)
      }
   }

   const addInstructor = async (data) => {
      try {
         const response = await instructorPost(data)
         setPage(1)
         await getData(1)
         notify('success', response.data.message)
         getData()
      } catch (error) {
         if (error.response) {
            notify('error', error.response.data.message)
         }
      }
   }

   const showModalHandler = (mode) => {
      searchParams.set('modal', mode)
      setSearchParams(searchParams)
   }
   const closeModalHandler = () => {
      searchParams.delete('modal')
      setSearchParams(searchParams)
   }
   const editHadler = (id) => {
      showModalHandler('edit')
      searchParams.set('instuctorId', id)
      setSearchParams(searchParams)
   }

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
         render: (instructor) => (
            <TableCell>
               <IconButton onClick={() => editHadler(instructor.id)}>
                  <EditIcon />
               </IconButton>
               <IconButton onClick={() => handleDeleteItem(instructor.id)}>
                  <DeleteIcon />
               </IconButton>
            </TableCell>
         ),
      },
   ]
   const handleArrowIconClick = () => {
      setShowLogoutIcon(!showLogoutIcon)
   }
   const saveHandler = (id, values) => {
      instructorPut(id, values)
      getData()
   }
   const handleLogout = () => {
      removeItemFromStorage(JWT_TOKEN_KEY)
      removeItemFromStorage(USER_INFO)
      window.location.reload()
   }
   const isModalOpen = !!searchParams.get('modal')
   return (
      <Container>
         {Snackbar}
         {/* <CoursesInstructor /> */}
         <Header>
            <AdminIconSpan>
               <AdminIcon />
            </AdminIconSpan>
            <AdminSpan>Администратор</AdminSpan>
            <div>
               <ArrowIcon onClick={handleArrowIconClick} />
            </div>
         </Header>
         {showLogoutIcon && <LogOutStyled onClick={handleLogout} />}
         <hr style={{ width: '78%', marginLeft: '20% ' }} />
         <ButtonDiv onClick={() => showModalHandler('add')}>
            <StyleIcon />
            Добавить учителя
         </ButtonDiv>
         <AppTableDiv>
            <AppTable
               columns={columns}
               rows={instructors}
               page={page}
               onChangePage={(newPage) => setPage(newPage)}
            />
         </AppTableDiv>
         <ModalInstructor
            open={isModalOpen}
            onClose={closeModalHandler}
            addNewData={addInstructor}
            onSubmit={saveHandler}
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
const AppTableDiv = styled.div`
   width: 78%;
   margin-left: 20%;
`

const StyleIcon = styled(AddTeacherIcon)`
   margin-right: 8px;
`
const LogOutStyled = styled(LogOut)`
   margin-left: 77rem;
   width: 200px;
   height: 100px;
   margin-top: -1rem;
   margin-bottom: -1rem;
`
