import styled from '@emotion/styled'
import { useState } from 'react'
import Button from '../UI/Button'
import ModalWindow from '../UI/Modal'
import Input from '../UI/Input'
import { postVideoLesson } from '../../api/videoLesson'
import { useSnackbar } from '../../hooks/useSnackbar'

export const ModalVideo = ({
   title,
   children,
   open,
   onClose,
   placeholder,
   lessonId,
   ...rest
}) => {
   const [name, setVideoName] = useState('')
   const [description, setDescription] = useState('')
   const [videoLink, setLink] = useState('')
   const { notify, Snackbar } = useSnackbar()
   const handleVideoName = (e) => {
      setVideoName(e.target.value)
   }
   const handleVideoDescription = (e) => {
      setDescription(e.target.value)
   }
   const handleVideoLink = (e) => {
      setLink(e.target.value)
   }
   const postVideoRequest = async () => {
      try {
         const response = await postVideoLesson(lessonId, {
            name,
            description,
            videoLink,
         })
         notify('success', response.data.message)
         onClose()
      } catch (error) {
         notify('error', error.response.data.message)
      }
   }
   return (
      <ModalWindowStyled>
         {Snackbar}
         <ModalWindow open={open} onClose={onClose} {...rest}>
            <Styledtext>
               <h3>Добавить видеоурок</h3>
            </Styledtext>
            <InputStyled
               placeholder="Введите название видеоурока"
               value={name}
               onChange={handleVideoName}
            />
            <InputStyled
               placeholder="Введите описание видеоурока"
               value={description}
               onChange={handleVideoDescription}
            />
            <InputStyled
               placeholder="Вставьте ссылку на видеоурок"
               value={videoLink}
               onChange={handleVideoLink}
            />
            <StyledBtns>
               <Button variant="outlined" onClick={onClose}>
                  Отмена
               </Button>
               <Button variant="contained" onClick={postVideoRequest}>
                  Добавить
               </Button>
            </StyledBtns>
         </ModalWindow>
      </ModalWindowStyled>
   )
}
const Styledtext = styled.div`
   background: #1f6ed4;
   font-weight: 600;
   font-size: 20px;
   padding-top: 25px;
   padding-bottom: 14px;
   color: #fff;
   text-align: center;
   border-radius: 10px 10px 0 0;
`
const InputStyled = styled(Input)({
   margin: '16px 25px 20px 25px ',
   width: '500px',
   borderRadius: '10px',
   background: '#FFFFFF',
   border: '1 solid #D4D4D4',
})
const StyledBtns = styled.div`
   display: flex;
   gap: 10px;
   justify-content: flex-end;
   padding: 0 30px 0 0;
`
const ModalWindowStyled = styled.div`
   width: 541px;
   height: 481px;
`
