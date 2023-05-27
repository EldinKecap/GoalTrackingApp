import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GoalsMenu from '../components/goalsMenu'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <GoalsMenu>
        
      </GoalsMenu>
    </>
  )
}

export default App
