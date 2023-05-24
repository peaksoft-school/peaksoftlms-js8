import { Grid } from '@mui/material'
import { useSelector } from 'react-redux'
import React from 'react'
import { Outlet } from 'react-router-dom'
import { SideBar } from './SideBar'

export const AdminLayout = () => {
   const role = useSelector((state) => state.auth.role)
   return (
      <Grid>
         <SideBar role={role} />
         <Outlet />
      </Grid>
   )
}
