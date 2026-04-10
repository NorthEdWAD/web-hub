# Traditional JavaScript Functions

## What Is a Function?
A **function** is a reusable block of code that performs a task.  
Functions help keep your code organized and avoid repeating yourself.

---

## The `function` Keyword
Traditional JavaScript functions are created using the **`function`** keyword.

```js
function sayHello() {
  console.log("Hello!");
}
````

***

## Naming a Custom Function in JavaScript

Good function names:

*   Describe what the function does
*   Use **camelCase**
*   Start with a letter, `_`, or `$`
*   Are not JavaScript keywords

✅ Examples:

```js
function calculateScore() {}
function showMessage() {}
```

❌ Examples:

```js
function 123test() {}
function if() {}
```

***

## The Parameter List

**Parameters** are placeholders listed inside the parentheses when a function is defined.

```js
function greet(name) {
  console.log("Hello " + name);
}
```

*   `name` is a **parameter**
*   Multiple parameters are separated by commas

```js
function add(a, b) {
  return a + b;
}
```

***

## Parameters vs. Arguments

*   **Parameter**: A variable listed in the function definition
*   **Argument**: The actual value passed to the function when it is called

```js
function greet(name) {   // name = parameter
  console.log("Hi " + name);
}

greet("Jordan");         // "Jordan" = argument
```

***

## The Function Body

The **function body** is the code inside `{ }`.  
This is where the function does its work.

```js
function square(num) {
  let result = num * num;
  return result;
}
```

***

## Returning a Value from a Function

Use the **`return`** keyword to send a value back to where the function was called.

```js
function double(number) {
  return number * 2;
}
```

*   After `return`, the function stops running
*   The returned value can be stored in a variable

```js
let answer = double(5);
```

***

## How to Call a Function

Defining a function does **not** run it.  
You must **call** it using its name and parentheses.

```js
sayHello();
greet("Taylor");
let total = add(4, 6);
```

***

## Returning a Number vs. Returning a String Template

### Returning a Numeric Value

```js
function calculateTotal(price, tax) {
  return price + tax;
}

let total = calculateTotal(10, 2); // returns number: 12
```

### Returning a String Template

```js
function getGreeting(name) {
  return `Welcome, ${name}!`;
}

let message = getGreeting("Sam"); // returns string
```

✅ Numbers are useful for math  
✅ Strings (including template literals) are useful for messages displayed on a webpage

***

## Key Takeaways

*   Use the `function` keyword to define traditional functions
*   Use clear, descriptive function names
*   Parameters receive data; arguments send data
*   The function body contains the instructions
*   Use `return` to send values back
*   Functions must be called to run

```

