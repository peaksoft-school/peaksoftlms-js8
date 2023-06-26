/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import ReactPlayer from 'react-player'
import { getLinkRequest } from '../../../api/studentService'

const LessonLink = () => {
   const [state, setState] = useState({})
   const { lessonId } = useParams()

   const getLessonData = async () => {
      try {
         const { data } = await getLinkRequest(lessonId)
         setState(data)
      } catch (error) {
         console.error(error)
      }
   }
   useEffect(() => {
      getLessonData()
   }, [])

   return (
      <div style={{ marginTop: '60px', marginLeft: '270px' }}>
         <ReactPlayer url={state.link} controls />
      </div>
   )
}

export default LessonLink
