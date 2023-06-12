import { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import { useDispatch, useSelector } from 'react-redux'
import Cards from '../../../components/UI/Card'
import Button from '../../../components/UI/Button'
import EditIcon from '../../../assets/icons/edit.svg'
import DeleteIcon from '../../../assets/icons/delete.svg'
import CourseHeader from '../course/CourseHeader'
import { PaginationRounded } from '../../../components/UI/PaginationRounded'
import { getGroup } from '../../../redux/reducers/group/groupThunk'
import Spinner from '../../../components/UI/Spinner'
import Input from '../../../components/UI/Input'
import { deleteGroupsId } from '../../../api/groupService'
import ModalGroup from '../../../components/addModal/ModalGroup'

const arrayIcon = [
   {
      icon: EditIcon,
      title: 'Редактировать',
      func: (items, _, setCourseData, setGroupModal) => {
         console.log('awd')
         setGroupModal(true)
         setCourseData(items)
      },
   },
   {
      icon: DeleteIcon,
      title: 'Удалить',
      func: async (items, dispatch) => {
         try {
            await deleteGroupsId(items.id)
            dispatch(getGroup({ pageSize: '8', pagination: '1' }))
         } catch (error) {
            console.log(error)
         }
      },
   },
]

export const Groups = () => {
   const [showModal, setShowModal] = useState(false)
   const { groups, isLoading } = useSelector((state) => state.groups)

   const dispatch = useDispatch()
   const getGroupReq = async () => {
      dispatch(getGroup({ pageSize: '8', pagination: '1' }))
   }
   useEffect(() => {
      getGroupReq()
   }, [])

   const closeModalHandler = () => {
      setShowModal(false)
   }
   return (
      <StyledContainer>
         <StyledHeader>
            <CourseHeader />
            <StyledBorder />
            <StyledButton>
               <StyledBtn onClick={() => setShowModal(true)}>
                  + Создать группу
               </StyledBtn>
            </StyledButton>
         </StyledHeader>
         <StyledContent>
            {isLoading ? (
               <Spinner />
            ) : (
               groups.groupResponses?.map((item) => (
                  <Cards
                     date={item.createdAt}
                     image={item.image}
                     title={item.name}
                     content={item.description}
                     key={item.id}
                     id={item.id}
                     arrayIcon={arrayIcon}
                  />
               ))
            )}
         </StyledContent>
         <ModalGroup
            onClose={closeModalHandler}
            open={showModal}
            title="Создание группы"
            placeholder="группы"
         />

         <div>
            <p>перейти на страницу</p>
            <Input />
            <PaginationRounded page={8} />
            <p>показать</p>
            <Input />
            <p>из</p>
         </div>
      </StyledContainer>
   )
}

const StyledContainer = styled.div`
   margin-left: 252px;
   background-color: #eff0f4;
`
const StyledContent = styled.div`
   display: flex;
   flex-wrap: wrap;
   gap: 25px;
   margin-top: 164px auto;
`
const StyledButton = styled.div`
   display: flex;
   justify-content: flex-end;
`
const StyledBtn = styled(Button)`
   margin-bottom: 24px;
   margin-top: 24px;
   margin-right: 30px;
   height: 40px;
   width: 177px;
   border-radius: 8px;
   padding: 10px 24px 10px 16px;
`
const StyledHeader = styled.div`
   /* margin-top: -68px; */
`
const StyledBorder = styled.hr`
   margin-top: 10px;
   border-bottom: 1px solid #c4c4c4;
   width: 1240px;
`
