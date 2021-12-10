# Section 7 Object
* use new object shorthand syntax
* use computed properties
* add methods to objects
* understand prototypes
* explain how .this keyword works

## Shorthand Properties
* don't have to double up variables and names
```javascript
const getStats = (arr) => {
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  const sum = arr.reduce((sum, r) => sum + r);
  const avg = sum / arr.length;
  // return {
  //   max: max,
  //   min: min,
  //   sum: sum,
  //   avg: avg
  // }
  return {
    max,
    min,
    sum,
    avg
  } //ES2015 feature
}
const reviews = [1,3,5,4,1,5,4,1,1];
const stats = getStats(reviews);
```

## computed properties
> ES6 allows you to use an expression in brackets []. It’ll then use the result of the expression as the property name of an object.
```javascript
const role = 'Host';
const person = 'Jools Holland';
const role2 = 'Director';
const person2 = 'James Cameron';
// this is what we do in the past
// we need to initiate the object first
// then use key value pair
// const team = {};
// team[role] = person;
// team[role2] = person2;

const team = {
  [role]: person,
  [role2]: person2
}
// NOT using computed properties
// function addProp(obj, k, v){
//   const copy = {...obj};
//   copy[k] = v;
//   return copy;
// }

// using computed properties
const addProp = (obj, k, v) => {
  return {
    ...obj,
    [k]: v
  }
}
```

## Adding Methods to Object
* we don't normally use arrow function to add methods
```javascript
const calculator = {
  add: function(x,y){
    return x + y
  },
  multiply: function(x,y){
    return x * y
  },
  minus: function(x,y){
    return x - y
  },
  divide: function(x,y){
    return x/y
  }
}

const dict = [
  {
    name: "Tom",
    password: 123
  },
  {
    name: "Liam",
    password: 345
  }
]

user =   {
  name: "Liam",
  password: 345
}

const auth = {
  name: "",
  login(someone) {
    const users = [...dict];
    let found = users.find(user => someone.name === user.name && someone.password === user.password);
    if(found){
      console.log(`Welcome ${someone.name} !`);
      this.name = someone.name;
    } else {
      console.log("Error: check your username or password");
    }
  },
  logout() {
    console.log(`Goodbye ${this.name}`);
  }
}

// auth.login(user)
// Welcome Liam !
// auth.logout()
// Goodbye Liam
```

## this keyword
> Window {window: Window, self: Window, document: document, name: '', location: Location, …}
* we add sayHi method to the Window object(global object)
* when we define variable using var = something, we are adding it to the window, let and const work differently
```javascript
function sayHi(){
  console.log("Hi");
  console.log(this);
}

const person = {
  first: 'Cherilyn',
  last: 'Sarkisian',
  nickName: 'Cher',
  fullName(){
    const {
      first: f,
      last: l,
      nickName: n
    } = this;
    console.log(f + l +  n); // refers to current object
  }
}
// this keyword lives in the function scope, if we refer this in the global scope, it will become the window
```
> arrow function doesn't have this(without using bind), traditional function has this
```javascript
laugh: () => {
    console.log(this);
    console.log(`${this.nickName} says haha`)
}
```

### Example1
```javascript
const annoyer = {
  phrases: ["literally", "cray cray", "I can't even", "Totes!", "YOLO", "Can't Stop, Won't Stop"],
  start(){
    this.pid = setInterval(() => {
      console.log(this.pick());
    }, 2000);
  },
  pick(){
    const index = Math.floor(Math.random() * this.phrases.length)
    return this.phrases[index];
  },
  stop(){
    clearInterval(this.pid);
  },
}

// annoyer.start()
// annoyer.stop()
```

### Example2
