import styled from '@emotion/styled'
import { useEffect, useState } from 'react'
import Typography from '@mui/material/Typography'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Link from '@mui/material/Link'
import { useNavigate } from 'react-router-dom'
import { AppTable } from '../../../utlis/constants/Table'
import Button from '../../../components/UI/Button'
import { getTeacherDetail } from '../../../api/courseService'
import CourseHeader from './CourseHeader'
import { useSnackbar } from '../../../hooks/useSnackbar'

const TeacherDetailPage = () => {
   const [teacherDetail, setTeacherDetail] = useState()
   const { notify, Snackbar } = useSnackbar()
   const navigate = useNavigate()

   const navigateToCourse = () => {
      navigate('/courses')
   }

   const handleClick = (event) => {
      event.preventDefault()
   }
   const columns = [
      {
         header: 'ID',
         key: 'id',
      },
      {
         header: 'Имя Фамилия',
         key: 'fullName',
      },
      {
         header: 'Специализация',
         key: 'special',
      },
      {
         header: 'Номер телефона',
         key: 'phoneNumber',
      },
      {
         header: 'E-mail',
         key: 'email',
      },
   ]

   const getTeacher = async () => {
      try {
         const { data } = await getTeacherDetail()
         notify('success', 'Successfully get teacher')
         return setTeacherDetail(data.instructorResponses)
      } catch (error) {
         return notify('error', 'Failed to get teacher')
      }
   }

   useEffect(() => {
      getTeacher()
   }, [])
   return (
      <div>
         <CourseHeader />
         <StyledButton>Назначить учителя</StyledButton>
         <TableContainer role="presentation" onClick={handleClick}>
            <Breadcrumbs aria-label="breadcrumb">
               <Link
                  underline="hover"
                  color="inherit"
                  href="/"
                  onClick={navigateToCourse}
               >
                  Курсы
               </Link>
               <Link
                  underline="hover"
                  color="inherit"
                  href="/material-ui/getting-started/installation/"
                  onClick={navigateToCourse}
               >
                  Data Engineer
               </Link>
               <Typography color="text.primary">Учителя</Typography>
            </Breadcrumbs>
            <AppTable columns={columns} rows={teacherDetail} />
         </TableContainer>
         {Snackbar}
      </div>
   )
}

export default TeacherDetailPage

const StyledButton = styled(Button)({
   marginLeft: '84%',
})

const TableContainer = styled('div')({
   marginLeft: '240px',
   marginTop: '-18px',
})
