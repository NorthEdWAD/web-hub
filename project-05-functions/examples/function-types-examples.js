// Traditional function 
// Using variables to send arguments to function
function calcProduct(num1, num2) {
    const myProduct = num1 * num2;
    return myProduct;
}

// Declare variables
const firstNum = 5;
const secondNum = 3;
// Call calcProduct ( ) function
const finalAnswer = calcProduct(firstNum, secondNum);
console.log(`${firstNum} times ${secondNum} is: ${finalAnswer}`);

// Define function that multiplies two numbers together
function multiplyTwoNumbers(num3, num4) {
    const answer = num3 * num4;
    return answer;
}

// Call the function and pass two arguments up to the function
const myAnswer = multiplyTwoNumbers(6, 4);
const outputString = `6 X 4 = ${myAnswer}`;
alert(outputString);


// Traditional function
function addTraditional(a, b) {
    return a + b;
}

// Function expression
const addExpression = function(a, b) {
    return a + b;
};

// Arrow function
const addArrow = (a, b) => a + b;

// Example usage
console.log(addTraditional(5, 3)); // Output: 8
console.log(addExpression(5, 3));   // Output: 8
console.log(addArrow(5, 3));        // Output: 8
