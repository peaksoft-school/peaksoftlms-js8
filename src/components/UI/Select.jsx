import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import ListItemText from '@mui/material/ListItemText'
import Select from '@mui/material/Select'
import Checkbox from '@mui/material/Checkbox'
import styled from '@emotion/styled'

const names = [
   'Азамат Мусагалиев',
   'Айсулуу Мырзабекова',
   'Мырза  Алымкулов',
   'Айдай Махматова',
   'Аскар Оморов',
   'Анджелина Джоли',
   'Каныбек Токторбаев',
   'Бекболот Осмонов',
]

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

const MultiSelect = ({ value, onChange }) => {
   return (
      <div>
         <FormControl sx={{ m: 1, width: 300 }}>
            <Select
               multiple
               value={value}
               onChange={onChange}
               renderValue={(selected) => selected.join(', ')}
               MenuProps={MenuProps}
            >
               {names.map((name) => (
                  <MenuItem key={name} value={name}>
                     <StyledListItem primary={name} />
                     <Checkbox checked={value.indexOf(name) > -1} />
                  </MenuItem>
               ))}
            </Select>
         </FormControl>
      </div>
   )
}

const StyledListItem = styled(ListItemText)(() => ({
   '&:hover': {
      color: '#1A237E',
   },
}))
export default MultiSelect
