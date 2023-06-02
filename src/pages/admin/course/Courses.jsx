import styled from '@emotion/styled'
import { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import GroupModal from '../../../components/UI/GroupModal'
import Button from '../../../components/UI/Button'
import { ReactComponent as Profile } from '../../../assets/icons/Profile.svg'
import { ReactComponent as Vector } from '../../../assets/icons/Vector (1).svg'
import { ReactComponent as Vectore } from '../../../assets/icons/Vector (2).svg'
import IconButton from '../../../components/UI/IconButton'
import { PaginationRounded } from '../../../components/UI/PaginationRounded'
import Input from '../../../components/UI/Input'
import Cards from '../../../components/UI/Card'
import { axiosInstance } from '../../../config/axiosInstance'
import { asyncGetCourses } from '../../../redux/reducers/course/CourseThunk'

export const Courses = () => {
   const dispatch = useDispatch()
   const [showModal, setShowModal] = useState(false)
   const [showText, setShowText] = useState(false)
   const [pagination, setPagination] = useState(1)
   const [pageSize, setPageSize] = useState(8)
   const [page, setPage] = useState(1)
   const [searchParams, setSearchParams] = useSearchParams()
   const navigate = useNavigate()
   const { course } = useSelector((state) => state.course)

   const navigateToDetailPage = (id) => {
      navigate(`${id}`)
   }

   console.log(course)

   const getCourses = () => {
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
      setPageSize(+e.target.value)
   }
   const handleIconClick = () => {
      setShowText(!showText)
   }

   const postCourse = async (data) => {
      try {
         await axiosInstance.post('api/courses', data)
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

   const submitSearchParams = (e) => {
      e.preventDefault()
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
         <MenuStyled>
            <IconButton icon={<Profile />} />
            <h4>Администратор</h4>
            <IconButton icon={<Vector />} onClick={handleIconClick} />
            {showText && (
               <StyledDropDown>
                  <IconButton icon={<Vectore />} />
                  <h2>Выйти</h2>
               </StyledDropDown>
            )}
         </MenuStyled>
         <StyledHr />
         <Styledbtn>
            <ButtonStyled onClick={() => setShowModal(true)}>
               + Создать курс
            </ButtonStyled>
         </Styledbtn>
         <StyledContainer>
            {course !== null ? (
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
            ) : (
               <p>Null</p>
            )}
         </StyledContainer>

         <GroupModal
            data={submitHandler}
            open={showModal}
            onClose={closeModalHandler}
            title="Создать курс"
            placeholder="курса"
         />
         <StyledFormPagination onSubmit={submitSearchParams}>
            <InputContainers>
               <h3>Перейти на страницу</h3>
               <InputStyled
                  onChange={pageChangeHandler}
                  value={page}
                  onKeyPress={handleKeyPress}
               />
            </InputContainers>
            <PaginationRounded
               onChange={paginationChangeHandler}
               value={pagination}
               type="submit"
            />
            <InputContainers>
               <h4>Показать</h4>
               <InputStyled
                  onChange={pageSizeChangeHandler}
                  value={pageSize}
                  onKeyPress={handleKeyPress}
               />
               <p>из {course.courseResponses?.length}</p>
            </InputContainers>
         </StyledFormPagination>
      </Container>
   )
}
const InputStyled = styled(Input)({
   width: '40px',
   borderRadius: 'none',
   '& .MuiOutlinedInput-input': {
      padding: '0 5px',
      textAlign: 'center',
   },
   fieldset: {
      borderRadius: '1px',
   },
   '& .MuiOutlinedInput-input:focus': {
      border: 'none',
   },
})

const InputContainers = styled('div')(() => ({
   display: 'flex',
   alignItems: 'center',
   gap: '10px',
   '& h3': {
      marginLeft: '40px',
   },
}))

const StyledFormPagination = styled('form')({
   marginLeft: '-90px',
   display: 'flex',
   justifyContent: 'center',
   gap: '50px',
   marginTop: '20px',
   alignItems: 'center',
   '& h3': {
      marginLeft: '80px',
      fontWeight: '300',
   },
   '& h4': {
      fontWeight: '300',
      marginLeft: '130px',
      fontSize: '20px',
   },
})
const StyledHr = styled('hr')({
   width: '99%',
   marginTop: '-6px',
})
const StyledDropDown = styled('h3')({
   display: 'flex',
   zIndex: 1,
   position: 'absolute',
   top: '22px',
   right: '20px',
   width: '40px',
   height: '10px',
   background: '#DDE9F9',
   cursor: 'pointer',
   border: '1px solid #3772FF',
   padding: '8px 90px 16px 0px',
   borderRadius: '10px',
   '& h2': {
      fontSize: '18px',
      color: '#3772FF',
      marginTop: '-4px',
      marginLeft: '6px',
   },
})
const MenuStyled = styled('div')({
   display: 'flex',
   justifyContent: 'flex-end',
   marginTop: '-12px',
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
})
