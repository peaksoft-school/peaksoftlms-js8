import { useState } from 'react'

function useDatePicker() {
   const [date, setDate] = useState('')

   const handleDateChange = (newDate) => {
      setDate(newDate)
   }

   return {
      date,
      handleDateChange,
   }
}

export default useDatePicker
