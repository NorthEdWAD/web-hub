# 🌐 JavaScript Variable Scope Basics

_How variables "see" each other in your code!_

---

## 🔍 What is Scope?

Scope determines **where a variable can be accessed** in your code.
Think of it like a **room**—variables declared in one room (scope) may not be visible in another.

---

## 🏷️ Types of Scope

| Scope Type      | Description                                | Example                                              |
| --------------- | ------------------------------------------ | ---------------------------------------------------- |
| **Global** 🌍   | Accessible **everywhere**                  | `let globalVar = "I'm everywhere!";`                 |
| **Function** 🏠 | Accessible **only inside a function**      | `function myFunc() { let localVar = "Only here!"; }` |
| **Block** 🧱    | Accessible **inside `{ }` (if/for/while)** | `if (true) { let blockVar = "Here!"; }`              |

---

## 🚦 Key Rules

1. **Global variables** can be used anywhere.

    ```javascript
    let name = "Alex"; // Global
    function greet() {
    	console.log("Hello, " + name); // ✅ Works!
    }
    ```

2. **Local variables** (inside functions) **cannot** be used outside.

    ```javascript
    function sayHi() {
    	let secret = "Shh!"; // Local
    }
    console.log(secret); // ❌ Error: secret is not defined!
    ```

3. **Block-scoped variables** (with `let`/`const`) **die** after the block ends.
    ```javascript
    if (true) {
    	let mood = "Happy"; // Block-scoped
    }
    console.log(mood); // ❌ Error: mood is not defined!
    ```

---

## 🧪 Try It Yourself!

```javascript
let outside = "I'm global!";

function testScope() {
	let inside = "I'm local!";
	console.log(outside); // ✅ Works
	console.log(inside); // ✅ Works
}
testScope();
console.log(inside); // ❌ Error: inside is not defined!
```

---

## 💡 Pro Tips

✔️ **Use the keywords `let`/`const`** (helps eliminate bugs in your code).
✔️ Declare variables **as close as possible** to where they’re used in your script.
✔️ Use functions/modules instead of global variables

---

## 📌 Summary Table

- What is **variable hoisting** anyway?

**Variable hoisting** is like when your teacher _makes a note_ to use a word in class before actually teaching the word to the class.

In JavaScript, when you write `let animal;`, the computer _remembers_ the variable `animal` exists at the top of its scope (like inside a function), but the variable hasn't been assigned a value yet.

Here's a simple example to try:

```javascript
console.log(animal); // What do you think this will print?
let animal = "puppy";
```

If you run this code, you'll see it prints `undefined` instead of an error! That's hoisting in action - JavaScript "remembers" the variable exists but doesn't know what value is stored in the variable yet.

Here's the _correct_ way to do it:

```javascript
let animal = "puppy"; // Declare the variable first and then assign it a value
console.log(animal); // Now "puppy" displays in your browser console!
```

You should declare your variables at the top of their scope (but not necessarily at the top of your entire script.) Here's what that means:

- For global variables (variables used everywhere in your script), yes, declare them at the top of your script.
- For local variables (variables used only inside a function or block), declare them at the top of that function or block.

This keeps your code organized and makes it easier to understand where each variable is being used in your script.

| Keyword | Scope | Can Re-declare? | Hoisted? |
| ------- | ----- | --------------- | -------- |
| `let`   | Block | ❌ No           | ❌ No    |
| `const` | Block | ❌ No           | ❌ No    |

---

**🎯 Remember:** Scope keeps your code clean and predictable!

---
