
import Hero from './Hero.js';

export default class Game {
    constructor() {
        this.hero = new Hero({x: 200, y: 350});
    }

    start() {
        this.hero.move();
        this.hero.shoot();
    }
}



