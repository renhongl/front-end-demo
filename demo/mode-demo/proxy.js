/**
 * 使用虚拟代理实现图片预加载
 * 使用缓存代理实现ajax异步请求数据
 */

(function () {

    var logoImg = (function () {
        var logo = document.querySelector('.logo');
        return {
            setSrc: function (src) {
                setTimeout(function () {
                    logo.src = src;
                });
            }
        }
    })();

    var proxyLogoImg = (function () {
        var img = new Image();
        img.onload = function () {
            logoImg.setSrc(this.src);
        }
        return {
            setSrc: function (src) {
                logoImg.setSrc('./loading.png');
                setTimeout(function () {
                    img.src = src;
                }, 3000);
            }
        }
    })();

    var fetchData = (function () {
        return {
            start: function (url, fn) {
                fetch(url).then(function (response) {
                    if (response.ok) {
                        response.json().then(function (data) {
                            setTimeout(function () {
                                fn.call(this, data);
                            }, 2000);
                        });
                    }
                }).catch(function (err) {
                    console.log(err);
                });
            }
        }
    })();

    var proxyFetchData = (function () {
        var cache = {};
        return {
            start: function (url, fn) {
                var key = url.split('.')[0];
                if (key in cache) {
                    fn.call(this, cache[key]);
                } else {
                    fetchData.start(url, function (data) {
                        cache[key] = data;
                        fn.call(this, data);
                    });
                }
            }
        }
    })();

    var fetchDataAction = function () {
        console.time('fetchData');
        proxyFetchData.start('./1.json', function (data) {
            console.log(data);
            console.timeEnd('fetchData');
        });
    };

    var init = function () {
        proxyLogoImg.setSrc('./logo.png');
        fetchDataAction();
        setTimeout(function () {
            fetchDataAction();
        }, 5000);
    };

    init();

})();