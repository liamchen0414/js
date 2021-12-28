# Section 8 DOM

> Document Object Model, is the javascrpt representation of a webpage. It is your JS portal into the contents of a webpage.

## 8.1 Element Selector

- the document is the root of the tree. All the elements are nested in document
- document has references to all the other objects under "document.all"

### 8.1.1 getElementById

> The Document method getElementById() returns an Element object representing the element whose id property matches the specified string. Since element IDs are required to be unique if specified, they're a useful way to get access to a specific element quickly.

- Unlike some other element-lookup methods such as Document.querySelector() and Document.querySelectorAll(), getElementById() is only available as a method of the global document object, and not available as a method on all element objects in the DOM.

```html
<html>
  <head>
    <title>getElementById example</title>
  </head>
  <body>
    <p id="para">Some text here</p>
    <button onclick="changeColor('blue');">blue</button>
    <button onclick="changeColor('red');">red</button>
  </body>
</html>
```

```javascript
function changeColor(newColor) {
  var elem = document.getElementById("para");
  elem.style.color = newColor;
}
```

### 8.1.2 getElementsByTagName

> The Element.getElementsByTagName() method returns a live HTMLCollection of elements with the given tag name.

```javascript
// Check the status of each data cell in a table
const table = document.getElementById("forecast-table");
const cells = table.getElementsByTagName("td");

for (let cell of cells) {
  let status = cell.getAttribute("data-status");
  if (status === "open") {
    // Grab the data
  }
}
```

```javascript
// Change the background color of all <p> elements in the document:

var x = document.getElementsByTagName("P");
var i;
for (i = 0; i < x.length; i++) {
  x[i].style.backgroundColor = "red";
}
```

### 8.1.3 getElementsByClassName

> The getElementsByClassName method of Document interface returns an array-like object of all child elements which have all of the given class name(s).

```javascript
// Change the background color of all elements with class="example":
var x = document.getElementsByClassName("example");
var i;
for (i = 0; i < x.length; i++) {
  x[i].style.backgroundColor = "red";
}
```

### 8.1.4 querySelector

> The Document method querySelector() returns the first Element within the document that matches the specified selector, or group of selectors. If no matches are found, null is returned.

```javascript
element = document.querySelector(selectors);
// for example
var el = document.querySelector(".myclass");
// a more complex selector
var el = document.querySelector("div.user-panel.main input[name='login']");
var el = document.querySelector(
  "div.user-panel:not(.main) input[name='login']"
);
// Get the first <p> element in the document with class="example":
document.querySelector("p.example");
// Change the text of an element with id="demo":
document.querySelector("#demo").innerHTML = "Hello World!";
// Get the first <a> element in the document that has a "target" attribute:
document.querySelector("a[target]");
```

## 8.2 Manipulation

### 8.2.1 Contents

- textContents is all text contained by an element and all its children that are for formatting purposes only.
- innerText returns all text contained by an element and all its child elements.
- innerHtml returns all text, including html tags, that is contained by an element.

### 8.2.2 Form and values

```html
<form action="">
  <input type="text" placeholder="Name" />
  <input type="password" placeholder="Password" />
  <input type="checkbox" />
  <input type="range" min="100" max="500" />
  <input type="submit" />
</form>
```

```javascript
document.querySelectorAll("input");
const inputs = document.querySelectorAll("input");
inputs[0].value; // the value of username
inputs[1].value; // the value of password
inputs[2].checked; // the value of checkbox
document.querySelector("h1").querySelector("a").href =
  "http://www.google.com.au";
document.querySelector("h1").innerText; // get the text
```

### 8.2.3 Get and Set Attributes

> let attribute = element.getAttribute(attributeName);

The getAttribute() method of the Element interface returns the value of a specified attribute on the element.

> Element.setAttribute(name, value)

Sets the value of an attribute on the specified element. If the attribute already exists, the value is updated; otherwise a new attribute is added with the specified name and value.

```javascript
const range = document.querySelector('input[type="range]');
range.getAttribute("max");
range.getAttribute("min");
range.setAttribute("min", 1000);
```

### 8.2.4 Parent Element, Children Element and Siblings

1. You can use .parentElement and .children[index] to traverse the object tree
2. we can use .nextElementSibling and .previousElementSibling to traverse in the same object level

### 8.2.5 Style Property

1. Style property to read existing styles won't work unless styles are defined inline
2. Style property is camel cased if more than one word in javascript
3. However it is not a good way to figure out the style and set the style
4. Inline style has higher order than other style decorations

### 8.2.6 getComputedStyle

```javascript
const li = document.querySelector("li");
const styles = getComputedStyle(li); // this returns all the CSS properties
li.style.color = "pink"; // styles.color is now changed
```

### 8.2.7 apply style using class

> when we want to reuse a property to some elements, we can define a new class and add that class to the classList.

```javascipt

```

### 8.3 create elements

> we need to either appendChild an element to a parent or parent.insertBefore(whatToInsert, whereToInsert)

```javascript
// add a header
const newh2 = document.createElement("h2");
newh2.classList.add("cssStyle");
const section = document.querySelector("section");
section.appendChild(newh2); // append to the end of the parent

// add an image
const img = document.createElement("img");
img.src = "www.google.com.au";
img.style.width = "300px";
document.body.appendChild(img);

// add a video
const video = document.createElement("a");
video.innerText = "myVideo";
video.href = "www.youtube.com";
const firstP = document.querySelector;
firstP.appendChild(video);

insertBefore(newNode, referenceNode);
// Get the parent element
let parentElement = document.getElementById("parentElement");
// Get the parent's first child
let theFirstChild = parentElement.firstChild;
// Create a new element
let newElement = document.createElement("div");
// Insert the new element before the first child
parentElement.insertBefore(newElement, theFirstChild);
```

> A better method is to use append and prepend

```javascript
let div = document.createElement("div");
let p = document.createElement("p");
let span = document.createElement("span");
div.append(p);
div.prepend(span);

console.log(div.childNodes); // NodeList [ <span>, <p> ]
```

### 8.4 Remove Elements

> The removeChild() method of the Node interface removes a child node from the DOM and returns the removed node.

```javascript
// To remove a specified element when knowing its parent node:
let d = document.getElementById("top");
let d_nested = document.getElementById("nested");
let throwawayNode = d.removeChild(d_nested);

// To remove a specified element without having to specify its parent node:
let node = document.getElementById("nested");
if (node.parentNode) {
  node.parentNode.removeChild(node);
}
// To remove all children from an element:
let element = document.getElementById("top");
while (element.firstChild) {
  element.removeChild(element.firstChild);
}
```

> The Element.remove() method removes the element from the tree it belongs to.

```javascript
var el = document.getElementById("div-02");
el.remove(); // Removes the div with the 'div-02' id
```
