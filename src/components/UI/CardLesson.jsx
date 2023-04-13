import React from 'react'
import styled from '@emotion/styled'
import { ReactComponent as EditIcon } from '../../assets/icons/editIcon.svg'
import { ReactComponent as DeleteIcon } from '../../assets/icons/deleteIcon.svg'
import { ReactComponent as VideoIcon } from '../../assets/icons/videoIcon.svg'
import { ReactComponent as PresentationIcon } from '../../assets/icons/presentationIcon.svg'
import { ReactComponent as TaskIcon } from '../../assets/icons/taskIcon.svg'
import { ReactComponent as LinkIcon } from '../../assets/icons/linkIcon.svg'
import { ReactComponent as TestIcon } from '../../assets/icons/testIcon.svg'
import { ReactComponent as LabelIcon } from '../../assets/icons/labelIcon.svg'
import Button from './Button'

const LessonCard = ({ title }) => {
   return (
      <Container>
         <StyledHeader>
            <EditIcon />
            <h2>{title}</h2>
            <StyledButton>
               Добавить
               <LabelIcon />
            </StyledButton>
            <StyledDeleteIcon />
         </StyledHeader>
         <StyledCard>
            <StyledLessonCard>
               <VideoIcon />
               <StyledText>Видеоурок</StyledText>
            </StyledLessonCard>
            <StyledLessonCard>
               <PresentationIcon />
               <StyledText>Презентация</StyledText>
            </StyledLessonCard>
            <StyledLessonCard>
               <TaskIcon />
               <StyledText>Задание</StyledText>
            </StyledLessonCard>
            <StyledLessonCard>
               <LinkIcon />
               <StyledText>Ссылка</StyledText>
            </StyledLessonCard>
            <StyledLessonCard>
               <TestIcon />
               <StyledText>Тест</StyledText>
            </StyledLessonCard>
         </StyledCard>
      </Container>
   )
}
export default LessonCard
const Container = styled.div`
   background-color: #ffffff;
   width: 367px;
   border: 1px solid #d4d4d4;
   border-radius: 10px;
`
const StyledHeader = styled.div`
   padding-left: 20px;
   display: flex;
   justify-content: space-between;
   height: 80px;
   align-items: center;
   border-bottom: 0.5px solid #bfc4ce;
   h2 {
      padding-right: 6.7rem;
   }
`
const StyledCard = styled.div`
   margin: 10px 0px;
`
const StyledLessonCard = styled.div`
   display: flex;
   padding: 12px 22px;
   :hover {
      cursor: pointer;
      background: rgba(26, 35, 126, 0.07);
   }
`
const StyledText = styled.p`
   margin: 0px 0px 0px 18px;
   font-weight: 400;
   font-size: 16px;
   line-height: 22px;
   color: #000000;
   :active {
      color: #3772ff;
   }
`
const StyledButton = styled(Button)`
   background-color: #ffff;
   gap: 8px;
   color: #000;
   border: 1px solid #ebebeb;
   border-radius: 8px;
   right: 10px;
   font-weight: 600;
   :hover {
      background-color: #ffff;
      color: #000;
   }
`
const StyledDeleteIcon = styled(DeleteIcon)`
   padding-right: 15px;
`
