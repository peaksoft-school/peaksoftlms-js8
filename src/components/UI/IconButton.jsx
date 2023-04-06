import { IconButton as MuiIconButton } from '@mui/material'
import React from 'react'

const IconButton = ({ icon, ...props }) => {
   return <MuiIconButton {...props}>{icon}</MuiIconButton>
}

export default IconButton
