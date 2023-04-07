import { Button, Menu, MenuItem } from '@mui/material'
import styled from '@emotion/styled'
import { ReactComponent as MenuIcon } from '../../assets/icons/menu.svg'
import { ReactComponent as EditIcon } from '../../assets/icons/edit.svg'
import { ReactComponent as Delete } from '../../assets/icons/delete.svg'
import { ReactComponent as Fixed } from '../../assets/icons/fixed.svg'

const arrayIcon = [
   {
      icon: <Fixed />,
      title: 'Назначить учителя',
   },
   {
      icon: <EditIcon />,
      title: 'Редактировать',
   },
   {
      icon: <Delete />,
      title: 'Удалить',
   },
]

export const Meatballs = ({ open, onClick, onClose, ...restProps }) => {
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
            {arrayIcon.map((item) => (
               <StyledMenuItem onClick={onClose}>
                  {item.icon}

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
      path: {
         fill: 'blue',
      },
   },
}))
