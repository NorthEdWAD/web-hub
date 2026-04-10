# Intro to JavaScript
## Functions Overview

<details>
<summary>Part 1: Making Predictions</summary>

Predict the output of the functions.
   ```javascript
// Example 1
function greetStudent(name) {
  console.log(`Welcome to our class, ${name}!`);
}

// Example 2

function calcSum(a, b) {
  return a + b;
}

const total = calcSum(5, 3);
console.log(total);  // What will the output be?


```
</details>

<details>
<summary>Part 2: Naming Your Functions</summary>

- Study the functions below
- Based on your observations, how should you name your JS functions?
  ```javascript
  // Example 1
  // Get WIDTH of rectangular room
function getWidth() {
    let width = parseFloat(prompt("Enter the width of the room:"));
    return width;
}

// Example 2
// Display output
function displayOutput(w, l, a) {
    console.log(`Room Dimensions: ${w} x ${l}`);
    console.log(`Total Area: ${a} square feet`);
    alert(`The area of the room is ${a} square feet.`);
}

// Example 3
function greetUser(firstName, membershipLevel) {
    const message = `Welcome back, ${firstName}! We see you are currently a ${membershipLevel} member.`;
    
    // Displaying the result
    console.log(message);
    // Or alert(message);
}

// Calling the function with different arguments
greetUser("Mikey", "Silver");
```


<details>
<summary>Part 3: Adding Your JavaScript</summary>

Text.
  ```javascript
 const lastName;
  ```

</details>


---
