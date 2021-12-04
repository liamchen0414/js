# Section 2: Logic and Conditions
note: when doing javascript code development, the javascript file cannot be open directly by the browser to run it, we need to include js file in html file header field. 
```javascript
<script src = "app.js"></script>
```
## Include javascript in html
* The location of the javascript file is important, at the moment we don't care about the location because we are not interacting with js. We are not adding, deleting, or doing any events on the page. However, in later part of the course, if you are doing large scale project and sometimes some elements depend on the locatin of your javascipt.

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <script src = "app.js"></script> <!-- // this is the link to javascript file -->
    <!-- <link rel="stylesheet" href="app.css"> -->
</head>
```
## Print things to console from js
```javascript
alert("It is working!"); // poping up a window with message
console.log(3+4); // just like print statement
console.error("Oh No"); // this will show an error message, similar style to built-in js error, often used for debugging
```

## If, Else if, Else, and Switch Statement
* Use if to specify a block of code to be executed, if a specified condition is true
* Use else to specify a block of code to be executed, if the same condition is false
* Use else if to specify a new condition to test, if the first condition is false
* Use switch to specify many alternative blocks of code to be executed
```javascript
if (condition) {
    // some code here
} else {
    // some code here
}
```
* The switch statement is used to perform different actions based on different conditions.
```javascript
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
     day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}
```

* if javacript, we often use truthy and falsy to check values. We only use this to check whether it is empty. For example, for a login system, we can do
```javascript
let user = "thomas";
if(user){
    console.log(`Welcome ${user}!`);
} else {
    console.log("Please log in!");
}
```

## Logical Operators (&&, ||, !)
* Using Logical Operators with Non-Boolean Values
In JavaScript, the logical operators have different semantics than other C-like languages, though. They can operate on expressions of any type, not just booleans. Also, the logical operators do not always return a boolean value
```javascript
// Two strings will return the later
"foo" && "bar"; // "bar"
"bar" && "foo"; // "foo"
"foo" && ""; // ""
"" && "foo"; // ""

let num = '0';
console.log(num);
if(num >= 0 && num <= 100){
    console.log('Number is between 1 and 10');
} else {
    console.log('not in range');
}
// it will print 'Number is between 1 and 10'
```
* double exclamation mark changes the variable to boolean
```javascript
let str = "liam";
console.log(typeof str);
let bool = !!str;
console.log(typeof bool);

