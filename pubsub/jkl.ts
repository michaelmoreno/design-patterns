// abstract demonstration of the publisher-subscriber pattern in TypeScript
// this is distinct from the observer pattern, in that it has a intermediary broker entity
// it is topic based filtered.

class Publisher {
    private _broker: Broker;
    private _topic: string;

    constructor(broker: Broker, topic: string) {
        this._broker = broker;
        this._topic = topic;
    }

    publish(message: any) {
        this._broker.publish(this._topic, message);
    }
}

class Subscriber {
    private _broker: Broker;
    private _topic: string;
    private _callback: (message: any) => void;

    constructor(broker: Broker, topic: string, callback: (message: any) => void) {
        this._broker = broker;
        this._topic = topic;
        this._callback = callback;
    }

    subscribe() {
        this._broker.subscribe(this._topic, this._callback);
    }
}

class Broker {
    private _topics: { [topic: string]: Array<(message: any) => void> } = {};

    publish(topic: string, message: any) {
        if (!this._topics[topic]) {
            return;
        }

        this._topics[topic].forEach((callback) => {
            callback(message);
        });
    }

    subscribe(topic: string, callback: (message: any) => void) {
        if (!this._topics[topic]) {
            this._topics[topic] = [];
        }

        this._topics[topic].push(callback);
    }
}

// usage
const broker = new Broker();
const publisher = new Publisher(broker, 'topic1');
const subscriber = new Subscriber(broker, 'topic1', (message) => {
    console.log(message);
}
subscriber.subscribe();
publisher.publish('hello world');
