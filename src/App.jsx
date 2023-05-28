import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GoalsMenu from './components/goalsMenu'
import GoalCreateForm from './components/goalCreateForm'

function App() {
  

  return (
    <>
      <GoalsMenu/>
      <GoalCreateForm/>
    </>
  )
}

export default App
