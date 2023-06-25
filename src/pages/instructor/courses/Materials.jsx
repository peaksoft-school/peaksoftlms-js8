import { useState } from 'react'
import styled from '@emotion/styled'
import Button from '../../../components/UI/Button'
import CardLesson from '../../../components/UI/CardLesson'
import { ModalPresentation } from '../../../components/UI/modals.instructors/ModalPresentation'
import InstructorHeader from '../InstructorHeader'
// import { ModalMaterials } from '../../../components/addModal/ModalMaterials'
// import { ModalLink } from '../../../components/UI/modals.instructors/ModalLink'

const lesson = [
   {
      title: 'fjfkdls',
   },
]
const Materials = () => {
   const [showModal, setShowModal] = useState(false)
   const closeModalHandler = () => {
      setShowModal(false)
   }

   return (
      <div>
         <InstructorHeader />
         <hr />
         <StyledButton>
            <Button onClick={() => setShowModal(true)}>+ Добавить урок</Button>
         </StyledButton>
         <StyledContainer>
            {lesson.map((card) => (
               <CardLesson role="ADMIN" title={card.title} />
            ))}
         </StyledContainer>
         <ModalPresentation open={showModal} onClose={closeModalHandler} />
      </div>
   )
}
const StyledContainer = styled.div`
   margin-left: 275px;
`
const StyledButton = styled.div`
   display: flex;
   justify-content: flex-end;
`
export default Materials
