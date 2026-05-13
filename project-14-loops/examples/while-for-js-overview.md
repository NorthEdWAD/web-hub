# While and For Loops in JavaScript

## What Are Loops?

A **loop** lets you run the same code multiple times automatically. Instead of typing the same thing over and over, loops do it for you.

Imagine if you had to write "I will study JavaScript" 100 times. A loop would save you from typing it manually 100 times!

## Two Main Types of Loops

JavaScript has two main loop types:

- **While loops** - Run **as long as** (while) a condition is true
- **For loops** - Run a specific number of times

## While Loops

### The Basic Structure

```javascript
while (condition) {
	// Code runs as long as condition is true
}
```

### Simple Example: Countdown

```javascript
let count = 5;

while (count > 0) {
	console.log(count);
	count = count - 1;
}

console.log("Blast off!");
```

Output:

```
5
4
3
2
1
Blast off!
```

### How It Works

1. Check: Is `count > 0`? Yes (it's 5), so run the code
2. Print `5`, then make count smaller (now it's 4)
3. Check: Is `count > 0`? Yes (it's 4), so run the code again
4. Keep repeating until count becomes 0
5. Check: Is `count > 0`? No, so stop the loop
6. Print "Blastoff!"

### Real-World Example: Gaming Lives

```javascript
let lives = 3;

while (lives > 0) {
	console.log(`You have ${lives} lives left!`);
	lives = lives - 1;
}

console.log("Game Over!");
```

Output:

```
You have 3 lives left!
You have 2 lives left!
You have 1 lives left!
Game Over!
```

### Be Careful: Infinite Loops!

An **infinite loop** never stops. Avoid this:

```javascript
let count = 0;

while (count < 10) {
	console.log("Help, I'm stuck!");
	// Oops! count never changes, so this runs forever!
}
```

Always make sure your loop condition eventually becomes false!

## For Loops

For loops are perfect when you know exactly how many times you want to repeat something.

### The Basic Structure

```javascript
for (start; condition; change) {
	// Code runs repeatedly
}
```

Breaking it down:

- **start** - Set up a counter variable (like `let i = 0`)
- **condition** - Keep looping while this is true (like `i < 10`)
- **change** - Update the counter after each loop (like `i = i + 1`)

### Simple Example: Count from 1 to 5

```javascript
for (let i = 1; i <= 5; i = i + 1) {
	console.log(i);
}
```

Output:

```
1
2
3
4
5
```

### How It Works

1. **Start:** Set `i` to 1
2. **Check:** Is `i <= 5`? Yes, so run the code
3. Print `1`
4. **Change:** Make `i` bigger (`i = i + 1`, so now i = 2)
5. **Check:** Is `i <= 5`? Yes, so run the code again
6. Keep repeating until `i` becomes 6
7. **Check:** Is `i <= 5`? No, so stop

### Shorthand: The ++ Operator

Instead of `i = i + 1`, you can use `i++`:

```javascript
for (let i = 1; i <= 5; i++) {
	console.log(i);
}
```

`i++` means "add 1 to i" — it's just shorter to type!

### Real-World Example: Multiplication Table

```javascript
let number = 7;

for (let i = 1; i <= 10; i++) {
	let answer = number * i;
	console.log(`${number} x ${i} = ${answer}`);
}
```

Output:

```
7 x 1 = 7
7 x 2 = 14
7 x 3 = 21
... and so on up to...
7 x 10 = 70
```

### Real-World Example: Print a List

```javascript
for (let i = 0; i < 5; i++) {
	console.log(`Item ${i + 1}`);
}
```

Output:

```
Item 1
Item 2
Item 3
Item 4
Item 5
```

## For vs. While: When to Use Each

| Use For Loop When...                      | Use While Loop When...                    |
| ----------------------------------------- | ----------------------------------------- |
| You know exactly how many times to repeat | You repeat until a condition becomes true |
| Counting from one number to another       | Waiting for user input                    |
| Processing every item in a list           | Playing until someone wins                |
| Creating a fixed number of elements       | Checking if something has changed         |

## Practical Examples

### Example 1: Print Stars (For Loop)

```javascript
for (let i = 0; i < 5; i++) {
	console.log("⭐");
}
```

Output:

```
⭐
⭐
⭐
⭐
⭐
```

### Example 2: Ask Until Valid (While Loop)

```javascript
let isValid = false;

while (!isValid) {
	let age = prompt("How old are you?");

	if (age >= 13) {
		console.log("Welcome!");
		isValid = true;
	} else {
		console.log("You must be 13 or older.");
	}
}
```

This keeps asking until the user enters a valid age.

### Example 3: Sum Numbers (For Loop)

```javascript
let total = 0;

for (let i = 1; i <= 10; i++) {
	total = total + i;
}

console.log(`Sum of 1 to 10: ${total}`);
```

Output: `Sum of 1 to 10: 55`

## Common Loop Mistakes

**Mistake 1: Forgetting to update the counter**

```javascript
let i = 0;
while (i < 5) {
	console.log(i);
	// i never changes, so infinite loop!
}
```

**Mistake 2: Wrong comparison operator**

```javascript
for (let i = 1; i > 5; i++) {
	// i starts at 1 and i > 5 is false, so loop never runs!
}
```

**Mistake 3: Loop condition that's always true**

```javascript
while (true) {
	console.log("Forever!");
	// This runs forever unless you break out of it
}
```

## Other Loop Features

### Breaking Out of a Loop

Use `break` to exit a loop early:

```javascript
for (let i = 0; i < 10; i++) {
	if (i === 5) {
		console.log("Found it!");
		break; // Stop the loop
	}
	console.log(i);
}
```

Output:

```
0
1
2
3
4
Found it!
```

### Skipping to the Next Iteration

Use `continue` to skip the rest of the current loop and jump to the next one:

```javascript
for (let i = 0; i < 5; i++) {
	if (i === 2) {
		continue; // Skip when i is 2
	}
	console.log(i);
}
```

Output:

```
0
1
3
4
```

## Real-World Project: Building a Simple Countdown Timer

```javascript
let seconds = 10;

while (seconds > 0) {
	console.log(`${seconds} seconds remaining...`);
	seconds = seconds - 1;
}

console.log("Time's up!");
```

## Real-World Project: Creating a Pattern

```javascript
for (let row = 1; row <= 5; row++) {
	let pattern = "";
	for (let col = 1; col <= row; col++) {
		pattern = pattern + "* ";
	}
	console.log(pattern);
}
```

Output:

```
*
* *
* * *
* * * *
* * * * *
```

## Key Takeaways

- **While loops** repeat code as long as a condition is true
- **For loops** repeat code a specific number of times
- Always update your loop variable in a while loop to avoid **infinite loops**
- For loops have three parts: **start**, **condition**, and **change**
- Use `i++` as shorthand for `i = i + 1`
- Use a **for loop** when you know how many times to repeat
- Use a **while loop** when you repeat until something changes
- **Break** exits a loop early
- **Continue** skips to the next loop iteration
- Test your loops carefully to make sure they work as expected
- Remember: off-by-one errors are common (starting at 0 vs. 1, or using `<` vs. `<=`)
