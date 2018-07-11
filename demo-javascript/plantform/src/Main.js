

import {Game} from './Game.js';
import { EventListener } from './Event.js';
import { FrameState } from './FrameState.js';

let g = new Game();

g.addEventListener(new EventListener({
    afterRender: function() {
        document.getElementById('maxf').innerText = FrameState.maxFrame;
        document.getElementById('minf').innerText = FrameState.minFrame;
        document.getElementById('currf').innerText = FrameState.currTime;
    }
}));

g.run(30);