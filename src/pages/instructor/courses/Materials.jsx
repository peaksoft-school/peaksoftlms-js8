import { useState } from 'react'
import styled from '@emotion/styled'
import Button from '../../../components/UI/Button'
import InstructorHeader from '../InstructorHeader'
import MaterialsCardLesson from '../../../components/UI/Materials.CardLesson'

const lesson = [
   {
      title: 'fjfkdls',
   },
]
const Materials = () => {
   const [showModal, setShowModal] = useState(false)
   const modalHandler = () => {
      setShowModal((prevState) => !prevState)
   }

   return (
      <div>
         <InstructorHeader />
         <hr />
         <StyledButton>
            <Button onClick={() => setShowModal(true)}>+ Добавить урок</Button>
         </StyledButton>
         <StyledContainer onClick={modalHandler}>
            {lesson.map((card) => (
               <MaterialsCardLesson
                  role="ADMIN"
                  title={card.title}
                  showModal={showModal}
                  onClose={modalHandler}
               />
            ))}
         </StyledContainer>
         {/* <ModalPresentation open={showModal} onClose={modalHandler} />
         {showModal && <ModalLink open={showModal} onClose={modalHandler} />} */}
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
