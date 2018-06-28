





class BasicState{
    constructor(control) {
        this.control = control;
    }

    btnWasPressed(dom) {
        throw new Error('Basic function must be rewrite');
    }

    stopWasPressed(dom) {
        throw new Error('Basic function must be rewrite');
    }
}

class StopState extends BasicState{
    constructor(control) {
        super(control);
    }

    btnWasPressed(dom) {
        console.log('starting play');
        dom.innerText = 'pause';
        this.control.setState(this.control.playState);
    }

    stopWasPressed(dom) {
        console.log('stoped');
        dom.innerText = 'start';
        this.control.setState(this.control.stopState);
    }
}

class PlayState extends BasicState{
    constructor(control) {
        super(control);
    }

    btnWasPressed(dom) {
        console.log('paused');
        dom.innerText = 'start';
        this.control.setState(this.control.pauseState);
    }

    stopWasPressed(dom) {
        console.log('stoped');
        dom.innerText = 'start';
        this.control.setState(this.control.stopState);
    }
}

class PauseState extends BasicState{
    constructor(control) {
        super(control);
    }

    btnWasPressed(dom) {
        console.log('starting play');
        dom.innerText = 'pause';
        this.control.setState(this.control.playState);
    }

    stopWasPressed(dom) {
        console.log('stoped');
        dom.innerText = 'start';
        this.control.setState(this.control.stopState);
    }
}

export default class Control{
    constructor() {
        this.stopState = new StopState(this);
        this.playState = new PlayState(this);
        this.pauseState = new PauseState(this);
        this.currentState = this.stopState;
    }

    setState(state) {
        this.currentState = state;
    }
}




















