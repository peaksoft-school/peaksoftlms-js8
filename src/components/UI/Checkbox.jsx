import * as React from 'react'
import Checkbox from '@mui/material/Checkbox'
import styled from '@emotion/styled'

export const Checkboxes = ({ disabled, checked }) => {
   return (
      <StyledCheckbox
         aria-label="primary"
         disabled={disabled}
         checked={checked}
      />
   )
}

const StyledCheckbox = styled(Checkbox)(() => ({
   '&:hover': {
      color: 'blue',
   },
}))
