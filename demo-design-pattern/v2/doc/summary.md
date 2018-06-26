
#### 多态
* 多态的思想是把“做什么”和“谁去做”分离开来。

* 多态最根本的作用就是通过把过程化的条件分支语句转化为对象的多态性，从而消除这些条件分支语句。

* 多态的最根本好处在于，你不必再像的对象询问“你是什么类型”而后根据得到的答案调用对象的某个行为，
你只管调用该行为就是了，其他的一切多态机制都会为你安排妥当。

#### 封装
* 封装的目的是将信息影藏。
* 一般而言，封装是指封装数据和封装实现。
* 更广义的封装，还包括封装类型和封装变化。





#### this
* 作为对象的方法调用。
        
        let obj = {
            a: 1,
            getA: function() {
                console.log(this === obj);//true
                console.log(this.a);//1
            }
        };
        obj.getA();

* 作为普通函数调用。

        window.name = 'global';
        let getName = function() {
            return this.name;
        }
        console.log(getName());//global

        //or

        window.name = 'global';
        let myObj = {
            name: 'renhong',
            getName: function() {
                return this.name;
            }
        }
        var getName = myObj.getName;//普通函数调用
        console.log(getName());//global

        console.log(myObj.getName());//renhong, 对象的方法调用

* 构造器调用。当用new运算符调用函数时，该函数总会返回一个对象，构造器里的this就指向这个对象。

        let MyClass = function() {
            this.name = 'renhong';
        }
        let obj = new MyClass();
        console.log(obj.name);//renhong

        //如果构造器显示返回一个对象，那么new之后返回的是这个对象，而不是this。

        let MyClass = function() {
            this.name = 'renhong',
            return {
                name: 'mogu'
            }
        }
        let obj = new MyClass();
        console.log(obj.name);//mogu

* call和apply调用。用于动态的改变传入函数的this。

        let obj1 = {
            name: 'renhong',
            getName: function() {
                return this.name;
            }
        }

        let obj2 = {
            name: 'mogu'
        }

        console.log(obj1.getName());//renhong
        console.log(obj1.getName.call(obj2));//mogu

#### call和apply
* 作用一模一样，区别只在于传入参数的形式不同。
* apply接受两个参数，第一个参数指定函数体内部的this指向。第二个参数是一个数组或者类数组，这些元素全部作为参数传递给被调用的函数。

        let func = function(a, b, c) {
            console.log([a, b, c]);//[1, 2, 3]
        }
        func.apply(null, [1, 2, 3]);

* call 传入的参数是不固定的，第一个参数同样是代表函数体内的this指向，从第二个参数开始，每个参数一次被当做被调用的函数的参数传入。

        let func = function(a, b, c) {
            console.log([a, b, c]);//[1, 2, 3]
        }
        func.call(null, 1, 2, 3);

* 为什么要使用call和apply？

        //改变this指向
        //---------例子1
        let obj1 = {
            name: 'renhong'
        }
        let obj2 = {
            name: 'mogu'
        }
        window.name = 'window';
        let getName = function() {
            this.name;
        }
        getName();//window
        getName.call(obj1);//renhong
        getName.call(obj2);//mogu

        //---------例子2
        let func = function() {
            console.log(this.id);
        }
        document.getElementById('div1').onclick = function() {
            console.log(this.id);//div1
            func();//undefined，指向window
            func.call(this);//div1，指向这个this
        }

        //---------例子3
        class Controller{
            constructor() {
                let type = 'dialog';
                this.name = 'controller';
                renderControl();
                handleEvents.call(this);
                renderDialog.call(this, type);
            }
        }
         
        function renderControl() {
            console.log(this.name);//undefined，this指向window
        }

        function handleEvents() {
            console.log(this.name);//controller
        }

        function renderDialog(type) {
            console.log(type);//dialog
        }

        //借用其他对象的方法
        //类数组对象arguments，没有push的方法，不能将元素push进去。我们首先调用数组的push方法，再手动将push方法内部的this指向改为arguments，就帮助arguments实现了push功能。
        (function() {
            Array.prototype.push.call(arguments, 3);
            console.log(arguments);//[1, 2, 3]
        })(1, 2);



#### 观察者模式
* 具体写法：使用Map将话题和要执行的回调方法一一对应的存下来，即订阅。在发布这个话题时，使用发布的参数，执行这个话题的回调方法。
* 订阅前发布：在发布某个话题时，如果这个话题尚未被订阅，那么将这个话题存储起来，等订阅之后，立即发布。那么，在写代码时，就不会发生发布在订阅之前，导致功能不能被触发的问题。
* 命名空间：如果整个项目都使用了此模式，很容易在没有命名空间的情况下混淆话题。
* 基本写法：

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




#### 适配器模式


#### 享元模式


#### 高阶函数



