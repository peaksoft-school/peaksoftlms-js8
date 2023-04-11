import styled from '@emotion/styled'
import { NavLink } from 'react-router-dom'
import { ROLES } from '../../utlis/constants/commons'

const Tabs = () => {
   return (
      <Container>
         {ROLES.ADMIN ? (
            <>
               <StyledLink to="/">Учителя</StyledLink>
               <StyledLink to="/">Студенты</StyledLink>
            </>
         ) : (
            <>
               <StyledLink to="/">Материалы</StyledLink>
               <StyledLink to="/">Студенты</StyledLink>
            </>
         )}
      </Container>
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
