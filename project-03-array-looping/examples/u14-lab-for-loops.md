# Intro to JavaScript
## 🚀 Lab: The Great JavaScript Loop-Off

### Part 1: Anatomy of the Traditional Loop

Before you start, label the parts of this loop: `Initialization`, `Condition`, and `Increment`.

```javascript
for (let i = 0; i < 5; i++) {
  console.log("Loop number: " + i);
}

```

---

### Part 2: The Challenges

Complete the following tasks using the specific loop requested.

#### Challenge A: The "Automatic" Way

**Scenario:** You have an array of favorite movies. Print each movie title to the console.
**Tool:** Use a `for...of` loop.

```javascript
const movies = ["Interstellar", "Spider-Verse", "The Matrix", "Inception"];

// Write your code here:


```

#### Challenge B: The "Manual" Way (Index Control)

**Scenario:** You have a list of prices. Because it's "Flash Sale Friday," you need to print every **second** price in the list (index 0, 2, 4...).
**Tool:** Use a traditional `for` loop (Hint: change the `i++`).

```javascript
const prices = [10.99, 5.50, 20.00, 15.00, 8.25, 30.00];

// Write your code here:


```

#### Challenge C: The "Search" Task

**Scenario:** You are looking for the word "Scholar" in a list of students. If you find it, print "Student found at seat #" followed by the **index number**.
**Tool:** Which loop is better here? Why?

```javascript
const students = ["Alex", "Jordan", "Scholar", "Taylor"];

// Write your code here:


```

---

### Part 3: Reflection (The "Junior Dev" Quiz)

1. Which loop is less likely to cause an **Infinite Loop** (where the browser crashes)?
2. If you need to know exactly **where** an item is located in a list (the index), which loop must you use?
3. If you just want to "grab every item and do something to it," which loop is cleaner to read?

---

### Teacher's Cheat Sheet (Key)

* **Challenge A:** `for (const movie of movies) { console.log(movie); }`
* **Challenge B:** `for (let i = 0; i < prices.length; i += 2) { ... }` (Great for teaching that `i` doesn't always have to go up by 1).
* **Challenge C:** Traditional `for` loop is better because you need the `i` variable to report the "seat number."

