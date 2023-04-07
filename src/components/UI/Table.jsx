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

export const AppTable = () => {
   const columns = [
      {
         header: 'ID',
         key: 'id',
         id: 11,
      },
      {
         header: 'Имя Фамилия',
         key: 'userFullName',
         id: 12,
      },
      {
         header: 'Группа',
         key: 'group',
         id: 13,
      },
      {
         header: 'Формат обучения',
         key: 'learningFormat',
         id: 14,
      },
      {
         header: 'Номер телефона',
         key: 'phoneNumber',
         id: 15,
      },
      {
         header: 'E-mail',
         key: 'email',
         id: 16,
      },
      {
         header: 'Пароль',
         key: 'password',
         id: 17,
      },
      {
         header: 'Действия',
         key: 'action',
         id: 18,
      },
   ]
   const rows = [
      {
         id: 1,
         userFullName: 'Zarina Orgubaeva',
         group: 'js-8',
         learningFormat: 'offline',
         phoneNumber: '07777787',
         email: 'zari@gmail.com',
         password: '123123',
         action: 'your action',
      },
      {
         id: 2,
         userFullName: 'Naruto Uzumaki',
         group: 'js-8',
         learningFormat: 'offline',
         phoneNumber: '077799787',
         email: 'Uzu@gmail.com',
         password: '126723',
         action: 'your action',
      },
      {
         id: 3,
         userFullName: 'Hataki Kakashi',
         group: 'js-8',
         learningFormat: 'Online',
         phoneNumber: '02277787',
         email: 'hataki@gmail.com',
         password: '198723',
         action: 'your action',
      },
   ]

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
   margin-top: 10rem;
   margin-left: 1.25rem;
`
const TableRowStyled = styled(TableRow)(({ theme }) => ({
   '&:nth-of-type(even)': {
      backgroundColor: theme.palette.secondary.main,
      '&:last-child td, &:last-child th': {
         border: 0,
      },
   },
}))
