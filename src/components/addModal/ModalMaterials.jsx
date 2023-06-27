import styled from '@emotion/styled'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import Button from '../UI/Button'
import Input from '../UI/Input'
import ModalWindow from '../UI/Modal'
import { postLessonRequest } from '../../api/lessonService'
import { useSnackbar } from '../../hooks/useSnackbar'

export const ModalMaterials = ({
   title,
   children,
   open,
   onClose,
   placeholder,
   ...rest
}) => {
   const { courseId } = useParams()
   const [lessonName, setLessonName] = useState('')
   const { notify, Snackbar } = useSnackbar()
   const handleLessonNameChange = (event) => {
      setLessonName(event.target.value)
   }
   const postLesson = async () => {
      try {
         const response = await postLessonRequest(courseId, { lessonName })
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
               <h3>Добавить урок</h3>
            </Styledtext>
            <InputStyled
               placeholder="Название урока"
               value={lessonName}
               onChange={handleLessonNameChange}
            />
            <StyledBtns>
               <Button variant="outlined" onClick={onClose}>
                  Отмена
               </Button>
               <Button variant="contained" onClick={postLesson}>
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
   padding-bottom: 16px;
   color: #fff;
   text-align: center;
   border-radius: 10px 10px 0 0;
`
const InputStyled = styled(Input)({
   margin: '16px 25px 20px 25px ',
   width: '541px',
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
