import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import ListItemText from '@mui/material/ListItemText'
import Select from '@mui/material/Select'
import Checkbox from '@mui/material/Checkbox'
import styled from '@emotion/styled'

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
   PaperProps: {
      style: {
         maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
         width: 250,
      },
   },
}

const MultiSelect = ({ array, value, onChange, ...rest }) => {
   console.log(array)

   return (
      <FormControl sx={{ m: 1, width: 300 }}>
         <Select
            multiple
            value={value}
            onChange={onChange}
            renderValue={(selected) => selected.join(', ')}
            MenuProps={MenuProps}
            {...rest}
         >
            {array.map((item) => (
               <MenuItem key={item.name} value={item.name}>
                  <StyledListItem primary={item.name} />
                  <Checkbox checked={value.indexOf(item.name) > -1} />
               </MenuItem>
            ))}
         </Select>
      </FormControl>
   )
}

const StyledListItem = styled(ListItemText)(() => ({
   '&:hover': {
      color: '#1A237E',
   },
}))
export default MultiSelect
