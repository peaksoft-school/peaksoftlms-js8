import { SnackBar } from './components/UI/Snackbar'
import 'react-toastify/dist/ReactToastify.css'

function App() {
   return (
      <div>
         <SnackBar text="Something went wrong" type="error  " />
      </div>
   )
}

export default App
