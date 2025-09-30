import {useState} from "react"

export default function MyInput(){
    const [inputValue, setInputValue] = useState("")

    const handleChange = (e) => {
        setInputValue(e.target.value)
        console.log("Current input name", e.target.name)
        console.log("Current input value:", e.target.value)
    }
    return(
        <div>
            <label>
                Enter Text: 
                <input type="text" name="text" value={inputValue} onChange={handleChange}></input>
            </label>
            <p>You typed: {inputValue}</p>
        </div>
    )
}