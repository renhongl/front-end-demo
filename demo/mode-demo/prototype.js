/**
 * 使用原型继承方式实现一个模板方法模式。
 * 通过设置钩子方法，可以实现不同的子类使用不同的父类约束。
 */

(function () {

    var Beverage = function () {};
    Beverage.prototype.boilWater = function () {
        console.log('把水煮沸。');
    };

    Beverage.prototype.brew = function () {
        throw new Error('子类必须重写冲泡方法');
    };

    Beverage.prototype.poutInCup = function () {
        throw new Error('子类必须重写把饮料倒入杯子方法');
    };

    Beverage.prototype.addCondiments = function () {
        throw new Error('子类必须重写加调料方法');
    };

    Beverage.prototype.customerAddCondiments = function () {
        return true;
    }
    
    Beverage.prototype.init = function () {
        this.boilWater();
        this.brew();
        this.poutInCup();
        if (this.customerAddCondiments()) {
            this.addCondiments();
        }
    }

    var Coffee = function () {};
    Coffee.prototype = new Beverage();

    Coffee.prototype.brew = function () {
        console.log('冲泡咖啡');
    };

    Coffee.prototype.poutInCup = function () {
        console.log('把咖啡倒进杯子');
    };

    Coffee.prototype.addCondiments = function () {
        console.log('给咖啡加糖加牛奶');
    };

    Coffee.prototype.customerAddCondiments = function () {
        return window.confirm('请问需要调料吗？');  
    }

    var coffee = new Coffee();
    coffee.init();

})();