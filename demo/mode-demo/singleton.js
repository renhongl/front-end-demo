/**
 * 使用单例模式实现一个登陆框。
 */

(function () {

    var createLoginDiv = function () {
        var div;
        div = document.createElement('div');
        div.setAttribute('class', 'login');
        div.innerText = 'Login';
        document.querySelector('#app').appendChild(div);
        return div;
    };

    var createLoginButton = function () {
        var button;
        button = document.createElement('input');
        button.type = 'button';
        button.value = 'login';
        button.addEventListener('click', loginButtonClicked);
        document.querySelector('#app').appendChild(button);
        return button;
    };

    var getSingle = function (fn) {
        var single;
        return function () {
            return single || (single = fn.apply(this, arguments));
        }
    };

    var createSingleLogin = getSingle(createLoginDiv);
    var createSingleLoginButton = getSingle(createLoginButton);

    var loginButtonClicked = function () {
        var loginDiv = createSingleLogin();
        document.querySelector('.login').style.display = 'block';
    };

    var init = function () {
        createSingleLoginButton();
    };

    init();

})();