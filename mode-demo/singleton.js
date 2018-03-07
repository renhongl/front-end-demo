/**
 * 使用单例模式实现一个登陆框。
 * 包含一个智能命令模式，即可以直接实现请求的命令，不需要接收者的存在。
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

    var createSingleLogin = getSingle(createLoginDiv);
    var createSingleLoginButton = getSingle(createLoginButton);

    var openLoginDivCommand = (function () {
        var loginDiv = createSingleLogin();
        return {
            excute: function () {
                loginDiv.addEventListener('click', function (e) {
                    if (e.target.getAttribute('class') !== 'login-child') {
                        macroCommand.undo();
                    }
                });
                loginDiv.style.display = 'flex';
            },
            undo: function () {
                loginDiv.style.display = 'none';
            }
        }
    })();

    var clearInputCommand = (function () {
        var input = document.querySelector('input');
        var cache;
        return {
            excute: function () {
                cache = input.value;
                input.value = '';
            },
            undo: function () {
                input.value = cache;
            }
        }
    })();

    var macroCommand = (function () {
        var commandList = [];
        return {
            add: function (command) {
                commandList.push(command);
            },
            excute: function () {
                for (var i = 0, len = commandList.length; i < len; i++) {
                    commandList[i].excute();
                }
            },
            undo: function () {
                for (var i = 0, len = commandList.length; i < len; i++) {
                    commandList[i].undo();
                }
            },
            redo: function () {
                macroCommand.excute();
            }
        }
    })();

    macroCommand.add(openLoginDivCommand);
    macroCommand.add(clearInputCommand);

    var init = function () {
        var loginButton = createSingleLoginButton();
        loginButton.addEventListener('click', function () {
            macroCommand.excute();
        });

        setTimeout(function () {
            macroCommand.redo();
        }, 10000);
    };

    init();

})();