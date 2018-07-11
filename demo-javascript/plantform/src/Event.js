

export const EventListener = function(param) {
    this.enabled = true;
    this.onBeforeRender = param['beforeRender'] || this.onBeforeRender;
    this.onAfterRender = param['afterRender'] || this.onAfterRender;
}

EventListener.prototype.onBeforeRender = function() {
    return true;
}

EventListener.prototype.onAfterRender = function() {
    return true;
}