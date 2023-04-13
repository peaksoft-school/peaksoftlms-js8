import { Typography, styled } from '@mui/material'
import ModalWindow from './Modal'
import Input from './Input'
import Button from './Button'
import { ReactComponent as Avatar } from '../../assets/icons/avatar.svg'

const GroupModal = ({
   children,
   title,
   open,
   onClose,
   placeholder,
   ...rest
}) => {
   return (
      <ModalWindow open={open} onClose={onClose} {...rest}>
         <StyledModalHeader>
            <Typography>{title}</Typography>
         </StyledModalHeader>
         <AvatarContainer>
            <AvatarStyled />
            <p>Нажмите на иконку чтобы загрузить или перетащите фото</p>
         </AvatarContainer>
         <ContainerInput>
            <InputStyled placeholder={`название ${placeholder}`} />
            <InputDataStyle type="date" />
         </ContainerInput>
         <StyledInput
            multiline
            rows={4}
            placeholder={`описание ${placeholder}`}
         />
         <ContainerButton>
            <ButtonStyledСancellation variant="outlined">
               Отмена
            </ButtonStyledСancellation>
            <StyledButtonAdd>Добавить</StyledButtonAdd>
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

const AvatarStyled = styled(Avatar)({
   marginTop: '20%',
})

const AvatarContainer = styled('div')({
   margin: '16px 189px 70px',
   width: '173px',
   height: '145px',
   textAlign: 'center',
   background: '#E2E4E8',
   borderRadius: '10px',
   p: {
      inlineSize: '220px',
      marginLeft: '-13%',
      marginTop: '14%',
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
