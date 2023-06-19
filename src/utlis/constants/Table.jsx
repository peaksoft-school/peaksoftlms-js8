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

export const AppTable = ({ columns, rows, getUniqueId }) => {
   return (
      <TableContainerStyled component={Paper}>
         <Table aria-label="simple table">
            <TableHead>
               <TableRow>
                  {columns?.map((column) => (
                     <TableCell key={column.key}>{column.header}</TableCell>
                  ))}
               </TableRow>
            </TableHead>
            <TableBody>
               {rows?.map((row, index) => {
                  return (
                     <TableRowStyled key={getUniqueId(row)}>
                        {columns?.map((column) => {
                           if (column.render) {
                              return column.render(row)
                           }
                           const value = column.index
                              ? index + 1
                              : row[column.key]

                           return (
                              <TableCell key={`row - ${column.key}`}>
                                 {value}
                              </TableCell>
                           )
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
   width: 990px;
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
