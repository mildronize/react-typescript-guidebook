# Cookbook: Counter App - Manage global state with RX.js (Using state from outside and force update render)

```javascript
import useForceUpdate from 'use-force-update';
import { CounterStore } from './CounterStore';

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

```

CounterStore.ts using `rxjs`

```javascript
import { Subject } from 'rxjs';
import { fetchCount } from "./MockApi";

export class CounterStore {
    private counter: number = 0;
    private subject = new Subject();

    increase(){
        this.counter+= 1;
        this.subject.next('increase');
    }

    async increaseAsync() {
        const response = await fetchCount(1);
        this.counter+= response.data;
        this.subject.next('increaseAsync');
    }

    getCounter(): number{
        return this.counter;
    }

    getSubject(): Subject<any>{
        return this.subject;
    }

}
```
