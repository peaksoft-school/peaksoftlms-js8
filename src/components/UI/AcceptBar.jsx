import * as React from 'react'
import Switch from '@mui/material/Switch'
import { FormControlLabel, Grid } from '@mui/material'
import styled from '@emotion/styled'

export const SwitchesSize = ({ checked, onChange, ...rest }) => {
   return (
      <StyledContainer checked={checked}>
         <p>ответов</p>
         <StyledGrid>
            <StyledAnswer>
               {' '}
               {checked ? 'Ответы принимаются' : 'Ответы не принимаются'}
            </StyledAnswer>

            <FormControlLabel
               control={
                  <StyledSwitch
                     checked={checked}
                     onChange={onChange}
                     {...rest}
                  />
               }
            />
         </StyledGrid>
      </StyledContainer>
   )
}

const StyledContainer = styled('div')`
   display: flex;
   justify-content: space-between;
   align-items: center;
   box-sizing: border-box;
   padding-left: 20px;
   padding-right: 18px;
   width: 1140px;
   height: 68px;

   background: ${(props) =>
      props.checked ? 'rgba(54, 172, 12, 0.1)' : 'rgba(201, 30, 30, 0.1)'};
   border: 1px solid #d4d4d4;
   border-radius: 10px;
`
const StyledGrid = styled(Grid)`
   display: flex;
`

const StyledSwitch = styled(Switch)`
   .MuiSwitch-track {
      background-color: #1f6ed4;
   }

   .MuiSwitch-thumb {
      color: ${(props) => (props.checked ? ' #36AC0C' : '#C91E1E')};
   }

   .MuiFormControlLabel-label {
      color: red;
   }
`
const StyledAnswer = styled('p')`
   padding-right: 18px;
`
