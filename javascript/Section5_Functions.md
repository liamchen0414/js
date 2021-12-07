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