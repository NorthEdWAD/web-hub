# JavaScript Switch Statements

## What Is a Switch Statement?

A **switch statement** is another way to make decisions in your JS code. It's really useful when you need to check if a value matches one of several options.

Think of it like a menu: "What size pizza do you want? Small? Medium? Large? Extra Large?"

Switch statements are cleaner and easier to read than using lots of `else if` statements.

## The Basic Structure

```javascript
switch (expression) {
	case value1:
		// Code runs if expression equals value1
		break;
	case value2:
		// Code runs if expression equals value2
		break;
	default:
	// Code runs if no cases match
}
```

**Important:** Don't forget the `break;` statement! It stops the switch from checking more cases.

## Simple Example: Pizza Size

```javascript
let size = "medium";

switch (size) {
	case "small":
		console.log("That's $8.99");
		break;
	case "medium":
		console.log("That's $11.99");
		break;
	case "large":
		console.log("That's $14.99");
		break;
	default:
		console.log("We don't have that size!");
}
```

Output: `That's $11.99`

## Why Use Switch Instead of If-Else?

Compare these two approaches:

### Using If-Else (Gets messy!)

```javascript
let day = "Monday";

if (day === "Monday") {
	console.log("Start of the work week!");
} else if (day === "Tuesday") {
	console.log("Keep grinding!");
} else if (day === "Wednesday") {
	console.log("Halfway through!");
} else if (day === "Thursday") {
	console.log("Almost there!");
} else if (day === "Friday") {
	console.log("It's Friday!");
} else {
	console.log("It's the weekend!");
}
```

### Using Switch (Much cleaner!)

```javascript
let day = "Monday";

switch (day) {
	case "Monday":
		console.log("Start of the work week!");
		break;
	case "Tuesday":
		console.log("Keep grinding!");
		break;
	case "Wednesday":
		console.log("Halfway through!");
		break;
	case "Thursday":
		console.log("Almost there!");
		break;
	case "Friday":
		console.log("It's Friday!");
		break;
	default:
		console.log("It's the weekend!");
}
```

Much easier to read!

## The Default Case

The `default` case is like "else" in an if-else statement. It runs if none of the cases match:

```javascript
let color = "purple";

switch (color) {
	case "red":
		console.log("Stop!");
		break;
	case "yellow":
		console.log("Caution!");
		break;
	case "green":
		console.log("Go!");
		break;
	default:
		console.log("That's not a traffic light color.");
}
```

Output: `That's not a traffic light color.`

## Real-World Example: Student Grade Message

```javascript
let grade = "B";

switch (grade) {
	case "A":
		console.log("Excellent work! You're a star student!");
		break;
	case "B":
		console.log("Great job! Keep it up!");
		break;
	case "C":
		console.log("Good effort. Study a bit more next time.");
		break;
	case "D":
		console.log("You passed, but focus on improvement.");
		break;
	case "F":
		console.log("Let's talk to your teacher about tutoring.");
		break;
	default:
		console.log("I don't recognize that grade.");
}
```

Output: `Great job! Keep it up!`

## What Happens Without Break?

If you forget `break;`, the code will keep running into the next case. This is called **fall-through**:

```javascript
let fruit = "apple";

switch (fruit) {
	case "apple":
		console.log("You picked an apple");
	// Oops, forgot break!
	case "banana":
		console.log("You picked a banana");
		break;
	case "orange":
		console.log("You picked an orange");
		break;
}
```

Output:

```
You picked an apple
You picked a banana
```

It prints both lines! Usually you don't want this, so remember your `break;` statements.

## Using Switch with Numbers

Switch statements work great with numbers too:

```javascript
let month = 12;

switch (month) {
	case 1:
		console.log("January");
		break;
	case 12:
		console.log("December");
		break;
	default:
		console.log("Some other month");
}
```

Output: `December`

## Switch vs. If-Else: When to Use Each

| Use Switch When...                        | Use If-Else When...                      |
| ----------------------------------------- | ---------------------------------------- |
| Checking one variable against many values | Testing different conditions             |
| All cases are about equality              | Using `>`, `<`, `&&`, `\|\|` operators   |
| You want cleaner, more readable code      | You need to test ranges or complex logic |
| You have 3+ cases to check                | You have 1-2 simple conditions           |

## Key Takeaways

- **Switch statements** check if a value matches one of several options
- Use a **case** for each possible value you want to check
- Always use **break;** at the end of each case (unless you want fall-through)
- Use **default** as a catch-all when none of the cases match
- Switch statements are cleaner and easier to read than many `else if` statements
- Each `case` checks for **equality** (does it equal this value?)
- Forgetting `break;` causes your code to keep running into the next case
