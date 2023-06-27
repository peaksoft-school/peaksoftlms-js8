import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getTaskRequest } from '../../../api/studentService'

const Tasks = () => {
   const [state, setState] = useState([])
   const { lessonId } = useParams()

   const getLessonTask = async () => {
      try {
         const { data } = await getTaskRequest(lessonId)
         setState(data)
      } catch (error) {
         console.error(error)
      }
   }
   useEffect(() => {
      getLessonTask()
   }, [])
   return (
      <div style={{ margin: '0 0 0 290px' }}>
         {state.map((item) => {
            return (
               <p>
                  {item.name}
                  {item.description}
                  {item.file}
                  {item.deadline}
               </p>
            )
         })}
      </div>
   )
}

export default Tasks
