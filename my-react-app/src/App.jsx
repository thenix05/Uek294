import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from "./components/Counter"
import MyButton from './components/MyButton'
import MyInput from './components/MyInput'


function App() {
  return (
    <div>
      <Counter></Counter>
      <MyButton></MyButton>
      <MyInput></MyInput>
    </div>
  )
}

export default App
