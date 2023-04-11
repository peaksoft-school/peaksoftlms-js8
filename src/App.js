import { useState } from 'react'
import MultiSelect from './components/UI/Select'

const names = [
   { name: 'Айсулуу Мырзабекова', id: '1' },
   { name: 'Азамат Мусагалиев', id: '2' },
   { name: 'Мырза Алымкулов', id: '3' },
   { name: 'Айдай Махматова', id: '4' },
   { name: 'Аскар Оморов', id: '5' },
   { name: 'Анджелина Джоли', id: '6' },
   { name: 'Каныбек Токторбаев', id: '7' },
   { name: 'Бекболот Осмонов', id: '8' },
]

function App() {
   const [state, setState] = useState([])

   const onChange = (e) => {
      const {
         target: { value },
      } = e
      setState(typeof value === 'string' ? value.split(',') : value)
   }

   return (
      <div>
         <MultiSelect array={names} onChange={onChange} value={state} />
      </div>
   )
}

export default App
