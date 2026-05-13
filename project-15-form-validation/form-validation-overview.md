# Handout: Form Validation Basics

### Ensuring Clean Data with HTML5 and JavaScript

Validation is the process of checking if the data entered into a form is correct before it gets sent to a server. This prevents errors and keeps your database clean. We use two layers: **HTML5** (quick and easy) and **JavaScript** (powerful and custom).

---

## Part 1: Built-in HTML5 Validation

HTML5 allows you to validate inputs without writing a single line of code. By adding specific **attributes** to your `<input>` tags, the browser will automatically block the form and show a popup if the rules aren't met.

### Essential Attributes:

* **`required`**: Prevents the form from being submitted if the field is empty.
* **`type="email"`**: Ensures the user enters a valid email format (includes an `@` and a `.`).
* **`minlength` / `maxlength**`: Controls the number of characters allowed (perfect for passwords).
* **`min` / `max**`: Controls the range for number inputs.

**Example:**

```html
<form>
  <label>Username (5-10 chars):</label>
  <input type="text" required minlength="5" maxlength="10">

  <label>Age (18+ only):</label>
  <input type="number" min="18">

  <button type="submit">Submit</button>
</form>

```

---

## Part 2: Custom Validation with JavaScript

While HTML5 is great, JavaScript gives you the power to create custom error messages, compare two fields (like "Confirm Password"), or change the styling of the page when a mistake happens.

### The Basic Logic

To validate with JS, we "intercept" the form when the user clicks submit. We check the values, and if something is wrong, we use `event.preventDefault()` to stop the form from actually sending.

**Example: Simple Password Check**

```html
<form id="signupForm">
  <input type="password" id="pass" placeholder="Enter Password">
  <p id="error-msg" style="color: red;"></p>
  <button type="submit">Join Now</button>
</form>

```

**JavaScript:**

```javascript
const myForm = document.getElementById("signupForm");
const passwordInput = document.getElementById("pass");
const errorDisplay = document.getElementById("error-msg");

myForm.addEventListener("submit", function(event) {
    // 1. Get the value from the input
    let passValue = passwordInput.value;

    // 2. Check a condition (e.g., must be longer than 8 characters)
    if (passValue.length < 8) {
        // 3. Stop the form from submitting
        event.preventDefault();

        // 4. Give the user feedback
        errorDisplay.textContent = "Password is too short!";
        passwordInput.style.border = "2px solid red";
    }
});

```

---

## Comparison Table

| Feature | HTML5 Attributes | JavaScript Validation |
| --- | --- | --- |
| **Setup Speed** | Very Fast | Slower (requires script) |
| **User Feedback** | Standard Browser Popups | Custom HTML/CSS messages |
| **Complexity** | Simple rules only | Complex logic (if/else) |
| **Security** | Easily bypassed by pros | Highly customizable |

---

> **The "Value" Property:** In JavaScript, when you want to see what a user typed, you must use the `.value` property of the element (e.g., `myInput.value`). Without it, you are just looking at the HTML tag itself!