import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [distr, setDistr] = useState('');

  useEffect(() => {
    axios.get('https://clickchaser-hk97.hemanth-ks97.repl.co/count')
      .then(res => {
        setCount(res.data.count);
        setDistr(res.data.distribution)
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const handleIncrement = () => {
    axios.post('https://clickchaser-hk97.hemanth-ks97.repl.co/increment')
      .then(res => {
        setCount(res.data.count);
        setDistr(res.data.distribution);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div>
      <p id="counter">{count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <h3>Click Distributuion [country-state: clicks]</h3>
      <p>{Object.keys(distr).map((key) => (
        <div key={key}>
          {key}: {distr[key]}
        </div>
      ))}</p>
    </div>
  );
}

export default App;
