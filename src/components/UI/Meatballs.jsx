import { Button, Menu, MenuItem } from '@mui/material'
import styled from '@emotion/styled'
import { ReactComponent as MenuIcon } from '../../assets/icons/menu.svg'
import EditIcon from '../../assets/icons/edit.svg'
import DeleteIcon from '../../assets/icons/delete.svg'
import FixedIcon from '../../assets/icons/fixed.svg'

const arrayIcon = [
   {
      icon: FixedIcon,
      title: 'Назначить учителя',
   },
   {
      icon: EditIcon,
      title: 'Редактировать',
   },
   {
      icon: DeleteIcon,
      title: 'Удалить',
   },
]

export const Meatballs = ({
   open,
   anchorEl,
   onClick,
   onClose,
   arrayIcon: propsIcons,
   ...restProps
}) => {
   const finallyArrayIcons = propsIcons || arrayIcon
   // const [anchorEl, setAnchorEl] = useState(null)
   // const open = Boolean(anchorEl)

   // const handleClick = (e) => {
   //    setAnchorEl(e.currentTarget)
   // }
   // const handleClose = () => {
   //    setAnchorEl(null)
   // }

   return (
      <div>
         <Button
            id="demo-positioned-button"
            aria-controls={open ? 'demo-positioned-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={onClick}
            {...restProps}
         >
            <MenuIcon />
         </Button>
         <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            open={open}
            onClose={onClose}
            {...restProps}
         >
            {finallyArrayIcons.map((item) => (
               <StyledMenuItem onClick={onClose} key={item.title}>
                  <img src={item.icon} alt="" />
                  {item.title}
               </StyledMenuItem>
            ))}
         </Menu>
      </div>
   )
}

const StyledMenuItem = styled(MenuItem)(() => ({
   gap: '15px',
   '&:hover': {
      color: 'blue',
      // '& path': {
      //    stroke: 'blue',
      //    fill: 'blue',
      // },
   },
}))
