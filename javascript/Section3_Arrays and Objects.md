# Section 3 Arrays and Objects
* Arrays are list-like objects whose prototype has methods to perform traversal and mutation operations. Neither the length of a JavaScript array nor the types of its elements are fixed.

## Creating, Indexing and Modifying Arrays

> Creating
There are mainly 2 ways to create arrays:
1. const array_name = [item1, item2, ...];
2. const cars = new Array("Saab", "Volvo", "BMW");

> Indexing

```javascript
let color = ['red','green','blue'];
let days = ['Monday','Tuesday','Wednesday'];
let nums = [1,2,'3'];
let myCollection = ['hello','world', 42, true, null, NaN];
let empty = [];
let empty1 = [{}];
console.log(color);
console.log(days);
console.log(nums);
console.log(myCollection);
console.log(empty);
console.log(empty1);

let arr = new Array('tom','jerry', 42, true, null, NaN);
console.log(arr);
```

> Modifying
Similar to C and Java, to modify array element, you just need to do array[index] = new data;
```javascript
const cars = ["Saab", "Volvo", "BMW"];
cars[0] = "Opel";
```

## Push and Pop
* push() adds one or more elements to the end of an array and returns the resulting length of the array.
* pop() removes the last element from an array and returns that element.
```javascript
let days = ['Monday','Tuesday','Wednesday']; // initialise
console.log(days.push("Thursday")); // add Thursday to the end of the array
console.log(days.length); // check the length
console.log(days); // print days to console
days[days.length] = "Friday"; // add Friday to the end of array using different methods
console.log(days); // print days to console
console.log(days.pop()); // remove Friday and print to console
console.log(days.length);
// remove all the elements in days array
while(days.length > 0){
    days.pop();
}
console.log(days.length); // this will return 0
```

## Shift and Unshift
* shift() removes the first element from an array and returns that element.
* unshift() adds one or more elements to the front of an array and returns the new length of the array.
```javascript
let myArray = new Array('1', '2', '3')
let first = myArray.shift()
// myArray is now ["2", "3"], first is "1"

let myArray = new Array('1', '2', '3')
myArray.unshift('4', '5')
// myArray becomes ["4", "5", "1", "2", "3"]
```

## Merge Array
* In js, array merge is using "Concat" method. This creates a new copy without modifying any of the original lists.
```javascript
let hard = ["comp2511", "comp3331", "comp3121"];
let easy = ["comp2521", "comp3311"];
hard.concat(easy);
// ['comp2511', 'comp3331', 'comp3121', 'comp2521', 'comp3311']
```

## Contains Element
* There are two methods to find if a string array contains something:
```javascript
let list = [
    'water',
    'air',
    'sun',
    'land'
]

console.log(list.filter((value) => value.includes("wat")));
console.log(list.filter((value) => value.indexOf("air") >= 0));
// values.indexOf("a") will return value of 2;
// if the element is not in the array, found is undefined
const found = list.find(value => value.includes("why"));
console.log(found === undefined); // not found
console.log(found);
```

## Reverse
* Reverses the order of the elements of an array in place. (First becomes the last, last becomes first.).
* reverse() mutates the current array and return it
```javascript
let list = [
    'water',
    'air',
    'sun',
    'land'
]
list.reverse() => list = [
    'land',
    'sun',
    'air',
    'water'
]
```
## Join
* The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.
* It turns things into string and join them together.

let letters = ['R','E','S','P','E','C','T'];
```javascript
letters.reverse();
(7)??['T', 'C', 'E', 'P', 'S', 'E', 'R'] // letters are actuall mutated
letters.reverse().join('');
'RESPECT' // change default delimiter , to '', you can even use multiple delimiters
```

## Slice
The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.

```javascript
let animals = ['shark','salmon','whale','bear','lizard','tortoise'];
let swimmers = animals.slice(0,3); // 3 is not included in the slice.
swimmers = ['shark', 'salmon', 'whale'];
let mammals = animals.slice(2,4);
mammals = ['whale', 'bear'];
let reptitles = animals.slice(4,6);
reptitles = ['lizard', 'tortoise'];
// we can also pass in negative numbers
animals.slice(-3,-1) = ['bear', 'lizard'];
// make a copy of the array
let copy = animals.slice();
```

