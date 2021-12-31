// const colors = [
//   "red",
//   "orange",
//   "yellow",
//   "green",
//   "blue",
//   "purple",
//   "indigo",
//   "violet",
// ];

// const printColor = function (e) {
//   console.log(e);
//   const h1 = document.querySelector("h1");
//   h1.style.color = this.style.backgroundColor;
// };

// const container = document.querySelector("#boxes");

// for (let color of colors) {
//   const box = document.createElement("div");
//   box.style.backgroundColor = color;
//   box.classList.add("box");
//   container.appendChild(box);
//   box.addEventListener("click", printColor);
// }

// document.body.addEventListener("keypress", function (e) {
//   console.log(e.key);
// });

//======================  key  =========================//
// const input = document.querySelector("#username");
// input.addEventListener("keydown", function (e) {
//   console.log("Key Down!");
// });

// input.addEventListener("keyup", function (e) {
//   console.log("Key Up!");
// });

// // key press is only shown when the input box has letter, space etc
// // return is a key press, we want to use this to check user input
// // delete is not a key press
// input.addEventListener("keypress", function (e) {
//   console.log("Key Pressed!");
// });

/*
 * 1. detect user input from the box
 * 2. add the input to document as li
 * 3. attach the li to ul
 */

const add = document.querySelector("#add");
const number = document.querySelector("#number");
const item = document.querySelector("#item");
const ul = document.querySelector("#list");
add.addEventListener("click", function (e) {
  if (number.value == 0) {
    alert("Can't add item with 0 number to shopping list");
    return null;
  }
  let li = document.createElement("li");
  li.textContent = number.value + " x " + item.value;
  ul.appendChild(li);
  number.value = 0;
});

function increaseValue() {
  var value = parseInt(document.getElementById("number").value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById("number").value = value;
}

function decreaseValue() {
  var value = parseInt(document.getElementById("number").value, 10);
  value = isNaN(value) ? 0 : value;
  value < 1 ? (value = 1) : "";
  value--;
  document.getElementById("number").value = value;
}
