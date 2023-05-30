import { Button, Menu, MenuItem } from '@mui/material'
import styled from '@emotion/styled'
import { ReactComponent as MenuIcon } from '../../assets/icons/menu.svg'
import EditIcon from '../../assets/icons/edit.svg'
import DeleteIcon from '../../assets/icons/delete.svg'

const arrayIcon = [
   {
      icon: EditIcon,
      title: 'Редактировать',
   },
   {
      icon: DeleteIcon,
      title: 'Удалить',
   },
]

export const GroupMeatballs = ({
   open,
   anchorEl,
   onClick,
   onClose,
   arrayIcon: propsIcons,
   ...restProps
}) => {
   const finallyArrayIcons = propsIcons || arrayIcon

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
   },
}))
