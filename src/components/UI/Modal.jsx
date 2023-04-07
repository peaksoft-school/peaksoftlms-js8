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
   left: '50%',
   transform: 'translate(-50%, -50%)',
   width: 400,
   backgroundColor: 'background.paper',
   border: '2px solid #000',
   boxShadow: 24,
   p: 4,
})
export default ModalWindow
