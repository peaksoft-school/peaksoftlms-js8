import { Grid, IconButton, TableCell } from '@mui/material'
import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import { AppTable } from '../../../utlis/constants/Table'
import { ReactComponent as DeleteIcon } from '../../../assets/icons/deleteIcon.svg'
import {
   deleteStudentRequests,
   getStudentByGroupId,
} from '../../../api/studentService'
import { useSnackbar } from '../../../hooks/useSnackbar'
import InstructorHeader from '../InstructorHeader'
import Tabs from '../../../components/UI/Tabs'

const InstructorStudents = () => {
   const [students, setStudents] = useState([])
   const { notify, Snackbar } = useSnackbar()
   const fetchStudent = async () => {
      try {
         const response = await getStudentByGroupId(1)
         setStudents(response.data)
      } catch (error) {
         notify('error', error.response.data.message)
      }
   }
   const deleteStudent = async (id) => {
      try {
         await deleteStudentRequests(id)
      } catch (error) {
         if (error.response) {
            notify('error', error.response.data.message)
         }
      }
   }
   useEffect(() => {
      fetchStudent()
   }, [])
   const columns = [
      {
         header: 'ID',
         key: 'id',
         id: 11,
      },
      {
         header: 'Имя Фамилия',
         key: 'fullName',
         id: 12,
      },
      {
         header: 'Группа',
         key: 'groupName',
         id: 13,
      },
      {
         header: 'Формат обучения',
         key: 'formLearning',
         id: 14,
      },
      {
         header: 'Номер телефона',
         key: 'phoneNumber',
         id: 15,
      },
      {
         header: 'E-mail',
         key: 'email',
         id: 16,
      },
      {
         header: 'Действия',
         key: 'action',
         render: (student) => (
            <TableCell key={student.id}>
               <IconButton onClick={() => deleteStudent(student.id)}>
                  <DeleteIcon />
               </IconButton>
            </TableCell>
         ),
      },
   ]
   return (
      <Grid display="flex">
         {Snackbar}
         <StyledContainerContent>
            <StyledHeaderContainer>
               <Tabs role="INSTRUCTOR" />
               <InstructorHeader />
            </StyledHeaderContainer>
            <AppTable
               columns={columns}
               rows={students}
               getUniqueId={(val) => val.id}
            />
         </StyledContainerContent>
      </Grid>
   )
}

export default InstructorStudents
const StyledContainerContent = styled(Grid)`
   font-family: 'Open Sans';
   font-style: normal;
   margin-right: 40px;
   margin-left: 260px;
   .css-1mftfee-MuiPaper-root-MuiTableContainer-root {
      width: 1140px;
   }
`
const StyledHeaderContainer = styled('div')`
   display: flex;
   justify-content: flex-start;
   margin-top: 23px;
   border-bottom: 2px solid #c4c4c4;
   .css-1wlx3d8 {
      margin-left: 20rem;
   }
   .css-8ydgtm {
      margin-left: 20rem;
   }
`
