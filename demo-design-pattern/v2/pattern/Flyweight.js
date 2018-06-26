

export class Flyweight{
    constructor() {
        this.divPool = [];
    }
    createDiv(text, parent) {
        if (this.divPool.length > 0) {
            console.log(`get from pool, pool count:${this.divPool.length}`);
            let div = this.divPool.shift();
            div.innerText = text;
            parent.appendChild(div);
            return div;
        } else {
            console.log(`create a new div, because pool count:${this.divPool.length}`);
            let div = document.createElement('div');
            div.innerText = text;
            parent.appendChild(div);
            return div;
        }
    }

    removeDiv(node, parent) {
        parent.removeChild(node);
        this.recover(node);
        console.log(`when ui remove div, restore this div, now pool has: ${this.divPool.length}`);
    }

    recover(node) {
        this.divPool.push(node);
    }
}


















