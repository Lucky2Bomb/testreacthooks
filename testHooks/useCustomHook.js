import React, { useState, useEffect } from "react";


//////////////////TEST CUSTOM HOOKS//////////////////
function useConsoleLog(value) {
  useEffect(() => {
    console.log(`CustomHook Change! Value: ${value}`);
  }, [value]);
}

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  const onChange = (event) => {
    setValue(event.target.value);
  }

  const clear = () => setValue("");

  return {
    bind: {value, onChange}, //=== input value={input.bind.value} onChange={input.bind.onChange}
    value,
    clear
  }
}
///////////////////////////////////////////////////// 


function App() {
  const input1 = useInput("");
  const input2 = useInput("");

  useConsoleLog(input2.value);

  return (
    <div className="container pt-4">
      {/* <h1>\{name}/</h1> */}
      <h1>{input1.value}</h1>
      <input type="text" {...input1.bind} />{/* value={input.value} onChange={input.onChange} /> */}
      <input type="text" {...input2.bind} />

      <button onClick={() => {
        input1.clear();
        input2.clear();
      }}>Clear inputs</button>
    </div>
  )
}

export default App;