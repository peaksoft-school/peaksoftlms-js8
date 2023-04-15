import React from 'react'
import styled from '@emotion/styled'
import Input from './Input'

const TextArea = ({ value, onChange, ...rest }) => {
   return (
      <StyledInput
         multiline
         rows={3}
         placeholder="Oписание курса"
         value={value}
         onChange={onChange}
         {...rest}
      />
   )
}

export default TextArea

const StyledInput = styled(Input)({
   width: '491px',
   borderRadius: '10px',
})
