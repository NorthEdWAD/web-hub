# Handout: Understanding `getElementById()` and `querySelector()`

## Introduction
In JavaScript, selecting HTML elements is a fundamental skill. Two common methods for this are `getElementById()` and `querySelector()`. While both methods allow you to select elements, they work differently and are used in different scenarios.

---

## `getElementById()`

### Purpose
`getElementById()` selects a single HTML element by its unique `id` attribute.

### How It Works
- The `id` attribute must be unique within the HTML document.
- `getElementById()` returns the element as an object, which you can then manipulate.

### Example
```html
<div id="header">Welcome to My Website</div>
<script>
  const headerElement = document.getElementById("header");
  headerElement.style.color = "blue";
</script>
```
In this example, the `<div>` with the `id` of "header" is selected, and its text color is changed to blue.

---

## `querySelector()`

### Purpose
`querySelector()` selects the first HTML element that matches a specified CSS selector. It is more flexible than `getElementById()` because it can select elements by `id`, `class`, or any other CSS selector.

### How It Works
- You provide a CSS selector as an argument (e.g., `#header`, `.className`, `div`).
- `querySelector()` returns the first element that matches the selector.

### Example
```html
<div class="intro">Hello, World!</div>
<script>
  const introElement = document.querySelector(".intro");
  introElement.style.fontSize = "24px";
</script>
```
In this example, the first element with the `class` of "intro" is selected, and its font size is changed to 24 pixels.

---

## Key Differences

| Method               | Selects By                     | Returns                     | Use Case                                  |
|----------------------|--------------------------------|-----------------------------|-------------------------------------------|
| `getElementById()`   | Unique `id` attribute          | Single element              | When you know the exact `id` of the element. |
| `querySelector()`    | CSS selector (e.g., `#id`, `.class`) | First matching element      | When you need flexibility to select by `id`, `class`, or other selectors. |

---

## When to Use Each Method

### Use `getElementById()` When:
- You need to select an element by its unique `id`.
- You want a straightforward and fast way to access a specific element.

### Use `querySelector()` When:
- You need to select an element by its `class`, `type`, or any other CSS selector.
- You want to use a single method for various selection needs.

---

## Practice Exercise
1. Create an HTML page with a `<div>` that has an `id` of "content" and a `<p>` with a `class` of "text".
2. Use `getElementById()` to change the background color of the "content" `<div>`.
3. Use `querySelector()` to change the font family of the "text" `<p>`.

```html
<div id="content">
  <p class="text">This is a paragraph.</p>
</div>
<script>
  // Your code here
</script>
```

---

## Summary
- `getElementById()` is ideal for selecting elements by their unique `id`.
- `querySelector()` is more flexible the `getElementById()` because it can be used to target HTML elements using any CSS selector.
- Both methods are essential tools for manipulating HTML elements with JavaScript.
