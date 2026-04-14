// Traditional function 
// Using variables to send arguments to function

// VER 1.0 
function calcProduct(num1, num2) {
    // myProduct stores result of calculation
    const myProduct = num1 * num2;
    // Return (send back) the value stored in the myProduct variabld
    return myProduct;
}


// VER 2.0
function calcProduct(num1, num2) {
    // Return result of calculation directly to line in script where function was called from
    return myProduct = num1 * num2;
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
