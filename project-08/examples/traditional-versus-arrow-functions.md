## JavaScript Functions 
### Traditional & Arrow Functions Compared

**NOTE:** Most of the time, use a traditional JavaScript function.  You should only write your function as an arrow function when your **traditional function** is a very simple function.


### Explanation:
- **Function 1**: Demonstrates a function with no parameters. Both versions return a simple greeting.
- **Function 2**: Shows a function with one parameter. Both versions calculate the square of the input number.
- **Function 3**: Illustrates a function with two parameters. Both versions add the two input numbers and return the result.

---

```javascript
// Function 1: Takes no parameters
// Traditional function
function greet() {
  return "Hello, world!";
}
// Arrow function equivalent
const greetArrow = () => {
  return "Hello, world!";
};

// Function 2: Takes one parameter named number
// Traditional function
function square(number) {
  return number * number;
}
// Arrow function equivalent
const squareArrow = (number) => {
  return number * number;
};

// Function 3: Takes two parameters (num1 and num2)
// Traditional function
function addNumbers(num1, num2) {
  return num1 + num2;
}
// Arrow function equivalent
const addNumbersArrow = (num1, num2) => {
  return num1 + num2;
};
```


