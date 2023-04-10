import React, { useState } from 'react'
import { Avatar, IconButton, Stack } from '@mui/material'
import styled from '@emotion/styled'
import defaultImage from '../../assets/icons/avatar.svg'

const AvatarUpload = () => {
   const [avatarUrl, setAvatarUrl] = useState(defaultImage)

   console.log(avatarUrl)

   const handleAvatarChange = (event) => {
      const file = event.target.files[0]
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onloadend = () => {
         setAvatarUrl(reader.result)
      }
   }

   return (
      <IconButton color="primary" aria-label="upload picture" component="label">
         <input
            hidden
            accept="image/*"
            type="file"
            onChange={handleAvatarChange}
         />
         <Stack direction="row" spacing={2}>
            <AvatarGroupStyle sx={{ bgcolor: '#E2E4E8' }} variant="rounded">
               <img src={avatarUrl} alt="" />
            </AvatarGroupStyle>
         </Stack>
      </IconButton>
   )
}

export default AvatarUpload

const AvatarGroupStyle = styled(Avatar)`
   width: 173px;
   height: 145px;
   border-radius: 10px;
`
