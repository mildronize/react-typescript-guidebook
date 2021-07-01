import React, { useEffect, useState } from 'react';
import counterStore from './CounterStore';
import './App.css';

const Counter = () => {

  const [value, setValue] = useState(counterStore.getCounter());

  useEffect(() => {
    const subId = counterStore.subscribe(() => setValue(counterStore.getCounter()));
    console.log(`subscribe with id: ${subId}`);
    return () => {
      console.log(`unsubscribe with id: ${subId}`);
      counterStore.unsubscribe(subId);
    }
  }, []);

  return (
    <>
      <h1>{value} </h1>
      <button onClick={() => counterStore.increase()} >+ 1</button>
      <button className="asyncButton" onClick={() => counterStore.increaseAsync()} >+ 1 Async</button>
    </>
  )
}

function App() {
  const [hide, setHide] = useState(false);

  const handleButton = () => {
    setHide(!hide);
  };

  return (
    <div className="App">
      <h1>Counter App</h1>
      <div className="action-bar">
        <button className="subscribe-button" onClick={handleButton} >
          {hide ? `Subscribe` : `Unsubscribe`}
        </button>
      </div>
      {!hide && <Counter />}      
    </div>
  );
}

export default App;
