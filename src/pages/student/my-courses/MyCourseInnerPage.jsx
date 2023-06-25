import styled from '@emotion/styled'
import { useForm } from 'react-hook-form'
import { useEffect, useState } from 'react'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Link from '@mui/material/Link'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import CardLesson from '../../../components/UI/CardLesson'
import { getLessonByCourseId } from '../../../api/lessonService'
import Spinner from '../../../components/UI/Spinner'
import Input from '../../../components/UI/Input'
import { PaginationRounded } from '../../../components/UI/PaginationRounded'
import Header from '../../../components/UI/Header'

const MyCourseInnerPage = () => {
   const [pageSize, setPageSize] = useState(8)
   const { course } = useSelector((state) => state.course)
   const [pagination, setPagination] = useState(1)
   const [page] = useState(1)
   const [count, setCount] = useState(1)
   const { coursesId } = useParams()
   const [lessons, setLessons] = useState([])
   const [isLoading, setIsLoading] = useState(false)
   const navigate = useNavigate()
   const { state } = useLocation()
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm()

   console.log(state)

   const getCourses = async () => {
      try {
         setIsLoading(true)
         const { data } = await getLessonByCourseId({
            page: pagination,
            size: pageSize,
            courseId: coursesId,
         })
         setIsLoading(false)
         return setLessons(data)
      } catch (error) {
         setIsLoading(false)
         return error
      }
   }
   useEffect(() => {
      getCourses()
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
   const handleClick = (event) => {
      event.preventDefault()
   }
   const navigateToCourse = () => {
      navigate('/student/mycourses')
   }

   return (
      <>
         <Header />
         <TableContainer role="presentation" onClick={handleClick}>
            <Breadcrumbs aria-label="breadcrumb">
               <Link
                  underline="hover"
                  color="inherit"
                  href="/"
                  onClick={navigateToCourse}
               >
                  Курсы
               </Link>
               <Link
                  underline="hover"
                  color="inherit"
                  href="/material-ui/getting-started/installation/"
                  onClick={navigateToCourse}
               >
                  {state.title}
               </Link>
            </Breadcrumbs>
         </TableContainer>
         {isLoading ? (
            <StyledSpinner>
               <Spinner />
            </StyledSpinner>
         ) : (
            <>
               <StyledLesson>
                  {lessons?.lessonResponses?.map((card) => (
                     <CardLessonStyled>
                        <CardLesson role="STUDENT" title={card.name} />
                     </CardLessonStyled>
                  ))}
               </StyledLesson>
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
                           max: course?.courseResponses.length,
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
                     <p>из {lessons.lessonResponses?.length}</p>
                  </InputContainers>
               </StyledFormPagination>
            </>
         )}
      </>
   )
}

export default MyCourseInnerPage

const PaginationRoundedStyled = styled('div')({
   marginLeft: '140px',
})

const CardLessonStyled = styled('div')({
   fontSize: '13px',
})

const StyledSpinner = styled('div')({
   margin: 'auto',
   marginTop: '150px',
})

const StyledLesson = styled('div')({
   display: 'flex',
   flexWrap: 'wrap',
   gap: '10px',
   marginLeft: '250px',
   minHeight: '375px',
   marginTop: '20px',
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
   alignItems: 'center',
   '& p': {
      fontWeight: '350',
      fontSize: '18px',
   },
})
const TableContainer = styled('div')({
   marginLeft: '260px',
   marginTop: '20px',
})
