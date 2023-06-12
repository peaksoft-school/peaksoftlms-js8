import React from 'react'
import { AppTable } from '../../../utlis/constants/Table'
import CourseHeader from '../course/CourseHeader'

const columns = [
   {
      header: 'ID',
      key: 'id',
   },
   {
      header: 'Имя Фамилия',
      key: 'fullName',
   },
   {
      header: 'Специализация',
      key: 'special',
   },
   {
      header: 'Номер телефона',
      key: 'phoneNumber',
   },
   {
      header: 'E-mail',
      key: 'email',
   },
]
const GroupsInnerPage = () => {
   return (
      <div>
         <CourseHeader />
         <AppTable columns={columns} />
      </div>
   )
}

export default GroupsInnerPage
