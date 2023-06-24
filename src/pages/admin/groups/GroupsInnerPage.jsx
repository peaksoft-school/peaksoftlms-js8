import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import { Breadcrumbs } from '@mui/material'
import { AppTable } from '../../../utlis/constants/Table'
import CourseHeader from '../course/CourseHeader'
import { getTableRequest } from '../../../api/groupService'
import { useSnackbar } from '../../../hooks/useSnackbar'
import Spinner from '../../../components/UI/Spinner'
// import Spinner from '../../../components/UI/Spinner'

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

const GroupsInnerPage = () => {
   const [dataInnerPage, setDataInnerPage] = useState([])
   const [isLoading, setIsLoading] = useState(false)
   const { state } = useLocation()
   const navigate = useNavigate()
   const { notify, Snackbar } = useSnackbar()

   const { groupId } = useParams()

   const getDataTable = async () => {
      try {
         setIsLoading(true)
         const { data } = await getTableRequest(groupId)
         setIsLoading(false)
         return setDataInnerPage(data)
      } catch (error) {
         setIsLoading(false)
         return notify('error', 'FAILED NOT FOUND')
      }
   }

   useEffect(() => {
      getDataTable()
   }, [])
   const handleClick = (e) => {
      e.preventDefault()
   }
   const navigateToGroupsPage = () => {
      navigate(-1)
   }
   return (
      <StyledContainer>
         <StyledHeader>
            <CourseHeader />
            <StyledBorder />
         </StyledHeader>
         <TableContainer role="presentation" onClick={handleClick}>
            <Breadcrumbs aria-label="breadcrumb">
               <StyledLink
                  underline="hover"
                  color="inherit"
                  href="/"
                  onClick={navigateToGroupsPage}
               >
                  Группы
               </StyledLink>
               <StyledLink
                  underline="hover"
                  color="inherit"
                  href="/material-ui/getting-started/installation/"
                  onClick={navigateToGroupsPage}
                  style={{ color: 'black' }}
               >
                  {state?.title}
               </StyledLink>
            </Breadcrumbs>
            <StyledTable>
               {isLoading && <Spinner />}
               {dataInnerPage.length === 0 ? (
                  <StyledText>Student list is empty</StyledText>
               ) : (
                  <AppTable
                     columns={columns}
                     rows={dataInnerPage}
                     getUniqueId={(val) => val.id}
                  />
               )}
               {Snackbar}
            </StyledTable>
         </TableContainer>
      </StyledContainer>
   )
}

const StyledTable = styled.div`
   margin-left: 20px;
`
const StyledBorder = styled.hr`
   margin-top: 10px;
   border-bottom: 1px solid #c4c4c4;
   width: 1245px;
`

const StyledContainer = styled.div`
   margin-left: 255px;
`
const TableContainer = styled.div`
   margin-top: 20px;
`
const StyledLink = styled(Link)`
   color: #766f6f;
   margin-left: 10px;
   text-decoration: none;
`
const StyledHeader = styled.div`
   margin-right: 20px;
`
const StyledText = styled.p`
   color: red;
   font-weight: 700;
`
export default GroupsInnerPage
