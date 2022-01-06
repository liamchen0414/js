# Section 12 Async Functions and Parallelism

## 12.1 Async

> An async function is a function declared with the async keyword, and the await keyword is permitted within them.

1. The async and await keywords enable asynchronous promise-based behavior to be written in a cleaner style
2. avoiding the need to explicitly configure promise chains
3. Async function returns promise, it is a shortcut for resolve and reject

```javascript
async function greet() {
  return "Hello World!!!";
}

greet().then((val) => {
  console.log("Promise Resolved with  " + val);
});

async function add(x, y) {
  if (typeof x != number || typeof y != number) {
    throw "X and Y must be numbers!";
  }
  return x + y;
}
```

## 12.2 Await

> The await operator is used to wait for a Promise. It can only be used inside an async function within regular JavaScript code; however it can be used on its own with JavaScript modules.

1. await can only be used in async function
2. we can chain them in neat fashion

```javascript
async function getData() {
  try {
    const res = await axios.get("https://swapi.dev/api/planets");
    console.log(res.data);
  } catch (e) {
    console.log(e); // we want to catch error here
  }
}
```

```javascript
async function animateRight(el) {
  await moveX(el, 400, 1000);
  await moveX(el, 400, 1000);
  await moveX(el, 400, 1000);
  await moveX(el, 400, 1000);
  moveX(el, 400, 1000);
}
```

## 12.3 Parallel vs Sequential Requests

> Example, say we want to fetch some pokemon data, the problem with below code is that we are waiting for one request to finish before we execute the next one

```javascript
// SEQUENTIAL VERSION
async function get3Pokemon() {
  const pokemon1 = await axios.get("https://pokeapi.co/api/v2/pokemon/1");
  const pokemon2 = await axios.get("https://pokeapi.co/api/v2/pokemon/2");
  const pokemon3 = await axios.get("https://pokeapi.co/api/v2/pokemon/3");
  console.log(pokemon1.data);
  console.log(pokemon2.data);
  console.log(pokemon3.data);
}

// PARALLEL VERSION
async function get3Pokemon2() {
  const p1 = axios.get("https://pokeapi.co/api/v2/pokemon/1");
  const p2 = axios.get("https://pokeapi.co/api/v2/pokemon/2");
  const p3 = axios.get("https://pokeapi.co/api/v2/pokemon/3");
  const pokemon1 = await p1;
  const pokemon2 = await p2;
  const pokemon3 = await p3;
  console.log(pokemon1.data);
  console.log(pokemon2.data);
  console.log(pokemon3.data);
}
```

> A visualisation of the differences can be done using colors

```javascript
async function lightshow() {
  await changeColor(1000);
  await changeColor(1000);
  await changeColor(1000);
  await changeColor(1000);
}

async function lightshow() {
  const p1 = changeColor(1000);
  const p2 = changeColor(1000);
  const p3 = changeColor(1000);
  const p4 = changeColor(1000);
  await p1;
  await p2;
  await p3;
  await p4;
}
```

## 12.4 Promise all

```javascript
async function get3Pokemon() {
  const p1 = axios.get("https://pokeapi.co/api/v2/pokemon/1");
  const p2 = axios.get("https://pokeapi.co/api/v2/pokemon/2");
  const p3 = axios.get("https://pokeapi.co/api/v2/pokemon/3");
  const results = await Promise.all([p1, p2, p3]);
  console.log(results);
}
```

> We can use for loop and array of promises to do something cool, like print out pokemon names and their types

````javascript
async function get3Pokemon(num1, num2) {
  const promiseArray = [];
  for (let i = num1; i <= num2; i++) {
    const p = axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`);
    promiseArray.push(p);
  }
  const results = await Promise.all(promiseArray);
  printPokemon(results);
}

function printPokemon(results) {
  for (let pokemon of results) {
    console.log(pokemon.data);
    let str = "";
    str += "name: " + pokemon.data.name + ", type: ";
    const len = pokemon.data.types.length;
    for (let i = 0; i < len; i++) {
      str += pokemon.data.types[i].type.name + "; ";
    }
    console.log(str);
  }
}```
````
