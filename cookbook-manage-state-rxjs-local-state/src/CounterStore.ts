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