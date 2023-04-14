import React from 'react'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo'

function MyDatePickers({ value, onChange }) {
   return (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
         <DemoContainer components={['DatePicker', 'DatePicker']}>
            <DatePicker
               value={value}
               onChange={(newValue) => onChange(newValue)}
            />
         </DemoContainer>
      </LocalizationProvider>
   )
}

export default MyDatePickers
