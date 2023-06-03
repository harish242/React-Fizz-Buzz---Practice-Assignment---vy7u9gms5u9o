import React from 'react'
import '../styles/App.css';
import {useState} from 'react'
const App = () => {
const[state,setState]=useState(1)
// const[color,setColor]=useState('normal')
const Increment=()=>{
setState(state+1)

}
const decrement=()=>{
  setState(state-1)

}
const getCounterClass = () => {
  if (state % 3 === 0 && state % 5 === 0) {
    return 'fizzbuzz';
  } else if (state % 3 === 0) {
    return 'fizz';
  } else if (state % 5 === 0) {
    return 'buzz';
  } else {
    return 'normal';
  }
};

  
  return (
    <div id="main">
      
      <button onClick={Increment}>Increment</button>
      <div id="counter" className={getCounterClass()}>{state}</div>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
}


export default App;
