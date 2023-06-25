import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { Input, styled } from '@mui/material'
import Cards from '../../../components/UI/Card'
import DeleteIcon from '../../../assets/icons/delete.svg'
import { asyncGetCourses } from '../../../redux/reducers/course/CourseThunk'
import { PaginationRounded } from '../../../components/UI/PaginationRounded'
import { deleteCourseById } from '../../../api/courseService'
import InstructorHeader from '../InstructorHeader'

const arrayIcon = [
   {
      icon: DeleteIcon,
      title: 'Удалить',
      func: async (items, dispatch) => {
         try {
            await deleteCourseById(items.id)
            dispatch(asyncGetCourses())
         } catch (error) {
            console.error(error)
         }
      },
   },
]
export const Courses = () => {
   const dispatch = useDispatch()
   const { course } = useSelector((state) => state.course)
   const [pagination, setPagination] = useState(1)
   const [page, setPage] = useState(1)
   const [pageSize, setPageSize] = useState(8)
   const [count, setCount] = useState(1)
   const [searchParams, setSearchParams] = useSearchParams()
   const navigate = useNavigate()
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm()
   useEffect(() => {
      dispatch(asyncGetCourses({ pageSize, pagination }))
   }, [])
   const navigateToDetailPage = ({ id, title }) => {
      navigate(`${id}`, { state: { title }, replace: true })
      // navigate(`/instructor-students?courseId=${id}`, { replace: true })
   }
   const pageChangeHandler = (e) => {
      setPage(+e.target.value)
   }
   const paginationChangeHandler = (value) => {
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
   return (
      <Container>
         <ContainerContent>
            <InstructorHeader />
            <hr />
            <CardContainer>
               {course.courseResponses?.map((date) => {
                  return (
                     <LessonCard>
                        <Cards
                           image={date.image}
                           content={date.title}
                           id={date.id}
                           title={date.name}
                           navigate={navigateToDetailPage}
                           arrayIcon={arrayIcon}
                        />
                     </LessonCard>
                  )
               })}
            </CardContainer>
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
         </ContainerContent>
      </Container>
   )
}

const Container = styled('div')`
   display: flex;
   .css-c51ge6-MuiButtonBase-root-MuiButton-root {
      margin-left: -22px;
   }
`
const CardContainer = styled('div')`
   display: flex;
   flex-wrap: wrap;
   gap: 25px;
`

const LessonCard = styled('div')`
   width: 270px;
   margin-top: 24px;
`
const ContainerContent = styled('div')`
   margin-right: 40px;
   margin-left: 260px;
   width: 1140vw;
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
const InputContainers = styled('div')(() => ({
   display: 'flex',
   marginLeft: '-20px',
   gap: '10px',
}))

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
