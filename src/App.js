import { useState } from 'react'
import { Switcher } from './components/UI/Switcher'

function App() {
   const [isChecked, setChecked] = useState(true)

   const CheckHandled = () => {
      setChecked(!isChecked)
   }
   return (
      <div>
         PeaksoftLMS
         <Switcher
            onChange={CheckHandled}
            checked={isChecked}
            countOfAnswers="0"
         />
      </div>
   )
}

export default App
