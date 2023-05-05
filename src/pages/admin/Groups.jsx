import React from 'react'
import { SideBar } from '../../layout/SideBar'
import Button from '../../components/UI/Button'

export const Groups = () => {
   return (
      <div>
         <SideBar role="ADMIN" />
         <div>
            <Button>Создать группу</Button>
         </div>
      </div>
   )
}
