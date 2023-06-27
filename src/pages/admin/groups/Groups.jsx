import { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
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
import { axiosInstance } from '../../../config/axiosInstance'
import Cards from '../../../components/UI/Card'

const arrayIcon = [
   {
      icon: EditIcon,
      title: 'Редактировать',
      func: (
         items,
         _,
         setOpenModal,
         setCourseData,
         setGroupModal,
         setGroups
      ) => {
         setGroupModal(true)
         setGroups(items)
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
   const [searchParams, setSearchParams] = useSearchParams()
   const [page, setPage] = useState(1)
   const [pagination, setPagination] = useState(1)
   const [pageSize, setPageSize] = useState(8)
   const [count, setCount] = useState(1)
   const navigate = useNavigate()

   const navigateToInnerPage = ({ id, title }) => {
      navigate(`${id}`, { state: { title } })
   }
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm()

   const submitSearchParams = () => {
      setSearchParams((prevSearchParams) => {
         const updatedSearchParams = new URLSearchParams(prevSearchParams)
         updatedSearchParams.set('pagination', String(pagination))
         updatedSearchParams.set('page', String(page))
         updatedSearchParams.set('pageSize', String(pageSize))
         return updatedSearchParams
      })
   }
   const pageChangeHandler = (e) => {
      setPage(+e.target.value)
   }
   const paginationChangeHandler = (e, value) => {
      setPagination(value)
   }

   const pageSizeChangeHandler = (e) => {
      const selectedPageSize = +e.target.value
      setPageSize(selectedPageSize)
      setCount(Math.ceil(groups.groupResponses.length / selectedPageSize))
   }
   useEffect(() => {
      searchParams.set('pagination', pagination)
      setSearchParams(searchParams)
   }, [pagination])

   const handleKeyPress = (e) => {
      if (e.key === 'Enter') {
         submitSearchParams(e)
      }
   }
   const dispatch = useDispatch()
   const getGroupReq = async () => {
      dispatch(getGroup({ pageSize, pagination }))
   }
   useEffect(() => {
      getGroupReq()
   }, [pagination])

   const closeModalHandler = () => {
      setShowModal(false)
   }
   const postGroups = async (data) => {
      try {
         await axiosInstance.post('groups', data)
         setShowModal(false)
         getGroupReq()
      } catch (error) {
         console.log(error)
      }
   }
   const submitDataHandler = async (data) => {
      postGroups(data)
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
                     navigate={navigateToInnerPage}
                  />
               ))
            )}
         </StyledContent>
         <ModalGroup
            data={submitDataHandler}
            onClose={closeModalHandler}
            open={showModal}
            title="Создание группы"
            placeholder="группы"
         />

         <StyledFormPagination onSubmit={handleSubmit(submitSearchParams)}>
            <InputContainers>
               <p>Перейти на страницу</p>
               <InputStyled
                  {...register('page', { required: true, min: 1 })}
                  onChange={pageChangeHandler}
                  value={page}
                  onKeyPress={handleKeyPress}
                  error={errors.page}
                  helperText={errors.page && 'Введите страницу'}
               />
            </InputContainers>
            <PaginationRounded
               onChange={paginationChangeHandler}
               value={pagination}
               type="submit"
               count={count}
            />
            <InputContainers>
               <p>Показать</p>
               <InputStyled
                  {...register('pageSize', {
                     required: true,
                     min: 1,
                     max: groups.groupResponses?.length,
                  })}
                  onChange={pageSizeChangeHandler}
                  value={pageSize}
                  max={groups.groupResponses?.length}
                  onKeyPress={handleKeyPress}
                  error={errors.pageSize}
                  helperText={errors.pageSize && 'Введите размер страницы'}
               />
               <p>из {groups.groupResponses?.length}</p>
            </InputContainers>
         </StyledFormPagination>
      </StyledContainer>
   )
}

const StyledContainer = styled.div`
   margin-left: 280px;
   background-color: #eff0f4;
`
const StyledContent = styled.div`
   display: flex;
   flex-wrap: wrap;
   gap: 25px;
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
   width: 1220px;
   margin-right: 130px;
`
const StyledFormPagination = styled('form')({
   display: 'flex',
   justifyContent: 'space-around',
   gap: '180px',
   marginTop: '50px',
   alignItems: 'center',
   '& p': {
      fontWeight: '350',
      fontSize: '18px',
   },
})
const InputStyled = styled(Input)({
   width: '40px',
   borderRadius: 'none',
   marginTop: '20px',
   '& .MuiOutlinedInput-input': {
      padding: '0 5px',
      textAlign: 'center',
   },
   fieldset: {
      borderRadius: '1px',
      height: '10px',
   },
   '& .MuiOutlinedInput-input:focus': {
      border: 'none',
   },
})

const InputContainers = styled.div`
   display: flex;
   margin-left: -20px;
   gap: 10px;
`
