


export class Player{
    constructor(name, teamColor, playerDirector) {
        this.name = name;
        this.teamColor = teamColor;
        this.status = 'live';
        this.playerDirector = playerDirector;
        this.add();
    }

    win() {
        console.log('for self win action: ' + this.name);
    }

    lose() {
        console.log('for self lose action: ' + this.name);
    }

    add() {
        console.log('for self add action: ' + this.name);
        this.playerDirector.recieveMessage('add', this);
    }

    remove() {
        console.log('for self remove action: ' + this.name);
        this.playerDirector.recieveMessage('remove', this);
    }

    die() {
        console.log('for self die action: ' + this.name);
        this.playerDirector.recieveMessage('die', this);
    }

    getMessage(message) {
        console.log(`${this.name} recieved message: ${message}`);
    }
}

export class PlayerMediator{
    constructor() {
        this.players = {};
    }

    recieveMessage(type, player) {
        this[type](player);
    }

    add(player) {
        this.players[player.teamColor] = this.players[player.teamColor] || [];
        this.players[player.teamColor].push(player);
        this.getAllPlayerExceptThis(player).forEach((p) => {
            p.getMessage(`player ${player.name} added.`);
        });
    }

    remove(player) {
        let index = this.players[player.teamColor].indexOf(player);
        this.players[player.teamColor][index].status = 'disconnect';
        this.getAllPlayerExceptThis(player).forEach((p) => {
            p.getMessage(`player ${player.name} disconnected.`);
        });
        if (this.verifyOver(player.teamColor)) {
            this.gameOver(player.teamColor)
        }
    }

    die(player) {
        let index = this.players[player.teamColor].indexOf(player);
        this.players[player.teamColor][index].status = 'die';
        this.getAllPlayerExceptThis(player).forEach((p) => {
            p.getMessage(`player ${player.name} dead.`);
        });
        if (this.verifyOver(player.teamColor)) {
            this.gameOver(player.teamColor)
        }
    }

    getAllPlayerExceptThis(player) {
        let ret = [];
        for (let t of Object.keys(this.players)) {
            for (let p of this.players[t]) {
                if (player !== p) {
                    ret.push(p);
                }
            }
        }
        return ret;
    }

    verifyOver(teamColor) {
        for (let player of this.players[teamColor]) {
            if (player.status === 'live') {
                return false;
            }
        }
        return true
    }

    gameOver(teamColor) {
        for (let t of Object.keys(this.players)) {
            for (let player of this.players[t]) {
                if (teamColor === player.teamColor) {
                    player.lose();
                } else {
                    player.win();
                }
            }
        }
    }
}

















