# Section 4 Loops
1. for - loops through a block of code a number of times
2. for/in - loops through the properties of an object
3. for/of - loops through the values of an iterable object
4. while - loops through a block of code while a specified condition is true
5. do/while - also loops through a block of code while a specified condition is true

## 1. Simple Loop
```javascript
for(let i = 0; i < 10; i++){
    console.log("hello world", i);
}

for(let num = 1; num <= 20; num++){
    console.log(`${num}x${num} = ${num*num}`);
}

// ======= EXAMPLE ==========
const myStudents = [
	{
		firstName : 'Zeus',
		grade     : 86
	},
	{
		firstName : 'Artemis',
		grade     : 97
	},
	{
		firstName : 'Hera',
		grade     : 72
	},
	{
		firstName : 'Apollo',
		grade     : 90
	}
];

// Averaging all grades in myStudents array
let total = 0; //total will hold the sum of all grades

for (let i = 0; i < myStudents.length; i++) {
	let student = myStudents[i];
	total += student.grade; //add each grade to total
}
console.log(total / myStudents.length); //divide by number of students

```

## 2. Nested Loop
```javascript
for(let i = 0; i < 10; i++){
    for(let i = 0; i < 10; i++){
        console.log("hello");
    }
}
```

## 3. While loop
```javascript
let num = 0;
while(num < 10){
    console.log(`${num} square = ${num*num}`);
    num++;
}

const secret = 42;
let guesses = 0;

while(guesses < 10){
    let ran = Math.floor(Math.random() * 100)
    if(ran == secret){
        console.log("You are right");
        break;
    } else{
        console.log(`${ran}: wrong guess`);
    }
    guesses++;
}
```

## 4. For Of and For In
**for of wants iterable, for in wants object**
### 4.1 For Of Loop
```javascript
let reddits = ['unsw', 'uts', 'usyd'];

for(let sub of reddits){
    console.log(sub);
}　
// for(variable of iterable){
//     statement
// }
// iterating throught object
const movieRiview= {
    Arrival     : 9.5,
    Alien       : 9,
    Amelie      : 8,
    Adameus     : 10,
    "Kill Bill" : 8,
    'Little'    : 7
}

for(let x of Object.keys(movieRiview)){
    console.log(x, movieRiview[x]); // when we want to access values in object we use square brackets
}

const ratings = Object.values(movieRiview);
let total = 0;
for(let r of ratings){
    total += r;
}
let average = total/ratings.length;
console.log(average);
```

### 4.2 For in Loop
```javascript
const jeopardyWinnings= {
    regularPlay     : 2522700,
    watsonChallenge : 300000,
    tournament      : 500000,
    battle          : 100000,
}

// for(variable in object){
//     statement
// }

// for in loop over the keys
for(let key in jeopardyWinnings){
    console.log(key, jeopardyWinnings[key])
}
```
