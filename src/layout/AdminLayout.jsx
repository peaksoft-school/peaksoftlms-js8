import { Grid } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'

export const AdminLayout = () => {
   return (
      <Grid>
         <Outlet />
         AdminLayout
      </Grid>
   )
}
