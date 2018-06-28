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




