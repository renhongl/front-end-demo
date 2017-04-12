/**
 * 发布-订阅模式
 */

(function () {
    var Event = (function () {
        var clientList = {},
            offline = {},
            listen,
            trigger,
            remove;
            
        listen = function (key, fn) {
            if (!clientList[key]) {
                clientList[key] = [];
            }
            clientList[key].push(fn);
            if (offline[key]) {
                fn.apply(this, offline[key].shift());
            }
        };

        trigger = function () {
            var key = Array.prototype.shift.call(arguments),
                fns = clientList[key];
            if (!fns || fns.length === 0) {
                if (!offline[key]) {
                    offline[key] = [];
                }
                offline[key].push(arguments);
                return false;
            }
            for (var i = 0, len = fns.length; i < len; i++) {
                fns[i].apply(this, arguments);
            }
        };

        remove = function (key, fn) {
            var fns = clientList[key];
            if (!fns) {
                return false;
            }
            if (!fn) {
                fns.length = 0;
            } else {
                for (var i = 0, len = fns.length; i < len; i++) {
                    var _fn = fns[i];
                    if (_fn === fn) {
                        fns.splice(i, 1);
                    }
                }
            }
        };

        return {
            listen: listen,
            trigger: trigger,
            remove: remove,
        }

    })();

    var init = function () {
        Event.trigger('loaded', {
            name: 'renhongl',
            age: 18
        });

        setTimeout(function () {
            Event.listen('loaded', function (args) {
                console.log(args);
            });
        }, 2000);
    };

    init();

})();
