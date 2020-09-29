import React, { useState } from 'react';
import './App.css';

function getRandomValue() {
  console.log("RANDOM");
  return Math.trunc(Math.random() * 20);
}

function App() {
  // const [counter, setCounter] = useState(getRandomValue());
  const [counter, setCounter] = useState(() => {
    return getRandomValue(); //one calc
  });

  const [state, setState] = useState({
    title: "couter",
    date: Date.now()
  })

  const eventHandlerPlus = () => {
    setCounter((prevCounter) => {
      return prevCounter + 1;
    });
    setCounter((prevCounter) => {
      return prevCounter + 1;
    });
  }

  const eventHandlerMinus = () => {
    setCounter(counter - 1);
  }

  const updateTitle = () => {
    setState(prev => {
      return {
        ...prev, 
        title: "newNameCounter"
      }
    })
  }

  return (
    <div>
      <h1>Counter value: {counter}</h1>
      <button onClick={eventHandlerPlus} className="btn btn-primary">+</button>
      <button onClick={eventHandlerMinus} className="btn btn-secondary">-</button>
      <br />
      <button onClick={() => {
        setState(updateTitle)
      }} className="btn btn-danger">edit</button>
    
  <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
}

export default App;
