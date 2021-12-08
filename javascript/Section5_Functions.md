# Section 5 Functions

## Define a function
```javascript
function funcName(){
    // do something
}

// ========== example 1 =========== //
function rollDie() {
    let roll = Math.ceil(Math.random() * 6);
    console.log(`Rolled: ${roll}`);
}

// ========== example 2 =========== //
function average(num1, num2){
    return (num1 + num2)/2;
}

function containsPurple(arr){
    for(let color of arr){
        if(color === "purple")
            return true;
    }
    return false;
}
```

## Code Examples
```javascript
function isValidPassword(pwd, userName){
    return (!(pwd.includes(" ")) 
        && !(pwd.includes(userName)) 
        && pwd.length >= 8);
}

// isValidPassword('89Fjjlnms','dogLuvr');
// true
// isValidPassword('dogLuvr123!','dogLuvr');
// false
// isValidPassword('dog123!','dogLuvr');
// false
// isValidPassword('doglover ','dogLuvr');
// false

function avg(arr){
    let total = 0;
    for(num of arr){
        total += num;
    }
    return total/arr.length;
}

function getCard(){
    const suits = ["Clubs","Spades","Hearts","Diamonds"];
    const values = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];
    return {value: getRandomIndex(suits), suit: getRandomIndex(values)};
}

function getRandomIndex(arr){
    let index = Math.floor(Math.random() * arr.length);
    return arr[index];
}
```

## Function Scope
* JavaScript has function scope: Each function creates a new scope.
* Variables defined inside a function are not accessible (visible) from outside the function.
* Variables declared with var, let and const are quite similar when declared inside a function.

```javascript
let bird = 'mandarin duck';

function birdWatch(){
    let bird = 'golden pheasant';
    bird; // 'golden pheasant'
}
bird; // 'mandarin duck'
```

## Block Scope
* Variables declared inside a { } block cannot be accessed from outside the block
* However, Variables declared with the var keyword can NOT have block scope. Variables declared inside a { } block can be accessed from outside the block.

```javascript
if(radius > 0){
    const PI = 3.14;
    let circ = 2 * PI * radius;
}
```

## Global Variables
* Variables declared Globally (outside any function) have Global Scope.
* Global variables can be accessed from anywhere in a JavaScript program.
* Variables declared with var, let and const are quite similar when declared outside a block.
* In a web browser, global variables are deleted when you close the browser window (or tab).

## Function Expression

```javascript
// function stored without a name
const square = function(num){
    return num*num;
}
square(7);


```

## Higher Order Functions
* this can be useful for patterns
```javascript
const add = function(x, y){
    return x + y;
}

const subtract = function(x, y){
    return x - y;
}

const multiply = function(x, y){
    return x * y;
}

const divide = function(x, y){
    return x / y;
}

const operations = [add, subtract, multiply, divide];

for(let func of operations) {
    let result = func(30, 5);
    console.log(result);
}

// we can also store it in an object
// this is what we called method
const thing = {
    doSomething: multiply
}
thing.doSomething(50,2);

```
## Function as arguments
```javascript
function callThreeTimes(f){
    f();
    f();
    f();
}

function cry(){
    console.log("Hello World");
}

callThreeTimes(cry)


function pickOne(f1, f2){
    let rand = Math.random();
    if(rand < 0.5){
        f1();
    } else {
        f2();
    }
}
```

## Function as returned value
```javascript
function multiplyBy(num){
    return function(x){
        return x * num;
    }
}

const triple = multiplyBy(3);
triple(5);

const double = multiplyBy(2);
double(8);
// the first argument passed into multiplyBy becomes num
// the second argument passed into triple/double becomes x

// =========== example ===============
function makeBetweenFunc(x, y){
    return function(num){
        return num >= x && num <= y;
    }
}

makeBetweenFunc(1990,2000);
const isChild = function(num){
    return num >= 0 && num <= 18;
}
isChild(17); // true
```

## Function callback
* A callback function is a function passed into another function as an argument, which is then invoked inside the outer function
* the function in the brackets
```javascript
setTimeout(function(){
    alert("Times Up");
}, 5000);

const btn = document.querySelector('button');
btn.addEventListener('click', function(){
    alert("Times Up");
})
```

## Hoisting
* In JavaScript, a variable can be declared after it has been used. In other words; a variable can be used before it has been declared.
* functions with names are hoisted, but not function expression

```javascript
console.log(animal);
var animal = 'Tapir'

// This will result in a ReferenceError:
carName = "Volvo";
let carName;

// Using a const variable before it is declared, is a syntax errror, so the code will simply not run.
carName = "Volvo";
const carName;
```

## Arrow Function
* the behaviours are different around .this keyword
* when we have multiple arguments or no argument, we need brackets
```javascript
const square = (x) => {
  return x * x;
}

const greet = () => {
  console.log("Hi")
}
```
### Implicit Returns
* this only works in certain cases, if the code is one linear (like if and for loop in java)
```javascript
const square = n => n * n
```