## Splice
* splice() can be used to add, remove or replace existing element in the array
```javascript
1. splice(start) // delete begins from start index
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1); // delete starts from 1
(3)??['March', 'April', 'June'] // these three elements are removed
months = ['Jan'] // only one element left
2. splice(start, deleteCount)
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1,1); // delete starts from 1, ends at 1, equivalent to just delete element at index 1

3. splice(start, deleteCount, item1)
const months = ["Jan", "Feb", "March", "April", "June"]
months.splice(4, 1, 'May'); // replaces 1 element at index 4
months = ["Jan", "Feb", "March", "April", "May"]

4. splice(start, deleteCount, item1, item2, itemN)
// item1, item2, ... Optional: The elements to add to the array, beginning from start.

5. It can also be used to add element
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// expected output: Array ["Jan", "Feb", "March", "April", "June"]
```

## Sort
* The sort() method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.
* the default sort() method in javascript is really bad, we almost don't want to use it at all unless you are sure it is string comparison. We need to define our own comparator
```javascript
// Compare function
sort(compareFn)
// Inline compare function
sort(function compareFn(firstEl, secondEl) { ... })
var numbers = [4, 2, 5, 1, 3];
numbers.sort(function(a, b) {
  return a - b;
});
console.log(numbers);
// [1, 2, 3, 4, 5]
```

## Nested Arrays (2D Array, well kinda)

```javascript
const animalPairs = [
	[ 'doe', [ 'buck', 'stag' ] ],
	[ 'ewe', 'ram' ],
	[ 'peahen', 'peacock' ]
];

//To access 'ewe'
animalPairs[1][0];
//To access 'buck'
animalPairs[0][1][0];
//Updating a sub-array:
animalPairs[0][1].push('hart');

const board = [
    ['0',null,'X'],
    [null,'X','0'],
    ['X','0',null]
]
```

# Object
The Object class represents one of JavaScript's data types. It is used to store various keyed collections and more complex entities. Object is just a container, similar to dictionary in python and class in java.
## Define an object
```javascript
const satellite = {
    name: "black out",
    speed: 1,
    inRange: ["elephant1", "relay1"],
}

const fitBitData = {
    totalSteps      : 308727,
    totalMiles      : 211.7,
    avgColarieBurn  : 5755,
    workoutsThisWeek: '5 of 7',
    avgGoodSleep    : '2:13'
};

```

## Access Data
Try to use dot notation where applicable, if not, use square bracket notation.
```javascript
// to access data, it is like java, an object is an instance and we just use dot
// all keys are converted to Strings, except for symbols.
fitBitData.totalMiles
fitBitData['totalMiles']

const palette = {
    red     : '#eb4d4b',
    yellow  : '#f9ca24',
    blue    : '#30336b',
};

```

## Adding and Updating Properties

```javascript
// to add new record
const userReview = {};
userReview['queenBee49'] = 4.0;
userReview.mrSmith78 = 3.0;
// to update record
userReview.mrSmith78 = 5.0;
userReview['queenBee49'] += 1.0; // we can use all arithmetic operation
```

## check equal method
similar to java, we need to check if every single field is equal to determine if two objects are equal

# Advanced Array Functions
## forEach
forEach accepts a callback function, calls the function once per element in the array
```javascript
const nums = [1,3,5,7,9,11,13]
nums.forEach(function(num){
    console.log(num) // print the array
})

function printTriple(n){
    console.log(n*3);
}
nums.forEach(printTriple); // prints the triplets

const books = [{
    title: 'Good Omens',
    authors: ['Terry Pratchett', 'Neil Gaiman'],
    rating: 4.25
  },
  {
    title: 'Bone: The Complete Edition',
    authors: ['Jeff Smith'],
    rating: 4.42
  },
  {
    title: 'American Gods',
    authors: ['Neil Gaiman'],
    rating: 4.11
  },
  {
    title: 'A Gentleman in Moscow',
    authors: ['Amor Towles'],
    rating: 4.36
  }
]

books.forEach(function(book){
    console.log(book.title.toUpperCase());
})

books.map(function(book){
    return book.title;
})
```

## .map
* creates a new array with the results of calling a callback on every element in the array
```javascript
const texts = ['rofl', 'lol', 'omg', 'ttyl'];
const caps = texts.map(function(t){
  return t.toUpperCase(); // we need to return the value, this value gets added to the new array
});
texts;
caps;

// get only the even numbers
const numbers = [20,21,22,23,24,25,26,27];
const half = numbers.map(function(n){
    if(n % 2 == 0){
        return n;
    }
})
const even = half.filter(function(num){
  return num != undefined;
});

texts.map(function(text){
    return text.to
})
```
## find
> returns the value of the FIRST match in the array that satisfies the provided testing function
```javascript
let movies = [
    "The Fantatistic Mr. Fox",
    "Mr. and Mrs. Smith",
    "Mrs. Doubefire",
    "Mr. Deeds"
]

const result = movies.find(movie => {
    // loop over the movies array and check if every element includes something
    return movie.includes("Mrs");
});

const movie2 = movies.find(m => m.indexOf("Mrs") === 0) // movie starts with Mrs
```

