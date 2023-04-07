import Checkbox from '@mui/material/Checkbox'
import styled from '@emotion/styled'

export const Checkboxes = ({ disabled, onChange, ...restProps }) => {
   return (
      <Checkbox
         typeof="checkbox"
         aria-label="primary"
         disabled={disabled}
         checkedIcon={<CheckedIcon />}
         icon={<CheckboxIcon />}
         onChange={onChange}
         {...restProps}
      />
   )
}

const CheckboxIcon = styled('span')(() => ({
   borderRadius: '1.5px',
   border: '1px solid black',
   width: 18,
   height: 18,
   '&:focus': {
      borderColor: 'blue',
   },
   '&:before': {
      display: 'block',
      width: 18,
      height: 18,
      backgroundImage:
         "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
         " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
         "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
      content: '""',
   },
}))

const CheckedIcon = styled(CheckboxIcon)({
   backgroundColor: ' #1F6ED4',
   border: 'none',
   backgroundImage:
      'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
})
