import React, { useEffect, useState } from 'react'
import '../styles/App.css';
const App = () => {

const [count, setCount] = useState(1);
const [styleName, setStyleName] = useState("");

  useEffect(() => {
    if(count % 3 === 0 && count % 5 === 0){
      setStyleName("fizzbuzz");
    }
    else if(count % 5 === 0){
      setStyleName("buzz");
    }
    else if(count % 3 === 0){
      setStyleName("fizz");
    }
    else{
      setStyleName("normal");
    }
  }, [count]);
  
  return (
    <div id="main">
      <button id="increment" onClick={()=>{setCount((prevcount) => prevcount + 1)}}>Increment</button>
        <div id="counter" className={styleName}>{count}</div>
        <button id="decrement" onClick={()=>{setCount((prevcount) => prevcount - 1)}}>Decrement</button>

    </div>
  )
}


export default App;
