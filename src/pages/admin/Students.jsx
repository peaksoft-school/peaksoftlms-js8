import { useEffect, useState } from 'react'
import Select from 'react-select/creatable'
import styled from '@emotion/styled'
import {
   IconButton,
   MenuItem,
   Select as SelectFormStudy,
   TableCell,
} from '@mui/material'
import { useSearchParams } from 'react-router-dom'
import { ModalStudent } from '../../components/addModal/ModalStudent'
import Button from '../../components/UI/Button'
import { ReactComponent as Victor } from '../../assets/icons/victor.svg'
import { ReactComponent as Pluz } from '../../assets/icons/pluz.svg'
import ModalWindow from '../../components/UI/Modal'
import { AppTable } from '../../utlis/constants/Table'
import { ReactComponent as EditIcon } from '../../assets/icons/edit.svg'
import { ReactComponent as DeleteIcon } from '../../assets/icons/deleteIcon.svg'
import { ReactComponent as AdminIcon } from '../../assets/icons/Profile.svg'
import { ReactComponent as ArrowIcon } from '../../assets/icons/arrow.svg'
import { ReactComponent as LogOut } from '../../assets/icons/logout.svg'
import {
   deleteStudentRequests,
   fileUploadPostRequest,
   getAllStudentRequests,
   studentPostRequests,
   updateStudents,
} from '../../api/studentService'
import useGetAllGroup from '../../hooks/getAllGroup'
import { useSnackbar } from '../../hooks/useSnackbar'
import { removeItemFromStorage } from '../../utlis/helpers/storageHelper'
import { JWT_TOKEN_KEY, USER_INFO } from '../../utlis/constants/commons'

