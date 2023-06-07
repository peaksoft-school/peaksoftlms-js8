import styled from '@emotion/styled'
import { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import GroupModal from '../../../components/UI/GroupModal'
import CourseHeader from './CourseHeader'
import Button from '../../../components/UI/Button'
import { PaginationRounded } from '../../../components/UI/PaginationRounded'
import Input from '../../../components/UI/Input'
import Cards from '../../../components/UI/Card'
import { axiosInstance } from '../../../config/axiosInstance'
import Spinner from '../../../components/UI/Spinner'
import { asyncGetCourses } from '../../../redux/reducers/course/CourseThunk'

export const Courses = () => {
   const dispatch = useDispatch()
   const { course, isLoading } = useSelector((state) => state.course)
   const [showModal, setShowModal] = useState(false)
   const [pagination, setPagination] = useState(1)
   const [page, setPage] = useState(1)
   const [searchParams, setSearchParams] = useSearchParams()
   const navigate = useNavigate()
   const [pageSize, setPageSize] = useState(8)
   const [count, setCount] = useState(1)

   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm()

   const navigateToDetailPage = ({ id, title }) => {
      navigate(`${id}`, { state: { title } })
   }

   const getCourses = async () => {
      dispatch(asyncGetCourses({ pageSize, pagination }))
   }
   useEffect(() => {
      getCourses()
   }, [searchParams, showModal])

   const pageChangeHandler = (e) => {
      setPage(+e.target.value)
   }
   const paginationChangeHandler = (e, value) => {
      setPagination(value)
   }

   const pageSizeChangeHandler = (e) => {
      const selectedPageSize = +e.target.value
      setPageSize(selectedPageSize)
      setCount(Math.ceil(course.courseResponses.length / selectedPageSize))
   }
   const postCourse = async (data) => {
      data.finishDate = '2023-05-31'
      try {
         await axiosInstance.post('courses', data)
         setShowModal(false)
      } catch (error) {
         console.log(error)
      }
   }
   const submitHandler = async (data) => {
      postCourse(data)
   }
   const closeModalHandler = () => {
      setShowModal(false)
   }

   const submitSearchParams = () => {
      setSearchParams((prevSearchParams) => {
         const updatedSearchParams = new URLSearchParams(prevSearchParams)
         updatedSearchParams.set('pagination', String(pagination))
         updatedSearchParams.set('page', String(page))
         updatedSearchParams.set('pageSize', String(pageSize))
         return updatedSearchParams
      })
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

   return (
      <Container>
         <CourseHeader />
         <StyledHr />
         <Styledbtn>
            <ButtonStyled onClick={() => setShowModal(true)}>
               + Создать курс
            </ButtonStyled>
         </Styledbtn>
         <StyledContainer>
            {isLoading ? (
               <StyledSpinner>
                  <Spinner />
               </StyledSpinner>
            ) : (
               course.courseResponses?.map((item) => (
                  <Cards
                     key={item.id}
                     title={item.name}
                     image={item.image}
                     content={item.description}
                     date={item.createdAt}
                     id={item.id}
                     navigate={navigateToDetailPage}
                  />
               ))
            )}
         </StyledContainer>
         <GroupModal
            data={submitHandler}
            open={showModal}
            onClose={closeModalHandler}
            title="Создать курс"
            placeholder="курса"
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
                     max: course.courseResponses?.length,
                  })}
                  onChange={pageSizeChangeHandler}
                  value={pageSize}
                  max={course.courseResponses?.length}
                  onKeyPress={handleKeyPress}
                  error={errors.pageSize}
                  helperText={errors.pageSize && 'Введите размер страницы'}
               />
               <p>из {course.courseResponses?.length}</p>
            </InputContainers>
         </StyledFormPagination>
      </Container>
   )
}

const StyledSpinner = styled('div')({
   margin: 'auto',
   marginTop: '150px',
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
   marginLeft: '-20px',
   gap: '10px',
}))

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
const StyledHr = styled('hr')({
   width: '99%',
   marginTop: '-6px',
})
const Styledbtn = styled('div')({
   display: 'flex',
   justifyContent: 'flex-end',
})
const ButtonStyled = styled(Button)({
   width: '177px',
   height: '40px',
   padding: '10px, 24px, 10px, 16px',
   marginTop: '10px',
   marginRight: '9px',
})
const Container = styled('div')({
   marginLeft: '260px',
})
const StyledContainer = styled('div')({
   display: 'flex',
   flexWrap: 'wrap',
   gap: 20,
   margin: '20px 0',
   alignItems: 'flex-start',
})
