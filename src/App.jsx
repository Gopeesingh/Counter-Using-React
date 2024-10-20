import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    // let counter = 6;

    let [counter, setCounter] = useState(6); // why we need to take hooks bcz value ko ui me bhejane ke liye for we need to update value

function addValue(){
  
  console.log("value added", counter);
  // counter = counter+1;
  if(counter < 20){
  setCounter(counter+1);
  }
}

  function removeValue(){
    // counter = counter - 1;
    if(counter>0){
    setCounter(counter-1);
    }
}
  return (
    <>
    <h1>Chai with Gopee</h1>
    <h2>Counter value: {counter}</h2>

    <button onClick={addValue}>Add Value {counter}</button>
    <br/>
    <button onClick={removeValue}>decrease value {counter}</button>
    <p>footer: {counter}</p>
    </>
  )
}

export default App
