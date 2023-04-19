import React, { forwardRef } from 'react'
import styled from '@emotion/styled'
import Input from './Input'

const TextArea = forwardRef(({ value, onChange, ...rest }, ref) => {
   return (
      <StyledInput
         ref={ref}
         multiline
         rows={3}
         placeholder="Oписание курса"
         value={value}
         onChange={onChange}
         {...rest}
      />
   )
})

export default TextArea

const StyledInput = styled(Input)({
   borderRadius: '10px',
})
