## Unit: JavaScript Array Methods (Mutation)

### Objective for Week
*By Friday, students will be able to modify the data within a `const` array using `push`, `pop`, `shift`, `unshift`, and `.length` to manage a dynamic list of items.*

### Possible Obstacles
* **Const vs. Mutation:** Students may think `const` means the items inside the array can't change. Clarify that we aren't replacing the "box," just changing the "toys" inside.
* **The "Shift" Direction:** Students often forget if `shift` affects the front or the back. 
* **Template String Syntax:** Forgetting the backticks (`` ` ``) or using a single quote instead, which breaks the `${}` variable injection.
* **Empty Parentheses:** Students may try to put a name inside `.pop()` or `.shift()`. Remind them these methods are "automated" and don't take arguments.

### Sketch The Week

| Intro + short demo | Guided practice | Independent work | Debug/feedback | Assessment/reflection |
| :---- | :---- | :---- | :---- | :---- |
| *The End Stack* | *The Start Stack* | *The Length "Snap"* | *The Undo Logic* | *Roster Management* |

**What I Will NOT Do This Week**
* Skip: Using `alert()` for immediate feedback. 
* Overcomplicate: We will focus purely on modifying the array before worrying about complex loops.

---

### Prep for Day 1: Working at the End (Push & Pop)

1. **Short demo:** Create `const heroes = ["Spider-Man", "The Hulk", "Silver Surfer", "Iron Man", "Wonder Woman"];`. Demonstrate adding a hero to the end (`push`) and removing the last hero (`pop`).
2. **Guided practice:** Use template strings and `alert()` to announce a new recruit joining the end of the team.
3. **Independent task:** Start with the 5 heroes. Perform 2 pushes and 1 pop. Use an `alert()` with a template string to show the final roster using `.join(", ")`.

**Day 1 Resources**
- `push_pop_basics.js`

---

### Prep for Day 2: Working at the Start (Shift & Unshift)

1. **Short demo:** Contrast yesterday. Show how `unshift` adds a leader to index 0 and `shift` removes the first hero. Explain that this "moves" everyone else's position.
2. **Guided practice:** Use `unshift` to add "Captain Marvel" to the front. Alert the team's new order.
3. **Independent task:** "The Rotation." Use `pop()` to take a hero off the end and `unshift()` to put that same hero at the very front. Alert the result.

**Day 2 Resources**
- `shift_unshift_lab.js`

---

### Prep for Day 3: The .length Property

1. **Short demo:** Show that `.length` isn't just for counting. Demonstrate setting `heroes.length = 2` to instantly delete everything else.
2. **Guided practice:** Alert the current team size using `${heroes.length}`. Then, "downsize" the team to 3 members by reassigning the length.
3. **Independent task:** Create a "Security Clearance" script. If a team has more than 4 heroes, use `.length` to cut it down to 4. Alert the "Safe List."

**Day 3 Resources**
- `length_mechanics.js`

---

### Prep for Day 4: The "Undo" & Debugging

1. **Short demo:** Show a "Broken Script" where `shift` was used instead of `pop`, causing the wrong hero to be removed. Use `alert()` to track the error.
2. **Guided practice:** Build a simple "Transaction" log. Add a hero, then use a variable to store the result of a `.pop()` to alert specifically who was removed.
3. **Independent task:** Students are given a list of 5 heroes. They must follow a "Mission Brief" (e.g., "Add 1 to front, remove 2 from back, add 1 to back") and alert the final result.

**Day 4 Resources**
- `mission_brief.js`
- `index.html`

```