## filter
> Creates a new array with all elements that pass the test implemented by the provided function
```javascript
const nums = [1,3,3,23,4,6,732,45,6,7,2,43]
const odd = nums.filter(n => n % 2 === 1)
// odd = [1, 3, 3, 23, 45, 7, 43]
// nums unchanged = [1, 3, 3, 23, 4, 6, 732, 45, 6, 7, 2, 43]
// const goodBooks = books.filter(b=>b.rating > 4.3), get all the books above 4.3
const books = [{
    title: 'Good Omens',
    authors: ['Terry Pratchett', 'Neil Gaiman'],
    rating: 4.25,
    genres: ['fiction', 'fantasy']
  },
  {
    title: 'Changing My Mind',
    authors: ['Zadie Smith'],
    rating: 3.83,
    genres: ['nonfiction', 'essays']
  },
  {
    title: 'Bone: The Complete Edition',
    authors: ['Jeff Smith'],
    rating: 4.42,
    genres: ['fiction', 'graphic novel', 'fantasy']
  },
  {
    title: 'American Gods',
    authors: ['Neil Gaiman'],
    rating: 4.11,
    genres: ['fiction', 'fantasy']
  },
  {
    title: 'A Gentleman in Moscow',
    authors: ['Amor Towles'],
    rating: 4.36,
    genres: ['fiction', 'historical fiction']
  },
  {
    title: 'The Name of the Wind',
    authors: ['Patrick Rothfuss'],
    rating: 4.54,
    genres: ['fiction', 'fantasy']
  },
  {
    title: 'The Overstory',
    authors: ['Richard Powers'],
    rating: 4.19,
    genres: ['fiction', 'short stories']
  },
  {
    title: 'The Way of Kings',
    authors: ['Brandon Sanderson'],
    rating: 4.65,
    genres: ['fantasy', 'epic']
  },
  {
    title: 'Lord of the flies',
    authors: ['William Golding'],
    rating: 3.67,
    genres: ['fiction']
  }
]

const fantasyGood = books.filter(book => book.rating > 4.3 && book.genres.includes('fantasy'))
const fantasyGood2 = books.filter(function(book){
    if(book.rating > 4.3 && book.genres.includes('fantasy'))
        return book;
})
const fantasyGood3 = books.filter(book =>(
    book.genres.includes('fantasy') ||
    book.genres.includes('epic')
))
```

## Every (not standard) and Some
* The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
* The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array.
```javascript
const isBelowThreshold = (currentValue) => currentValue < 40;
const array1 = [1, 30, 39, 29, 10, 13];
console.log(array1.every(isBelowThreshold)); // expected output: true

const array = [1, 2, 3, 4, 5];
// checks whether an element is even
const even = (element) => element % 2 === 0;
console.log(array.some(even));
// expected output: true
```

## Reduce
* The reduce() method executes a user-supplied ???reducer??? callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.

```javascript
// =============== Example =================
// user reduce to sum up an array
const array1 = [1, 2, 3, 4];
const reducer = (previousValue, currentValue) => previousValue + currentValue;
// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10
// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15

// =============== Example =================
// use reduce to find the maximum value in the array
const nums = [10, 8, 20, 19, 16, 3, 17, 6, 11, 5];
const reducer = (prev, curr) => (prev > curr) ? prev : curr;
// or as multiple line call back
// const reducer = (prev, curr) => {
//   if (prev > curr) {
//     return prev
//   } else
//     return curr;
// }
console.log(nums.reduce(reducer));

// =============== Example =================
// tally, counter
const votes = ['y','y','n','y','y','n','y','y','n','y','y','n','y','n','n'];
const result = votes.reduce((tally, curr) => {
  if(tally[curr])
    tally[curr]++;
  else
    tally[curr] = 1;
  return tally
}, {}) // initial value is an empty object

// a shorter way of doing it
const votes = ['y','y','n','y','y','n','y','y','n','y','y','n','y','n','n'];
const result = votes.reduce((tally, val) => {
  tally[val] = (tally[val] || 0) + 1;
  return tally
}, {})

// =============== Example =================
// get book ratings
const ratings = books.reduce((groupBooks, book) => {
  const key = Math.floor(book.rating)
  if(!groupBooks[key]){
    groupBooks[key] = [];
  }
  groupBooks[key].push(book);
  return groupBooks;
}, {})

// takeaway from the examples above,
const something = iterables.reduce((prev, curr) => {
  // do something
  // return some values as prev;
}, {}) // starts with empty object
```
