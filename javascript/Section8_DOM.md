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

### 8.2.2 Contents

innerHTML

value

parentElement

### 8.2.1 Common Properties and Methods
