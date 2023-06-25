import { useState } from 'react'
import styled from '@emotion/styled'
import ModalWindow from '../Modal'
import Button from '../Button'
import Input from '../Input'

export const ModalPresentation = ({
   title,
   children,
   open,
   onClose,
   placeholder,
   ...rest
}) => {
   const [file, setFile] = useState(null)
   const handleFileChange = (event) => {
      setFile(event.target.files[0])
   }
   const handleButtonClick = () => {
      document.getElementById('file-input').click()
   }
   const handleSubmit = async (event) => {
      event.preventDefault()
      // const formData = new FormData()
      // formData.append('file', file)
      // try {
      //    await fileUploadPostRequest(formData)
      // } catch (error) {
      //    if (error.response) {
      //       notify('error', error.response.data.message)
      //    }
      // }
   }
   return (
      <ModalWindowStyled>
         <ModalWindow open={open} onClose={onClose} {...rest}>
            <Styledtext>
               <h3>Добавить презентацию</h3>
            </Styledtext>
            <InputStyled placeholder="Введите название презентации" />
            <InputStyled placeholder="Введите описание презентации" />
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
                  value={file ? file.name : ''}
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
