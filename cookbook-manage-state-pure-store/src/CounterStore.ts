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