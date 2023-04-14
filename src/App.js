import { useState } from 'react'
import { SwitchesSize } from './components/UI/AcceptBar'

function App() {
   const [isChecked, setChecked] = useState(true)

   const CheckHandled = () => {
      setChecked(!isChecked)
   }
   return (
      <div>
         PeaksoftLMS
         <SwitchesSize onChange={CheckHandled} checked={isChecked} />
      </div>
   )
}

export default App
