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

## Mouseover and Mouseout

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

## Drag

## Drop

## Scroll

## Key Press

## Focus/Blur

## Double Click

## Copying

## Pasting

## Screen Resize

## Print
