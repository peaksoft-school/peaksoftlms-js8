import { useState } from 'react'
import styled from '@emotion/styled'
import Select from 'react-select/creatable'
import { ModalStudent } from '../../components/addModal/ModalStudent'
import Button from '../../components/UI/Button'
import Input from '../../components/UI/Input'
import { ReactComponent as Victor } from '../../assets/icons/victor.svg'
import { ReactComponent as Pluz } from '../../assets/icons/pluz.svg'
import ModalWindow from '../../components/UI/Modal'
import { AppTable } from '../../utlis/constants/Table'
import { studentPostRequests } from '../../api/adminStudent'

export const Students = () => {
   // const [students, setStudents] = useState([])
   const [open, setOpen] = useState(false)
   const [openModal, setOpenModal] = useState(false)
   const [selectedValue, setSelectedValue] = useState([])
   // const fetchStudent = async () => {
   //    try {
   //       const { data } = await getStudentRequests()
   //       console.log(data, 'getData')
   //       setStudents(data)
   //    } catch (error) {
   //       console.log(error)
   //    }
   // }
   // useEffect(() => {
   //    fetchStudent()
   // }, [])
   const onChangeSelect = (newValue) => {
      setSelectedValue(newValue)
   }
   const optionsGroup = [
      { value: 'option1', label: 'js-8' },
      { value: 'option2', label: 'js-9' },
      { value: 'option3', label: 'js-10' },
   ]
   const btnHandler = () => {
      setOpen((prevState) => !prevState)
   }
   const btnHandler2 = () => {
      setOpenModal((prevState) => !prevState)
   }
   const handleFileUpload = (event) => {
      const file = event.target.files[0]
      console.log(file)
   }
   const addStudent = (
      firstName,
      lastName,
      phoneNumber,
      email,
      password,
      groupId,
      formLearning
   ) => {
      studentPostRequests({
         firstName,
         lastName,
         phoneNumber,
         email,
         password,
         groupId,
         formLearning,
      })
   }

   const columns = [
      {
         header: 'ID',
         key: 'id',
         id: 11,
      },
      {
         header: 'Имя Фамилия',
         key: 'userFullName',
         id: 12,
      },
      {
         header: 'Группа',
         key: 'group',
         id: 13,
      },
      {
         header: 'Формат обучения',
         key: 'learningFormat',
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

   return (
      <div>
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
                  <SelectStyled
                     isClearable
                     isMulti
                     options={optionsGroup}
                     value={selectedValue}
                     onChange={onChangeSelect}
                     placeholder="Группа"
                     onCreateOption={(inputValue) => {
                        setSelectedValue([
                           ...selectedValue,
                           { value: inputValue, label: inputValue },
                        ])
                     }}
                  />
                  <Input type="file" onChange={handleFileUpload} />
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
         <AppTable columns={columns} />
      </div>
   )
}
const VictorStyled = styled(Victor)`
   margin-right: 10.5px;
`
const PluzStyled = styled(Pluz)`
   margin-right: 12px;
`

const ModalStyled = styled(ModalWindow)`
   .css-se7fw1 {
      width: 541px;
      height: 256px;
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
const SelectStyled = styled(Select)`
   margin-top: 16px;
   margin-left: 25px;
   margin-right: 25px;
`
