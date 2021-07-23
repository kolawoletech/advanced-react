import './App.css';
import { useEffect, useState } from 'react'

function App() {

  const [counter, setCounter] = useState(0)
  const [counter2, setCounter2] = useState(0)

  useEffect(()=>{
    console.log("counter 1 changer")
  },[counter])
  return (
    <div className="App">
      <h1
        onClick={() => {
            setCounter(value => {
              return value + 1
            })
         
        }}>
        Counter: {counter}
      </h1>
      <h1
        onClick={() => {
            setCounter2(value => {
              return value + 1
            })
         
        }}>
        Counter: {counter2}
      </h1>

    </div>
  );
}

export default App;
