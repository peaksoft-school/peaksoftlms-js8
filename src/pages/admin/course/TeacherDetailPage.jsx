import styled from '@emotion/styled'
import { useEffect, useState } from 'react'
import Typography from '@mui/material/Typography'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Link from '@mui/material/Link'
import { useLocation, useNavigate } from 'react-router-dom'
import { AppTable } from '../../../utlis/constants/Table'
import Button from '../../../components/UI/Button'
import { getTeacherDetail } from '../../../api/courseService'
import CourseHeader from './CourseHeader'
import { useSnackbar } from '../../../hooks/useSnackbar'
import Spinner from '../../../components/UI/Spinner'

const TeacherDetailPage = () => {
   const [teacherDetail, setTeacherDetail] = useState()
   const [isLoading, setLoading] = useState(false)
   const { notify, Snackbar } = useSnackbar()
   const navigate = useNavigate()
   const { state } = useLocation()

   const navigateToCourse = () => {
      navigate('/admin/courses')
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
         setLoading(true)
         const { data } = await getTeacherDetail()
         setLoading(false)
         return setTeacherDetail(data.instructorResponses)
      } catch (error) {
         return notify('error', 'Failed to get teacher')
      }
   }

   useEffect(() => {
      getTeacher()
   }, [])
   return (
      <>
         <CourseHeaderStyled>
            <CourseHeader />
         </CourseHeaderStyled>
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
                  {state.title}
               </Link>
               <Typography color="text.primary">Учителя</Typography>
            </Breadcrumbs>
            {isLoading ? (
               <Spinner />
            ) : (
               <AppTable
                  columns={columns}
                  rows={teacherDetail}
                  getUniqueId={(val) => val.id}
               />
            )}
         </TableContainer>
         {Snackbar}
      </>
   )
}

export default TeacherDetailPage

const CourseHeaderStyled = styled('div')({
   marginTop: '-75px',
})
const StyledButton = styled(Button)({
   marginLeft: '85%',
   marginTop: '10px',
})

const TableContainer = styled('div')({
   marginLeft: '230px',
   marginTop: '-18px',
})
