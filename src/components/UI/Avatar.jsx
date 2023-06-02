import styled from '@emotion/styled'
import { Avatar, IconButton, Stack } from '@mui/material'
import { useUploadAvatar } from '../../hooks/uploadAvatar'
import { ReactComponent as AvatarIcon } from '../../assets/icons/avatar.svg'

const AvatarUpload = ({ imgLink, ...rest }) => {
   const [avatarUrl, handleAvatarChange] = useUploadAvatar()

   return (
      <IconButton
         {...rest}
         color="primary"
         aria-label="upload picture"
         component="label"
      >
         <input
            hidden
            accept="image/*"
            type="file"
            onChange={handleAvatarChange}
         />
         <Stack direction="row" spacing={2}>
            <AvatarGroupStyle sx={{ bgcolor: '#E2E4E8' }} variant="rounded">
               <img src={imgLink || avatarUrl} alt="" />
               <AvatarIcon />
            </AvatarGroupStyle>
         </Stack>
      </IconButton>
   )
}

export default AvatarUpload

const AvatarGroupStyle = styled(Avatar)`
   width: 153px;
   height: 125px;
   border-radius: 10px;
`
