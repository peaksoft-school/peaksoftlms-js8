import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { SideBar } from './SideBar'

const StudentLayout = () => {
   const role = useSelector((state) => state.auth.role)
   return (
      <div>
         <SideBar role={role} />
         <Outlet />
      </div>
   )
}

export default StudentLayout
