const width = 600;
const height = 600;
const thickness = 10;
const { Engine, Render, Runner, World, Bodies, Body, Events } = Matter;

function start() {
  const engine = Engine.create();
  engine.world.gravity.y = 0;
  const { world } = engine;
  const render = Render.create({
    element: document.body,
    engine: engine,
    options: {
      width,
      height,
    },
  });
  Render.run(render);
  Runner.run(Runner.create(), engine);
  return { engine, world, render };
}

function initialising(rows, columns) {
  // borders
  const walls = [
    // top wall
    Bodies.rectangle(width / 2, 0, width, thickness, {
      isStatic: true,
    }),
    // bottom wall
    Bodies.rectangle(width / 2, height, width, thickness, {
      isStatic: true,
    }),
    // left wall
    Bodies.rectangle(0, height / 2, thickness, height, {
      isStatic: true,
    }),
    // right wall
    Bodies.rectangle(width, height / 2, thickness, height, {
      isStatic: true,
    }),
  ];

  World.add(world, walls);
  // Maze Generation
  const unitLength = width / rows;
  const grid = Array(rows)
    .fill(null)
    .map(() => Array(columns).fill(false));

  const verticals = Array(rows)
    .fill(null)
    .map(() => Array(columns - 1).fill(false));

  const horizontals = Array(columns - 1)
    .fill(null)
    .map(() => Array(rows).fill(false));

  const shuffle = (arr) => {
    let counter = arr.length;

    while (counter > 0) {
      const index = Math.floor(Math.random() * counter);
      counter--;
      const temp = arr[counter];
      arr[counter] = arr[index];
      arr[index] = temp;
    }
    return arr;
  };

  // define initial starting point
  const startRow = Math.floor(Math.random() * rows);
  const startColumn = Math.floor(Math.random() * columns);
  const traverseCells = (row, column) => {
    // if we visited the cell already, return
    if (grid[row][column]) return;
    // mark this cell as being visited
    grid[row][column] = true;
    // shuffle the neighbours
    const neighbours = shuffle([
      [row - 1, column, "up"],
      [row, column + 1, "right"],
      [row + 1, column, "down"],
      [row, column - 1, "left"],
    ]);

    for (let neighbour of neighbours) {
      const [nextRow, nextCol, direction] = neighbour;
      // for each neighbour, see if that neighbour is out of bounds, if yes, continue to the next neighbour
      if (nextRow < 0 || nextRow >= rows || nextCol < 0 || nextCol >= columns) {
        continue;
      } else if (grid[nextRow][nextCol]) {
        continue;
      }
      // remove a wall from either horizontals or verticals
      if (direction === "left") {
        verticals[row][column - 1] = true;
      } else if (direction === "right") {
        verticals[row][column] = true;
      } else if (direction === "up") {
        horizontals[row - 1][column] = true;
      } else if (direction === "down") {
        horizontals[row][column] = true;
      }
      // visit that next cell
      traverseCells(nextRow, nextCol);
    }
  };
  traverseCells(startRow, startColumn);
  horizontals.forEach((row, rowIndex) => {
    row.forEach((open, columnIndex) => {
      if (open) return;
      const wall = Bodies.rectangle(
        columnIndex * unitLength + unitLength / 2,
        rowIndex * unitLength + unitLength,
        unitLength,
        5,
        { isStatic: true }
      );
      World.add(world, wall);
    });
  });

  verticals.forEach((row, rowIndex) => {
    row.forEach((open, columnIndex) => {
      if (open) return;
      const wall = Bodies.rectangle(
        columnIndex * unitLength + unitLength,
        rowIndex * unitLength + unitLength / 2,
        5,
        unitLength,
        { isStatic: true }
      );
      World.add(world, wall);
    });
  });
  // goal
  const goal = Bodies.rectangle(
    width - unitLength / 2,
    height - unitLength / 2,
    unitLength * 0.7,
    unitLength * 0.7,
    {
      label: "goal",
      isStatic: true,
    }
  );

  World.add(world, goal);

  // ball
  const ball = Bodies.circle(unitLength / 2, unitLength / 2, unitLength / 5, {
    label: "ball",
  });

  World.add(world, ball);

  document.addEventListener("keydown", (e) => {
    const { x, y } = ball.velocity;
    if (e.key === "w") {
      Body.setVelocity(ball, { x: 0, y: -5 });
    } else if (e.key === "a") {
      Body.setVelocity(ball, { x: -5, y: 0 });
    } else if (e.key === "s") {
      Body.setVelocity(ball, { x: 0, y: 5 });
    } else if (e.key === "d") {
      Body.setVelocity(ball, { x: 5, y: 0 });
    }
  });
}

let rows = 5;
let columns = 5;
let { world, engine, render } = start();
initialising(rows, columns);

Events.on(engine, "collisionStart", (e) => {
  e.pairs.forEach((collision) => {
    const labels = ["ball", "goal"];
    if (
      labels.includes(collision.bodyA.label) &&
      labels.includes(collision.bodyB.label)
    ) {
      alert("you win!!!");
    } else {
      console.log("lose");
    }
  });
});
