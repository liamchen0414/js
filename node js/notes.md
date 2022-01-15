# 1. Assertion Testing

> In Node, there are two different assertion modes, the first one is strict assertion mode and the second is legacy assertion mode

1. The key difference is that in strict assertion mode, error messages for objects display a diff, while in legacy assertion mode, error messages for objects display the objects, often truncated. An example is shown below

```javascript
// ================ strict mode =====================
const assert = require('assert/strict');
assert.deepEqual(1, 2);
AssertionError [ERR_ASSERTION]: Expected values to be strictly deep-equal:
1 !== 2

// ================ legacy mode =====================
const assert = require('assert');
assert.deepEqual(1, 2);
AssertionError [ERR_ASSERTION]: Expected values to be loosely deep-equal:
1 should loosely deep-equal 2
```

2. Whenever possible, use the strict assertion mode instead. Otherwise, the Abstract Equality Comparison may cause surprising results. This is especially true for assert.deepEqual(), where the comparison rules are lax:

```javascript
const assert = require("assert");
// WARNING: This does not throw an AssertionError!
assert.deepEqual("+00000000", false);
```

## 1.1 Assertion Error

> Indicates the failure of an assertion. All errors thrown by the assert module will be instances of the AssertionError class.

1. error is instanceof <code>assert.AssertionError</code>
2. error message has 3 parts <code>{
   actual: 1,
   expected: 2,
   operator: 'strictEqual'
   }</code>
3. name of the error is <code>'AssertionError'</code>

## 1.2 assert and assert.ok

<code>assert(value[, message])</code> is an alias of <code>assert.ok()</code>.

## 1.3 assert.deepStrictEqual() and assert.deepEqual()

<code>assert.deepEqual(actual, expected[, message])</code> is an alias of <code>assert.deepStrictEqual()</code>.

1. Primitive values are compared with the Abstract Equality Comparison ( == ) with the exception of NaN.

```javascript
const assert = require("assert");
// WARNING: This does not throw an AssertionError!
assert.deepEqual(0, false);
```

2. Type tags of objects should be the same.

```javascript
const assert = require("assert/strict");
class Animal {
  constructor(name, legs) {
    this.name = name;
    this.legs = legs;
  }
}

const dog1 = new Animal("dog", 4);
const dog2 = new Animal("dog", 4);

assert.deepStrictEqual(dog1, dog2);
```
