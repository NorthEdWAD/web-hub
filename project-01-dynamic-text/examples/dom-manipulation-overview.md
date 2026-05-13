# Handout: Manipulating the DOM

### Targeting Elements with JavaScript

To make a website interactive, JavaScript needs a way to "grab" the HTML elements you’ve already built. We do this using the **DOM (Document Object Model)**. Think of the DOM as a map of your HTML where every tag is a destination JavaScript can visit and change.

---

## 1. Selecting a Single Unique Element

### `document.getElementById("id-name")`

When you want to change one specific, unique item on your page, use its **ID**. Since IDs must be unique in HTML, this method always returns exactly **one** element.

**The Syntax:**

```javascript
const mainTitle = document.getElementById("header-title");
```

**Practical Example:**
Imagine a "Dark Mode" toggle that changes the color of your main heading.

- **HTML:** `<h1 id="hero-text">Welcome to My Site</h1>`
- **JavaScript:**

```javascript
// 1. Grab the element
const hero = document.getElementById("hero-text");

// 2. Change the style
hero.style.color = "white";
hero.style.backgroundColor = "black";
```

---

## 2. Selecting Multiple Similar Elements

### `document.getElementsByClassName("class-name")`

When you want to change a group of items (like every button or every card), use their **Class**. This method returns an **HTMLCollection**, which acts like a list or an array.

**The Syntax:**

```javascript
const menuItems = document.getElementsByClassName("nav-link");
```

**The Catch: The Loop**
Because this method returns a _list_, you cannot change the style of everything at once by writing `menuItems.style.color`. You must tell JavaScript to look at each item in the list one by one using a loop.

**Practical Example:**
Highlighting all "sale" items on a product page.

- **HTML:** \* `<div class="product">Shoes</div>`
- `<div class="product">Hat</div>`

- **JavaScript:**

```javascript
const products = document.getElementsByClassName("product");

// We use a for...of loop to talk to every item in the list
for (let item of products) {
	item.style.border = "2px solid red";
	item.style.fontWeight = "bold";
}
```

---

## Key Terms to Remember

| Term               | Definition                                                         |
| ------------------ | ------------------------------------------------------------------ |
| **DOM**            | The "tree" structure of your HTML that JS uses to see your code.   |
| **Method**         | A command JS runs to do something (like `getElementById`).         |
| **camelCase**      | The naming convention used in JS (e.g., `getElement**B**y**I**d`). |
| **HTMLCollection** | The array-like list returned when selecting multiple classes.      |

---

> **Pro Tip:** In JavaScript, you don't use dashes for CSS properties.
>
> - CSS: `background-color`
> - JS: `backgroundColor`

---
