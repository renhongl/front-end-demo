/**
 * 使用单例模式实现一个登陆框。
 */

(function () {

    var createLoginDiv = function () {
        var div;
        div = document.createElement('div');
        div.setAttribute('class', 'login');
        document.querySelector('#app').appendChild(div);
        
        var child = document.createElement('div');
        child.setAttribute('class', 'login-child');
        child.innerText = 'Login Dialog';
        div.appendChild(child);
        return div;
    };

    var createLoginButton = function () {
        var button;
        button = document.createElement('input');
        button.type = 'button';
        button.value = 'login';
        button.setAttribute('class', 'loginBtn');
        
        document.querySelector('#app').appendChild(button);
        return button;
    };

    var getSingle = function (fn) {
        var single;
        return function () {
            return single || (single = fn.apply(this, arguments));
        }
    };

    var loginButtonClicked = function () {
        var loginDiv = createSingleLogin();
        loginDiv.addEventListener('click', loginMaskClicked);
        document.querySelector('.login').style.display = 'flex';
    };

    var loginMaskClicked = function (e) {
        if (e.target.getAttribute('class') !== 'login-child') {
            this.style.display = 'none';
        }
    }

    var createSingleLogin = getSingle(createLoginDiv);
    var createSingleLoginButton = getSingle(createLoginButton);

    var init = function () {
        var loginButton = createSingleLoginButton();
        loginButton.addEventListener('click', loginButtonClicked);
    };

    init();

})();