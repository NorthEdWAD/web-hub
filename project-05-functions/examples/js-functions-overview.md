# 🟨 JavaScript Functions: A Beginner's Guide

> **For:** Beginning Web Design Students
> **Prerequisites:** HTML, CSS, `const`/`let`, variables, arrays, and array methods

---

## 📌 What Is a Function?

A **function** is a reusable block of code that performs a specific task. Instead of writing the same code over and over, you write it once inside a function and then **call** (run) it whenever you need it.

Think of a function like a recipe 🍪 — you write the steps once and follow them every time you bake.

### Why Use Functions?

- ♻️ **Reusability** — Write code once, use it many times
- 📦 **Organization** — Break big problems into smaller, manageable pieces
- 🐛 **Easier Debugging** — Fix one function instead of hunting through all your code
- 📖 **Readability** — Well-named functions make code easier to understand

---

## 🏛️ Traditional Functions (Function Declarations)

### What They Look Like

```javascript
function greetStudent(name) {
  console.log(`Welcome to class, ${name}!`);
}
```

### Breaking Down the Syntax

| Part | Example | What It Does |
|---|---|---|
| `function` keyword | `function` | Tells JavaScript you're creating a function |
| Function name | `greetStudent` | How you'll refer to it later |
| Parameters | `(name)` | Inputs the function accepts (like variables) |
| Function body | `{ ... }` | The code that runs when called |

### Calling (Running) a Function

You **define** a function once, then **call** it as many times as you want:

```javascript
greetStudent("Maria");   // Output: Welcome to class, Maria!
greetStudent("James");   // Output: Welcome to class, James!
greetStudent("Aisha");   // Output: Welcome to class, Aisha!
```

### Parameters vs. Arguments

These two words are related but mean slightly different things:

- **Parameter** — The placeholder variable in the function definition: `name`
- **Argument** — The actual value you pass in when calling: `"Maria"`

```javascript
// "name" is the PARAMETER (a placeholder)
function greetStudent(name) {
  console.log(`Hello, ${name}`);
}

// "Maria" is the ARGUMENT (the real value)
greetStudent("Maria");
```

### Functions That Return a Value

Functions can also **return** a result using the `return` keyword. This means the function produces a value you can store or use:

```javascript
function addNumbers(a, b) {
  return a + b;
}

const total = addNumbers(5, 3);
console.log(total);  // Output: 8
```

> ⚠️ Once JavaScript hits a `return` statement, the function stops running. Any code after `return` is ignored.

### Multiple Parameters

Functions can accept more than one parameter, separated by commas:

```javascript
function describeProduct(name, price, inStock) {
  console.log(`${name} costs $${price}`);
  if (inStock) {
    console.log("This item is available!");
  } else {
    console.log("Sorry, out of stock.");
  }
}

describeProduct("Headphones", 49.99, true);
```

### 🌟 Hoisting — A Unique Feature of Function Declarations

Traditional function declarations are **hoisted**, meaning JavaScript moves them to the top of your code behind the scenes. This means you can call a traditional function *before* it appears in your code:

```javascript
// This works even though the function is defined below!
sayHello();

function sayHello() {
  console.log("Hello!");
}
```

---

## 🏹 Arrow Functions (Modern JavaScript)

Arrow functions are a **newer, shorter** way to write functions. They were introduced in ES6 (2015) and are very commonly used in modern JavaScript, especially with arrays.

### What They Look Like

```javascript
const greetStudent = (name) => {
  console.log(`Welcome to class, ${name}!`);
};
```

### The Basic Arrow Function Pattern

```
const functionName = (parameters) => {
  // code to run
};
```

