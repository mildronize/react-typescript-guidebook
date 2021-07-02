import React, { useEffect, useState } from 'react';
import * as CounterStore from './CounterStore';
import './App.css';
import useForceUpdate from 'use-force-update';


const Counter = () => {

  const { counter } = CounterStore.store.state;
  const forceUpdate = useForceUpdate();

  useEffect(() => {
    const unsubscribe = CounterStore.store.subscribe(()=> forceUpdate());
    console.log(`subscribe`);
    return () => {
      console.log(`unsubscribe`);
      unsubscribe();
    }
  }, []);

  return (
    <>
      <h1>{counter}</h1>
      <button onClick={() => CounterStore.increase()} >+ 1</button>
      <button className="asyncButton" onClick={() => CounterStore.increaseAsync()} >+ 1 Async</button>
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
