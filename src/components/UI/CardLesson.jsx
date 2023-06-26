import styled from '@emotion/styled'
import { MenuItem } from '@mui/material'
import { ReactComponent as EditIcon } from '../../assets/icons/editIcon.svg'
import { ReactComponent as DeleteIcon } from '../../assets/icons/deleteIcon.svg'
import VideoIcon from '../../assets/icons/videoIcon.svg'
import PresentationIcon from '../../assets/icons/presentationIcon.svg'
import TaskIcon from '../../assets/icons/taskIcon.svg'
import LinkIcon from '../../assets/icons/linkIcon.svg'
import SelectInput from './SelectInput'
import { cardName } from '../../utlis/helpers/cardName'

const lessonTitle = [
   {
      icon: VideoIcon,
      title: 'Видеоурок',
   },
   {
      icons: EditIcon,
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
]
const CardLesson = ({ title, role = 'ADMIN', navigate, id }) => {
   // const navigateHandler = (title) => {
   //    setName(title)
   //    navigate()
   // }

   return (
      <Container>
         {role === 'ADMIN' || role === 'INSTRUCTOR' ? (
            <StyledHeader>
               <StyledEditIcon />
               <h2>{title}</h2>
               <SelectInput />
               <StyledDeleteIcon />
            </StyledHeader>
         ) : (
            <StyledHeader>
               <h2>{title}</h2>
            </StyledHeader>
         )}
         {lessonTitle.map((item) => (
            <StyledMenuItem
               key={item.title}
               onClick={() => navigate(`${id}/${cardName(item.title)}`)}
            >
               <img src={item.icon} alt="" />
               {item.title}
            </StyledMenuItem>
         ))}
      </Container>
   )
}
export default CardLesson

const StyledMenuItem = styled(MenuItem)(() => ({
   gap: '25px',
   '&:hover': {
      color: 'blue',
   },
}))
const Container = styled.div`
   background-color: #ffffff;
   width: 20vw;
   border: 1px solid #d4d4d4;
   border-radius: 10px;
`
const StyledHeader = styled.div`
   bottom: 25px;
   padding-left: 20px;
   display: flex;
   justify-content: space-between;
   height: 80px;
   border-bottom: 0.5px solid #bfc4ce;
   h2 {
      padding-right: 6.7rem;
   }
`
const StyledDeleteIcon = styled(DeleteIcon)`
   padding: 8px;
   margin-top: 15px;
`
const StyledEditIcon = styled(EditIcon)`
   background-color: #ebebeb;
   border-radius: 5px;
   margin-top: 16px;
   padding: 5px;
`
