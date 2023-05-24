/* eslint-disable jsx-a11y/aria-role */
import { SideBar } from './layout/SideBar'
import { Students } from './pages/admin/Students'

function App() {
   return (
      <div>
         Peaksoft LMS
         <SideBar role="ADMIN" />
         <Students />
      </div>
   )
}
export default App
