# Section 6 Features

## Default Function Params
```javascript
// we set the default value of y as 1 when we pass in the arguments
function multiply(x, y = 1){
  // older way of doing it
  // if(typeof y === 'undefined'){
  //   y = 1;
  // }
  return x * y;
}
// default needs to come at the end of the argument list
const greet = (person, greeting = "hi", punctuation = '!') => {
  console.log(`${greeting} ${person} ${punctuation}`)
}
// if we want to skip something, we can pass in ""
```

## Spread and Rest
> Spread syntax (...) allows an iterable such as an array expression or string to be expanded in places where
1. zero or more arguments (for function calls) or 
2. elements (for array literals) are expected, or an object expression to be expanded in places where zero or 
3. more key-value pairs (for object literals) are expected.

### spread in function calls
```javascript
const nums = [45,23,34,7,5]
console.log(Math.max(...nums));
function giveMeFour(a,b,c,d){
    console.log('a',a)
    console.log('b',b)
    console.log('c',c)
    console.log('d',d)
}
const colours = ['red','organe','blue','green']
giveMeFour(...colours)
```
### spread in array literals
* if offers same functionality as concat
* they have unique references, they are not === to each other, make a new copy
```javascript
// combine arrays
const cephalopods = ['dumbo octopus', 'humboldt squid', 'flamboyant cuttlefish'];
const gastropods = ['giant african snail','banaba slug','variable neon slug'];
const cnidaria = ['fire coral','moon jelly']

const mollusca = ['something', ...cephalopods, ...gastropods];

// split string like .split('')
const letters = ['a','b','c','d','e','f','g']
const spLetters = [...letters]
```

### spread in object literals
* you can't spread object into array, object is not iterable
* but you can spread array into object
```javascript
const feline = {legs: 4, family: 'Felidae'};
const canine = { family: 'Caninae', furry: true, legs: 3};
const dog = {
    ...canine,
    isPet: true,
    adorable: true,
}

const houseCat = {
  ...feline,
  isGrumpy: true,
  personality: 'unpredictable'
}

const catDog = {
  ...feline,
  ...canine
}
```

### Rest
> it looks like spread, but it behaves differently, it collects things into a single thing, arguments is an **array-like** object:
1. has a length prop
2. does not have array methods
3. contains all the arguments passed to the function
4. not available inside of arrow function
```javascript
function sum(){
  const argsArray = [...arguments]
  return argsArray.reduce((total, curr)=>{
    return total+curr;
  })
}
// arguments is not the best way of handling it
function sum(...nums){
  return nums.reduce((total, curr)=>{
    return total + curr;
  })
}
// we can also use rest to collect the remaining arguments
function fullName(first, last, ...title) {
    console.log('fist', first)
    console.log('last', last)
    console.log('titles', titles)
}
```

## Destructuring
> pay attention to the type of brackets used, array has square brackets, object has curly brackets
### Destructing Arrays
* maintains the order of variables and put them into the new array
```javascript
const raceResults = [
  'Eliud Kipchoge',
  'Feyisa Lelisa',
  'Galen Rupp',
  'Ghirmay Ghebreslassie',
  'Alphonce Simbu',
  'Jared Ward'
];
// the old way, accessing array elements
// const gold = raceResults[0]
// const silver = raceResults[1]
// const bronze = raceResults[2]
//
const [first, , ,fourth] = raceResults;
console.log(fourth);
// to access the variable, we just use variable name in the new array
const [winner, ...others] = raceResults; // Rest variable
```

### Destructing Objects
* unlike array which unpacks things based on order, for objects, we unpack things based on the name of the property
```javascript
const raceResults = {
  first: 'Eliud',
  last: 'Kipchoge',
  country: 'Kenya',
  title: "Elder of the Order of the Golden Heart of Kenya"
};

const {first, country: nation} = raceResults // store country in nation
console.log(first, nation)
// console.log(first, country) this won't print anything because we didn't store country
```

### Nested Destructing 
```javascript
const results = [{
  first: "Eliud",
  last: "Kipchoge",
  country: "Kenya",
},
{
  first: 'Feyisa',
  last: 'Lilesa',
  country: 'Ethiopia'
},
{
  first: 'Galen',
  last: 'Rupp',
  country: 'United States'
}
]

// extract the country of second place
const [{},{country}] = results;
```

### Destructing Parameters
> full name is expecting an object, and we extract the information we want using arrow function
```javascript
const fullName = ({first, last}) => {
  return `${first} ${last}`;
}
const runner = {
  first: "Eliud",
  last: "Kipchoge",
  country: "Kenya"
}
fullName(runner)
// ================ Example ==================
function print({first, last}){ // deconstruct at argument
  console.log(first, last)
}

// =============== Example ===================
const response = [
  'HTTP/1.1',
  '200 OK',
  'application/json'
]

function parseResponse([, status, ]){
  if(status.includes('OK'))
    console.log("Seems right");
}
// parseResponse(response): Seems right

```