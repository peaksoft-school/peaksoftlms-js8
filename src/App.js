import { BrowserRouter } from 'react-router-dom'
import Students from './pages/instructor/courses/Students'
// import { AppRoutes } from './routes/Routes'
// import { Courses } from './pages/instructor/courses/Courses'

function AppContent() {
   return (
      <div>
         {/* PeaksoftLMS */}
         {/* <AppRoutes /> */}
         {/* <Courses /> */}
         <Students />
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
