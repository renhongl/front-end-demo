

import Observer from './pattern/Observer.js';
import { CreateDOM, CreateButton, SingletonDOM, GetSingleton } from './pattern/Singleton.js';
import { GetBonus } from './pattern/Strategy.js'; 
import { LoadImage, LoadImageProxy, LoadData, LoadDataProxy } from './pattern/Proxy.js';
import ReduceFrequency from './pattern/ReduceFrequency.js';
import { Adapter } from './pattern/Adapter.js';
import { Flyweight } from './pattern/Flyweight.js';
import Control from './pattern/State.js';
import { Player, PlayerMediator } from './pattern/Mediator.js';

export default class Index{
    constructor() {
        window.Obs = new Observer();
        this.createDOM = new CreateDOM();
        this.singletonDOM = new SingletonDOM();
        this.getSingletonDiv = new GetSingleton(CreateDOM);
        this.getSingletonButton = new GetSingleton(CreateButton);
        this.getBonus = new GetBonus();
        this.loadImage = new LoadImage();
        this.loadImageProxy = new LoadImageProxy();
        this.loadData = new LoadData();
        this.loadDataProxy = new LoadDataProxy();
        this.reduceFrequency = new ReduceFrequency();
        this.adapter = new Adapter();
        this.flyweight = new Flyweight();
        this.control = new Control();
        this.Player = Player;
        this.playerMediator = new PlayerMediator();
        this.testMapping = {
            observer: this._testObserver.bind(this),
            singleton: this._testSingleton.bind(this),
            strategy: this._testStrategy.bind(this),
            proxy: this._testProxy.bind(this),
            frequency: this._testReduceFrequency.bind(this),
            adapter: this._testAdapter.bind(this),
            flyweight: this._testFlyweight.bind(this),
            state: this._testState.bind(this),
            director: this._testDirector.bind(this),
        }
    }

    test(type) {
        this.testMapping[type]();
        return this;
    }

    _testDirector() {
        let a1 = new this.Player('红队001', 'red', this.playerMediator);
        let a2 = new this.Player('红队002', 'red', this.playerMediator);
        let b1 = new this.Player('蓝队001', 'blue', this.playerMediator);
        let b2 = new this.Player('蓝队002', 'blue', this.playerMediator);

        a1.die();
        a2.remove();
    }

    _testState() {
        let button = document.createElement('button');
        button.innerText = 'Play';
        document.body.appendChild(button);
        let stop = document.createElement('button');
        stop.innerText = 'stop';
        document.body.appendChild(stop);

        button.addEventListener('click', () => {
            this.control.currentState.btnWasPressed(button);
        });
        
        stop.addEventListener('click', () => {
            this.control.currentState.stopWasPressed(button);
        });
    }

    _testFlyweight() {
        let divArr = [];
        let container = document.getElementById('flyweight-test-div-container');
        document.getElementById('flyweight-test-btn').addEventListener('click', () => {
            let num = document.getElementById('flyweight-test-input').value;
            removeDiv();
            renderDiv(Number(num));
        });
        const removeDiv = () => {
            for (let i = 0, len = divArr.length; i < len; i++) {
                this.flyweight.removeDiv(divArr.pop(), container);
            }
        }
        const renderDiv = (num) => {
            for (let i = 0; i < num; i++) {
                let div = this.flyweight.createDiv(i, container);
                divArr.push(div);
            }
        }
    }

    _testAdapter() {
        render(this.adapter.getSingaporeCityData);
        render(this.adapter.getFullSingaporeCityData);
        render(this.adapter.dataAdapter(this.adapter.getFullSingaporeCityData));
        function render(fn) {
            console.log(JSON.stringify(fn()));
        }
    }

    _testReduceFrequency() {
        let dom = this.createDOM.create('input');
        document.body.appendChild(dom);
        this.reduceFrequency.inputControl(dom);
        this.reduceFrequency.mouseMoveControl();
        this.reduceFrequency.renderDomControl();
    }

    _testProxy() {
        // let dom = this.createDOM.create('img');
        // document.body.appendChild(dom);
        // let url = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmise0FTm2zUE9zt59lPN-vQADqVd5FsM4TTIOUx_PgT-XXyg8';
        // this.loadImageProxy.setUrl(url, dom);

        // console.time('data1');
        // this.loadData.load('renhong', (data) => {
        //     console.timeEnd('data1');
        //     console.log(data);
        //     console.time('data1');
        //     this.loadData.load('renhong', (data) => {
        //         console.timeEnd('data1');
        //         console.log(data);
        //     });
        // });

        console.time('data2');
        this.loadDataProxy.load('renhong', (data) => {
            console.log(data);
            console.timeEnd('data2');
            console.time('data2');
            this.loadDataProxy.load('renhong', (data) => {
                console.log(data);
                console.timeEnd('data2');
                console.time('data2');
                this.loadDataProxy.load('mogu', (data) => {
                    console.log(data);
                    console.timeEnd('data2');
                });
            });
        });
    }

    _testStrategy() {
        console.log(this.getBonus.calculate('A', 2000), this.getBonus.calculate('B', 2000), this.getBonus.calculate('C', 2000));
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