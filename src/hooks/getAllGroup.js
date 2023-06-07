import { useEffect, useState } from 'react'
import { getGroupAllRequest } from '../api/studentService'

const useGetAllGroup = () => {
   const [groups, setGroups] = useState([])
   const [selectedGroupID, setSelectedGroupID] = useState('')
   const fetchData = async () => {
      try {
         const response = await getGroupAllRequest()
         setGroups(response.data.groupResponses)
      } catch (error) {
         console.error('Ошибка при получении данных:', error)
      }
   }
   const handleGroupChange = (options) => {
      setSelectedGroupID(options)
   }
   useEffect(() => {
      fetchData()
   }, [])
   return {
      groups,
      selectedGroupID,
      handleGroupChange,
   }
}

export default useGetAllGroup
