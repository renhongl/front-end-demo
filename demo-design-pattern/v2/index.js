

import Observer from './pattern/Observer.js';
import { CreateDOM, CreateButton, SingletonDOM, GetSingleton } from './pattern/Singleton.js';

export default class Index{
    constructor() {
        window.Obs = new Observer();
        this.createDOM = new CreateDOM();
        this.singletonDOM = new SingletonDOM();
        this.getSingletonDiv = new GetSingleton(CreateDOM);
        this.getSingletonButton = new GetSingleton(CreateButton);
        //this._testObserver();
        this._testSingleton();
    }

    _testSingleton() {
        let dom1 = this.createDOM.create();
        let dom2 = this.createDOM.create();
        console.log('dom1 === dom2: ', dom1 === dom2);

        let dom3 = this.singletonDOM.create();
        let dom4 = this.singletonDOM.create();
        console.log('dom3 === dom4: ', dom3 === dom4);

        let dom5 = this.getSingletonDiv.create();
        let dom6 = this.getSingletonDiv.create();
        console.log('dom5 === dom6: ', dom5 === dom6);

        let dom7 = this.getSingletonButton.create();
        let dom8 = this.getSingletonButton.create();
        console.log('dom7 === dom8: ', dom7 === dom8);
    }

    _testObserver() {
        Obs.subscribe('test', (...args) => {
            console.log(args);
        });
        setTimeout(() => {
            Obs.publish('test', 1, 2, 3);
        }, 2000);
        setTimeout(() => {
            Obs.publish('test', {name: 'data'});
            Obs.unsubscribe('test', () => {
                console.log('after test  unsubscribe');
            });
            Obs.unsubscribe('test3');
        }, 4000);
        setTimeout(() => {
            Obs.publish('test1', {name: 'data'});
            Obs.publish('test', {name: 'data'});
        }, 6000);
        setTimeout(() => {
            Obs.subscribe('test', (args) => {
                console.log('subscribe after publish ', args);
            });
        }, 8000);
    }
}