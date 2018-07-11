

export const FrameState = {

    //max frame
    maxFrame: 0,

    minFrame: 9999,

    currFrame: 0,

    currTime: 0,

    //spend time for 1 frame
    elapseTime: 0,

    //start time per 1s
    _sTime: 0,

    //total frame for 1s
    _sTFrame: 0,

    start() {
        this.currTime = this._sTime = new Date();
    },

    update() {
        let fTime = new Date();
        if (fTime-this._sTime >= 1000) {
            this.currFrame = this._sTFrame;
            this.maxFrame = (this.currFrame > this.maxFrame) ? this.currFrame : this.maxFrame;
            this.minFrame = (this.currFrame < this.minFrame) ? this.currFrame : this.minFrame;
            this._sTFrame = 0;
            this._sTime = fTime;
        } else {
            ++this._sTFrame;
        }
        this.elapseTime = fTime - this.currTime;
        this.currTime = fTime;
    }
}