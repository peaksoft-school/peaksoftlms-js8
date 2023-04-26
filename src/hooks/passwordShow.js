import { useState } from 'react'

export const usePasswordShow = () => {
   const [showPassword, setShowPassword] = useState(false)

   const handleClickShowPassword = () => {
      setShowPassword(!showPassword)
   }

   const handleMouseDownPassword = (event) => {
      event.preventDefault()
   }

   return [showPassword, handleClickShowPassword, handleMouseDownPassword]
}
