import { useState } from 'react'

const useClineSidePagination = () => {
   const [page, setPage] = useState(0)
   const [rowsPerPage, setRowsPerPage] = useState(2)

   const handleChangePage = (newPage) => {
      setPage(newPage)
   }

   const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value)
   }

   const paginate = (rows) => {
      return rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
   }

   return {
      page,
      rowsPerPage,
      handleChangePage,
      handleChangeRowsPerPage,
      paginate,
   }
}

export default useClineSidePagination
