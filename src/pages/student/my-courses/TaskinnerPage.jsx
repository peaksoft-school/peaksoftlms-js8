import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getTaskInnerRequest } from '../../../api/studentService'

const TaskinnerPage = () => {
   const [state, setState] = useState([])
   const { TaskId } = useParams()

   const getLessonInnerTask = async () => {
      try {
         const { data } = await getTaskInnerRequest(TaskId)
         setState(data)
      } catch (error) {
         console.error(error)
      }
   }
   useEffect(() => {
      getLessonInnerTask()
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

export default TaskinnerPage
