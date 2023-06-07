import styled from '@emotion/styled'
import { CircularProgress } from '@mui/material'
import React from 'react'

const Spinner = () => {
   return (
      <SpinnerCont>
         <CircularProgress />
      </SpinnerCont>
   )
}

export default Spinner

const SpinnerCont = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   height: 100%;
`
