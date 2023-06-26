import styled from '@emotion/styled'
import { NavLink, Outlet, useParams } from 'react-router-dom'

const Tabs = ({ role = 'ADMIN' }) => {
   const { coursesId } = useParams()

   return (
      <>
         <Container>
            {role === 'ADMIN' ? (
               <>
                  <StyledLink to={`${coursesId}/teachers`}>Учителя</StyledLink>
                  <StyledLink to={`${coursesId}/students`}>Студенты</StyledLink>
               </>
            ) : (
               <>
                  <StyledLink to="/materials">Материалы</StyledLink>
                  <StyledLink to="/students">Студенты</StyledLink>
               </>
            )}
         </Container>
         <Outlet />
      </>
   )
}

export default Tabs
const Container = styled.div`
   display: flex;
   justify-content: center;
   background-color: #eff0f4;
   gap: 80px;
`
const StyledLink = styled(NavLink)`
   text-decoration: none;
   font-weight: 600;
   font-size: 16px;
   line-height: 21.79px;
   color: #000000;
   height: 48px;
   padding-top: 27px;
   text-align: center;
   width: 132px;

   &.active {
      color: blue;
      border-bottom: 3px solid blue;
      left: 482px;
   }
`
