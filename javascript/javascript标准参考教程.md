## Javascript标准参考教程重点

### 标签(label)用法

    //判断数组二中是否有数组一中的元素
    var itHas = false;
    var index = -1;
    var item = '';
    var arr1 = ['zhagnsanfeng', 'sunwukong', 'zhubajie'];
    var arr2 = ['liangrenhong', 'zhubajie', 'xiaofeng'];
    verify:
        for(var i = 0, len1 = arr1.length; i < len1; i++) {
            for(var j = 0, len2 = arr2.length; j < len2; j++) {
                if(arr1[i] === arr2[j]) {
                    itHas = true;
                    index = j;
                    item = arr2[j];
                    break verify;
                }
            }
        }
    console.log(itHas, index, item);

当查找到一个符合的之后，就退出循环，这样可以节省时间。
如果在break之后不使用标签，只能跳出内层循环。

### for...in遍历对象属性

    function Person() {
        this.name = 'lrh';
        this.age = '18'
    }

    Person.prototype.gender = 'boy';

    var person = new Person();

    for(var p in person) {
        console.log(p);
    }
    //name
    //age
    //gender

使用for...in遍历会遍历出实例自身的属性以及继承的属性。
如果非要用for...in那就在遍历时加上hasOwnProperty方法判断：

    function Person() {
        this.name = 'lrh';
        this.age = '18'
    }

    Person.prototype.gender = 'boy';

    var person = new Person();

    for(var p in person) {
        if(person.hasOwnProperty(p)) {
            console.log(p);
        }
    }
    //name
    //age

### in运算符

用于检测对象是否包含某个属性

    var person = {
        name: 'lrh'
    };

    'name' in person;//true

### 闭包

- 定义在一个函数内部的函数。
- 将函数内部与函数外部连接起来的一座桥梁。
- 可以读取函数内部的变量。
- 让函数内部变量一直保持在内存中。

        function count(number) {
            return function () {
                console.log(number++);
            }
        }

        var add = count(5);
        add();
        add();
        add();

- 封装对象的私有属性和私有方法。

        function Person(name) {
            var _gender;

            function setGender(gender) {
                _gender = gender
            }

            function getGender() {
                return _gender;
            }

            return {
                name: name,
                getGender: getGender,
                setGender: setGender
            }
        }

        var p1 = new Person('lrh');
        p1.setGender('boy');
        p1.getGender();//boy

