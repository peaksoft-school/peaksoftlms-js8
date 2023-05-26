import { SideBar } from './layout/SideBar'
import { AppRoutes } from './routes/Routes'

function App() {
   return (
      <div>
         {/* PeaksoftLMS/ */}
         <SideBar role="ADMIN" />
         <AppRoutes />
      </div>
   )
}
export default App
