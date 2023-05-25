import { useEffect, useState } from 'react'
import Select from 'react-select/creatable'
import styled from '@emotion/styled'
import { ModalStudent } from '../../components/addModal/ModalStudent'
import Button from '../../components/UI/Button'
import { ReactComponent as Victor } from '../../assets/icons/victor.svg'
import { ReactComponent as Pluz } from '../../assets/icons/pluz.svg'
import ModalWindow from '../../components/UI/Modal'
import { AppTable } from '../../utlis/constants/Table'
import {
   getGroupAllRequest,
   getStudentRequests,
   studentPostRequests,
} from '../../api/adminStudent'

export const Students = () => {
   const [students, setStudents] = useState([])
   const [open, setOpen] = useState(false)
   const [openModal, setOpenModal] = useState(false)
   const [groups, setGroups] = useState([])
   const [selectedGroupID, setSelectedGroupID] = useState('')
   const [file, setFile] = useState(null)
   const fetchStudent = async (id) => {
      try {
         const { data } = await getStudentRequests(id)
         setStudents(data)
         console.log(data, 'dataStudents')
      } catch (error) {
         console.log(error, 'ERROR')
      }
   }
   useEffect(() => {
      fetchStudent()
   }, [])
   const fetchData = async () => {
      try {
         const response = await getGroupAllRequest()
         setGroups(response.data.groupResponses)
      } catch (error) {
         console.error('Ошибка при получении данных:', error)
      }
   }
   const handleGroupChange = (options) => {
      setSelectedGroupID(options)
   }
   useEffect(() => {
      fetchData()
   }, [])
   const groupOptions = groups.map((group) => ({
      value: group.id,
      label: group.name,
   }))
   const btnHandler = () => {
      setOpen((prevState) => !prevState)
   }
   const btnHandler2 = () => {
      setOpenModal((prevState) => !prevState)
   }

   const addStudent = (data) => {
      studentPostRequests(data)
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
         header: 'Пароль',
         key: 'password',
         id: 17,
      },
      {
         header: 'Действия',
         key: 'action',
         id: 18,
      },
   ]
   const handleFileChange = (event) => {
      setFile(event.target.files[0])
   }
   const handleUpload = () => {
      if (file) {
         console.log('Uploading file:', file)
         setFile(null)
      }
   }
   return (
      <Container>
         <AddModalStudentAndFile>
            <Button variant="outlined" onClick={btnHandler2}>
               <VictorStyled />
               Импорт Excel
            </Button>
            <Button onClick={btnHandler}>
               <PluzStyled />
               Добавить студента
            </Button>
            {openModal && (
               <div>
                  <ModalStyled open={openModal} onClose={btnHandler2}>
                     <ContentH3>
                        <h3>Импорт Excel в БД</h3>
                     </ContentH3>
                     <Select
                        options={groupOptions}
                        value={selectedGroupID}
                        onChange={handleGroupChange}
                        placeholder="Группа"
                     />
                     <input type="file" onChange={handleFileChange} />
                     <Button variant="contained">Обзор...</Button>
                     <Button variant="outlined" onClick={btnHandler2}>
                        Отмена
                     </Button>
                     <Button variant="contained" onClick={handleUpload}>
                        Добавить
                     </Button>
                  </ModalStyled>
               </div>
            )}
            {open && (
               <ModalStudent
                  open={open}
                  onClose={btnHandler}
                  addNewData={addStudent}
               />
            )}
         </AddModalStudentAndFile>
         <AppTable rows={students} columns={columns} />
      </Container>
   )
}

const Container = styled.div`
   background: #eff0f4;
   margin-left: 15rem;
   width: 1140px;
`
const AddModalStudentAndFile = styled.div`
   display: flex;
   justify-content: flex-end;
   Button {
      margin-right: 40px;
      margin-bottom: 24px;
      margin-top: 24px;
   }
`
const VictorStyled = styled(Victor)`
   margin-right: 10.5px;
`
const PluzStyled = styled(Pluz)`
   margin-right: 12px;
`

const ModalStyled = styled(ModalWindow)`
   input {
      width: 369px;
      height: 42px;
      border-radius: 10px;
      border: solid 1px rgba(212, 212, 212, 1);
      margin-right: 12px;
      margin-bottom: 20px;
   }
   .file-upload-button {
      background-color: #ffff;
      padding-top: 1rem;
   }
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
const ContentH3 = styled.div`
   background: #1f6ed4;
   padding-top: 25px;
   padding-bottom: 16px;
   color: #fff;
   text-align: center;
   border-radius: 10px 10px 0 0;
`
