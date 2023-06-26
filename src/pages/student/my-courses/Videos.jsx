/* eslint-disable import/no-extraneous-dependencies */
import React, { Fragment, useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router'
import ReactPlayer from 'react-player'
import styled from '@emotion/styled'
import {
   getPresentationRequest,
   getVideosRequest,
} from '../../../api/studentService'

const Videos = () => {
   const [state, setState] = useState([])
   const { lessonId, coursesId } = useParams()
   const location = useLocation()

   const isPresentation = () => {
      return (
         location.pathname ===
         `/student/mycourses/${coursesId}/${lessonId}/presentation`
      )
   }

   const getLessonData = async () => {
      try {
         let response
         if (isPresentation()) {
            response = await getPresentationRequest(lessonId)
         } else {
            response = await getVideosRequest(lessonId)
         }
         const { data } = response
         setState(data)
      } catch (error) {
         console.error(error)
      }
   }

   useEffect(() => {
      getLessonData()
   }, [])

   return (
      <Container style={{ marginTop: '40px', marginLeft: '280px' }}>
         {state.map((item) => {
            return (
               <Fragment key={item.name}>
                  {isPresentation() ? (
                     <a
                        href={item.formatPPT}
                        target="_blank"
                        rel="noopener noreferrer"
                     >
                        View Presentation
                     </a>
                  ) : (
                     <ReactPlayer
                        url={item.videoLink}
                        controls
                        width={800}
                        height={400}
                        style={{ padding: '40px 40px' }}
                     />
                  )}
                  <NameStyled>{item.name}</NameStyled>
                  <p style={{ marginLeft: '40px' }}>{item.description}</p>
               </Fragment>
            )
         })}
      </Container>
   )
}

export default Videos

const NameStyled = styled('div')({
   fontSize: '2rem',
   marginTop: '-20px',
   marginLeft: '40px',
})
const Container = styled('div')({
   width: '70%',
   height: '560px',
   backgroundColor: 'white',
   borderRadius: '20px',
})
