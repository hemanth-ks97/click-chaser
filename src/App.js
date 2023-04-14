import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    axios.get('https://clickchaser-hk97.hemanth-ks97.repl.co/count')
      .then(res => {
        setCount(res.data.count);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const handleIncrement = () => {
    axios.post('https://clickchaser-hk97.hemanth-ks97.repl.co/increment')
      .then(res => {
        setCount(res.data.count);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div>
      <p id="counter">{count}</p>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}

export default App;
