/**
 * 使用策略模式实现表单验证
 */

(function () {

    var strategies = {
        isNotEmpty: function (value, errorMsg) {
            if (value === '') {
                return errorMsg;
            }
        },
        minLength: function (value, length, errorMsg) {
            if (value.length < length) {
                return errorMsg;
            }
        },
        isMobile: function (value, errorMsg) {
            if (!/(^1[3|5|8][0-9]{9}$)/.test(value)) {
                return errorMsg;
            }
        }
    };

    var registerForm = document.querySelector('form');

    var Validator = function () {
        this.cache = [];
    };

    Validator.prototype.add = function (dom, rule, errorMsg) {
        var arr = rule.split(':');
        this.cache.push(function () {
            var strategy = arr.shift();
            arr.unshift(dom.value);
            arr.push(errorMsg);
            return strategies[strategy].apply(dom, arr)
        });
    };

    Validator.prototype.start = function () {
        for (var i = 0, len = this.cache.length; i < len; i++) {
            var msg = this.cache[i]();
            if (msg) {
                return msg;
            }
        }
    };

    var validataFunc = function () {
        var validator = new Validator();
        validator.add(registerForm.userName, 'isNotEmpty', '用户名不能为空');
        validator.add(registerForm.userName, 'minLength:6', '用户名至少要6位字符');
        var errorMsg = validator.start();
        return errorMsg;
    };

    var init = function () {
        registerForm.onsubmit = function () {
            var errorMsg = validataFunc();
            if (errorMsg) {
                alert(errorMsg);
                return false;
            }
        };
    };

    init();

})();