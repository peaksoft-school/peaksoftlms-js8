import { useState } from 'react'
import styled from '@emotion/styled'
import ModalWindow from '../UI/Modal'
import Button from '../UI/Button'
import Input from '../UI/Input'
import { postPresentationReq } from '../../api/presentationServise'
import { useSnackbar } from '../../hooks/useSnackbar'

export const ModalPresentation = ({
   title,
   children,
   open,
   onClose,
   placeholder,
   lessonId,
   ...rest
}) => {
   const [formatPPT, setFile] = useState('')
   const [name, setName] = useState('')
   const [description, setDescription] = useState('')
   const { notify, Snackbar } = useSnackbar()
   const handleFileChange = (event) => {
      const file = event.target.files[0]
      const fileLink = URL.createObjectURL(file)
      setFile(fileLink)
   }
   const handleName = (e) => {
      setName(e.target.value)
   }
   const handleDescription = (e) => {
      setDescription(e.target.value)
   }
   const handleButtonClick = () => {
      document.getElementById('file-input').click()
   }
   const handleSubmit = async (event) => {
      event.preventDefault()
      const formData = new FormData()
      formData.append('file', formatPPT)
      try {
         const response = await postPresentationReq({
            name,
            description,
            formatPPT,
            lessonId,
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
               <h3>Добавить презентацию</h3>
            </Styledtext>
            <InputStyled
               placeholder="Введите название презентации"
               value={name}
               onChange={handleName}
            />
            <InputStyled
               placeholder="Введите описание презентации"
               value={description}
               onChange={handleDescription}
            />
            <StyledContent>
               <InputStyledFolder
                  id="file-input"
                  type="file"
                  accept=".xlsx, .xls"
                  style={{ display: 'none' }}
                  onChange={handleFileChange}
               />
               <InputStyledFolder
                  type="text"
                  value={formatPPT}
                  placeholder="Выберите файл в формате ppt"
                  readOnly
               />
               <StyledButton variant="outlined" onClick={handleButtonClick}>
                  Обзор...
               </StyledButton>
            </StyledContent>

            <StyledBtns>
               <Button variant="outlined" onClick={onClose}>
                  Отмена
               </Button>
               <Button variant="contained" type="submit" onClick={handleSubmit}>
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
   width: '561px',
   borderRadius: '10px',
   background: '#FFFFFF',
   border: '1 solid #D4D4D4',
})
const InputStyledFolder = styled(Input)({
   margin: '16px 25px 20px 25px ',
   width: '415px',
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
const StyledContent = styled.div`
   display: flex;
`
const StyledButton = styled(Button)({
   marginTop: '18px',
   padding: '15px 29px 15px 24px',
   backgroundColor: '#bacefc',
   border: '1px solid rgba(55,114,255,1)',
   borderRadius: '8px',
   height: '55px',
})
