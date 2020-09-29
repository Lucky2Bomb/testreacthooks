import React, { useState, useMemo } from 'react';
import './App.css';

//very high calculated fuction
function complexCompute(num) {
  let i = 0;
  while (i < 1000000000) i++;

  return num * 2;
}

function App() {
  const [number, setNumber] = useState(42);
  const [colored, setColored] = useState(false);

  // const computed = complexCompute(number);

  //caching very high calculated fuction "complexCompute(number)"
  const computed = useMemo(() => complexCompute(number), [number]);

  useEffect(() => {
    console.log("Styles changed");
  }, []);

  return (
    <div>
      <h1>Number: {computed}</h1>
      {colored ? <p style={{color: "red"}}>Colored</p> : <br />}
      <button className="btn btn-success"
        onClick={() => setNumber((prev) => prev + 1)}
      > + </button>
      <button className="btn btn-danger"
        onClick={() => setNumber((prev) => prev - 1)}
      > - </button>
      <button className="btn btn-secondary"
        onClick={() => setColored((prev) => !prev)}
      > edited </button>
    </div>
  )
}
export default App;
