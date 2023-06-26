import styled from '@emotion/styled'
import { useState } from 'react'
import { format, isValid } from 'date-fns'
import Button from '../UI/Button'
import ModalWindow from '../UI/Modal'
import Input from '../UI/Input'
import MyDatePickers from '../UI/MyDatePickers'
import { postTaskReq } from '../../api/taskServise'

export const ModalTask = ({
   title,
   children,
   open,
   onClose,
   lessonId,
   ...rest
}) => {
   const [name, setName] = useState('')
   const [description, setDescription] = useState('')
   const [date, setDeadline] = useState('')
   const handleName = (e) => {
      setName(e.target.value)
   }
   const handleDescription = (e) => {
      setDescription(e.target.value)
   }

   const dateChangeHandler = (date) => {
      setDeadline(date)
   }

   let deadline

   if (date && isValid(new Date(date))) {
      deadline = format(new Date(date), 'yyyy-MM-dd')
   }
   const postTask = async () => {
      try {
         await postTaskReq(lessonId, { name, description, deadline })
      } catch (error) {
         console.log(error, 'error')
         console.error(error)
      }
   }
   return (
      <ModalWindowStyled>
         <ModalWindow open={open} onClose={onClose} {...rest}>
            <Styledtext>
               <h3>Добавить задание</h3>
            </Styledtext>
            <InputStyled
               placeholder="Название задание"
               value={name}
               onChange={handleName}
            />
            <InputStyled
               placeholder="Описание..."
               value={description}
               onChange={handleDescription}
            />
            <StyledDataPicker>
               <MyDatePickers value={date} onChange={dateChangeHandler} />
            </StyledDataPicker>
            <StyledBtns>
               <Button variant="outlined" onClick={onClose}>
                  Отмена
               </Button>
               <Button variant="contained" onClick={postTask}>
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
   margin-bottom: 1rem;
`
const ModalWindowStyled = styled.div`
   width: 541px;
   height: 481px;
`
const StyledDataPicker = styled.div`
   min-width: 150px;
   margin-left: 1.5rem;
   .css-lvtnlv-MuiStack-root > .MuiTextField-root {
      width: 500px;
   }
`
