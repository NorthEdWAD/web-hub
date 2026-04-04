# Intro to JavaScript
## Dynamic Text Styling

### Objective

You'll learn how to use CSS variables, the JS `querySelector()` method, event listeners and the `setProperty()` method to change the color of text in a web page on demand.

---

### Helpful Resources

- [Creating a CSS variable](https://www.w3schools.com/css/css3_variables.asp)
- [The `querySelector()` method](https://www.w3schools.com/jsref/met_document_queryselector.asp)

---

### Part 1: CSS Variables Practice

- To your `js-intro` repo, add two new files: `css-variables.html` and `css.variables.css`
- Link the web page to your style sheet
- To `css.variables.css`, add:
  - a CSS comment block
  - the CSS reset rule
  - a CSS rule for the `:root` element
    - Add a CSS variable named `text-color`
    - Add a CSS variable named `text-size`
    - Add a CSS variable named `text-font`
    - Add a CSS variable named `text-weight`
  - a CSS rule for an HTML element with an `id` of `#myElement`
    - To this `#myElement` rule:
      - Apply a CSS variable named `text-color` to the `color` property
      - Apply a CSS variable named `text-size` to the `font-size` property
      - Apply a CSS variable named `text-font` to the `font-family` property
      - Apply a CSS variable named `text-weight` to the `font-weight` property  
      
### Finished Creating Your CSS Variables?

- Take a screenshot/screenshots of this project's style sheet
- Email the screenshot(s) to your teacher

---

```javascript
document.querySelector("#colorButton").addEventListener("click", () => {
    document.documentElement.style.setProperty('--text-color', 'blue');
});

```
---

### Adding Buttons

When finished, your page will contain six (6) buttons.

1. For today, though, just add three (3) buttons using the HTML `<button>` element.
2. Give each of the three buttons a unique identity using the HTML `id` attribute.

```html
<button id="button id goes here">Button Text Here</button>
```
- First button id: `colorButton`
  - Button text: Change Color
- Second button id: `sizeButton`
  - Button text: Change Size
- Third button id: `fontButton`
  - Button text: Change Font

**You'll add the other three buttons and button IDs later.**

---

### Events & Event Listeners 

- **event:** In JavaScript, an **event** is like a signal that something happened -- such as a click, a keypress, or the page loading.
  - You can write code to "listen" for these events and make something happen in response, like changing a color or showing a message on your web page!
- **event listener:**: An event listener is like a little helper that waits for something to happen -- such as when the user clicks a button or presses a key on their keyboard. When that thing happens, the event listener runs the JavaScript you wrote to make something cool happen, like swapping one image for another or changing the background color of your web page.

```javascript
// STEP 1:
// Linking an event listener to an HTML element with an `id` of `#colorButton`
document.querySelector("#colorButton").addEventListener();
```

```javascript
// STEP 2:
// Adding click event and an arrow function to your event listener
document.querySelector("#colorButton").addEventListener("click", () => {   });
```

```javascript
// STEP 3:
// Change text color
document.querySelector("#colorButton").addEventListener("click", () => {
    document.documentElement.style.setProperty('--text-color', 'blue');
}); // Pay attention to the punctuation and symbols used here or your JS won't work!
```
---

### Click-Related Events 

Here are three commonly used **click-related events** in JavaScript:

1. **`click`**
   - Triggered when a user clicks (presses and releases) a mouse button on an element.
   - Example: `element.addEventListener("click", () => { ... });`

2. **`dblclick`**
   - Triggered when a user double-clicks an element (two quick clicks in a row).
   - Example: `element.addEventListener("dblclick", () => { ... });`

3. **`mousedown`**
   - Triggered when a user presses (but doesn’t release) a mouse button on an element.
   - Example: `element.addEventListener("mousedown", () => { ... });`

---

### The JS `setProperty()` Method

Here’s a simple example of using the `setProperty()` method in JavaScript:

```javascript
// Change the background color of the entire page to light blue
document.documentElement.style.setProperty('--bg-color', 'lightblue');
```

**How it works:**
- This line of JavaScript sets a CSS variable called `--bg-color` to the value `'lightblue'` on the `<html>` element (the root element of the web page).
- In your style sheet, you apply (use) a CSS variable you've already defined like this:
  ```css
  body {
    background-color: var(--bg-color);
  }
  ```
- When your JavaScript runs, the background color of the page will change to light blue!

---

### Adding Event Listeners, Arrow Functions and the `.setProperty()` Method to Your JavaScript File

- **See STEP 3 above under Events & Event Listeners**
- Add four (4) event listeners and arrow functions as shown in STEP 3
  - Each event listener will be triggered using the `click` event
  - The arrow function for each event listener will use the `setProperty()` method to change -- on the fly -- the **value** of a specific **CSS variable**
    - For example, the code below will update the value of the `--text-color` CSS variable to `blue` (black is the default value):
        ```javascript
        // Change value of CSS variable named text-color
      document.querySelector("#colorButton").addEventListener("click", () => {
          document.documentElement.style.setProperty('--text-color', 'blue');
      }); // Pay attention to the punctuation and symbols used here or your JS won't work!
      ```
    -  For each event listener, update:
      - the **id selector** and the CSS variable that comes after the `setProperty()` method
        -  To change the text color, use `#colorButton` and the CSS variable `--text-color`
        -  To change the text size, use `#sizeButton` and the CSS variable `--text-size`
        -  To change the text font, use `#fontButton` and the CSS variable `--text-font`
        -  To change the text weight, use `#weightButton` and the CSS variable `--text-weight`
---


### Adding a Reset Button

To add a RESET button to your page, add this block of code to your JavaScript:

```javascript
   // RESET button to reset all styles
      document.querySelector("#resetButton").addEventListener("click", () => {
        document.documentElement.style.setProperty('--text-color', 'black');
        document.documentElement.style.setProperty('--text-size', '16px');
        document.documentElement.style.setProperty('--text-font', 'Arial, sans-serif');
        document.documentElement.style.setProperty('--text-weight', 'normal');
      });

```

---
