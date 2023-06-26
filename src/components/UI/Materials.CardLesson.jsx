import styled from '@emotion/styled'
import { MenuItem } from '@mui/material'
import { useState } from 'react'
import { ReactComponent as EditIcon } from '../../assets/icons/editIcon.svg'
import { ReactComponent as DeleteIcon } from '../../assets/icons/deleteIcon.svg'
import VideoIcon from '../../assets/icons/videoIcon.svg'
import PresentationIcon from '../../assets/icons/presentationIcon.svg'
import TaskIcon from '../../assets/icons/taskIcon.svg'
import LinkIcon from '../../assets/icons/linkIcon.svg'
// import SelectInput from './SelectInput'
import { ModalLink } from './modals.instructors/ModalLink'
import { ModalPresentation } from './modals.instructors/ModalPresentation'
import { ModalTask } from './modals.instructors/ModalTask'
import { ModalVideo } from './modals.instructors/ModalVideoLesson'

const MaterialsCardLesson = ({ title, role = 'ADMIN' }) => {
   const [openModal, setOpenModal] = useState(false)
   const [modal, setModal] = useState(false)
   const [showModal, setShowModal] = useState(false)
   const [onOpenmodal, setOnOpenModal] = useState(false)
   // const [val, setVal] = useState('')
   const handleVideoLessonClick = () => {
      setOpenModal((prevState) => !prevState)
   }
   const handlePresentationClick = () => {
      setModal((prevState) => !prevState)
   }
   const handleTasksClick = () => {
      setShowModal((prevState) => !prevState)
   }
   const handleLinkClick = () => {
      setOnOpenModal((prevState) => !prevState)
   }
   const lessonTitle = [
      {
         icon: VideoIcon,
         title: 'Видеоурок',
         onClick: handleVideoLessonClick,
      },
      {
         icons: EditIcon,
         icon: PresentationIcon,
         title: 'Презентация',
         onClick: handlePresentationClick,
      },
      {
         icon: TaskIcon,
         title: 'Задание',
         onClick: handleTasksClick,
      },
      {
         icon: LinkIcon,
         title: 'Ссылка',
         onClick: handleLinkClick,
      },
   ]

   // const changeHandler = (e) => {
   //    setVal(e.target.value)
   //    lessonTitle.map((item) => {
   //       if (val === item.title) {
   //          item.onClick()
   //       }
   //       return item
   //    })
   // }
   return (
      <Container>
         {role === 'ADMIN' || role === 'INSTRUCTOR' ? (
            <StyledHeader>
               <StyledEditIcon />
               <h2>{title}</h2>

               <StyledDeleteIcon />
            </StyledHeader>
         ) : (
            <StyledHeader>
               <h2>{title}</h2>
            </StyledHeader>
         )}
         {lessonTitle.map((item) => (
            <StyledMenuItem key={item.title} onClick={item.onClick}>
               <img src={item.icon} alt="" />
               {item.title}
            </StyledMenuItem>
         ))}
         <ModalLink open={onOpenmodal} onClose={handleLinkClick} />
         <ModalPresentation open={modal} onClose={handlePresentationClick} />
         <ModalTask open={showModal} onClose={handleTasksClick} />
         <ModalVideo open={openModal} onClose={handleVideoLessonClick} />
      </Container>
   )
}
export default MaterialsCardLesson
const StyledMenuItem = styled(MenuItem)(() => ({
   gap: '25px',
   '&:hover': {
      color: 'blue',
   },
}))
const Container = styled.div`
   background-color: #ffffff;
   width: 520px;
   height: 246px;
   border: 1px solid #d4d4d4;
   border-radius: 10px;
`
const StyledHeader = styled.div`
   bottom: 25px;
   padding-left: 20px;
   display: flex;
   align-items: center;
   height: 80px;
   border-bottom: 0.5px solid #bfc4ce;
   h2 {
      width: 300px;
      margin-left: 20px;
   }
`
const StyledDeleteIcon = styled(DeleteIcon)`
   padding: 8px;
   margin-left: 80px;
`
const StyledEditIcon = styled(EditIcon)`
   background-color: #ebebeb;
   border-radius: 5px;
   /* margin-top: 16px; */
   padding: 5px;
`
