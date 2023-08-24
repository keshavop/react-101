import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    setCount(count - 1)
  }

  return (
    <>
      <h1>Counter App 101 </h1>
      <div className="card">
        <h2>Count is {count}</h2>
        <br></br>
        <button onClick={increment}>Increment</button>
        <br></br>
        <br></br>
        <button onClick={decrement}>Decrement</button>
      </div>
    </>
  )
}


export default App