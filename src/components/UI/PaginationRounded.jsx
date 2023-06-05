import styled from '@emotion/styled'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'

export function PaginationRounded({ onChange, page, count }) {
   return (
      <Stack spacing={2}>
         <StyledPagination
            count={count}
            variant="outlined"
            shape="rounded"
            onChange={onChange}
            page={page}
         />
      </Stack>
   )
}
const StyledPagination = styled(Pagination)({
   '& li > .Mui-selected': {
      color: 'white',
      backgroundColor: '#258AFF',
   },
   '& li > .Mui-selected:hover': {
      color: 'white',
      background: '#0e66cb',
   },
})
