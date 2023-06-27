import { Grid, IconButton, TableCell } from '@mui/material'
import React, { useState } from 'react'
import styled from '@emotion/styled'
import Select from 'react-select/creatable'
import { useParams } from 'react-router-dom'
import { AppTable } from '../../../utlis/constants/Table'
import { ReactComponent as DeleteIcon } from '../../../assets/icons/deleteIcon.svg'
import {
   deleteStudentRequests,
   getStudentByCourseId,
} from '../../../api/studentService'
import { useSnackbar } from '../../../hooks/useSnackbar'
import { ReactComponent as PeopleAltIcon } from '../../../assets/icons/peopleAltIcon.svg'
import useGetAllGroup from '../../../hooks/getAllGroup'
import ModalWindow from '../../../components/UI/Modal'
import Button from '../../../components/UI/Button'
import { groupPostAssignRequest } from '../../../api/groupService'

const InstructorStudents = () => {
   const [openModal, setOpenModal] = useState(false)
   const [students, setStudents] = useState([])
   const { notify, Snackbar } = useSnackbar()
   const { courseId } = useParams()
   const { groupOptions, selectedGroupID, setSelectedGroupID } =
      useGetAllGroup()
   const btnHandler = () => {
      setOpenModal((prevState) => !prevState)
   }
   async function fetchStudent() {
      try {
         const response = await getStudentByCourseId(courseId)
         setStudents(response.data)
      } catch (error) {
         notify('error', error.response.data.message)
      }
   }
   const handleSubmite = async () => {
      try {
         await groupPostAssignRequest(courseId, selectedGroupID.value)
         fetchStudent()
      } catch (error) {
         notify('error', error.response.data.message)
      }
   }
   const deleteStudent = async (id) => {
      try {
         await deleteStudentRequests(id)
         fetchStudent()
      } catch (error) {
         if (error.response) {
            notify('error', error.response.data.message)
         }
      }
   }
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
            {/* <StyledHeaderContainer> */}
            {/* <TabsMaterials /> */}
            {/* </StyledHeaderContainer> */}
            <StyledButtonContainer>
               <IconButton icon={<PeopleAltIcon />} />
               <StyledButtonText onClick={btnHandler}>
                  Добавить группу в курс
               </StyledButtonText>
            </StyledButtonContainer>
            {openModal && (
               <ModalStyled open={openModal} onClose={btnHandler}>
                  <ContentH3>
                     <h3>Добавить студентов группы в курс</h3>
                  </ContentH3>
                  <form>
                     <Select
                        options={groupOptions}
                        value={selectedGroupID}
                        placeholder="Группа"
                        onChange={(selectedOption) => {
                           setSelectedGroupID(selectedOption)
                        }}
                     />
                     <ContainerBtn>
                        <Button variant="outlined" onClick={btnHandler}>
                           Отмена
                        </Button>
                        <Button variant="contained" onClick={handleSubmite}>
                           Добавить
                        </Button>
                     </ContainerBtn>
                  </form>
               </ModalStyled>
            )}
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
// const StyledHeaderContainer = styled('div')`
//    display: flex;
//    justify-content: flex-start;
//    margin-top: 23px;
//    border-bottom: 2px solid #c4c4c4;
//    .css-1wlx3d8 {
//       margin-left: 20rem;
//    }
//    .css-8ydgtm {
//       margin-left: 20rem;
//    }
// `
const StyledButtonContainer = styled('div')`
   display: flex;
   background: #3772ff;
   border-radius: 8px;
   width: 236px;
   height: 42px;
   margin-top: 34px;
   margin-left: 80%;
`
const StyledButtonText = styled('p')`
   color: #ffffff;
   font-size: 14px;
   line-height: 20px;
   font-weight: 600;
   letter-spacing: 0.001em;
`
const ModalStyled = styled(ModalWindow)`
   .css-13cymwt-control {
      margin: 25px 25px;
   }
   .css-se7fw1 {
      width: 541px;
   }
   .css-ybr8he {
      border-radius: 10px;
   }
   .css-1xfcnn5-MuiFormControl-root-MuiTextField-root fieldset {
      margin-top: 12px;
      margin-left: 25px;
      height: 30px;
   }
`
const ContentH3 = styled.div`
   background: #1f6ed4;
   padding-top: 25px;
   padding-bottom: 16px;
   color: #fff;
   text-align: center;
   border-radius: 10px 10px 0 0;
`
const ContainerBtn = styled.div`
   display: flex;
   justify-content: flex-end;
   > Button {
      margin-right: 25px;
   }
`
