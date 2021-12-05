# Section 1: Introduction
* ECMA: standards for javascript...ECMAScript
* TC39: technical committee
* The spec is updated annually
javascript is implemented by browser, the browser decides which feature to be implemented.

## Tools: 
1. chrome, firefox: console, ctrl+shift+I, command+option+J, (REPL, read evaluate, print, loop)
2. VSCode(Emmet)
3. Node

## Primitive types: 

###  let & const
> let someName = value;
let numOfHens = 6;
let avgRating = 9.7;
> const
* you CANNOT change the value once value is initialised
const hens = 2;
const roosters = 4;
> var(still works, but there is no good reason to use it)
var distance = 7.4

## 1. Primitive type: number
> javascript only has ONE NUMBER TYPE, positive, negative, decimals, floats, doubles
* javascript doesn't store infinite precision, 1.0000000000000009 = 1.0000000000000009, 1.000000000000000009->1
* NaN, not a number, it is a number

###  work with common operations/methods
```javascript
// comment, similar to c and java
0/0: NaN
1+NaN // Nan
-0: -0
-1/0 = -Infinity
50+5 = 55
50-5 = 45
10/0 = Infinity
10/3 = 3.3333333333333335
2**3 = 2^3 = 8 or Math.pow(base, exponent): for example Math.pow(4, 0.5) = 2
```
### Math object
* Math.PI 
* Math.floor, Math.round, Math.ceil
* Math.pow
* Math.trigonometry
* Math.random() // it returns a random number between 0 and 1(exclusive of 1). This is the only way to get random number in javascipt

```javascript
Math.ceil(Math.random()*6); //dice, between 1 and 6
Math.ceil(Math.random()*100); // random number between 1 and 100
```

### parseInt
```javascript
// if the string starts with a number, then parseInt is able to parse until non-Number character is reached
parseInt('21') + 1;
parseInt('$88');
parseInt('88cents'); // this will give you 88
```

## 2. Primitive type: string
* let firstName = "John"
* let lastName = "Smith"
* let str = '"hello world!"'
* string indexing is same as java and C, starts from 0
* lastName.length = 5

* to access char
lastName[0] = "S"
lastName[10]: undefined, it means there is nothing there

* toUpperCase(), toLowerCase(), trim() //remove trailing and leading spaces
* indexOf(), slice(), replace()
```javascript
// this is case sensitive
let tvShow = "catdog";
undefined
tvShow.indexOf('cat');
0
tvShow.indexOf('dog');
3
tvShow.indexOf('z');
-1
tvShow.slice(4); // str.slice(begin[, end])
'og'
tvShow.slice(0,4); // starts from 0, stops before 4
'catd'
tvShow.slice(40);
''
tvShow.replace('cat','dog');
'dogdog'
```

### String escape

```md
\n - newline
\' - single quote
\" - double quote
\\ - backslash
```
### String Template Literals

```javascript
`I counted ${3+4} sheelp`; // `${}`, it will be turned into a string
'I counted 7 sheelp'
let userName = "hello"
`Welcome back, ${userName}`
let animal = "pig";
let sound = "oink";
`${animal} says ${sound}`;
// this is preferred over string concat

const minAge = 21;
undefined
let yourAge = 18;
undefined
`you must be ${minAge} or older to enter, Come back in ${minAge - yourAge} years`;
'you must be 21 or older to enter, Come back in 3 years'
```

## 3. Primitive type: boolean

> Boolean Logic
```javascript
>, <, >=, <=
==, != // coerces both values to the same type and then compares them.
===, !== // strictly equal and strictly non-equal
0 == ''
true
0 == false
true
null == undefined
true
'1' == 1;
true
'1' === 1;
false
```

## 4. Primitive type: null and undefied:
* Intentional absence of any value, let user = null;
* Variables that do not have an assigned value
* Example: 
```javascript
null ? console.log("true") : console.log("false") // false
var temp=['a','b','c'];
if(temp[3] === undefined)
console.log("true");
else
console.log("false");
```

## 5. Primitive type: Symbol:
Symbol is a built-in object whose constructor returns a symbol primitive — also called a Symbol value or just a Symbol — that’s guaranteed to be unique. Symbols are often used to add unique property keys to an object that won’t collide with keys any other code might add to the object, and which are hidden from any mechanisms other code will typically use to access the object. That enables a form of weak encapsulation, or a weak form of information hiding

## 6. Primitive type: BigInt:
* Numbers in JavaScript are represented as double-precision floats. This means they have limited precision. The Number.MAX_SAFE_INTEGER constant gives the greatest possible integer that can safely be incremented. Its value is 2**53 - 1.
* If we do max + 1, then max + 2, then max + 100, you will get the same results, there is no way to tell whether it’s accurate or not. Any calculation on integers outside the safe integer range (i.e. from Number.MIN_SAFE_INTEGER to Number.MAX_SAFE_INTEGER) potentially loses precision. For this reason, we can only rely on numeric integer values within the safe range.

## Reference Type and Object
```javascript
let fruit = "orange";
let color = fruit;
// color is "orange" and fruit is also "orange"
fruit = "watermelon";
// fruit now is "watermelon" and color is still "orange"

// however when working with arrays and objects, they are stored as reference type, like pointers in C
let nums = ['1','2','3','4'];
let otherNums = nums; // this is similar to pointers in C
// when we modify nums, otherNums are also updated.

// therefore we use const for arrays and objects
// and we use let for primitive types
```

