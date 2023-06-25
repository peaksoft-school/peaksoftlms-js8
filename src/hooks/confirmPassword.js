import { useState } from 'react'

export const useConfirmPassword = (submitHandler) => {
   const [password, setPassword] = useState('')
   const [confirmPassword, setConfirmPassword] = useState('')
   const [error, setError] = useState('')

   const handlePasswordChange = (event) => {
      setPassword(event.target.value)
   }

   const handleConfirmPasswordChange = (event) => {
      setConfirmPassword(event.target.value)
   }

   const handleSubmit = (event) => {
      event.preventDefault()
      if (password.trim().length > 8) {
         if (password === confirmPassword) {
            submitHandler(password)
         } else {
            setError('Passwords do not match')
         }
      } else {
         setError('Пароль должен содержать не менее 8 символов')
      }
   }
   return [
      password,
      confirmPassword,
      error,
      handlePasswordChange,
      handleConfirmPasswordChange,
      handleSubmit,
   ]
}
