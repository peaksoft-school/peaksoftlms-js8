import styled from '@emotion/styled'
import { NavLink } from 'react-router-dom'
import { ReactComponent as PeaksoftIcon } from '../assets/icons/PEAKSOFT.svg'
import { ReactComponent as Groups } from '../assets/icons/groups.svg'
import { ReactComponent as Students } from '../assets/icons/students.svg'
import { ReactComponent as Courses } from '../assets/icons/courses.svg'
import { ReactComponent as InstructorCourses } from '../assets/icons/InstrCourses.svg'
import { ReactComponent as Teachers } from '../assets/icons/teachers.svg'
import { CURRENT_PATH } from '../utlis/constants/commons'

export const SideBar = ({ role = 'STUDENT' }) => {
   let path
   if (role === 'STUDENT') {
      path = CURRENT_PATH.student.COURSES
   } else if (role === 'INSTRUCTOR') {
      path = CURRENT_PATH.instructor.COURSES
   }
   return (
      <Sidebar>
         {role === 'ADMIN' ? (
            <>
               <PeaksoftIcon style={{ margin: '38px 59px 80 49px' }} />
               <InfoBox>
                  <ALink to={CURRENT_PATH.admin.GROUPS}>
                     <span>
                        <Groups />
                     </span>
                     Группы
                  </ALink>
                  <ALink to={CURRENT_PATH.admin.COURSES}>
                     <span>
                        <Courses />
                     </span>
                     Курсы
                  </ALink>
                  <ALink to={CURRENT_PATH.admin.INSTRUCTOR}>
                     <span>
                        <Teachers />
                     </span>
                     Учителя
                  </ALink>
                  <ALink to={CURRENT_PATH.admin.STUDENTS}>
                     <span>
                        <Students />
                     </span>
                     Студенты
                  </ALink>
               </InfoBox>
            </>
         ) : (
            <>
               <PeaksoftIcon style={{ margin: '38px 59px 80 49px' }} />
               <InfoBox>
                  <ALink to={path}>
                     <span>
                        <InstructorCourses />
                     </span>
                     Мои курсы
                  </ALink>
               </InfoBox>
            </>
         )}
      </Sidebar>
   )
}

const Sidebar = styled.aside({
   width: '240px',
   height: '100vh',
   display: 'flex',
   flexDirection: 'column',
   position: 'fixed',
   left: '0%',
   right: '0%',
   top: '0%',
   bottom: '0%',
   backgroundColor: '#ffff',
})

const InfoBox = styled.div({
   marginRight: 16,
   display: 'flex',
   flexDirection: 'column',
   gap: 14,
})

const ALink = styled(NavLink)`
   width: 224;
   padding-left: 34px;
   height: 50px;
   display: flex;
   align-items: center;
   gap: 18px;
   gap: 18;
   text-decoration: none;
   border-radius: 0px 10px 10px 0px;
   font-weight: 600;
   font-size: 16px;
   line-height: 22px;
   color: #1f6ed4;
   &.active {
      border-left: 5px solid #1f6ed4;
      background-color: #dde9f9;
   }
`
