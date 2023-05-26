import styled from '@emotion/styled'
import { useEffect, useState } from 'react'
import Typography from '@mui/material/Typography'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Link from '@mui/material/Link'
import { useNavigate } from 'react-router-dom'
import { AppTable } from '../../../utlis/constants/Table'
import { getStudentsRequest } from '../../../api/courseService'
import { useSnackbar } from '../../../hooks/useSnackbar'
import CourseHeader from './CourseHeader'

const CourseDetail = ({ id }) => {
   const [students, setStudents] = useState([])
   const { notify, Snackbar } = useSnackbar()
   const navigate = useNavigate()
   // const [showOtherComponent, setShowOtherComponent] = useState(false)

   // Функция для обработки клика на ссылке
   // const handleClic = () => {
   //    setShowOtherComponent(true)
   // }

   const navigateToCourse = () => {
      navigate('/courses')
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
         notify('success', 'Successfully get student')
         return setStudents(data)
      } catch (error) {
         return notify('error', 'Failed to get student')
      }
   }
   useEffect(() => {
      getStudents()
   }, [])
   return (
      <div>
         <CourseHeader />
         {Snackbar}
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
               <Typography color="text.primary">Студенты</Typography>
            </Breadcrumbs>
            <AppTable columns={columns} rows={students} />
         </TableContainer>
      </div>
   )
}

export default CourseDetail

const TableContainer = styled('div')({
   marginLeft: '240px',
   marginTop: '20px',
})
