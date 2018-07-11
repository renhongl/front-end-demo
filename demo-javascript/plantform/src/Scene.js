

export const Scene = function(canvas, level) {
    this.canvas = canvas;
    this.level = level;
    this.elementMapping = {
        ' ': '&nbsp;',
        'x': 'x',
        '@': '@',
        'o': 'o',
        '=': '=',
        '!': '!'
    }
    this.updateMapping = {
        'up': 'up',
        'left': 'left',
        'right': 'right',
        'down': 'down'
    }
    document.addEventListener('keyup', (e) => {
        if (e.keyCode === 39) {
            this.goRight();
        }
        if (e.keyCode === 37) {
            this.goLeft();
        }
        if (e.keyCode === 38) {
            this.goUp();
        }
        if (e.keyCode === 40) {
            this.goDown();
        }
        e.preventDefault();
    })
}

Scene.prototype.readLevel = function() {
    this.levelData = [];
    for (let i = 0; i < this.level.length; i++) {
        let row = [];
        for (let j = 0; j < this.level[i].length; j++) {
            row.push(this.level[i][j]);
        }
        this.levelData.push(row);
    }
}

Scene.prototype.renderDOM = function() {
    this.clearDOM();
    for (let i = 0; i < this.levelData.length; i++) {
        let row = document.createElement('div');
        for (let j = 0; j < this.levelData[i].length; j++) {
            let span = document.createElement('span');
            span.innerHTML = this.elementMapping[this.levelData[i][j]];
            row.appendChild(span);
            console.log(this.levelData[i][j]);
            if (this.levelData[i][j] === '@') {
                this.playerPosition = {
                    x: i,
                    y: j
                }
            }
        }
        this.canvas.appendChild(row);
    }
}

Scene.prototype.clearDOM = function() {
    this.canvas.innerHTML = '';
}

Scene.prototype.update = function(type) {

}

Scene.prototype.goRight = function() {
    this.levelData[this.playerPosition.x][this.playerPosition.y] = ' ';
    this.levelData[this.playerPosition.x][this.playerPosition.y+1] = '@';
}

Scene.prototype.goLeft = function() {
    this.levelData[this.playerPosition.x][this.playerPosition.y] = ' ';
    this.levelData[this.playerPosition.x][this.playerPosition.y-1] = '@';
}

Scene.prototype.goUp = function() {
    this.levelData[this.playerPosition.x][this.playerPosition.y] = ' ';
    this.levelData[this.playerPosition.x-1][this.playerPosition.y] = '@';
}

Scene.prototype.goDown = function() {
    this.levelData[this.playerPosition.x][this.playerPosition.y] = ' ';
    this.levelData[this.playerPosition.x+1][this.playerPosition.y] = '@';
}