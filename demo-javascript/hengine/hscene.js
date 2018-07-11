

(function(win) {

    let _Scene = win.Scene = function(arg) {
        arg = arg || {};

        this.name = arg.name || (`Unnamed ${++_Scene.SID}`);

        this.x = arg.x || 0;
        this.y = arg.y || 0;
        this.w = arg.w || 320;
        this.h = arg.h || 200;
    }


})(window);