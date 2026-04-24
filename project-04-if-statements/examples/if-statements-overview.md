# **JavaScript If-Else Statements: A Quick Guide**

---

## **📌 Overview**
If-else statements let your code make **decisions** by running different blocks of code based on these conditions.
- **`if`**: Runs code *only if* a condition is `true`.
- **`else`**: Runs code *if the `if` condition is `false`*.
- **`else if`**: Checks *additional conditions* if the first `if` fails.

---

## **💡 Why Use If-Else?**
- Validate user input (e.g., check if a password meets requirements).
- Control program flow (e.g., show a discount if a user is a member).
- Handle errors gracefully (e.g., display a message if a file fails to load).

---

## **📜 Basic Syntax**
```javascript
if (condition) {
  // Code to run if condition is true
} else {
  // Code to run if condition is false
}
```

### **Example: Check Age for Voting**
```javascript
let age = 18;

if (age >= 18) {
  console.log("You can vote!");
} else {
  console.log("You're too young to vote.");
}
```
**Output in console:**
`You can vote!`

---

## **🔍 Key Details**
1. **Conditions** must evaluate to `true` or `false` (e.g., `age >= 18`).
2. **Curly braces `{}`** are required for multi-line blocks (even if only one line).
3. **`else if`** lets you chain multiple conditions:
   ```javascript
   if (score >= 90) {
     console.log("Grade: A");
   } else if (score >= 80) {
     console.log("Grade: B");
   } else {
     console.log("Grade: C or lower");
   }
   ```

---

## **⚠️ Common Mistakes**
1. **Forgetting parentheses `()`** around the condition.
2. **Using `=` instead of `==` or `===`** (assignment vs. comparison).
   - ❌ `if (age = 18)` → Always `true` (assigns `18` to `age`).
   - ✅ `if (age === 18)` → Checks if `age` equals `18`.
3. **Missing curly braces** for multi-line blocks (can cause bugs).

---

## **🛠️ Challenge: Build a Simple Login Checker**
**Problem:**
Write a function `checkLogin(username, password)` that:
- Alerts `"Access granted!"` if `username` is `"admin"` **and** `password` is `"1234"`.
- Alerts `"Access denied!"` otherwise.

**Starter Snippet:**
```javascript
function checkLogin(username, password) {
  // Your code here!
}
```

**Test Cases:**
```javascript
checkLogin("admin", "1234");  // Should alert "Access granted!"
checkLogin("user", "wrong");  // Should alert "Access denied!"
```

---
*Try solving it first! If you’d like, I can provide the step-by-step solution.*

---
## **🐞 Debugging Tip**
**Use `console.log()` to debug conditions!**
```javascript
let temperature = 75;
console.log("Is it hot?", temperature > 80); // Logs: false
```
This helps verify if your condition is evaluating as expected.

---
