# Section13 Prototype, OOPs and Classes

## 13.1 Prototypes

> JavaScript is often described as a prototype-based language — to provide inheritance, objects can have a prototype object, which acts as a template object that it inherits methods and properties from.An object's prototype object may also have a prototype object, which it inherits methods and properties from, and so on. This is often referred to as a prototype chain, and explains why different objects have properties and methods defined on other objects available to them.

1. methods such as array.push are stored in the "proto", which refers to the prototype of array
2. we can design our own prototype methods

```javascript
// add prototype method, .prototype is the actual object where we add methods, __proto__ is the reference to the object
String.prototype.yell = function () {
  console.log(this.toUpperCase());
};
```

## 13.2 OOPs

### 13.2.1 Factory Function

> It is not commonly used because each object has duplicate methods, refer to JAVA OOPs. We use constructor and methods to the class so methods are shared between objects in the same class

```javascript
function makeColor(r, g, b) {
  const color = {};
  color.r = r;
  color.g = g;
  color.b = b;
  color.rgb = function () {
    const { r, g, b } = this;
    return `rgb${r},${g},${b}`;
  };
  color.hex = function () {
    const { r, g, b } = this;
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  };
  return color;
}
```

### 13.2.2 Constructor Function

```javascript
function Color(r, g, b) {
  this.r = r;
  this.g = g;
  this.b = b;
}
```

## 13.1 Classes
