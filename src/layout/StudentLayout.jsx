import React from 'react'
import { useSelector } from 'react-redux'
import { SideBar } from './SideBar'

const StudentLayout = () => {
   const role = useSelector((state) => state.auth.role)
   return (
      <div>
         <SideBar role={role} />
      </div>
   )
}

export default StudentLayout
