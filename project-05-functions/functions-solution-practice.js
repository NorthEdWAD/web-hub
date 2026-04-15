// Abraham Lincoln
// 14 APR 2026
// SOLUTION / Functions Practice

// Example 1
function introduceStudent(firstName, homeSchool) {
    // Use backticks (`) to create template strings (fill-in-the-blank sentences)
    return `My name is ${firstName} and my home school is ${homeSchool}.`;
}

// Call the function with two arguments
// Store the returned string in a variable named message
// Option 1
// Add arguments directly to function call
const message = introduceStudent("Mike", "TC Central"); 

// Option 2
const fName = "Mike";
const school = "TC Central";
// Use the alert() method to display the message in a pop-up window
const message = introduceStudent(fName, school);


alert(message);


// Example 2
function calculateTriangleArea(base, height) {
    // Calculate area of right triangle: (1/2) * base * height
    const area = (base * height) / 2;

    // Return the formatted template string
    return `My right triangle has a base of ${base} ft., a height of ${height} ft., and an area of ${area} sq. ft.`;
}

// Option 1: Call the function with 20 and 15 as arguments
const resultMessage = calculateTriangleArea(20, 15);

// Option 2: Assign arguments to variables, then use variables when calling function
const base = 20;
const height = 15;
const resultMessage = calculateTriangleArea(base, height);


// Display the result in a pop-up window
alert(resultMessage);

