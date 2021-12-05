# Section 4 Loops

## Simple Loop
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

## Nested Loop
```javascript
for(let i = 0; i < 10; i++){
    for(let i = 0; i < 10; i++){
        console.log("hello");
    }
}