let width = 800;
let height = 600;
let thickness = 40;
const { Engine, Render, Runner, World, Bodies, MouseConstraint, Mouse } =
  Matter;

const engine = Engine.create();
const { world } = engine;
const render = Render.create({
  element: document.body,
  engine: engine,
  options: {
    wireframes: false,
    width,
    height,
  },
});

Render.run(render);
Runner.run(Runner.create(), engine);

// borders
const walls = [
  // top wall
  Bodies.rectangle(width / 2, thickness / 2, width, thickness, {
    isStatic: true,
  }),
  // bottom wall
  Bodies.rectangle(width / 2, height - thickness / 2, width, thickness, {
    isStatic: true,
  }),
  // left wall
  Bodies.rectangle(thickness / 2, height / 2, thickness, height, {
    isStatic: true,
  }),
  // right wall
  Bodies.rectangle(width - thickness / 2, height / 2, thickness, height, {
    isStatic: true,
  }),
];

// Random Shapes

for (let i = 0; i < 50; i++) {
  if (Math.random() < 0.4) {
    World.add(
      world,
      Bodies.rectangle(Math.random() * width, Math.random() * height, 50, 50)
    );
  } else if (0.4 <= Math.random() < 0.6) {
    World.add(
      world,
      Bodies.circle(Math.random() * width, Math.random() * height, 30)
    );
  } else {
    World.add(
      world,
      Bodies.polygon(
        Math.random() * width,
        Math.random() * height,
        Math.ceil(Math.random() * 6),
        30
      )
    );
  }
}

World.add(world, walls);
World.add(
  world,
  MouseConstraint.create(engine, {
    mouse: Mouse.create(render.canvas),
  })
);
