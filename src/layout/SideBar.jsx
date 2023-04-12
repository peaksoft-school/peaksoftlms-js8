/* eslint-disable react/self-closing-comp */
import styled from '@emotion/styled'
import { ReactComponent as PeaksoftIcon } from '../assets/icons/PEAKSOFT.svg'
import { ReactComponent as Groups } from '../assets/icons/groups.svg'
import { ReactComponent as Students } from '../assets/icons/students.svg'
import { ReactComponent as Courses } from '../assets/icons/courses.svg'
import { ReactComponent as InstructorCourses } from '../assets/icons/InstrCourses.svg'
import { ReactComponent as Teachers } from '../assets/icons/teachers.svg'

export const SideBar = ({ role = 'ADMIN' }) => {
   return (
      <Sidebar>
         {role === 'ADMIN' ? (
            <>
               <PeaksoftIcon style={{ margin: '38px 59px 80 49px' }} />
               <InfoBox>
                  <Link to="/">
                     <span>
                        <Groups />
                     </span>
                     Группы
                  </Link>
                  <Link to="/">
                     <span>
                        <Courses />
                     </span>
                     Курсы
                  </Link>
                  <Link to="/">
                     <span>
                        <Teachers />
                     </span>
                     Учителя
                  </Link>
                  <Link to="/">
                     <span>
                        <Students />
                     </span>
                     Студенты
                  </Link>
               </InfoBox>
            </>
         ) : (
            <>
               <PeaksoftIcon style={{ margin: '38px 59px 80 49px' }} />
               <InfoBox>
                  <Link to="/">
                     <span></span>
                     <span>
                        <InstructorCourses />
                     </span>
                     Мои курсы
                  </Link>
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
   position: 'relative',
   left: '0%',
   right: '0%',
   top: '0%',
   bottom: '0%',
})

const InfoBox = styled.div({
   marginRight: 16,
   display: 'flex',
   flexDirection: 'column',
   gap: 14,
})

const Link = styled.a`
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
   :active {
      border-left: 5px solid #1f6ed4;
      background-color: #dde9f9;
   }
`
