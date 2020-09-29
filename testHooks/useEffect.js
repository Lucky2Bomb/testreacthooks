import React, { useState, useEffect } from 'react';
import './App.css';


function App() {
  const [type, setType] = useState("users");
  const [data, setData] = useState([]);
  const [pos, setPos] = useState({
    x: 0,
    y: 0,
    z: 0,
  });

  // console.log("Component App");
  // useEffect(() => {
  //   console.log("useEffect");
  // });

  // useEffect(() => {
  //   console.log("Type change", type);
  // }, [type]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then(response => response.json())
      .then(json => setData(json));

      return () => {
        console.log("clean useEffect");
      }
  }, [type]);

  const mouseMoveHandler = (event) => {
    setPos({
      x: event.clientX,
      y: event.clientY,
      z: event.clientY > event.clientX ? event.clientY : event.clientX,
    })
  };

  useEffect(() => {
    console.log('ComponentDidMount');

    window.addEventListener("mousemove", mouseMoveHandler);
    return () => {
      window.removeEventListener("mousemove", mouseMoveHandler);
    }
  }, []);


  return (
    <div>
      <h1>{type}</h1>
      <button
        onClick={() => setType("users")}
        className="btn btn-primary"
      >
        Users
      </button>
      <br />
      <br />
      <button
        onClick={() => setType("todos")}
        className="btn btn-seccess"
      >
        Todos
      </button>
      <br />
      <br />
      <button
        onClick={() => setType("posts")}
        className="btn btn-warning"
      >
        Posts
      </button>

      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <pre>{JSON.stringify(pos, null, 2)}</pre>
    </div>
  )
}

export default App;
