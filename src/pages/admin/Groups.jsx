import styled from '@emotion/styled'
import React, { useState } from 'react'
import Cards from '../../components/UI/Card'
import { SideBar } from '../../layout/SideBar'
import Button from '../../components/UI/Button'
import { Meatballs } from '../../components/UI/Meatballs'

export const Groups = () => {
   const [anchorEl, setAnchorEl] = useState(null)
   const open = Boolean(anchorEl)

   const handleClick = (e) => {
      setAnchorEl(e.currentTarget)
   }
   const handleClose = () => {
      setAnchorEl(null)
   }

   return (
      <StyledContent>
         <SideBar role="ADMIN" />
         <Cards />
         <div>
            <Button>+ Создать группу</Button>
            <Styledmeatballs
               onClick={handleClick}
               onClose={handleClose}
               open={open}
            />
         </div>
      </StyledContent>
   )
}

const StyledContent = styled.div`
   display: flex;
   color: '#212f4aeb';
   justify-content: end;
   top: 50px;
`
const Styledmeatballs = styled(Meatballs)`
   .MuiList-root > li {
      :first-of-type {
         display: none;
      }
   }
`
