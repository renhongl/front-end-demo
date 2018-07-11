

(function (win) {

    let _Game = win.Game = function() {
        this.listeners = [];
    };

    //init function
    _Game.prototype.init = function() {
        this.paused = false;
    },

    //main loop
    _Game.prototype.mainLoop = function() {
        let listeners = this.listeners;
        for (let i = 0; i < listeners.length; i++) {
            listeners[i].enabled && listeners[i].onBeforeRender();
        }

        for (let i = 0; i < listeners.length; i++) {
            listeners[i].enabled && listeners[i].onAfterRender();
        }
    },

    //run game
    _Game.prototype.run = function(fps) {
        fps = fps || 60;
        let self = this;
        let spf = (1000/fps) | 0;
        FrameState.start();
        self.tHand = setInterval(function() {
            FrameState.update();
            if (!self.paused) {
                self.mainLoop();
            }
        }, spf);
    },

    //pause game
    _Game.prototype.pause = function() {
        this.paused = true;
    },

    //stop game
    _Game.prototype.stop = function() {
        clearInterval(this.tHand);
    }

    _Game.prototype.addEventListener = function(ln) {
        this.listeners.push(ln);
    }

    _Game.prototype.clearEventListener = function() {
        this.listeners.length = 0;
    }

    _AppEventListener = win.AppEventLisener = function() {
        EventListener.call(this, arguments);
        this.init(arguments[0]);
    }

    _AppEventListener.prototype = new EventListener();

    _AppEventListener.prototype.init = function(param) {
        this.enabled = true;
        this.onBeforeRender = param['beforeRender'] || this.onBeforeRender;
        this.onAfterRender = param['afterRender'] || this.onAfterRender;
    }

    _AppEventListener.prototype.onBeforeRender = function() {
        return true;
    }

    _AppEventListener.prototype.onAfterRender = function() {
        return true;
    }

})(window);

















