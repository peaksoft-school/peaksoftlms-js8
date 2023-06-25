import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { asyncGetCourses } from '../../../redux/reducers/course/CourseThunk'
import Spinner from '../../../components/UI/Spinner'
import { PaginationRounded } from '../../../components/UI/PaginationRounded'
import Input from '../../../components/UI/Input'
import Header from '../../../components/UI/Header'
import Cards from '../../../components/UI/Card'

export const MyCourses = () => {
   const dispatch = useDispatch()
   const [pageSize, setPageSize] = useState(8)
   const { course, isLoading } = useSelector((state) => state.course)
   const [searchParams, setSearchParams] = useSearchParams()
   const [pagination, setPagination] = useState(1)
   const [page, setPage] = useState(1)
   const [count, setCount] = useState(1)
   const navigate = useNavigate()

   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm()

   const getCourses = async () => {
      dispatch(asyncGetCourses({ pageSize, pagination }))
   }
   useEffect(() => {
      getCourses()
   }, [searchParams])

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

   const navigateToDetailPage = ({ id, title }) => {
      navigate(`${id}`, { state: { title } })
   }

   return (
      <>
         <Header />
         {isLoading ? (
            <StyledSpinner>
               <Spinner />
            </StyledSpinner>
         ) : (
            <>
               <StyledContainer>
                  {course.courseResponses?.map((item) => (
                     <Cards
                        key={item.id}
                        title={item.name}
                        image={item.image}
                        content={item.description}
                        date={item.createdAt}
                        id={item.id}
                        navigate={navigateToDetailPage}
                        meatballsVisible={false}
                     />
                  ))}
               </StyledContainer>
               <StyledFormPagination
                  onSubmit={handleSubmit(submitSearchParams)}
               >
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
                           max: course.courseResponses?.length,
                        })}
                        onChange={pageSizeChangeHandler}
                        value={pageSize}
                        max={course.courseResponses?.length}
                        onKeyPress={handleKeyPress}
                        error={errors.pageSize}
                        helperText={
                           errors.pageSize && 'Введите размер страницы'
                        }
                     />
                     <p>из {course.courseResponses?.length}</p>
                  </InputContainers>
               </StyledFormPagination>
            </>
         )}
      </>
   )
}

const PaginationRoundedStyled = styled('div')({
   marginLeft: '140px',
})
const StyledSpinner = styled('div')({
   margin: 'auto',
   marginTop: '150px',
})

const StyledContainer = styled('div')({
   display: 'flex',
   flexWrap: 'wrap',
   gap: 20,
   margin: '20px 0 0 250px',
   alignItems: 'flex-start',
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
   marginTop: '100px',
   alignItems: 'center',
   '& p': {
      fontWeight: '350',
      fontSize: '18px',
   },
})
