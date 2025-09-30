import {useState} from "react"
import Button from "./Button"

export default function Counter(){
  const [count, setCount] = useState(10)
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount (10);

    return(
        <div>
          <p>{count}</p>
          <Button onClick={increment}>Increment</Button>
          <Button onClick={decrement}>Decrement</Button>
          <Button onClick={reset}>Reset</Button>
        </div>
        )
}