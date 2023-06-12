import { styled } from '@mui/material'
// import { useState } from 'react'
import Input from '../UI/Input'
import TextArea from '../UI/TextArea'
import AvatarUpload from '../UI/Avatar'
import ModalWindow from '../UI/Modal'

import Button from '../UI/Button'
import MyDatePickers from '../UI/MyDatePickers'

const ModalGroup = ({
   children,
   title,
   open,
   onClose,
   placeholder,
   data,
   courseId,
   ...rest
}) => {
   //    const [img, setImg] = useState('')
   //    const [inputName, setInputName] = useState('')
   //    const [inputDate, setInputDate] = useState('')
   //    const [inputDescrip, setInputDescrip] = useState('')

   return (
      <ModalWindow open={open} onClose={onClose} {...rest}>
         <StyledModalHeader>
            <h1>{title}</h1>
         </StyledModalHeader>
         <AvatarContainer>
            <AvatarStyled />
            <p>Нажмите на иконку чтобы загрузить или перетащите фото</p>
         </AvatarContainer>
         <ContainerInput>
            <InputStyled
               //    value={}
               //    onChange={nameChangeHandler}
               placeholder={`название ${'группы'}`}
            />
            <StyledDataPicker>
               <MyDatePickers />
            </StyledDataPicker>
         </ContainerInput>
         <StyledInput
            // value={inputDescrip}
            // onChange={descripChangeHandler}
            rows={4}
            multiline
            placeholder={`описание ${placeholder}`}
         />
         <ContainerButton>
            <ButtonStyledСancellation variant="outlined" onClick={onClose}>
               Отмена
            </ButtonStyledСancellation>
            <StyledButtonAdd>Добавить</StyledButtonAdd>
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
