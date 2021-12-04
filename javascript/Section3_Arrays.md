# Section 3 Arrays
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

```javascript
let list = [
    'water',
    'air',
    'sun',
    'land'
]

// two methods to find if a string array contains something
console.log(list.filter((value) => value.includes("wat")));
console.log(list.filter((value) => value.indexOf("air") >= 0));
// if the element is not in the array, found is undefined
const found = list.find(value => value.includes("why"));
console.log(found === undefined); // not found
console.log(found);
```



console.log(days.every((value) => typeof String)); // check if every element in array is a string