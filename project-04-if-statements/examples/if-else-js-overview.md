# If-Else Statements in JavaScript

## What Are If-Else Statements?

An **if-else statement** lets your code make decisions. Instead of running the same code every time, you can tell JavaScript to do different things based on whether something is true or false.

Think of it like a real-world decision: "If it's raining, bring an umbrella. Otherwise (else), wear sunscreen."

## The Basic Structure

```javascript
if (condition) {
	// Code runs if the condition is true
} else {
	// Code runs if the condition is false
}
```

## Simple Example

```javascript
let age = 16;

if (age >= 16) {
	console.log("You can drive!");
} else {
	console.log("You need to wait a few more years.");
}
```

This code checks if `age` is 16 or older. Since it is, the message "You can drive!" will print.

## Using Comparison Operators

To create conditions, you need **comparison operators**:

| Operator | Meaning               | Example          |
| -------- | --------------------- | ---------------- |
| `==`     | Equal to              | `5 == 5` (true)  |
| `!=`     | Not equal to          | `5 != 3` (true)  |
| `>`      | Greater than          | `10 > 5` (true)  |
| `<`      | Less than             | `3 < 10` (true)  |
| `>=`     | Greater than or equal | `5 >= 5` (true)  |
| `<=`     | Less than or equal    | `3 <= 10` (true) |

## Real-World Example: Grade Calculator

```javascript
let testScore = 85;

if (testScore >= 90) {
	console.log("You got an A!");
} else {
	console.log("Keep studying!");
}
```

## Adding More Conditions with Else If

What if you need to check more than just two possibilities? Use **else if**:

```javascript
let grade = 78;

if (grade >= 90) {
	console.log("A - Excellent!");
} else if (grade >= 80) {
	console.log("B - Good job!");
} else if (grade >= 70) {
	console.log("C - Passing grade");
} else {
	console.log("F - You need to retake this");
}
```

This code checks multiple conditions in order. As soon as one is true, it stops checking and runs that code.

## Combining Conditions with AND/OR

Sometimes you need to check **multiple conditions** at the same time.

### Using AND (`&&`)

Both conditions must be true:

```javascript
let age = 16;
let hasLicense = true;

if (age >= 16 && hasLicense) {
	console.log("You can drive!");
} else {
	console.log("Not yet.");
}
```

### Using OR (`||`)

At least one condition must be true:

```javascript
let isSaturday = true;
let isSunday = false;

if (isSaturday || isSunday) {
	console.log("It's the weekend!");
} else {
	console.log("Time for school.");
}
```

## Practical Example: Username Validation

```javascript
let username = "alex_2024";

if (username.length >= 5) {
	console.log("Username is valid!");
} else {
	console.log("Username must be at least 5 characters long.");
}
```

## Common Mistakes to Avoid

**Wrong:** Using `=` (assignment) instead of `==` (comparison)

```javascript
if (age = 16) {  // This sets age to 16, doesn't check!
```

**Right:** Using comparison operators

```javascript
if (age == 16) {  // This checks if age equals 16
```

**Wrong:** Missing curly braces

```javascript
if (age >= 16) console.log("You can drive!");
console.log("Have fun!"); // Always runs!
```

**Right:** Using curly braces to group code

```javascript
if (age >= 16) {
	console.log("You can drive!");
	console.log("Have fun!");
}
```

## Key Takeaways

- **If-else statements** let your code make decisions based on conditions
- Use **comparison operators** (`>`, `<`, `==`, `!=`, etc.) to create true/false tests
- **Else if** lets you check multiple conditions in a row
- Use **&&** (AND) when you need all conditions to be true
- Use **||** (OR) when you need at least one condition to be true
- Always use **curly braces** `{}` to group your code blocks
- Remember: `=` is for assignment, `==` is for comparison
