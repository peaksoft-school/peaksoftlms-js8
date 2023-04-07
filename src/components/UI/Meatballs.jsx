import { Menu, MenuItem } from '@mui/material'
import { ReactComponent as DeleteIcon } from '../../assets/icons/delete.svg'
import { ReactComponent as EditIcon } from '../../assets/icons/edit.svg'
import { ReactComponent as MenuIcon } from '../../assets/icons/menu.svg'

export const Meatballs = ({ onClose, open, onClick, ...restProps }) => {
   return (
      <div>
         <MenuIcon
            id="positioned-demo-button"
            aria-controls={open ? 'positioned-demo-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            variant="outlined"
            color="neutral"
            onClick={onClick}
            {...restProps}
         />
         <Menu
            id="positioned-demo-menu"
            open={open}
            onClose={onClose}
            aria-labelledby="positioned-demo-button"
            placement="bottom-end"
            {...restProps}
         >
            <MenuItem onClick={onClose}>
               <EditIcon />
               Редактировать
            </MenuItem>

            <MenuItem onClick={onClose} variant="soft" color="danger">
               <DeleteIcon />
               Удалить
            </MenuItem>
         </Menu>
      </div>
   )
}
