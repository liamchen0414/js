# Section 10 Promosies, Requests, & Async

## 10.1 Call Stack

> callstack: the mechanism the JS interpreter uses to keep track of its place in a script that calls multiple functions. JS knows what function is currently being run and what functions are called from within that function, like bookmark to book

> When a script calls a function, the interpreter adds it to the call stack and then starts carrying out the function, anyfunctions that are called by that function are added to the call stack further up, and run where their calls are reached. When the current function is finished, the interpreter takes it off the stack and resumes execution where it left off in the last code listening

> under sources in chrome, we can set breakpoints and see how stack works, we can step throught the stack and check values

## 10.1.1 JS Event Loop

> Each JS engine generally follows this procedure:

1. Execute your JS top down, registering any handlers
2. Wait for events in a loop
3. If an event comes and there is a handler for it, execute the handler to completion
4. repeat 2 ad infinitum

## 10.2 JS is single threaded

> JavaScript is single threaded, meaning that two bits of script cannot run at the same time; they have to run one after another. In browsers, JavaScript shares a thread with a load of other stuff that differs from browser to browser. But typically JavaScript is in the same queue as painting, updating styles, and handling user actions (such as highlighting text and interacting with form controls). Activity in one of these things delays the others.

```javascript
console.log("I happen first");
alert("you need to finish me before another task");
console.log("I happen second");
```

## 10.3 How Asynchronous callsback work

> the browser does the work, browser is usually written in C++. Browsers come with web APIs that are able to handle certain tasks in the background, when JS call stack recognises these web API functions and passes them off to the browser to take care of. Once the browser finishes these tasks, they return and are pushed to the stack as a callback

```javascript
const btn = document.querySelector("button");
/*
setTimeout(() => {
  btn.style.transform = "translateX(100px)";
  // we should always use transform to
}, 1000);
*/
const moveX = (element, amount, delay, successCallback, failCallback) => {
  setTimeout(() => {
    const maxX = document.body.clientWidth();
    const dimensions = element.getBoundingClientRect();
    const currentRight = dimensions.x + dimensions.width;
    if (currentRight + amount > maxX) {
      failCallback();
    } else {
      element.style.transform = `translateX(${currentRight + amount}px)`;
      successCallback();
    }
  }, delay);
};
```

> however, nesting becomes an issue for the callback, a simple program above can have a few levels of nesting and it makes things very messy

## 10.3.1 Client-Server and AJAX model

- Client-side: interactivy + responsiveness = low latency is most important, minimise latency, asynchronously fetch data as needed("lazy loading" - load minimal amount of elements initially)
- Server-side: need to handle at least thousands of requests, maximising throughput, scale to handling millions of requests per second by asynchronous event processing
- AJAX: Asynchronous, javascript and XML/HTML, set of techniques to create asynchronous webapps

## 10.3.2 Concurrency models

1. cooperative mode: tasks that need to be done are queued up and executed in a loop, good for IO intensive workloads
2. preemptive mode: code runs in parallel on different cpu cores, good for CPU intensive workloads

## 10.4 Promises

> A promise is a returned object to which you attach callbacks, instead of passing callbacks into a function, every promise passes in two results, resolve and reject(can be named differently)

```javascript
const willGetYouADog = new Promise((resolve, reject) => {}); // Promise{<pending>}
// implementation
const willGetYouADog = new Promise((resolve, reject) => {
  const rand = Math.random();
  if (rand < 0.5) {
    resolve();
  } else {
    reject();
  }
});
willGetYouADog
  .then(() => {
    console.log("Dog is called Bubble");
  })
  .catch(() => {
    console.log("Sorry, no dog");
  });
```

## 10.4.1 Promises Chaining

```javascript
const fakeRequest = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const pages = {
        "/users": [
          { id: 1, username: "bob" },
          { id: 2, username: "ann" },
        ],
        "/about": "This is about page",
      };
      const data = pages[url];
      if (data) {
        resolve({ status: 200, data });
      } else {
        reject({ status: 404 });
      }
    }, 1000);
  });
};
fakeRequest("/users")
  .then((res) => {
    console.log(res.status);
    console.log(res.data);
    console.log("it worked");
  })
  .catch((res) => {
    console.log(res.status);
    console.log("ofcoz it failed");
  });
```
