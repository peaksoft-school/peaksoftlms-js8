import Modal from '@mui/material/Modal'
import { styled } from '@mui/material'

const ModalWindow = ({ children, onClose, open }) => {
   return (
      <Modal open={open} onClose={onClose}>
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
})
export default ModalWindow
