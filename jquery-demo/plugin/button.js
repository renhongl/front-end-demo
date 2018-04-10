

//Button plugin

;
(function($, window, undefined) {

    var PLUGIN_NAME = 'button';

    var Button = function(ele, options = {}) {
        this.$element = ele;
        var defaults = {
            background: 'grey',
            border: 'none',
            width: '50px',
            height: '30px',
            position: 'relative',
            overflow: 'hidden',
            outline: 'none'
        };
        this.options = $.extend({}, defaults, options);
    }

    Button.prototype = {
        init: function() {
            this.$element.css(this.options);
            this.$element.on('click', this.onClick.bind(this))
            this.$element.on('mousedown', this.onMousedown);
            this.$element.on('mouseup', this.onMouseup);
            this.$element.on('mouseover', this.onMouseover);
            return this;
        },
        onMouseover() {

        },
        onMousedown() {

        },
        onMouseup() {

        },
        onClick: function(e) {
            this.rain(e);
            console.log('clicked');
        },
        rain(e) {
            var x = e.offsetX;
            var y = e.offsetY;
            var $rain = $('<span>').css({
                position: 'absolute',
                left: x,
                top: y,
                width: 20,
                height: 20,
                background: 'rgba(255, 255, 255, 0.5)',
                transform: 'translate(-50%, -50%)',
                transition: 'all .5s ease-in-out',
                borderRadius: '50%'
            }).appendTo(this.$element);
            var max = Math.max($rain.width(), $rain.height());
            $rain.width($rain.width() + max);
            $rain.height($rain.height() + max);
            $rain.css({
                background: 'rgba(255, 255, 255, 0)',
            })
            setTimeout(function() {
                $rain.remove();
            }, 500);
        }
    }

    $.fn[PLUGIN_NAME] = function(options) {
        var button = new Button(this, options);
        return button.init();
    }

})(jQuery, window);