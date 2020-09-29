import React, { useState, useEffect, useRef, useReducer } from 'react';
import './App.css';

// let count = 1;

function App() {
  // //infinity call useEffect
  // const [count, setCount] = useState(1);

  // useEffect(() => {
  //   setCount(prev => prev + 1);
  // });

  const [value, setValue] = useState("initial");

  //useRef === Line 4
  const count = useRef(1);
  const inputRef = useRef(null);
  const inputRef1 = useRef(null);

  const prevValue = useRef("");

  useEffect(() => {
    count.current++;
    // console.log(inputRef.current.value);
  });

  useEffect(() => {
    prevValue.current = value;
  }, [value]);

  const focus1 = () => {
    inputRef.current.focus();
  }

  const focus2 = () => {
    inputRef1.current.focus();
  }

  return (
    <div>
      <span>Render count:{count.current}</span><br />
      <span>Prev render count:{prevValue.current}</span><br />
      <input
        type="text"
        ref={inputRef}
        onChange={e => setValue(e.target.value)}
        value={value}
      />
      <input
        type="text"
        ref={inputRef1} 
        placeholder="focus me (1)"
        // onChange={e => setValue(e.target.value)}
        // value={value}
      />
      <br />
      <button onClick={focus1}> Focus1 by useRef </button>
      <button onClick={focus2}> Focus2 by useRef </button>
    </div>
  )
}
export default App;