console.log("foo" === new String("foo"));
console.log(new String("foo") === new String("foo"));
console.log("foo" == new String("foo"));
console.log(new String("foo") == new String("foo"));
// false, false, true, false
// the first one is false because "foo" is a string primitive and String("foo") is an object. The third one is correct because "foo" is evaluated as as String("foo"))
// the second is false, when comparing objects, === will return true only if they refer to the same object (comparing by reference). Similarly, 4 is false because they are two different objects.
```
> Output of above code: string, boolean.

## Order of Operation
Commonly used operations:
* Grouping (())
* Not (!)
* Multiplication (*)
* Division (/)
* Modulus (%)
* Addition (+)
* Subtraction (-)
* Less than (<)
* Less than or equal (<=)
* Greater than (>)
* Greater than or equal (>=)
* Equal (=)
* Not equal (!=)
* Strict equal (===)
* Strict not equal (!==)
* And (&&)
* Or (||)
* Assignment (=)

<table class="fullwidth-table">
  <tbody>
    <tr>
      <th>Precedence</th>
      <th>Operator type</th>
      <th>Associativity</th>
      <th>Individual operators</th>
    </tr>
    <tr>
      <td>19</td>
      <td><a href="/en-US/docs/Web/JavaScript/Reference/Operators/Grouping">Grouping</a></td>
      <td>n/a</td>
      <td>( … )</td>
    </tr>
    <tr>
      <td rowspan="5">18</td>
      <td><a href="/en-US/docs/Web/JavaScript/Reference/Operators/Property_Accessors#dot_notation">Member Access</a></td>
      <td>left-to-right</td>
      <td>… . …</td>
    </tr>
    <tr>
      <td><a href="/en-US/docs/Web/JavaScript/Reference/Operators/Property_Accessors#bracket_notation">Computed Member
                Access</a></td>
      <td>left-to-right</td>
      <td>… [ … ]</td>
    </tr>
    <tr>
      <td><a href="/en-US/docs/Web/JavaScript/Reference/Operators/new">new</a> (with argument list)</td>
      <td>n/a</td>
      <td>new … ( … )</td>
    </tr>
    <tr>
      <td><a href="/en-US/docs/Web/JavaScript/Guide/Functions">Function Call</a></td>
      <td>left-to-right</td>
      <td>… ( <var>… </var>)</td>
    </tr>
    <tr>
      <td><a href="/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining">Optional chaining</a></td>
      <td>left-to-right</td>
      <td>?.</td>
    </tr>
    <tr>
      <td>17</td>
      <td><a href="/en-US/docs/Web/JavaScript/Reference/Operators/new">new</a> (without argument list)</td>
      <td>right-to-left</td>
      <td>new …</td>
    </tr>
    <tr>
      <td rowspan="2">16</td>
      <td><a href="/en-US/docs/Web/JavaScript/Reference/Operators#increment_and_decrement">Postfix
                Increment</a></td>
      <td rowspan="2">n/a</td>
      <td>… ++</td>
    </tr>
    <tr>
      <td><a href="/en-US/docs/Web/JavaScript/Reference/Operators#increment_and_decrement">Postfix
                Decrement</a></td>
      <td>… --</td>
    </tr>
    <tr>
      <td rowspan="10">15</td>
      <td><a href="/en-US/docs/Web/JavaScript/Reference/Operators/Logical_NOT">Logical NOT (!)</a></td>
      <td rowspan="10">right-to-left</td>
      <td>! …</td>
    </tr>
    <tr>
      <td><a href="/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_NOT">Bitwise NOT (~)</a></td>
      <td>~ …</td>
    </tr>
    <tr>
      <td><a href="/en-US/docs/Web/JavaScript/Reference/Operators/Unary_plus">Unary plus (+)</a></td>
      <td>+ …</td>
    </tr>
    <tr>
      <td><a href="/en-US/docs/Web/JavaScript/Reference/Operators/Unary_negation">Unary negation (-)</a></td>
      <td>- …</td>
    </tr>
    <tr>
      <td><a href="/en-US/docs/Web/JavaScript/Reference/Operators#increment_and_decrement">Prefix
                Increment</a></td>
      <td>++ …</td>
    </tr>
    <tr>
      <td><a href="/en-US/docs/Web/JavaScript/Reference/Operators#increment_and_decrement">Prefix
                Decrement</a></td>
      <td>-- …</td>
    </tr>
    <tr>
      <td><a href="/en-US/docs/Web/JavaScript/Reference/Operators/typeof">typeof</a></td>
      <td>typeof …</td>
    </tr>
    <tr>
      <td><a href="/en-US/docs/Web/JavaScript/Reference/Operators/void">void</a></td>
      <td>void …</td>
    </tr>
    <tr>
      <td><a href="/en-US/docs/Web/JavaScript/Reference/Operators/delete">delete</a></td>
      <td>delete …</td>
    </tr>
    <tr>
      <td><a href="/en-US/docs/Web/JavaScript/Reference/Operators/await">await</a></td>
      <td>await …</td>
    </tr>
    <tr>
      <td>14</td>
      <td><a href="/en-US/docs/Web/JavaScript/Reference/Operators/Exponentiation">Exponentiation (**)</a></td>
      <td>right-to-left</td>
      <td>… ** …</td>
    </tr>
    <tr>
      <td rowspan="3">13</td>
      <td><a href="/en-US/docs/Web/JavaScript/Reference/Operators/Multiplication">Multiplication (*)</a></td>
      <td rowspan="3">left-to-right</td>
      <td>… * …</td>
    </tr>
    <tr>
      <td><a href="/en-US/docs/Web/JavaScript/Reference/Operators/Division">Division (/)</a></td>
      <td>… / …</td>
    </tr>
    <tr>
      <td><a href="/en-US/docs/Web/JavaScript/Reference/Operators/Remainder">Remainder (%)</a></td>
      <td>… % …</td>
    </tr>
    <tr>
      <td rowspan="2">12</td>
      <td><a href="/en-US/docs/Web/JavaScript/Reference/Operators/Addition">Addition (+)</a></td>
      <td rowspan="2">left-to-right</td>
      <td>… + …</td>
    </tr>
    <tr>
      <td><a href="/en-US/docs/Web/JavaScript/Reference/Operators/Subtraction">Subtraction (-)</a></td>
      <td>… - …</td>
    </tr>
    <tr>
      <td rowspan="3">11</td>
      <td><a href="/en-US/docs/Web/JavaScript/Reference/Operators/Left_shift">Bitwise Left Shift (&lt;&lt;)</a></td>
      <td rowspan="3">left-to-right</td>
      <td>… &lt;&lt; …</td>
    </tr>
    <tr>
      <td><a href="/en-US/docs/Web/JavaScript/Reference/Operators/Right_shift">Bitwise Right Shift (&gt;&gt;)</a></td>
      <td>… &gt;&gt; …</td>
    </tr>
    <tr>
      <td><a href="/en-US/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift">Bitwise Unsigned Right Shift (&gt;&gt;&gt;)</a></td>
      <td>… &gt;&gt;&gt; …</td>
    </tr>
    <tr>
      <td rowspan="6">10</td>
      <td><a href="/en-US/docs/Web/JavaScript/Reference/Operators/Less_than">Less Than (&lt;)</a></td>
      <td rowspan="6">left-to-right</td>
      <td>… &lt; …</td>
    </tr>
    <tr>
      <td><a href="/en-US/docs/Web/JavaScript/Reference/Operators/Less_than_or_equal">Less Than Or Equal (&lt;=)</a></td>
      <td>… &lt;= …</td>
    </tr>
    <tr>
      <td><a href="/en-US/docs/Web/JavaScript/Reference/Operators/Greater_than">Greater Than (&gt;)</a></td>
      <td>… &gt; …</td>
    </tr>
    <tr>
      <td><a href="/en-US/docs/Web/JavaScript/Reference/Operators/Greater_than_or_equal">Greater Than Or Equal (&gt;=)</a></td>
      <td>… &gt;= …</td>
    </tr>
    <tr>
      <td><a href="/en-US/docs/Web/JavaScript/Reference/Operators/in">in</a></td>
      <td>… in …</td>
    </tr>
    <tr>
      <td><a href="/en-US/docs/Web/JavaScript/Reference/Operators/instanceof">instanceof</a></td>
      <td>… instanceof …</td>
    </tr>
    <tr>
      <td rowspan="4">9</td>
      <td><a href="/en-US/docs/Web/JavaScript/Reference/Operators/Equality">Equality (==)</a></td>
      <td rowspan="4">left-to-right</td>
      <td>… == …</td>
    </tr>
    <tr>
      <td><a href="/en-US/docs/Web/JavaScript/Reference/Operators/Inequality">Inequality (!=)</a></td>
      <td>… != …</td>
    </tr>
    <tr>
      <td><a href="/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality">Strict Equality (===)</a></td>
      <td>… === …</td>
    </tr>
    <tr>
      <td><a href="/en-US/docs/Web/JavaScript/Reference/Operators/Strict_inequality">Strict Inequality (!==)</a></td>
      <td>… !== …</td>
    </tr>
    <tr>
      <td>8</td>
      <td><a href="/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_AND">Bitwise AND (&amp;)</a></td>
      <td>left-to-right</td>
      <td>… &amp; …</td>
    </tr>
    <tr>
      <td>7</td>
      <td><a href="/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR">Bitwise XOR (^)</a></td>
      <td>left-to-right</td>
      <td>… ^ …</td>
    </tr>
    <tr>
      <td>6</td>
      <td><a href="/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_OR">Bitwise OR (|)</a></td>
      <td>left-to-right</td>
      <td>… | …</td>
    </tr>
    <tr>
      <td>5</td>
      <td><a href="/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND">Logical AND (&amp;&amp;)</a></td>
      <td>left-to-right</td>
      <td>… &amp;&amp; …</td>
    </tr>
    <tr>
      <td rowspan="2">4</td>
      <td><a href="/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR">Logical OR (||)</a></td>
      <td>left-to-right</td>
      <td>… || …</td>
    </tr>
    <tr>
      <td><a href="/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator">Nullish coalescing operator (??)</a></td>
      <td>left-to-right</td>
      <td>… ?? …</td>
    </tr>
    <tr>
      <td>3</td>
      <td><a href="/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator">Conditional (ternary) operator</a></td>
      <td>right-to-left</td>
      <td>… ? … : …</td>
    </tr>
    <tr>
      <td rowspan="18">2</td>
      <td rowspan="16"><a href="/en-US/docs/Web/JavaScript/Reference/Operators#assignment_operators">Assignment</a></td>
      <td rowspan="16">right-to-left</td>
      <td>… = …</td>
    </tr>
    <tr>
      <td>… += …</td>
    </tr>
    <tr>
      <td>… -= …</td>
    </tr>
    <tr>
      <td>… **= …</td>
    </tr>
    <tr>
      <td>… *= …</td>
    </tr>
    <tr>
      <td>… /= …</td>
    </tr>
    <tr>
      <td>… %= …</td>
    </tr>
    <tr>
      <td>… &lt;&lt;= …</td>
    </tr>
    <tr>
      <td>… &gt;&gt;= …</td>
    </tr>
    <tr>
      <td>… &gt;&gt;&gt;= …</td>
    </tr>
    <tr>
      <td>… &amp;= …</td>
    </tr>
    <tr>
      <td>… ^= …</td>
    </tr>
    <tr>
      <td>… |= …</td>
    </tr>
    <tr>
      <td>… &amp;&amp;= …</td>
    </tr>
    <tr>
      <td>… ||= …</td>
    </tr>
    <tr>
      <td>… ??= …</td>
    </tr>
    <tr>
      <td><a href="/en-US/docs/Web/JavaScript/Reference/Operators/yield">yield</a></td>
      <td rowspan="2">right-to-left</td>
      <td>yield …</td>
    </tr>
    <tr>
      <td><a href="/en-US/docs/Web/JavaScript/Reference/Operators/yield*">yield*</a></td>
      <td>yield* …</td>
    </tr>
    <tr>
      <td>1</td>
      <td><a href="/en-US/docs/Web/JavaScript/Reference/Operators/Comma_Operator">Comma / Sequence</a></td>
      <td>left-to-right</td>
      <td>… , …</td>
    </tr>
  </tbody>
</table>

## Equality Comparison
The comparison in javascript is different from other programming languages. The below table summaries most of the commonly seen comparisons.

<table>
  <thead>
    <tr>
      <th>x</th>
      <th>y</th>
      <th>==</th>
      <th>===</th>
      <th>Object.is</th>
      <th>SameValueZero</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>undefined</td>
      <td>undefined</td>
      <td>✅ true</td>
      <td>✅ true</td>
      <td>✅ true</td>
      <td>✅ true</td>
    </tr>
    <tr>
      <td>null</td>
      <td>null</td>
      <td>✅ true</td>
      <td>✅ true</td>
      <td>✅ true</td>
      <td>✅ true</td>
    </tr>
    <tr>
      <td>true</td>
      <td>true</td>
      <td>✅ true</td>
      <td>✅ true</td>
      <td>✅ true</td>
      <td>✅ true</td>
    </tr>
    <tr>
      <td>false</td>
      <td>false</td>
      <td>✅ true</td>
      <td>✅ true</td>
      <td>✅ true</td>
      <td>✅ true</td>
    </tr>
    <tr>
      <td>'foo'</td>
      <td>'foo'</td>
      <td>✅ true</td>
      <td>✅ true</td>
      <td>✅ true</td>
      <td>✅ true</td>
    </tr>
    <tr>
      <td>0</td>
      <td>0</td>
      <td>✅ true</td>
      <td>✅ true</td>
      <td>✅ true</td>
      <td>✅ true</td>
    </tr>
    <tr>
      <td>+0</td>
      <td>-0</td>
      <td>✅ true</td>
      <td>✅ true</td>
      <td>❌ false</td>
      <td>✅ true</td>
    </tr>
    <tr>
      <td>+0</td>
      <td>0</td>
      <td>✅ true</td>
      <td>✅ true</td>
      <td>✅ true</td>
      <td>✅ true</td>
    </tr>
    <tr>
      <td>-0</td>
      <td>0</td>
      <td>✅ true</td>
      <td>✅ true</td>
      <td>❌ false</td>
      <td>✅ true</td>
    </tr>
    <tr>
      <td>0n</td>
      <td>-0n</td>
      <td>✅ true</td>
      <td>✅ true</td>
      <td>✅ true</td>
      <td>✅ true</td>
    </tr>
    <tr>
      <td>0</td>
      <td>false</td>
      <td>✅ true</td>
      <td>❌ false</td>
      <td>❌ false</td>
      <td>❌ false</td>
    </tr>
    <tr>
      <td>""</td>
      <td>false</td>
      <td>✅ true</td>
      <td>❌ false</td>
      <td>❌ false</td>
      <td>❌ false</td>
    </tr>
    <tr>
      <td>""</td>
      <td>0</td>
      <td>✅ true</td>
      <td>❌ false</td>
      <td>❌ false</td>
      <td>❌ false</td>
    </tr>
    <tr>
      <td>'0'</td>
      <td>0</td>
      <td>✅ true</td>
      <td>❌ false</td>
      <td>❌ false</td>
      <td>❌ false</td>
    </tr>
    <tr>
      <td>'17'</td>
      <td>17</td>
      <td>✅ true</td>
      <td>❌ false</td>
      <td>❌ false</td>
      <td>❌ false</td>
    </tr>
    <tr>
      <td>[1, 2]</td>
      <td>'1,2'</td>
      <td>✅ true</td>
      <td>❌ false</td>
      <td>❌ false</td>
      <td>❌ false</td>
    </tr>
    <tr>
      <td>new String('foo')</td>
      <td>'foo'</td>
      <td>✅ true</td>
      <td>❌ false</td>
      <td>❌ false</td>
      <td>❌ false</td>
    </tr>
    <tr>
      <td>null</td>
      <td>undefined</td>
      <td>✅ true</td>
      <td>❌ false</td>
      <td>❌ false</td>
      <td>❌ false</td>
    </tr>
    <tr>
      <td>null</td>
      <td>false</td>
      <td>❌ false</td>
      <td>❌ false</td>
      <td>❌ false</td>
      <td>❌ false</td>
    </tr>
    <tr>
      <td>undefined</td>
      <td>false</td>
      <td>❌ false</td>
      <td>❌ false</td>
      <td>❌ false</td>
      <td>❌ false</td>
    </tr>
    <tr>
      <td>{ foo: 'bar' }</td>
      <td>{ foo: 'bar' }</td>
      <td>❌ false</td>
      <td>❌ false</td>
      <td>❌ false</td>
      <td>❌ false</td>
    </tr>
    <tr>
      <td>new String('foo')</td>
      <td>new String('foo')</td>
      <td>❌ false</td>
      <td>❌ false</td>
      <td>❌ false</td>
      <td>❌ false</td>
    </tr>
    <tr>
      <td>0</td>
      <td>null</td>
      <td>❌ false</td>
      <td>❌ false</td>
      <td>❌ false</td>
      <td>❌ false</td>
    </tr>
    <tr>
      <td>0</td>
      <td>NaN</td>
      <td>❌ false</td>
      <td>❌ false</td>
      <td>❌ false</td>
      <td>❌ false</td>
    </tr>
    <tr>
      <td>'foo'</td>
      <td>NaN</td>
      <td>❌ false</td>
      <td>❌ false</td>
      <td>❌ false</td>
      <td>❌ false</td>
    </tr>
    <tr>
      <td>NaN</td>
      <td>NaN</td>
      <td>❌ false</td>
      <td>❌ false</td>
      <td>✅ true</td>
      <td>✅ true</td>
    </tr>
  </tbody>
</table>
