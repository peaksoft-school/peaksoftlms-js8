import React from 'react'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { SideBar } from './SideBar'

const InstructorLayout = () => {
   const role = useSelector((state) => state.auth.role)
   return (
      <div>
         <SideBar role={role} />
         <Outlet />
      </div>
   )
}

export default InstructorLayout
