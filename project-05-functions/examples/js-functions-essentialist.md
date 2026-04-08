# 🟨 JavaScript Functions: What You Need to Know

> **For:** Beginning Web Design Students
> **Prerequisites:** HTML, CSS, `const`/`let`, variables, arrays, and array methods

---

## 📌 What Is a Function?

A **function** is a reusable block of code that performs a specific task. You write it once, then **call** (run) it whenever you need it — as many times as you want.

```javascript
// Define it once...
function greetStudent(name) {
  console.log(`Welcome to class, ${name}!`);
}

// ...call it as many times as you need
greetStudent("Maria");   // Output: Welcome to class, Maria!
greetStudent("James");   // Output: Welcome to class, James!
greetStudent("Aisha");   // Output: Welcome to class, Aisha!
```

---

## 🏛️ Traditional Functions

### Syntax

```javascript
function functionName(parameter) {
  // code to run
}
```

### Parameters and Return Values

A **parameter** is an input the function accepts. A **return value** is the result the function sends back.

```javascript
function addNumbers(a, b) {
  return a + b;
}

const total = addNumbers(5, 3);
console.log(total);  // Output: 8
```

Functions can accept multiple parameters and do more complex work:

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

---

## 🏹 Arrow Functions

Arrow functions are the **modern way** to write functions. The syntax is shorter, and you'll see them everywhere in real-world JavaScript.

### Syntax

```javascript
const functionName = (parameter) => {
  // code to run
};
```

### Single-Line Shorthand

If your function just returns a single value, you can skip the curly braces `{}` and the `return` keyword:

```javascript
// Full version
const addNumbers = (a, b) => {
  return a + b;
};

// Shorthand version — same result
const addNumbers = (a, b) => a + b;

console.log(addNumbers(5, 3));  // Output: 8
```

> 🔑 Arrow functions are stored in a `const` variable — just like other values you've already been working with.

---

## 🤝 Functions + Array Methods

This is where functions become truly powerful. The array methods you've already learned — `.forEach()`, `.map()`, and `.filter()` — all accept a function as input. Arrow functions make this syntax clean and concise.

### `.forEach()` — Do Something with Each Item

```javascript
const students = ["Maria", "James", "Aisha", "Devon"];

students.forEach(student => {
  console.log(`Hello, ${student}`);
});
```

### `.map()` — Transform Each Item into Something New

```javascript
const prices = [10, 25, 50, 100];

const withTax = prices.map(price => price * 1.10);

console.log(withTax);  // [11, 27.5, 55, 110]
```

### `.filter()` — Keep Only the Items That Match

```javascript
const scores = [45, 88, 72, 55, 93, 61];

const passingScores = scores.filter(score => score >= 70);

console.log(passingScores);  // [88, 72, 93]
```

---

## 🧪 Practice Challenges

**Challenge 1 — Traditional Function:**
Write a function called `calculateArea` that takes `width` and `height` as parameters and returns the area (width × height).

**Challenge 2 — Arrow Function:**
Rewrite your `calculateArea` function as an arrow function. Then try the single-line shorthand version.

**Challenge 3 — Arrays + Functions:**
Given the array `const colors = ["red", "blue", "green", "yellow", "purple"]`, use `.filter()` with an arrow function to return only the colors that have more than 4 letters.
