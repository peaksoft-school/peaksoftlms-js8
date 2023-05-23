import { BrowserRouter } from 'react-router-dom'
import { Instructors } from './pages/admin/Instructors'
// import { Courses } from './pages/admin/Courses'

function App() {
   return (
      <BrowserRouter>
         <Instructors />
         {/* <Courses /> */}
      </BrowserRouter>
   )
}

export default App
