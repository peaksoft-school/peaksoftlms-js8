import { Typography, styled } from '@mui/material'
import { useState } from 'react'
import ModalWindow from './Modal'
import Input from './Input'
import Button from './Button'
import AvatarUpload from './Avatar'

const GroupModal = ({
   children,
   title,
   open,
   onClose,
   placeholder,
   data,
   ...rest
}) => {
   const [img, setImg] = useState()
   const [inputName, setInputName] = useState('')
   const [inputDate, setInputDate] = useState('')
   const [inputDescrip, setInputDescrip] = useState('')

   const nameChangeHandler = (e) => {
      setInputName(e.target.value)
   }
   const dateChangeHandler = (e) => {
      setInputDate(e.target.value)
   }
   const descripChangeHandler = (e) => {
      setInputDescrip(e.target.value)
   }

   const setImageHandler = (e) => {
      setImg(e.target.files[0])
   }

   const addNewData = () => {
      const newData = {
         name: inputName,
         date: inputDate,
         description: inputDescrip,
         avatar: img,
      }
      data(newData)
   }

   return (
      <ModalWindow open={open} onClose={onClose} {...rest}>
         <StyledModalHeader>
            <Typography>{title}</Typography>
         </StyledModalHeader>
         <AvatarContainer>
            <AvatarStyled onChange={setImageHandler} />
            <p>Нажмите на иконку чтобы загрузить или перетащите фото</p>
         </AvatarContainer>
         <ContainerInput>
            <InputStyled
               value={inputName}
               onChange={nameChangeHandler}
               placeholder={`название ${placeholder}`}
            />
            <InputDataStyle
               type="date"
               value={inputDate}
               onChange={dateChangeHandler}
            />
         </ContainerInput>
         <StyledInput
            value={inputDescrip}
            onChange={descripChangeHandler}
            multiline
            rows={4}
            placeholder={`описание ${placeholder}`}
         />
         <ContainerButton>
            <ButtonStyledСancellation variant="outlined" onClick={onClose}>
               Отмена
            </ButtonStyledСancellation>
            <StyledButtonAdd onClick={addNewData}>Добавить</StyledButtonAdd>
         </ContainerButton>
      </ModalWindow>
   )
}

export default GroupModal

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
   width: '327px',
   borderRadius: '10px',
   background: '#FFFFFF',
   border: '1 solid #D4D4D4',
})
const InputDataStyle = styled(Input)({
   borderRadius: '10px',
   width: '149px',
})
const StyledInput = styled(Input)({
   width: '491px',
   borderRadius: '10px',
   margin: '12px 24px',
})

const AvatarStyled = styled(AvatarUpload)({
   marginTop: '20%',
})

const AvatarContainer = styled('div')({
   margin: '0 189px 100px',
   width: '173px',
   height: '145px',
   textAlign: 'center',
   borderRadius: '10px',
   p: {
      inlineSize: '220px',
      marginLeft: '-10%',
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
   marginLeft: '52%',
})
const ButtonStyledСancellation = styled(Button)({
   padding: '10px 24px',
   borderRadius: '8px',
})

const StyledButtonAdd = styled(Button)({
   padding: '10px 24px',
   borderRadius: '8px',
})
