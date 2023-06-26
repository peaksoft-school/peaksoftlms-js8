import styled from '@emotion/styled'
import { useState } from 'react'
import Button from '../UI/Button'
import ModalWindow from '../UI/Modal'
import Input from '../UI/Input'
import { postLinkReq } from '../../api/linkServise'

export const ModalLink = ({
   title,
   children,
   open,
   onClose,
   placeholder,
   lessonId,
   ...rest
}) => {
   const [displayText, setDisplayText] = useState('')
   const [link, setLink] = useState('')

   const handleDisplayTextChange = (e) => {
      setDisplayText(e.target.value)
   }
   const handleLinkChange = (e) => {
      setLink(e.target.value)
   }
   const handleSubmite = async () => {
      try {
         await postLinkReq({ displayText, link, lessonId })
      } catch (error) {
         console.error(error)
      }
   }
   return (
      <ModalWindowStyled>
         <ModalWindow open={open} onClose={onClose} {...rest}>
            <Styledtext>
               <h3>Добавить ссылку</h3>
            </Styledtext>
            <InputStyled
               placeholder="Отображаемый текст"
               value={displayText}
               onChange={handleDisplayTextChange}
            />
            <InputStyled
               placeholder="Вставьте ссылку"
               value={link}
               onChange={handleLinkChange}
            />
            <StyledBtns>
               <Button variant="outlined" onClick={onClose}>
                  Отмена
               </Button>
               <Button variant="contained" onClick={handleSubmite}>
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
