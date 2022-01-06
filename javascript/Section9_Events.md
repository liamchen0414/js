# Section 9 Events

https://developer.mozilla.org/en-US/docs/Web/Events

## 9.1 Two ways NOT to add events

1. inline events
2. add a function in js file to trigger events

## 9.2 addEventListener

```javascript
const button = document.querySelector("h1");
button.addEventListern("click", function () {
  alert("clicked!!!");
});
```

## Click

A simple counter event increase on click

```javascript
// set inital value to zero
let count = 0;
// select value and buttons
const value = document.querySelector("#value");
const btn = document.querySelector(".increase");
const reset = document.querySelector(".reset");

btn.addEventListener("click", function () {
  count++;
  value.textContent = count;
});

reset.addEventListener("click", function () {
  count = 0;
  value.textContent = count;
});
```

## Key Press

```javascript
// logic that detects if two images in the dom are overlapping
function isTouching(a, b) {
  const aRect = a.getBoundingClientRect(); // get the boundary of object a
  const bRect = b.getBoundingClientRect(); // get the boundary of object b

  return !(
    aRect.top + aRect.height < bRect.top ||
    aRect.top > bRect.top + bRect.height ||
    aRect.left + aRect.width < bRect.left ||
    aRect.left > bRect.left + bRect.width
  );
}

const avatar = document.querySelector("#player");
const coin = document.querySelector("#coin");
let counter = 0;
window.addEventListener("keyup", function (e) {
  const currTop = extractPos(avatar.style.top);
  const currLeft = extractPos(avatar.style.left);
  if (e.key.includes("Down")) {
    avatar.style.top = `${currTop + 50}px`;
  } else if (e.key.includes("Up") && currTop >= 50) {
    avatar.style.top = `${currTop - 50}px`;
  } else if (e.key.includes("Right")) {
    avatar.style.left = `${currLeft + 50}px`;
    avatar.style.transform = "scale(1,1)";
  } else if (e.key.includes("Left") && currLeft >= 50) {
    avatar.style.left = `${currLeft - 50}px`;
    avatar.style.transform = "scale(-1,1)";
  }
  if (isTouching(avatar, coin)) {
    counter++;
    console.log(counter);
    moveCoin();
  }
});

const extractPos = (pos) => {
  if (!pos) return 0;
  return parseInt(pos.slice(0, -2));
};

const moveCoin = () => {
  const x = Math.floor(Math.random() * window.innerHeight * 0.5);
  const y = Math.floor(Math.random() * window.innerWidth * 0.5);
  coin.style.top = `${y}px`;
  coin.style.left = `${x}px`;
};
moveCoin();

// to make game good on the browser, we want to use canvas
```

## Example: Form

```html
<body>
  <form id="sign-up" action="/Nooooo" method="get">
    <input type="text" placeholder="credit card" id="cc" />
    <label>
      I agree to sell my soul to your company
      <input type="checkbox" id="terms" />
    </label>
    <select name="" id="veggie">
      <option value="Eggplant">Eggplant</option>
      <option value="Asparagus">Asparagus</option>
      <option value="Carrot">Carrot</option>
    </select>
    <input type="submit" />
  </form>
  <script src=" app.js"></script>
</body>
```

```javascript
const form = document.querySelector("#sign-up");
const cc = document.querySelector("#cc");
const terms = document.querySelector("#terms");
const veggie = document.querySelector("#veggie");

form.addEventListener("submit", function (e) {
  alert("test");
  console.log("cc", cc.value);
  console.log("terms", terms.checked);
  console.log("veggie", veggie.value);
  e.preventDefault(); // this stops the action of get request
});
```

## Listen to input/changes in form

- we want to keep on synching the data when user are typing

```javascript
const form = document.querySelector("#sign-up");
const cc = document.querySelector("#cc");
const terms = document.querySelector("#terms");
const veggie = document.querySelector("#veggie");

cc.addEventListener("input", (e) => {
  console.log(e.target.value);
});

veggie.addEventListener("input", (e) => {
  console.log(e.target.value);
});

terms.addEventListener("input", (e) => {
  console.log(e.target.checked);
});
```

- however, we can also use the callback to combine everything above

```javascript
const formData = {};
for (let input of [cc, terms, veggie]) {
  input.addEventListener("input", (e) => {
    formData[e.target.name] =
      e.target.name != "terms" ? e.target.value : e.target.checked;
  });
}
```

> difference between input and change event, input updates the data whenever we change the data, change blurs out input when losing focus
