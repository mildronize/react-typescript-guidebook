# Counter App - Manage global state with Pure-store (Using state from outside and force update render)

Counter.tsx

```jsx
import * as CounterStore from './CounterStore';
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
```

CounterStore.ts

```js
import createStore from "pure-store";
import { fetchCount } from "./MockApi";

export const store = createStore({
    counter: 0
});

export const increase = () => {
    store.update(s => {
        s.counter++;
    });
    console.log(store.state.counter);
}

export const increaseAsync = async () => {
    const response = await fetchCount(1);
    store.update(s => {
        s.counter += response.data
    });
}
```