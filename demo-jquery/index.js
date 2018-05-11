

(function() {
    
    //Jquery插件写法
        //1. 通过jquery选择器传入了被选择元素。
        //2. 插件通过script标签引入，全局中可以使用jquery的地方都可以使用该插件。
        // $('.btn1').button({
        //     color: '#fff'
        // });

        // //ES6封装的包写法
        // //1. 被操作的元素需要自己传入。
        // //2. 需要使用哪个插件的功能时，需要先引入这个插件，不是在全局中使用。
        // import Button from './plugin/buttonComp.js';
        // let btn2 = document.querySelector('.btn2');
        // new Button({
        //     container: btn2,
        //     color: 'red'
        // });

        // //总结：都是封装一个功能，通过简单的代码就可以使用该功能。
        // //jquery引入一次，可以到处使用。
        // //ES6模块，按需加载，需要时引入，然后使用。

        // //使用jquery添加的静态方法，不需要元素
        // $.printName({
        //     name: 'lrh',
        //     age: 18
        // });

        // //ES6方式写的工具方法
        // import { printName } from './tool/printNameComp.js';
        // printName({
        //     name: 'hgx',
        //     age: 18
        // })

        // import { bubbleSort } from './tool/sort.js';
        // bubbleSort([12, 42, 11, 0, 3, 6, 65, 99, 53]);

        console.log($.bubbleSort([5,3,7,9,1,4,2,0,8,6]));
        console.log($.quickSort([5,3,7,9,1,4,2,0,8,6]));
        console.log($.palindrome('   aaba a '));
        console.log($.randomColor());
        console.log($.binarySearch([10,11,12,13,14,15,16,17,18,19], 18));
})();