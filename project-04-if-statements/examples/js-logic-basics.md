# Intro to JavaScript 
## Day 1: The Logic Gate (If/Else Basics)

### 1. The Core Concept
In JavaScript, an `if` statement tells the computer to only run a block of code **IF** a specific condition is true. If the condition is false, the computer skips that code entirely.

### 2. The Anatomy of an If Statement

```javascript
if (condition) {
  // The "Action" code goes here
  // This only runs if the condition is TRUE
}
```

* **Parentheses `()`**: These hold the "Question" or "Condition."
* **Curly Braces `{}`**: These act as a container for the "Action."

---

### 3. Comparison Operators
To ask a question in JavaScript, we use special symbols:

| Symbol | Meaning | Example |
| :--- | :--- | :--- |
| `===` | Is exactly equal to | `choice === "pizza"` |
| `!==` | Is **NOT** equal to | `color !== "red"` |
| `>` | Is greater than | `age > 16` |
| `<` | Is less than | `temp < 32` |
| `>=` | Greater than or equal to | `score >= 60` |

> **⚠️ Watch Out:** Always use **three** characters for equality (`===`) or inequality (`!==`). A single `=` is only for assigning a value to a variable!

---

### 4. The "Not Equal" Operator (`!==`)
Sometimes it is easier to check if something is **wrong** or **missing**. The `!==` operator returns `true` if the two values do **not** match.

**Example:**
```javascript
let response = "No";

if (response !== "Yes") {
  console.log("Access denied! You must say Yes to enter!");
}
```

---

### 5. Adding an "Else" (The Backup Plan)
If you want the computer to do something else when the condition is false, use an `else` block.

```javascript
let userRole = "guest";

if (userRole === "admin") {
  console.log("Welcome, boss!");
} else {
  console.log("Welcome, guest!");
}
```

---

### 6. Today's Lab: The Gatekeeper
**Task:** Create a variable called `ticketsSold`. 
1. If `ticketsSold` is 100 or more, log "The show is sold out!"
2. Otherwise, log "Tickets are still available!"

**Bonus Challenge (The Inequality Check):** Create a variable called `currentDay`. Write an `if` statement using `!==` that logs "Go to work!" if the day is **not** "Saturday".
```