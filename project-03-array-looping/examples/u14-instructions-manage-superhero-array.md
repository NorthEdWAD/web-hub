### 1. The HTML Structure

We will create a drop-down with the method names and a button to run the selection. We also need a place to display the results.

```html
<h3>Superhero Team Manager</h3>

<label for="methodSelect">Choose an Action:</label>
<select id="methodSelect">
  <option value="push">Add to End (Push)</option>
  <option value="pop">Remove from End (Pop)</option>
  <option value="shift">Remove from Front (Shift)</option>
  <option value="unshift">Add to Front (Unshift)</option>
  <option value="count">Show Team Size (Length)</option>
</select>

<button id="runBtn">Execute Action</button>

<hr>
<div id="output">
  </div>

```

---

### 2. The JavaScript Logic

We link the button click to a function that reads the value of the drop-down and runs the corresponding array method.

```javascript
// starter.js
const heroes = ["Spider-Man", "The Hulk", "Silver Surfer", "Iron Man", "Wonder Woman"];

const methodSelect = document.getElementById("methodSelect");
const runBtn = document.getElementById("runBtn");

runBtn.addEventListener("click", () => {
  const choice = methodSelect.value;
  let message = "";

  if (choice === "push") {
    heroes.push("Black Widow");
    message = `Added Black Widow. New Team: ${heroes.join(", ")}`;
  } 
  else if (choice === "pop") {
    const removed = heroes.pop();
    message = `Removed ${removed}. New Team: ${heroes.join(", ")}`;
  } 
  else if (choice === "shift") {
    const removed = heroes.shift();
    message = `Retired ${removed} from the front. New Team: ${heroes.join(", ")}`;
  } 
  else if (choice === "unshift") {
    heroes.unshift("Captain Marvel");
    message = `Added Captain Marvel to the lead. New Team: ${heroes.join(", ")}`;
  } 
  else if (choice === "count") {
    message = `The team currently has ${heroes.length} members.`;
  }

  // Display the result via alert (as requested)
  alert(message);
});

```

---

### Why this works for your 45-minute lesson:

1. **Input Control:** Using a `<select>` means students don't have to worry about handling random text input yet—they are just triggering the logic they already learned.
2. **Visual Connection:** They can see the direct relationship between a UI action (clicking a button) and the data changing in the background.
3. **Scaffolding:** For Day 4 or 5, you can challenge them to add a text input box so they can type *any* superhero name to `push` instead of hard-coding "Black Widow."

