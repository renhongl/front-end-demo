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

### 数组

map方法对数组的所有成员一次调用一个函数，根据函数结果返回一个新数组。
map方法接受一个函数做为参数，调用时会将其传入三个参数，分辨是当前成员，当前位置，数组本身。
map方法还可以接受第二个参数，表示回调函数执行时this所指向的对象。

forEach方法与map方法类似，但是一般不返回值。如果需要有返回值，一般使用map方法。
forEach方法不能中断执行，总是会遍历完所有成员，这时可以使用for循环代替。

filter方法返回结构为true的成员。

some方法，只要有一个成员的返回值为true，那么整个some方法的返回值就是true。

every方法，每个数组成员的返回值是true，every方法才会返回true。

reduce方法，依次处理数组的每个成员，最终累计成一个值。

### 字符串

substring方法用于从原字符串取出子字符串并返回，不改变原字符串。它与slice作用相同，但有一些奇怪的规则，因此不建议使用这个方法，优先使用slice。

如果第二个参数大于第一个参数，substring方法会自动更换两个参数的位置。

如果参数是负数，substring方法会自动将负数转为0。


### 对象的拷贝-浅拷贝

确保拷贝后的对象，与原对象具有同样的prototype原型对象。
确保拷贝后的对象，与原对象具有同样的属性。

    function copyObject(orig) {
        var copy = Object.create(Object.getPrototypeOf(orig));
        copyOwnPropertiesFrom(copy, orig);
        return copy;
    }

    function copyOwnPropertiesFrom(target, source) {
        Object
            .getOwnPropertyNames(source)
            .forEach(function(propKey) {
                var desc = Object.getOwnPropertyDescriptor(source, propKey);
                Object.defineProperty(target, propKey, desc);
            });
        return target;
    }

### 面向对象编程


