class Animal {
  constructor(name, legs) {
    this.name = name;
    this.legs = legs;
  }
}

const dog1 = new Animal("dog", 4);
const dog2 = new Animal("dog", 4);
const assert = require("assert");
assert.deepEqual(dog1, dog2);
