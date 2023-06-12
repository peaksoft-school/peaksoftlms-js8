import styled from '@emotion/styled'
import {
   Paper,
   Table,
   TableBody,
   TableCell,
   TableContainer,
   TableHead,
   TablePagination,
   TableRow,
} from '@mui/material'
import { useState } from 'react'

export const AppTable = ({ columns, rows, onChangePage, page }) => {
   const [rowsPerPage, setRowsPerPage] = useState(2)

   const handleChangePage = (newPage) => {
      onChangePage(newPage)
   }

   const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(event.target.value)
   }

   return (
      <TableContainerStyled component={Paper}>
         <Table aria-label="simple table">
            <TableHead>
               <TableRow>
                  {columns?.map((column) => {
                     return (
                        <TableCell key={column.id}>{column.header}</TableCell>
                     )
                  })}
               </TableRow>
            </TableHead>
            <TableBody>
               {rows
                  // .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => {
                     return (
                        <TableRowStyled key={row.id}>
                           {columns?.map((column) => {
                              if (column.render) {
                                 return column.render(row)
                              }
                              const value = column.index
                                 ? index + 1
                                 : row[column.key]

                              return (
                                 <TableCell key={column.id}>{value}</TableCell>
                              )
                           })}
                        </TableRowStyled>
                     )
                  })}
            </TableBody>
         </Table>
         <TablePagination
            rowsPerPageOptions={[2, 6]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={(e, newPage) => handleChangePage(newPage)}
            onRowsPerPageChange={handleChangeRowsPerPage}
         />
      </TableContainerStyled>
   )
}

const TableContainerStyled = styled(TableContainer)`
<<<<<<< HEAD
   /* width: 71.25rem; */
=======
   width: 990px;
>>>>>>> e0c288f8e2449d9aa9fe4631f4cd964ab63e86c8
   border-radius: 10px;
   min-height: 405px;
   margin-top: 30px;
`
const TableRowStyled = styled(TableRow)(({ theme }) => ({
   '&:nth-of-type(even)': {
      backgroundColor: theme.palette.secondary.light,
      '&:last-child td, &:last-child th': {
         border: 0,
      },
   },
}))
