import { styled } from '@mui/material'
import { useEffect, useState } from 'react'
// eslint-disable-next-line import/no-extraneous-dependencies
import { format, isValid } from 'date-fns'
import ModalWindow from './Modal'
import Input from './Input'
import Button from './Button'
import AvatarUpload from './Avatar'
import MyDatePickers from './MyDatePickers'
import TextArea from './TextArea'
import { imagePostService } from '../../api/courseService'
import { axiosInstance } from '../../config/axiosInstance'

const GroupModal = ({
   children,
   title,
   open,
   onClose,
   placeholder,
   data,
   courseId,
   ...rest
}) => {
   const [img, setImg] = useState('')
   const [inputName, setInputName] = useState('')
   const [inputDate, setInputDate] = useState('')
   const [inputDescrip, setInputDescrip] = useState('')

   const disabledBtn = !img || !inputDate || !inputDate || !inputDescrip

   const nameChangeHandler = (e) => {
      setInputName(e.target.value)
   }
   const dateChangeHandler = (date) => {
      setInputDate(date)
   }
   const descripChangeHandler = (e) => {
      setInputDescrip(e.target.value)
   }

   const setImageHandler = async (e) => {
      const image = e.target.files[0]
      const formData = new FormData()
      formData.append('file', image)
      try {
         const { data } = await imagePostService(formData)
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
   const getCoursesById = async (courseId) => {
      try {
         const { data } = await axiosInstance.get(`courses/${courseId}`)
         setInputName(data.name)
         setImg(data.image)
         setInputDescrip(data.description)
         return data
      } catch (error) {
         return error
      }
   }
   useEffect(() => {
      if (courseId !== undefined) {
         getCoursesById(courseId)
      }
   }, [courseId])

   return (
      <ModalWindow open={open} onClose={onClose} {...rest}>
         <StyledModalHeader>
            <h1>{title}</h1>
         </StyledModalHeader>
         <AvatarContainer>
            <AvatarStyled imgLink={img} onChange={setImageHandler} />
            <p>Нажмите на иконку чтобы загрузить или перетащите фото</p>
         </AvatarContainer>
         <ContainerInput>
            <InputStyled
               value={inputName}
               onChange={nameChangeHandler}
               placeholder={`название ${placeholder}`}
            />
            <StyledDataPicker>
               <MyDatePickers value={inputDate} onChange={dateChangeHandler} />
            </StyledDataPicker>
         </ContainerInput>
         <StyledInput
            value={inputDescrip}
            onChange={descripChangeHandler}
            rows={4}
            multiline
            placeholder={`описание ${placeholder}`}
         />
         <ContainerButton>
            <ButtonStyledСancellation variant="outlined" onClick={onClose}>
               Отмена
            </ButtonStyledСancellation>
            <StyledButtonAdd onClick={addNewData} disabled={disabledBtn}>
               Добавить
            </StyledButtonAdd>
         </ContainerButton>
      </ModalWindow>
   )
}

export default GroupModal

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
