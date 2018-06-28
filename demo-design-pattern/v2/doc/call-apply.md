

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
