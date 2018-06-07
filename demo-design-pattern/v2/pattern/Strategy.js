

class LevelA{
    calculate(salary) {
        return salary * 2;
    }
}

class LevelB{
    calculate(salary) {
        return salary * 3;
    }
}

class LevelC{
    calculate(salary) {
        return salary * 4;
    }
}

export class GetBonus{
    constructor() {
        this.calculateMapping = {
            A: new LevelA(),
            B: new LevelB(),
            C: new LevelC()
        }
    }

    calculate(type, salary) {
        return this.calculateMapping[type].calculate(salary);
    }
}