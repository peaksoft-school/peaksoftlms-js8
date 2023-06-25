import { useState } from 'react'
import styled from '@emotion/styled'
import Button from '../../../components/UI/Button'
import InstructorHeader from '../InstructorHeader'
import MaterialsCardLesson from '../../../components/UI/Materials.CardLesson'
import { ModalMaterials } from '../../../components/addModal/ModalMaterials'

const lesson = [
   {
      title: 'fjfkdls',
   },
]
const Materials = () => {
   const [showModal, setShowModal] = useState(false)
   const [selectedLessonId, setSelectedLessonId] = useState(null)
   const modalHandler = (lessonId) => {
      console.log(lessonId, 'less')
      setShowModal((prevState) => !prevState)
      setSelectedLessonId(lessonId)
   }

   return (
      <div>
         <InstructorHeader />
         <hr />
         <StyledButton>
            <Button onClick={modalHandler}>+ Добавить урок</Button>
         </StyledButton>
         {showModal ? (
            <ModalMaterials open={showModal} onClose={modalHandler} />
         ) : null}
         <StyledContainer onClick={modalHandler}>
            {lesson.map((card) => (
               <MaterialsCardLesson
                  key={card.lessonId}
                  role="ADMIN"
                  title={card.title}
                  showModal={showModal}
                  onClose={modalHandler}
                  lessonId={card.id}
                  selectedLessonId={selectedLessonId}
               />
            ))}
         </StyledContainer>
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
