import Modal from '@mui/material/Modal'
import { styled } from '@mui/material'

const ModalWindow = ({ children, onClose, open, ...rest }) => {
   return (
      <Modal open={open} onClose={onClose} {...rest}>
         <StyledBox>{children}</StyledBox>
      </Modal>
   )
}
const StyledBox = styled('div')({
   position: 'absolute',
   top: '50%',
   zIndex: '10',
   border: 'none',
   backgroundColor: '#fff',
   left: '50%',
   transform: 'translate(-50%, -50%)',
   borderRadius: '10px',
   padding: '0 0 25px',
})
export default ModalWindow
