import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import styled from '@emotion/styled'

const data = ['Видеоурок', 'Презентация', 'Задание', 'Ссылка', 'Тест']

const SelectInput = ({ onChange, value, ...restProps }) => {
   return (
      <div>
         <StyledFormControl sx={{ m: 1, minWidth: 120 }}>
            <StyledSelect
               value={value}
               onChange={onChange}
               displayEmpty
               inputProps={{ 'aria-label': 'Without label' }}
               renderValue={() => <span>Добавить</span>}
               {...restProps}
            >
               {data.map((item) => (
                  <StyledMenuItem value={item} key={item}>
                     {item}
                  </StyledMenuItem>
               ))}
            </StyledSelect>
         </StyledFormControl>
      </div>
   )
}
export default SelectInput
const StyledSelect = styled(Select)(() => ({
   width: '150px',
   height: '45px',
}))
const StyledMenuItem = styled(MenuItem)(() => ({
   boxSizing: 'border-box',
   left: '0.5px',
   border: '1px solid #ececec',
   ':focus': {
      backgroundColor: 'rgba(26, 35, 126, 0.07)',
      color: '#3772FF',
   },
}))

const StyledFormControl = styled(FormControl)`
   height: 230px;
   width: 147px;
   border-radius: 10px;
`
