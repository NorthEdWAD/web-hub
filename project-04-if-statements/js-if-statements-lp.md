# Lesson Plan: JavaScript IF Statements

## Course: Intermediate Web Design

## Duration: 4 days (90 minutes each day)

## Objective:
By the end of this lesson, students will be able to understand and implement conditional statements using `if`, `else if`, and `else` in JavaScript. They will also practice debugging and refining their code through paired programming and partner activities.

## Day 1: Introduction to IF Statements

### Activity 1: Quick Review (10 minutes)
- **Objective**: Refresh students' memory on basic JavaScript concepts.
- **Activity**: Quick quiz on variables, data types, and basic operators.

### Activity 2: Lecture (5 minutes)
- **Objective**: Introduce the concept of conditional statements.
- **Content**:
  - Explanation of `if` statements.
  - Syntax and basic examples.

### Activity 3: Paired Programming (30 minutes)
- **Objective**: Apply `if` statements in a simple scenario.
- **Task**: Students will work in pairs to write a JavaScript program that checks if a number is positive, negative, or zero.
- **Starter Snippet**:
```javascript
let number = 5; // Change this value to test different cases

if (number > 0) {
    console.log("The number is positive.");
} else if (number < 0) {
    console.log("The number is negative.");
} else {
    console.log("The number is zero.");
}
```

### Activity 4: Partner Discussion (20 minutes)
- **Objective**: Discuss and debug code.
- **Task**: Students will exchange their code with another pair and discuss any issues or improvements.

### Activity 5: Review (25 minutes)
- **Objective**: Summarize key points.
- **Activity**: Class discussion on what was learned and any challenges faced.

## Day 2: Nested IF Statements

### Activity 1: Quick Review (10 minutes)
- **Objective**: Recap Day 1's content.
- **Activity**: Quick quiz on `if` statements.

### Activity 2: Lecture (5 minutes)
- **Objective**: Introduce nested `if` statements.
- **Content**:
  - Explanation of nested `if` statements.
  - Syntax and examples.

### Activity 3: Coding Practice (30 minutes)
- **Objective**: Implement nested `if` statements.
- **Task**: Students will write a program that checks if a number is positive, negative, or zero, and then further categorizes positive numbers as even or odd.
- **Starter Snippet**:
```javascript
let number = 10; // Change this value to test different cases

if (number > 0) {
    if (number % 2 === 0) {
        console.log("The number is positive and even.");
    } else {
        console.log("The number is positive and odd.");
    }
} else if (number < 0) {
    console.log("The number is negative.");
} else {
    console.log("The number is zero.");
}
```

### Activity 4: Partner Activity (20 minutes)
- **Objective**: Collaborate and debug.
- **Task**: Students will work in pairs to refine their code and discuss any issues.

### Activity 5: Review (25 minutes)
- **Objective**: Summarize key points.
- **Activity**: Class discussion on nested `if` statements and any challenges faced.

## Day 3: Logical Operators in IF Statements

### Activity 1: Quick Review (10 minutes)
- **Objective**: Recap Day 2's content.
- **Activity**: Quick quiz on nested `if` statements.

### Activity 2: Lecture (5 minutes)
- **Objective**: Introduce logical operators in `if` statements.
- **Content**:
  - Explanation of `&&` (AND), `||` (OR), and `!` (NOT) operators.
  - Examples of using logical operators in `if` statements.

### Activity 3: Research Session (25 minutes)
- **Objective**: Explore real-world applications.
- **Task**: Students will research and find examples of logical operators in JavaScript code.

### Activity 4: Coding Practice (30 minutes)
- **Objective**: Implement logical operators in `if` statements.
- **Task**: Students will write a program that checks if a user is eligible for a discount based on age and membership status.
- **Starter Snippet**:
```javascript
let age = 25; // Change this value to test different cases
let isMember = true; // Change this value to test different cases

if (age >= 18 && isMember) {
    console.log("You are eligible for a member discount.");
} else if (age >= 18 && !isMember) {
    console.log("You are eligible for a standard discount.");
} else {
    console.log("You are not eligible for any discount.");
}
```

### Activity 5: Review (20 minutes)
- **Objective**: Summarize key points.
- **Activity**: Class discussion on logical operators and any challenges faced.

## Day 4: Review and Project

### Activity 1: Quick Review (10 minutes)
- **Objective**: Recap all previous days' content.
- **Activity**: Quick quiz on `if` statements, nested `if` statements, and logical operators.

### Activity 2: Project (60 minutes)
- **Objective**: Apply learned concepts in a real-world scenario.
- **Task**: Students will work in groups to create a simple web page that uses `if` statements to provide personalized content based on user input.
- **Starter Snippet**:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Personalized Content</title>
</head>
<body>
    <h1>Welcome to Our Website</h1>
    <input type="text" id="username" placeholder="Enter your name">
    <button onclick="greetUser()">Submit</button>
    <p id="greeting"></p>

    <script>
        function greetUser() {
            let username = document.getElementById('username').value;
            let greeting = document.getElementById('greeting');

            if (username) {
                greeting.textContent = `Hello, ${username}! Welcome to our website.`;
            } else {
                greeting.textContent = "Please enter your name.";
            }
        }
    </script>
</body>
</html>
```

### Activity 3: Presentation (10 minutes)
- **Objective**: Share and discuss projects.
- **Activity**: Each group will present their project and discuss any challenges they faced.

### Activity 4: Review (10 minutes)
- **Objective**: Summarize key points.
- **Activity**: Class discussion on the entire week's learning and any final questions.

