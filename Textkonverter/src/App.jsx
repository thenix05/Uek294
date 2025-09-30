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
  
  const textleangue = inputValue.length;
  const reversedText = inputValue.split("").reverse().join("");
  return (
    <>
      <TextField textOnChange={handleChange} textValue={inputValue}></TextField>
      <p>Textlänge: {textleangue}</p>
      <p>Text: {inputValue}</p>
      <p>Text umgekehrt: {reversedText}</p>
      <p>Text in Grossbuchstaben {inputValue.toLocaleUpperCase()}</p>
    </>
  )
}

export default App
