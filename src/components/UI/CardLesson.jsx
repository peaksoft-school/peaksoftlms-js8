import styled from '@emotion/styled'
import { MenuItem, Select } from '@mui/material'
import { ReactComponent as EditIcon } from '../../assets/icons/editIcon.svg'
import { ReactComponent as DeleteIcon } from '../../assets/icons/deleteIcon.svg'
import VideoIcon from '../../assets/icons/videoIcon.svg'
import PresentationIcon from '../../assets/icons/presentationIcon.svg'
import TaskIcon from '../../assets/icons/taskIcon.svg'
import LinkIcon from '../../assets/icons/linkIcon.svg'
import TestIcon from '../../assets/icons/testIcon.svg'

const lessonTitle = [
   {
      icon: VideoIcon,
      title: 'Видеоурок',
   },
   {
      icon: PresentationIcon,
      title: 'Презентация',
   },
   {
      icon: TaskIcon,
      title: 'Задание',
   },
   {
      icon: LinkIcon,
      title: 'Ссылка',
   },
   {
      icon: TestIcon,
      title: 'Тест',
   },
]
const LessonCard = ({ title }) => {
   return (
      <Container>
         <StyledHeader>
            <EditIcon />
            <h2>{title}</h2>
            <StyledSelect value="">{title}</StyledSelect>
            <StyledDeleteIcon />
         </StyledHeader>
         {lessonTitle.map((item) => (
            <StyledMenuItem key={item.title}>
               <img src={item.icon} alt="" />
               {item.title}
            </StyledMenuItem>
         ))}
      </Container>
   )
}
export default LessonCard

const StyledMenuItem = styled(MenuItem)(() => ({
   gap: '25px',
   '&:hover': {
      color: 'blue',
   },
}))
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

const StyledSelect = styled(Select)`
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