export const Students = () => {
   const [students, setStudents] = useState([])
   const [searchParams, setSearchParams] = useSearchParams()
   const [openModal, setOpenModal] = useState(false)
   const [file, setFile] = useState(null)
   const [filterValue, setFilterValue] = useState('все')
   const [showLogoutIcon, setShowLogoutIcon] = useState(false)
   const { groupOptions, selectedGroupID, setSelectedGroupID } =
      useGetAllGroup()
   const { notify, Snackbar } = useSnackbar()
   const fetchStudent = async () => {
      try {
         const response = await getAllStudentRequests(filterValue)
         setStudents(response.data)
      } catch (error) {
         notify('error', error.response.data.message)
      }
   }
   useEffect(() => {
      fetchStudent()
   }, [filterValue])

   const filterChangeHand = (event) => {
      setFilterValue(event.target.value)
   }
   const addStudent = async (data) => {
      try {
         const response = await studentPostRequests(data)

         window.location.reload()
         notify('success', response.data.message)
      } catch (error) {
         notify('error', error.response.data.message)
      }
      setOpenModal(false)
   }
   const showModalHandler = (mode) => {
      searchParams.set('modal', mode)
      setSearchParams(searchParams)
   }
   const closeModalHandler = () => {
      searchParams.delete('modal')
      setSearchParams(searchParams)
   }
   const editStudentHadler = (id) => {
      showModalHandler('edit')
      searchParams.set('studentId', id)
      setSearchParams(searchParams)
   }
   const btnHandler2 = () => {
      setOpenModal((prevState) => !prevState)
   }
   const handleFileChange = (event) => {
      setFile(event.target.files[0])
   }
   const handleButtonClick = () => {
      document.getElementById('file-input').click()
   }
   const handleSubmit = async (event) => {
      event.preventDefault()
      const formData = new FormData()
      formData.append('file', file)
      try {
         await fileUploadPostRequest(formData)
         fetchStudent()
         setOpenModal(false)
      } catch (error) {
         if (error.response) {
            notify('error', error.response.data.message)
         }
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
               <IconButton onClick={() => editStudentHadler(student.id)}>
                  <EditIcon />
               </IconButton>
               <IconButton onClick={() => deleteStudent(student.id)}>
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
      updateStudents(id, values)
   }
   const isModalOpen = !!searchParams.get('modal')
   const handleLogout = () => {
      removeItemFromStorage(JWT_TOKEN_KEY)
      removeItemFromStorage(USER_INFO)
      window.location.reload()
   }
   return (
      <Container>
         {Snackbar}
         <Header>
            <AdminIconStyled>
               <AdminIcon />
            </AdminIconStyled>
            <AdminSpan>Администратор</AdminSpan>
            <ArrowIcon onClick={handleArrowIconClick} />
         </Header>
         {showLogoutIcon && <LogOutStyled onClick={handleLogout} />}
         <hr style={{ width: '78%', marginLeft: '18% ' }} />
         <AddModalStudentAndFile>
            <div>
               <SelectFormStudy
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={filterValue}
                  label="Формат обучение"
                  onChange={filterChangeHand}
               >
                  <MenuItem value="ONLINE">Онлайн</MenuItem>
                  <MenuItem value="OFFLINE">Оффлайн</MenuItem>
                  <MenuItem value="все">Все</MenuItem>
               </SelectFormStudy>
               <ImportFileBtn variant="outlined" onClick={btnHandler2}>
                  <VictorStyled />
                  Импорт Excel
               </ImportFileBtn>
               <AddStudentBtn onClick={() => showModalHandler('add')}>
                  <PluzStyled />
                  Добавить студента
               </AddStudentBtn>
            </div>
            {openModal && (
               <div>
                  <ModalStyled open={openModal} onClose={btnHandler2}>
                     <ContentH3>
                        <h3>Импорт Excel в БД</h3>
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
                        <FileUpload>
                           <input
                              id="file-input"
                              type="file"
                              accept=".xlsx, .xls"
                              style={{ display: 'none' }}
                              onChange={handleFileChange}
                           />

                           <input
                              type="text"
                              value={file ? file.name : ''}
                              placeholder="Выберите Excel файл для импорта"
                              readOnly
                           />

                           <Button
                              variant="outlined"
                              onClick={handleButtonClick}
                           >
                              Обзор...
                           </Button>
                        </FileUpload>
                        <ContainerBtn>
                           <Button variant="outlined" onClick={btnHandler2}>
                              Отмена
                           </Button>
                           <Button variant="contained" onClick={handleSubmit}>
                              Добавить
                           </Button>
                        </ContainerBtn>
                     </form>
                  </ModalStyled>
               </div>
            )}
            {isModalOpen && (
               <ModalStudent
                  open={isModalOpen}
                  onClose={closeModalHandler}
                  addNewData={addStudent}
                  onSubmit={saveHandler}
               />
            )}
         </AddModalStudentAndFile>
         <AppTable
            columns={columns}
            rows={students}
            getUniqueId={(val) => val.id}
         />
      </Container>
   )
}

const Container = styled.div`
   background-color: #eff0f4;
   width: 100%;
   height: 100vh;
   .css-1mftfee-MuiPaper-root-MuiTableContainer-root {
      margin-left: 18%;
      width: 78%;
   }
`
const AddModalStudentAndFile = styled.div`
   .css-1scch9i-MuiFormLabel-root-MuiInputLabel-root {
      letter-spacing: 0.001em;
      color: #3772ff;
      display: inline;
      position: absolute;
      z-index: 1;
      top: 1.9rem;
      left: 18rem;
   }
   .css-m7f4vg-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root {
      width: 200px;
      height: 35px;
      margin-left: 17.4rem;
      margin-right: 20rem;
      background-color: rgba(239, 240, 244, 1);
      border: solid 0.5px rgba(55, 114, 255, 1);
      border-radius: 8px;
   }
`
const ImportFileBtn = styled(Button)`
   margin-left: 18rem;
   margin-bottom: 24px;
   margin-top: 24px;
`
const AddStudentBtn = styled(Button)`
   margin-left: 1rem;
   margin-bottom: 24px;
   margin-top: 24px;
`

const VictorStyled = styled(Victor)`
   margin-right: 10.5px;
`
const PluzStyled = styled(Pluz)`
   margin-right: 12px;
`
const Header = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   margin-left: 79%;
   padding-top: 23px;
   padding-bottom: 10px;
`

const AdminIconStyled = styled.div`
   margin-right: 14px;
`
const AdminSpan = styled.div`
   font-weight: 400;
   font-size: 16px;
   line-height: 22px;
   margin-right: 14px;
   padding-bottom: 6px;
`
const ModalStyled = styled(ModalWindow)`
   .css-13cymwt-control {
      margin: 16px 25px;
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
   Input {
      margin-left: 25px;
      margin-top: 10px;
   }
`
const LogOutStyled = styled(LogOut)`
   margin-left: 77rem;
   width: 200px;
   height: 100px;
   margin-top: -1rem;
   margin-bottom: -1rem;
`
const FileUpload = styled.div`
   input {
      text-align: center;
      width: 369px;
      height: 42px;
      border-radius: 10px;
      margin-right: 12px;
      margin-bottom: 20px;
      margin-left: 25px;
      border: solid 1px rgba(212, 212, 212, 1);
   }
   Button {
      background-color: #bacefc;
      border: solid 1px rgba(55, 114, 255, 1);
      border-radius: 8px;
      height: 42px;
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
