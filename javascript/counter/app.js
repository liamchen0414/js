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
