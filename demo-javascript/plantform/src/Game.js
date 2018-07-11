

import {FrameState} from './FrameState.js';
import { levelOne } from './Level.js';
import { Scene } from './Scene.js';

export const Game = function() {
    this.listeners = [];
    this.scene = new Scene(document.getElementById('canvas'), levelOne);
    this.init();
};

//init function
Game.prototype.init = function() {
    this.paused = false;
    this.scene.readLevel();
},

//main loop
Game.prototype.mainLoop = function() {
    let listeners = this.listeners;
    for (let i = 0; i < listeners.length; i++) {
        listeners[i].enabled && listeners[i].onBeforeRender();
    }

    //TODO main render
    
    this.scene.renderDOM();

    for (let i = 0; i < listeners.length; i++) {
        listeners[i].enabled && listeners[i].onAfterRender();
    }
},

//run game
Game.prototype.run = function(fps) {
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
Game.prototype.pause = function() {
    this.paused = true;
},

//stop game
Game.prototype.stop = function() {
    clearInterval(this.tHand);
}

Game.prototype.addEventListener = function(ln) {
    this.listeners.push(ln);
}

Game.prototype.clearEventListener = function() {
    this.listeners.length = 0;
}