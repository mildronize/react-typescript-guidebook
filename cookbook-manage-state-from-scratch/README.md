# Cookbook: Counter App - Manage global state from scratch using publish/subscribe

## Ref: 
- The Observer Pattern in JavaScript — the Key to a Reactive Behavior: https://blog.bitsrc.io/the-observer-pattern-in-javascript-the-key-to-a-reactive-behavior-f28236e50e10

![image from above site](https://user-images.githubusercontent.com/3647850/136561959-1a800eda-142c-4f41-80f6-3a5f03f12d8b.png)

## Files:

Counter.tsx

```jsx
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
```

StoreManager.ts

```js
export class StoreManager {

    private _callbacks: any[];
    private _nextSubscriptionId: number;

    constructor(){
        this._callbacks = [];
        this._nextSubscriptionId = 0;
    }

    subscribe(callback): number {
        this._callbacks.push({ callback, subscription: this._nextSubscriptionId++ });
        console.log(this._callbacks);
        return this._nextSubscriptionId - 1;
    }

    unsubscribe(subscriptionId): void {
        console.log(this._callbacks);
        const subscriptionIndex = this._callbacks
            .map((element, index) => element.subscription === subscriptionId ? { found: true, index } : { found: false })
            .filter(element => element.found === true);
        if (subscriptionIndex.length !== 1) {
            throw new Error(`Found an invalid number of subscriptions ${subscriptionIndex.length}`);
        }

        this._callbacks.splice(subscriptionIndex[0].index, 1);
    }

    notifySubscribers(): void{
        for (let i = 0; i < this._callbacks.length; i++) {
            const callback = this._callbacks[i].callback;
            callback();
        }
    }

}
```

CounterStore.ts

```js
import { StoreManager } from "./StoreManager";
import { fetchCount } from "./MockApi";

export class CounterStore extends StoreManager{
    private counter: number = 0;

    increase(){
        this.counter+= 1;
        this.notifySubscribers();
    }

    async increaseAsync() {
        const response = await fetchCount(1);
        this.counter+= response.data;
        this.notifySubscribers();
    }

    getCounter(): number{
        return this.counter;
    }

}

const counterStore = new CounterStore();
export default counterStore;
```
