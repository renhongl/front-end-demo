

//Javascript Observer


class Observer{
    constructor() {
        this.topicMapping = {};
        this.publishStore = {};
    }

    subscribe(...args) {
        let topic = args.shift();
        let callback = args.shift();
        if (!this.topicMapping[topic]) {
            this.topicMapping[topic] = [];
        }
        this.topicMapping[topic].push(callback);
        console.log(`subscribed topic ${topic}`);
        //check if had subscribed
        if (this.publishStore[topic]) {
            console.log(`trigger topic ${topic} immediately`);
            this.publish(topic, this.publishStore[topic]);
            delete this.publishStore[topic];
        }
    }

    publish(...args) {
        let topic = args.shift();
        if (this.topicMapping[topic]) {
            this.topicMapping[topic].forEach((v, k) => {
                v.apply(null, args);
            });
        } else {
            console.log(`no topic: ${topic} has been subscribed, this publish will store here, after subscribe, will trigger`);
            this.publishStore[topic] = args;
        }
    }

    unsubscribe(...args) {
        let topic = args.shift();
        let callback = args.shift();
        if (this.topicMapping[topic]) {
            delete this.topicMapping[topic];
            if (callback instanceof Function) {
                callback(args);
            }
        } else {
            console.log(`no topic ${topic} has been subscribe, so no need unsubscribe.`);
        }
    }
}

export default Observer;



