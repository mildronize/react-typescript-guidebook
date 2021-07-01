// From dotnet new react -au individual

export class StateManager {

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

const stateManager = new StateManager();
export default stateManager;