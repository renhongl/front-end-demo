






export default class ReduceFrequency{
    /**
     * input 输入时，不要每次去检查更改，在结束输入后200毫秒去检查
     * 这样可以减少监听频繁执行的事件带来的卡顿
     * @param {DOM Object} target 
     */
    inputControl(target) {
        target.addEventListener('input', (e) => {
            clearTimeout(this.timer);
            this.timer = setTimeout(() => {
                console.log(e.target.value);
            }, 500); 
        });
    }

    /**
     * 鼠标每次移动时，并不是每次都去打印它的位置，而是将最近这个事件存起来，使用定时器每隔500毫秒
     * 打印一次最新的位置。
     */
    mouseMoveControl() {
        this.inTimer = false;
        document.addEventListener('mousemove', (e) => {
            this.latestE = e;
            if (!this.inTimer) {
                this.inTimer = true;
                this.timer2 = setTimeout(() => {
                    let x = this.latestE.pageX;
                    let y = this.latestE.pageY;
                    console.log(Date.now(), x, y);
                    this.inTimer = false;
                }, 500);
            }
        });
    }

    /**
     * 一次生成1000个节点，改成每1秒生成100个节点
     */
    renderDomControl() {
        let total = 1000;
        render();
        function render() {
            for (let i = 0; i < 100; i++) {
                let dom = document.createElement('span');
                dom.innerText = total;
                document.body.appendChild(dom);
                total -= 1;
            }
            if(total > 0) {
                setTimeout(() => {
                    render();
                }, 1000);
            }
        }
    }
}

















