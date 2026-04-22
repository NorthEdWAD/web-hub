# Five-Day Lesson Plan: Dynamic Styling with CSS Variables and JavaScript

## Overview
This lesson plan focuses on using CSS variables, the `.setProperty()` method, and DOM selection methods (`getElementById()`, `querySelector()`) to dynamically style a web page. Each day builds on the previous day's concepts, culminating in a cohesive project.

---

## Day 1: Introduction to CSS Variables and Basic DOM Selection

### Objective
Introduce CSS variables and demonstrate how to select and manipulate DOM elements using `getElementById()` and `querySelector()`.

### Example
Show a simple HTML page with CSS variables defined in the `:root` selector. Use JavaScript to select an element and change its background color using a CSS variable.

```html
<style>
  :root {
    --main-bg-color: lightblue;
  }
  #example {
    background-color: var(--main-bg-color);
    width: 200px;
    height: 200px;
  }
</style>
<div id="example"></div>
<script>
  const exampleElement = document.getElementById("example");
  exampleElement.style.setProperty("--main-bg-color", "lightgreen");
</script>
```

### Practice Project
Create a web page with three `<div>` elements, each with a unique ID. Use CSS variables to define colors for each `<div>`. Write JavaScript to change the color of each `<div>` when clicked.

### Review Questions
1. What is the purpose of CSS variables?
2. How do you select an element by its ID using JavaScript?

### Summary
- CSS variables allow for reusable and dynamic styling.
- `getElementById()` and `querySelector()` are used to select DOM elements.

---

## Day 2: Using `.setProperty()` to Modify CSS Variables

### Objective
Explore the `.setProperty()` method to dynamically update CSS variables.

### Example
Extend the previous example by adding a button that changes the `--main-bg-color` variable for all elements using it.

```html
<button onclick="changeColor()">Change Color</button>
<script>
  function changeColor() {
    document.documentElement.style.setProperty("--main-bg-color", "lightcoral");
  }
</script>
```

### Practice Project
Add buttons to your project from Day 1. Each button should change a different CSS variable, affecting multiple elements on the page.

### Review Questions
1. How does the `.setProperty()` method work?
2. Why is it useful to update CSS variables dynamically?

### Summary
- `.setProperty()` allows for dynamic updates to CSS variables.
- Updating CSS variables can affect multiple elements simultaneously.

---

## Day 3: Combining `querySelector()` with CSS Variables

### Objective
Use `querySelector()` to select elements by class or attribute and apply dynamic styling.

### Example
Select all elements with a specific class and change their font size using a CSS variable.

```html
<style>
  :root {
    --font-size: 16px;
  }
  .text {
    font-size: var(--font-size);
  }
</style>
<p class="text">Example text</p>
<script>
  const textElements = document.querySelectorAll(".text");
  textElements.forEach(element => {
    element.style.setProperty("--font-size", "20px");
  });
</script>
```

### Practice Project
Expand your project by adding elements with shared classes. Use `querySelectorAll()` to select these elements and update their styles using CSS variables.

### Review Questions
1. How does `querySelectorAll()` differ from `querySelector()`?
2. What are the benefits of using classes for dynamic styling?

### Summary
- `querySelectorAll()` selects multiple elements.
- Classes allow for grouped styling updates.

---

## Day 4: Integrating User Input with `prompt()`

### Objective
Use the `prompt()` method to gather user input and apply it to CSS variables.

### Example
Prompt the user for a color and update the `--main-bg-color` variable accordingly.

```html
<script>
  const userColor = prompt("Enter a color (e.g., 'red', '#FF0000'):");
  document.documentElement.style.setProperty("--main-bg-color", userColor);
</script>
```

### Practice Project
Add a feature to your project that prompts the user for a color or font size and applies it to the page.

### Review Questions
1. How can `prompt()` be used to enhance user interaction?
2. What data type does `prompt()` return?

### Summary
- `prompt()` gathers user input for dynamic updates.
- User input can directly influence styling.

---

## Day 5: Final Project and Review

### Objective
Combine all concepts to create a cohesive project where users can dynamically style a web page.

### Example
Show a complete example where users can:
- Change background colors.
- Adjust font sizes.
- Toggle between light and dark themes.

### Practice Project
Finalize your project by adding:
- A theme toggle button.
- Input fields for custom colors and font sizes.
- A reset button to revert to default styles.

### Review Questions
1. How can CSS variables improve maintainability in large projects?
2. What are the advantages of dynamic styling?

### Summary
- CSS variables and JavaScript enable powerful dynamic styling.
- Combining user input with DOM manipulation creates interactive experiences.

---
