import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from '@emotion/styled'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import Button from '../../../components/UI/Button'
// import InstructorHeader from '../InstructorHeader'
import MaterialsCardLesson from '../../../components/UI/Materials.CardLesson'
import { ModalMaterials } from '../../../components/addModal/ModalMaterials'
import { getLessonsCourseId } from '../../../api/materialsService'
import Spinner from '../../../components/UI/Spinner'
import Input from '../../../components/UI/Input'
import { PaginationRounded } from '../../../components/UI/PaginationRounded'

const Materials = () => {
   const [showModal, setShowModal] = useState(false)
   const [pageSize, setPageSize] = useState(8)
   const { course } = useSelector((state) => state.course)
   const [pagination, setPagination] = useState(1)
   const [page] = useState(1)
   const [count, setCount] = useState(1)
   const { courseId } = useParams()
   const [lessons, setLessons] = useState([])
   const [isLoading, setIsLoading] = useState(false)
   // const navigate = useNavigate()
   // const { state } = useLocation()
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm()

   // console.log(state)

   const closeModalHandler = () => {
      setShowModal(false)
   }
   const modalHandler = () => {
      setShowModal((prevState) => !prevState)
   }
   const getLessons = async () => {
      try {
         setIsLoading(true)
         const { data } = await getLessonsCourseId({
            page: pagination,
            size: pageSize,
            id: courseId,
         })
         setIsLoading(false)
         return setLessons(data)
      } catch (error) {
         setIsLoading(false)
         return error
      }
   }
   useEffect(() => {
      getLessons()
   }, [])
   const pageChangeHandler = () => {}
   const paginationChangeHandler = (value) => {
      setPagination(value)
   }

   const pageSizeChangeHandler = (e) => {
      const selectedPageSize = +e.target.value
      setPageSize(selectedPageSize)
      setCount(Math.ceil(lessons.lessonResponses.length / selectedPageSize))
   }

   const submitSearchParams = () => {
      // setSearchParams((prevSearchParams) => {
      //    const updatedSearchParams = new URLSearchParams(prevSearchParams)
      //    updatedSearchParams.set('pagination', String(pagination))
      //    updatedSearchParams.set('page', String(page))
      //    updatedSearchParams.set('pageSize', String(pageSize))
      //    return updatedSearchParams
      // })
   }
   useEffect(() => {
      // searchParams.set('pagination', pagination)
      // setSearchParams(searchParams)
   }, [pagination])

   const handleKeyPress = (e) => {
      if (e.key === 'Enter') {
         submitSearchParams(e)
      }
   }
   // const handleClick = (event) => {
   //    event.preventDefault()
   // }
   // const navigateToCourse = () => {
   //    navigate('/student/mycourses')
   // }

   return (
      <StyledContainer>
         {/* <InstructorHeader /> */}
         {/* <StyledBorder /> */}
         <StyledButton>
            <Button onClick={modalHandler}>+ Добавить урок</Button>
         </StyledButton>
         <ModalMaterials open={showModal} onClose={closeModalHandler} />
         {isLoading ? (
            <Spinner />
         ) : (
            <StyledCard>
               {lessons.lessonResponses?.map((card) => (
                  <MaterialsCardLesson
                     role="ADMIN"
                     title={card.name}
                     // showModal={showModal}
                     // onClose={modalHandler}
                  />
               ))}
            </StyledCard>
         )}
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
            <PaginationRoundedStyled>
               <PaginationRounded
                  onChange={paginationChangeHandler}
                  value={pagination}
                  type="submit"
                  count={count}
               />
            </PaginationRoundedStyled>
            <InputContainers>
               <p>Показать</p>
               <InputStyled
                  {...register('pageSize', {
                     required: true,
                     min: 1,
                     max: course?.courseResponses?.length,
                  })}
                  onChange={pageSizeChangeHandler}
                  value={pageSize}
                  max={course.courseResponses?.length}
                  onKeyPress={handleKeyPress}
                  error={errors.pageSize}
                  helperText={errors.pageSize && 'Введите размер страницы'}
               />
               <p>из {lessons.lessonResponses?.length}</p>
            </InputContainers>
         </StyledFormPagination>
      </StyledContainer>
   )
}
const StyledContainer = styled.div`
   /* width: 100%; */
   /* margin: 0 auto; */
   /* margin-left: 275px; */
`
const StyledCard = styled.div`
   margin-top: -455px;
   display: flex;
   flex-wrap: wrap;
   gap: 10px;
`
const StyledButton = styled.div`
   display: flex;
   margin-left: 88%;
   width: 14%;
   height: 35px;
   /* background-color: red; */
   /* justify-content: flex-end; */
`
// const StyledBorder = styled.hr`
//    margin-top: 10px;
//    border-bottom: 1px solid #c4c4c4;
//    width: 100%;
// `
const PaginationRoundedStyled = styled('div')({
   marginLeft: '140px',
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

const InputContainers = styled('div')(() => ({
   display: 'flex',
   marginLeft: '220px',
   gap: '10px',
}))

const StyledFormPagination = styled('form')({
   display: 'flex',
   justifyContent: 'space-around',
   marginTop: '40px',
   marginLeft: '-260px',
   alignItems: 'center',
   '& p': {
      fontWeight: '350',
      fontSize: '18px',
   },
})
// const TableContainer = styled('div')({
//    marginLeft: '260px',
//    marginTop: '20px',
// })

export default Materials
