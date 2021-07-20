import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


const Button =() => {
  const [counter, setCounter ] = useState(0)

  return (
    <div onClick={ ()=>{ setCounter((c)=>c+1)}}>I am a button {counter}</div>

  )
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
