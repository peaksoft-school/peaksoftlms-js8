import { styled } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { SideBar } from '../../../layout/SideBar'
import { USER_ROLES } from '../../../utlis/constants/commons'
import IconButton from '../../../components/UI/IconButton'
import { ReactComponent as IconProfil } from '../../../assets/icons/Profile (1).svg'
// import { ReactComponent as IconDot } from '../../../assets/icons/tri tochka.svg'
import Cards from '../../../components/UI/Card'
import { getCourses } from '../../../redux/reducers/instructor/instructorThunk'

export const Courses = () => {
   const dispatch = useDispatch()
   const courses = useSelector((state) => state.instructor.course)
   useEffect(() => {
      dispatch(getCourses())
   }, [])
   return (
      <Container>
         <div>
            <SideBar role={USER_ROLES.INSTRUCTOR} />
         </div>
         <ContainerContent>
            <div>
               <HeaderContainer>
                  <IconButton icon={<IconProfil />} />
                  <InstructorContent>Инструктор </InstructorContent>
               </HeaderContainer>

               {/* <Hr /> */}
            </div>
            <CardContainer>
               {courses.map((date) => {
                  return (
                     <LessonCard>
                        <Cards
                           image={date.img}
                           content={date.title}
                           title={date.name}
                        />
                     </LessonCard>
                  )
               })}
            </CardContainer>
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

const HeaderContainer = styled('div')`
   display: flex;
   justify-content: end;
   padding-right: 35px;
   margin-top: 23px;
   border-bottom: 2px solid #c4c4c4;
   /* width: 1140px; */
`
const InstructorContent = styled('p')`
   padding-left: 23px;
`
