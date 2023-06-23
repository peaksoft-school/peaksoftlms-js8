import styled from '@emotion/styled'
import Button from '../UI/Button'
import Input from '../UI/Input'
import ModalWindow from '../UI/Modal'

export const ModalMaterials = ({
   title,
   children,
   open,
   onClose,
   placeholder,
   ...rest
}) => {
   return (
      <ModalWindowStyled>
         <ModalWindow open={open} onClose={onClose} {...rest}>
            <Styledtext>
               <h3>Добавить урок</h3>
            </Styledtext>
            <InputStyled placeholder="Название урока" />
            <StyledBtns>
               <Button variant="outlined" onClick={onClose}>
                  Отмена
               </Button>
               <Button variant="contained" type="submit">
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
