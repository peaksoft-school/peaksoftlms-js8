import { Grid } from '@mui/material'
import { useSelector } from 'react-redux'
import React from 'react'
import { SideBar } from './SideBar'

export const AdminLayout = ({ children }) => {
   const role = useSelector((state) => state.auth.role)
   return (
      <Grid>
         <SideBar role={role} />
         {children}
      </Grid>
   )
}
