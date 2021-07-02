import React, { useEffect, useState } from 'react';
import useForceUpdate from 'use-force-update';
import { CounterStore } from './CounterStore';
import './App.css';

let counterStore = new CounterStore();

const Counter = () => {
  
  const forceUpdate = useForceUpdate();

  useEffect(() => {
    counterStore = new CounterStore();
    counterStore.getSubject().subscribe({
      next: (v) => {
        forceUpdate();
        console.log(`Set local state with : ${v}`);
      }
    });
    console.log(`subscribe `);
    return () => {
      console.log(`unsubscribe `);
      counterStore.getSubject().unsubscribe();
    }
  }, []);

  return (
    <>
      <h1>{counterStore.getCounter()}</h1>
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
