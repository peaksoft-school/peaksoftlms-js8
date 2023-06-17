import { BrowserRouter } from 'react-router-dom'
import { Courses } from './pages/instructor/courses/Courses'

function AppContent() {
   return (
      <div>
         <Courses />
      </div>
   )
}
const App = () => {
   return (
      <BrowserRouter>
         <AppContent />
      </BrowserRouter>
   )
}
export default App
