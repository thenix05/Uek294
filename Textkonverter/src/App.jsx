import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TextField from './components/TextField'

function App() {
  const [inputValue, setInputValue] = useState("");
  const handleChange = (e) => {
        setInputValue(e.target.value)
    }
  return (
    <>
      <TextField textOnChange={handleChange} textValue={inputValue}></TextField>
      <input type="text" onChange={handleChange} value={inputValue}></input>
      <p>Text: {inputValue}</p>
    </>
  )
}

export default App
