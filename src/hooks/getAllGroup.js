import { useEffect, useState } from 'react'
import { getGroupAllRequest } from '../api/studentService'
import { useSnackbar } from './useSnackbar'

const useGetAllGroup = () => {
   const [groups, setGroups] = useState([])
   const [selectedGroupID, setSelectedGroupID] = useState(null)
   const { notify, Snackbar } = useSnackbar()
   const [refetch, setRefetch] = useState(false)
   const fetchData = async () => {
      try {
         const response = await getGroupAllRequest()
         setGroups(response.data.groupResponses)
      } catch (error) {
         if (error.response) {
            notify('error', error.response.data.message)
         }
      }
   }
   useEffect(() => {
      fetchData()
   }, [refetch])
   const refetchHandle = () => {
      setRefetch((prevRefetch) => !prevRefetch)
   }
   const groupOptions = groups.map((group) => ({
      value: group.id,
      label: group.name,
   }))
   return {
      groupOptions,
      Snackbar,
      refetchHandle,
      selectedGroupID,
      setSelectedGroupID,
   }
}

export default useGetAllGroup
