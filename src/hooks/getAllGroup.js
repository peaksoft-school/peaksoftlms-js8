import { useEffect, useState } from 'react'
import { getGroupAllRequest } from '../api/studentService'

const useGetAllGroup = () => {
   const [groups, setGroups] = useState([])
   const [selectedGroupID, setSelectedGroupID] = useState(null)
   const fetchData = async () => {
      try {
         const response = await getGroupAllRequest()
         setGroups(response.data.groupResponses)
      } catch (error) {
         console.error('Ошибка при получении данных:', error)
      }
   }
   useEffect(() => {
      fetchData()
   }, [])
   return {
      groups,
      selectedGroupID,
      setSelectedGroupID,
   }
}

export default useGetAllGroup
