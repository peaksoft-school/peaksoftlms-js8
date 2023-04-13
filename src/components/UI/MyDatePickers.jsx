import React from 'react'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo'
import useDatePicker from '../../hooks/datePickers'

function MyDatePickers({ value, onChange }) {
   const { date, handleDateChange } = useDatePicker()

   return (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
         <DemoContainer components={['DatePicker', 'DatePicker']}>
            <DatePicker
               value={date}
               onChange={(newValue) => handleDateChange(newValue)}
            />
         </DemoContainer>
      </LocalizationProvider>
   )
}

export default MyDatePickers
