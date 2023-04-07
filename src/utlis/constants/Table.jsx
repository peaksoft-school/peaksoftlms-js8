import styled from '@emotion/styled'
import {
   Paper,
   Table,
   TableBody,
   TableCell,
   TableContainer,
   TableHead,
   TableRow,
} from '@mui/material'

export const AppTable = ({ columns, rows }) => {
   return (
      <TableContainerStyled component={Paper}>
         <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
               <TableRow>
                  {columns.map((column) => (
                     <TableCell key={column.id}>{column.header}</TableCell>
                  ))}
               </TableRow>
            </TableHead>
            <TableBody>
               {rows.map((row, index) => {
                  return (
                     <TableRowStyled key={row.id}>
                        {columns.map((column) => {
                           if (column.render) {
                              return column.render(row)
                           }
                           const value = column.index
                              ? index + 1
                              : row[column.key]

                           return <TableCell key={column.id}>{value}</TableCell>
                        })}
                     </TableRowStyled>
                  )
               })}
            </TableBody>
         </Table>
      </TableContainerStyled>
   )
}

const TableContainerStyled = styled(TableContainer)`
   width: 71.25rem;
   border-radius: 10px;
`
const TableRowStyled = styled(TableRow)(({ theme }) => ({
   '&:nth-of-type(even)': {
      backgroundColor: theme.palette.secondary.light,
      '&:last-child td, &:last-child th': {
         border: 0,
      },
   },
}))
