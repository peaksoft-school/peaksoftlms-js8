import styled from '@emotion/styled'
import { useEffect, useState } from 'react'
import Typography from '@mui/material/Typography'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Link from '@mui/material/Link'
import { useLocation, useNavigate } from 'react-router-dom'
import { AppTable } from '../../../utlis/constants/Table'
import { getStudentsRequest } from '../../../api/courseService'
import CourseHeader from './CourseHeader'

const CourseDetail = ({ id }) => {
   const [students, setStudents] = useState([])
   const navigate = useNavigate()
   const { state } = useLocation()

   const navigateToCourse = () => {
      navigate('/admin/courses')
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
         header: 'Группа',
         key: 'groupName',
      },
      {
         header: 'Формат',
         key: 'formLearning',
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

   const handleClick = (event) => {
      event.preventDefault()
   }

   const getStudents = async () => {
      try {
         const { data } = await getStudentsRequest(id)
         return setStudents(data)
      } catch (error) {
         return 'error'
      }
   }
   useEffect(() => {
      getStudents()
   }, [])
   return (
      <Container>
         <CourseHeaderStyled>
            <CourseHeader />
         </CourseHeaderStyled>
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
               <Typography color="text.primary">Студенты</Typography>
            </Breadcrumbs>
            <AppTable
               columns={columns}
               rows={students}
               getUniqueId={(val) => val.id}
            />
         </TableContainer>
      </Container>
   )
}

export default CourseDetail

const CourseHeaderStyled = styled('div')({
   marginTop: '-75px',
})

const Container = styled('div')(() => ({
   marginLeft: '230px',
}))

const TableContainer = styled('div')({
   marginTop: '20px',
})
