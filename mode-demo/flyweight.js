/**
 * 享元模式例子
 */

(function () {

    var circleFactory = (function () {
        var circlePool = [];
        var parent = document.querySelector('.flyweight-body');
        return {
            create: function () {
                if (circlePool.length !== 0) {
                    return circlePool.shift();
                } else {
                    var div = document.createElement('div');
                    div.setAttribute('class', 'flyweight-child');
                    parent.appendChild(div);
                    return div;
                }
            },
            recover: function (dom) {
                return circlePool.push(dom);
            },
            remove: function (oldPool) {
                for (var i = 0; i < oldPool.length; i++) {
                    parent.removeChild(oldPool[i]);
                }
            }
        }
    })();

    var renderCircle = (function () {
        var circlePool = [];
        return function (number) {
            console.log('length: ' + circlePool.length);
            for (var j = 0; j < number.length; j++) {
                circleFactory.recover(circlePool.pop());
                circlePool.length = circlePool.length - 1;
            }
            console.log('length: ' + circlePool.length);
            circleFactory.remove(circlePool);
            circlePool = [];
            for (var i = 0; i < number; i++) {
                var circle = circleFactory.create();
                circle.style.left = Math.random() * 700 + 'px';
                circle.style.top = Math.random() * 400 + 'px';
                circlePool.push(circle);
            }
        }
    })();

    var init = function () {
        Event.listen('draw-circle', function (args) {
            var number = Number(args.number);
            console.log(number);
            renderCircle(number);
        });
    };

    init();

})();