import React, { useState, useCallback } from 'react';
import './App.css';
import ItemsList from "./ItemsList";

function App() {
  const [count, setCount] = useState(1);
  const [colored, setColored] = useState(false);

  const styles = {
    color: colored ? "red" : "black"
  }

  //assigned to the useState [count, setCount]
  const generateItemsFromAPI = useCallback(() => {
    return new Array(count).fill(null).map((_, index) => `Element Index: ${index + 1}`);
  }, [count]);

  return (
    <div>
      <h1 style={styles}>Value: {count}</h1>
      <button className="btn btn-success"
        onClick={() => setCount((prev) => prev + 1)}
      > Add </button>
      <button className="btn btn-danger"
        onClick={() => setColored((prev) => !prev)}
      > Edit </button>
      
      <ItemsList getItems={generateItemsFromAPI}/>
    </div>
  )
}

export default App;