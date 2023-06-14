import { useEffect, useState } from 'react'
import { styled } from '@mui/material'
import { format, isValid } from 'date-fns'
import Input from '../UI/Input'
import TextArea from '../UI/TextArea'
import AvatarUpload from '../UI/Avatar'
import ModalWindow from '../UI/Modal'
import { axiosInstance } from '../../config/axiosInstance'
import Button from '../UI/Button'
import MyDatePickers from '../UI/MyDatePickers'
import { fileRequest } from '../../api/groupService'

const ModalGroup = ({
   children,
   title,
   open,
   onClose,
   placeholder,
   data,
   groupId,
   ...rest
}) => {
   const [img, setImg] = useState('')
   const [inputName, setInputName] = useState('')
   const [inputDate, setInputDate] = useState('')
   const [inputDescrip, setInputDescrip] = useState('')

   const disabledButton = !img || !inputDate || !inputDate || !inputDescrip

   const nameChangeHandler = (event) => {
      setInputName(event.target.value)
   }
   const dateChangeHandler = (date) => {
      setInputDate(date)
   }
   const descripChangehandler = (event) => {
      setInputDescrip(event.target.value)
   }

   const getGroupsById = async (groupId) => {
      try {
         const { data } = await axiosInstance.get(`groups?groupId=${groupId}`)
         setImg(data.img)
         setInputDate(data.date)
         setInputName(data.name)
         setInputDescrip(data.description)
      } catch (error) {
         console.log(error)
      }
   }

   useEffect(() => {
      if (groupId !== undefined) {
         getGroupsById(groupId)
      }
   }, [groupId])

   const imageHandler = async (e) => {
      const image = e.target.files[0]
      const formData = new FormData()
      formData.append('file', image)
      try {
         const { data } = await fileRequest(formData)
         return setImg(data.link)
      } catch (error) {
         return error
      }
   }
   let date = ''
   if (inputDate && isValid(new Date(inputDate))) {
      date = format(new Date(inputDate), 'yyyy-MM-dd')
   }
   const addNewData = () => {
      const newData = {
         name: inputName,
         createdAt: date,
         description: inputDescrip,
         image: img,
      }
      setImg('')
      setInputDate('')
      setInputDescrip('')
      setInputName('')
      data(newData)
   }
   return (
      <ModalWindow open={open} onClose={onClose} {...rest}>
         <StyledModalHeader>
            <h1>{title}</h1>
         </StyledModalHeader>
         <AvatarContainer>
            <AvatarStyled imgLink={img} onChange={imageHandler} />
            <p>Нажмите на иконку чтобы загрузить или перетащите фото</p>
         </AvatarContainer>
         <ContainerInput>
            <InputStyled
               value={inputName}
               onChange={nameChangeHandler}
               placeholder={`название ${'группы'}`}
            />
            <StyledDataPicker>
               <MyDatePickers value={inputDate} onChange={dateChangeHandler} />
            </StyledDataPicker>
         </ContainerInput>
         <StyledInput
            value={inputDescrip}
            onChange={descripChangehandler}
            rows={4}
            multiline
            placeholder={`описание ${placeholder}`}
         />
         <ContainerButton>
            <ButtonStyledСancellation variant="outlined" onClick={onClose}>
               Отмена
            </ButtonStyledСancellation>
            <StyledButtonAdd onClick={addNewData} disabled={disabledButton}>
               Добавить
            </StyledButtonAdd>
         </ContainerButton>
      </ModalWindow>
   )
}

export default ModalGroup

const StyledDataPicker = styled('div')({
   minWidth: '150px',
})

const StyledModalHeader = styled('div')({
   color: '#fff',
   background: '#1F6ED4',
   borderRadius: '10px 10px 0px 0px',
   height: '68px',
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
})
const ContainerInput = styled('div')({
   display: 'flex',
   gap: '12px',
   alignItems: 'center',
   padding: '0 25px',
})
const InputStyled = styled(Input)({
   width: '287px',
   borderRadius: '10px',
   background: '#FFFFFF',
   border: '1 solid #D4D4D4',
})
const StyledInput = styled(TextArea)({
   width: '90%',
   borderRadius: '10px',
   margin: '12px 24px',
})

const AvatarStyled = styled(AvatarUpload)({
   marginTop: '4%',
   marginLeft: '20px',
})

const AvatarContainer = styled('div')({
   margin: '0 189px 100px',
   width: '103px',
   height: '105px',
   textAlign: 'center',
   borderRadius: '10px',
   p: {
      inlineSize: '220px',
      marginTop: '-1%',
      color: '#8D949E',
      fontFamily: 'Nunito',
      fontStyle: 'normal',
      fontWeight: '400',
      textAlign: 'center',
      fontSize: '14px',
      lineHeight: '130%',
      letterSpacing: '0.03em',
   },
})
const ContainerButton = styled('div')({
   display: 'flex',
   gap: '10px',
   justifyContent: 'flex-end',
   padding: ' 0 30px 0 0',
})
const ButtonStyledСancellation = styled(Button)({
   padding: '10px 24px',
   borderRadius: '8px',
})

const StyledButtonAdd = styled(Button)({
   padding: '10px 24px',
   borderRadius: '8px',
})
