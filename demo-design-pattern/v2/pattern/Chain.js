





export class Vip5{
    constructor() {
        this.level = 5;
    }

    getDiscount(pay, level) {
        if (level === this.level) {
            console.log(pay * 0.5);
        } else {
            this.nextChain.getDiscount(pay, level);
        }
    }

    setNextChain(obj) {
        this.nextChain = obj;
    }
}

export class Vip3{
    constructor() {
        this.level = 3;
    }

    getDiscount(pay, level) {
        if (level === this.level) {
            console.log(pay * 0.7);
        } else {
            this.nextChain.getDiscount(pay, level);
        }
    }

    setNextChain(obj) {
        this.nextChain = obj;
    }
}

export class Vip1{
    constructor() {
        this.level = 1;
    }

    getDiscount(pay, level) {
        if (level === this.level) {
            console.log(pay * 0.9);
        } else {
            this.nextChain.getDiscount(pay, level);
        }
    }

    setNextChain(obj) {
        this.nextChain = obj;
    }
}


























