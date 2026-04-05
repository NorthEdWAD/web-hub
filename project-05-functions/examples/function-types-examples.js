
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