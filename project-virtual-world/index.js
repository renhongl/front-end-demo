/**
 * Virtual World
 */
(function() {
  function Vector(x, y) {
    this.x = x;
    this.y = y;
  }

  Vector.prototype.plus = function(vector) {
    this.x = this.x + vector.x;
    this.y = this.y + vector.y;
  };

  function Grid(width, height, legend) {
    this.space = [];
    for (let i = 0; i < width; i++) {
      let row = [];
      for (let j = 0; j < height; j++) {
        if (i === 0 || j === 0 || i === width - 1 || j === height - 1) {
          row.push(legend.wall);
        } else {
          let ran = Math.random();
          if (ran < 0.1) {
            row.push(legend.wall);
          } else {
            row.push(legend.empty);
          }
        }
      }
      this.space.push(row);
    }
    this.width = width;
    this.height = height;
    this.legend = legend;
  }

  Grid.prototype.setValue = function(vector, value) {
    this.space[vector.x][vector.y] = value;
  };

  Grid.prototype.getValue = function(vector) {
    return this.space[vector.x][vector.y];
  };

  function World(map) {
    this.biological = {};
    this.map = map;
    this.grid = new Grid(this.map.width, this.map.height, this.map.legend);
  }

  World.prototype.toString = function() {
    let output = "";
    for (let i = 0; i < this.map.width; i++) {
      for (let j = 0; j < this.map.height; j++) {
        output += " " + this.grid.getValue(new Vector(i, j));
      }
      output += "\n";
    }
    return output;
  };

  World.prototype.addBiological = function(biological) {
    this.biological[biological.name] = biological;
    this.grid.setValue(biological.vector, biological.type);
  };

  World.prototype.cycle = function() {
    let biologicalNames = Object.keys(this.biological);
    biologicalNames.forEach(
      function(item, i) {
        this.biological[item].move(this);
      }.bind(this)
    );
  };

  function Map(width, height, legend) {
    this.width = width;
    this.height = height;
    this.legend = legend;
  }

  function randomElement(width, height, vector, step) {
    let x = 0;
    let y = 0;
    do {
      x = Math.round(Math.random() * step);
    } while (vector.x + x <= 0 || vector.x + x >= width - 1);
    do {
      y = Math.round(Math.random() * step);
    } while (vector.y + y <= 0 || vector.y + y >= height - 1);
    return new Vector(vector.x + x, vector.y + y);
  }

  function Biological(name, vector, type, step) {
    this.name = name;
    this.vector = vector;
    this.type = type;
    this.step = step;
  }

  Biological.prototype.move = function(world) {
    let target = randomElement(
      world.map.width,
      world.map.height,
      this.vector,
      this.step
    );
    world.grid.setValue(this.vector, " ");
    this.vector = target;
    world.grid.setValue(this.vector, this.type);
  };

  function main() {
    var legend = {
      empty: " ",
      wall: "#",
      bird: "O",
      snake: "S"
    };
    var map = new Map(10, 10, legend);
    var world = new World(map);
    var bird = new Biological("Bird 1", new Vector(3, 5), legend.bird, 3);
    var snake = new Biological("Snake 1", new Vector(7, 2), legend.snake, 1);
    world.addBiological(bird);
    world.addBiological(snake);
    for (let i = 0; i < 5; i++) {
      world.cycle();
      console.log(world.toString());
    }
  }

  main();
})();
