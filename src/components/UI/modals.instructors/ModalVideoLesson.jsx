import styled from '@emotion/styled'
import { useState } from 'react'
import Button from '../Button'
import ModalWindow from '../Modal'
import Input from '../Input'
import { postVideoLesson } from '../../../api/videoLesson'

export const ModalVideo = ({
   title,
   children,
   open,
   onClose,
   placeholder,
   lessonId,
   ...rest
}) => {
   const [videoName, setVideoName] = useState('')
   const [description, setDescription] = useState('')
   const [link, setLink] = useState('')
   console.log(lessonId, 'lesson')
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
         await postVideoLesson(lessonId, { videoName, description, link })
      } catch (error) {
         console.error(error)
      }
   }
   return (
      <ModalWindowStyled>
         <ModalWindow open={open} onClose={onClose} {...rest}>
            <Styledtext>
               <h3>Добавить видеоурок</h3>
            </Styledtext>
            <InputStyled
               placeholder="Введите название видеоурока"
               value={videoName}
               onChange={handleVideoName}
            />
            <InputStyled
               placeholder="Введите описание видеоурока"
               value={description}
               onChange={handleVideoDescription}
            />
            <InputStyled
               placeholder="Вставьте ссылку на видеоурок"
               value={link}
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
