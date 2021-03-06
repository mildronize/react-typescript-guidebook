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