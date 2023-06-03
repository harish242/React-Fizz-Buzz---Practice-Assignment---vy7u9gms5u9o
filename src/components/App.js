import React from 'react'
import '../styles/App.css';
import {useState} from 'react'
const App = () => {
const[state,setState]=useState(1)
const[color,setColor]=useState('normal')
const Increment=()=>{
setState(state+1)
if(state%3==0){
  setColor('fizz')
}
else if(state%5==0){
  setColor('buzz')
}
else if(state%3==0&&state%5==0){
  setColor('fizzbuzz')
}
else{
  setColor('normal')
}
}
const decrement=()=>{
  setState(state-1)
  if(state%3==0){
    setColor('fizz')
  }
  else if(state%5==0){
    setColor('buzz')
  }
  else if(state%3==0&&state%5==0){
    setColor('fizzbuzz')
  }
  else{
    setColor('normal')
  }
}

  
  return (
    <div id="main">
      
      <button onClick={Increment}>Increment</button>
      <div id="counter" className={color}>{state}</div>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
}


export default App;
