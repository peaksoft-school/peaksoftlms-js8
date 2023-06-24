import styled from '@emotion/styled'
import React, { useState } from 'react'
import IconButton from './IconButton'
import { ReactComponent as Profile } from '../../assets/icons/profile.svg'
import { ReactComponent as Vector } from '../../assets/icons/Vector (1).svg'
import { ReactComponent as Vectore } from '../../assets/icons/Vector (2).svg'
import { ReactComponent as Vectore3 } from '../../assets/icons/Vector (3).svg'

import { removeItemFromStorage } from '../../utlis/helpers/storageHelper'

import { JWT_TOKEN_KEY, USER_INFO } from '../../utlis/constants/commons'

const Header = () => {
   const [showText, setShowText] = useState(false)
   const handleIconClick = () => {
      setShowText(!showText)
   }
   const handleLogout = () => {
      removeItemFromStorage(JWT_TOKEN_KEY)
      removeItemFromStorage(USER_INFO)
      window.location.reload()
   }
   return (
      <HeaderStyled>
         <IconButton icon={<Vectore3 />} />
         <IconButton icon={<Profile />} />
         <p>Студент</p>
         <IconButton icon={<Vector />} onClick={handleIconClick} />
         {showText && (
            <StyledDropDown onClick={handleLogout}>
               <IconButton icon={<Vectore />} />
               <button type="button">Выйти</button>
            </StyledDropDown>
         )}
      </HeaderStyled>
   )
}
export default Header

const HeaderStyled = styled('div')({
   display: 'flex',
   gap: '5px',
   justifyContent: 'flex-end',
   borderBottom: '1px solid #000',
   '& p': {
      fontWeight: '400',
   },
})
const StyledDropDown = styled('h3')({
   display: 'flex',
   zIndex: 1,
   position: 'absolute',
   top: '30px',
   right: '10px',
   width: '40px',
   height: '10px',
   background: '#DDE9F9',
   cursor: 'pointer',
   border: '1px solid #3772FF',
   padding: '8px 90px 16px 0px',
   borderRadius: '10px',
   '& span': {
      fontSize: '18px',
      color: '#3772FF',
      marginTop: '-4px',
      marginLeft: '6px',
   },
})