> 🔑 Notice: Arrow functions are stored in a `const` variable (just like you've done with other values!)

### Calling an Arrow Function

Calling an arrow function works exactly the same as a traditional function:

```javascript
greetStudent("Maria");  // Output: Welcome to class, Maria!
```

### Shorthand: Single-Line Arrow Functions

If your function only has **one line that returns a value**, you can write it even more compactly — skip the curly braces `{}` and the `return` keyword:

```javascript
// Full version
const addNumbers = (a, b) => {
  return a + b;
};

// Shorthand version (same result!)
const addNumbers = (a, b) => a + b;

console.log(addNumbers(5, 3));  // Output: 8
```

### Shorthand: Single Parameter

If your arrow function only has **one parameter**, you can even skip the parentheses around it:

```javascript
// With parentheses (always works)
const double = (num) => num * 2;

// Without parentheses (works with exactly one parameter)
const double = num => num * 2;

console.log(double(6));  // Output: 12
```

---

## ⚖️ Traditional vs. Arrow Functions: Side-by-Side Comparison

```javascript
// Traditional Function
function multiply(a, b) {
  return a * b;
}

// Arrow Function (full version)
const multiply = (a, b) => {
  return a * b;
};

// Arrow Function (shorthand)
const multiply = (a, b) => a * b;

// All three work the same way:
console.log(multiply(4, 5));  // Output: 20
```

### Quick Comparison Table

| Feature | Traditional Function | Arrow Function |
|---|---|---|
| Syntax | `function name() {}` | `const name = () => {}` |
| Hoisting | ✅ Yes (can call before defining) | ❌ No (must define first) |
| Shorthand available | ❌ No | ✅ Yes (for single-line returns) |
| Common use | General purpose, named functions | Callbacks, array methods |
| Stored in variable | Optional | Yes (typically `const`) |

---

## 🤝 Functions + Arrays: A Perfect Match

Since you've already learned about arrays and array methods, here's where arrow functions really shine! Array methods like `.map()`, `.filter()`, and `.forEach()` all accept a function as an argument. These are called **callback functions**.

### `.forEach()` — Do Something with Each Item

```javascript
const students = ["Maria", "James", "Aisha", "Devon"];

// Traditional function version
students.forEach(function(student) {
  console.log(`Hello, ${student}`);
});

// Arrow function version (cleaner!)
students.forEach(student => {
  console.log(`Hello, ${student}`);
});
```

### `.map()` — Transform Each Item into Something New

```javascript
const prices = [10, 25, 50, 100];

// Add 10% tax to every price
const withTax = prices.map(price => price * 1.10);

console.log(withTax);  // [11, 27.5, 55, 110]
```

### `.filter()` — Keep Only the Items That Match

```javascript
const scores = [45, 88, 72, 55, 93, 61];

// Keep only passing scores (70 and above)
const passingScores = scores.filter(score => score >= 70);

console.log(passingScores);  // [88, 72, 93]
```

> 💡 Notice how arrow functions make the code with array methods short and easy to read!

---

## 🧪 Practice Challenges

Try these on your own to check your understanding!

**Challenge 1 — Traditional Function:**
Write a function called `calculateArea` that takes a `width` and `height` as parameters and returns the area (width × height). Call it with a few different values.

**Challenge 2 — Arrow Function:**
Rewrite your `calculateArea` function as an arrow function. Try both the full version and the shorthand version.

**Challenge 3 — Arrays + Functions:**
Given the array `const colors = ["red", "blue", "green", "yellow", "purple"]`, use `.filter()` with an arrow function to return only the colors that have more than 4 letters.

---

## 🗝️ Key Vocabulary Review

| Term | Definition |
|---|---|
| **Function** | A reusable block of code that performs a specific task |
| **Function declaration** | The traditional way to define a function using the `function` keyword |
| **Arrow function** | A modern, shorter way to write a function using `=>` |
| **Parameter** | A placeholder variable listed in the function definition |
| **Argument** | The actual value passed into a function when it is called |
| **Return value** | The result a function sends back using the `return` keyword |
| **Calling a function** | Running a function by writing its name followed by `()` |
| **Callback function** | A function passed as an argument to another function (like array methods) |
| **Hoisting** | JavaScript's behavior of moving function declarations to the top before code runs |

---

## 💬 Things to Remember

> ✅ **Both types of functions do the same basic job** — run reusable code. The syntax is just different.

> ✅ **Arrow functions don't replace traditional functions** — you'll see both in real projects, so know them both!

> ✅ **Arrow functions are especially popular with array methods** — you'll use them together all the time.

> ✅ **When in doubt, start with a traditional function** — then refactor to an arrow function for practice.
