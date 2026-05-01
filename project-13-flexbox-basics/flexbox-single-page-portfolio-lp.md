### Teacher's Tip: When to introduce Grid?
I usually save **CSS Grid** for the *next* project. I tell students: *"Flexbox is for content that wants to flow. Grid is for content that needs to stay in a specific 'box' on a map."* If they try to make a complex 12-column dashboard, that is when you show them Grid. For a portfolio, Flexbox is the superior learning tool.

### Why stick with Flexbox for the project?
1.  **Cognitive Load:** Learning both Grid and Flexbox simultaneously often leads to students mixing up syntax (e.g., trying to use `grid-template-columns` on a flex container).
2.  **Directional Logic:** Flexbox forces students to think in "stacks" and "rows," which is fundamental for understanding how the DOM flows.
3.  **Transferable Skills:** Once they master the "Flexbox Trio" (display, justify, align), they can build 90% of modern UI components.

--

Here is a minimalist unit plan for a **"Single-Page Portfolio"** project using only Flexbox.

---

## Unit: The 1-Page Flexbox Site Project 

### Objective for Week
*By Friday, students will have built a responsive, single-page professional portfolio using Flexbox for the header, hero section, card gallery, and footer.*

### The Project Wireframe (Flexbox Logic)
* **Header:** Horizontal Flex (`space-between`).
* **Hero:** Centered Flex (`column` direction).
* **Services/Cards:** Wrapping Flex (`flex-wrap: wrap`).
* **Footer:** Horizontal Flex (`center`).

### Sketch The Week

| Day 1 | Day 2 | Day 3 | Day 4 | Day 5 |
| :---- | :---- | :---- | :---- | :---- |
| *The Master Container* | *The Content "Blocks"* | *Responsive Check* | *Polish & UI* | *The "Live" Launch* |

---

### Prep for Day 1: The Master Container
1.  **Guided Practice:** Create the "Skeleton" HTML (`header`, `main`, `section`, `footer`).
2.  **Concept:** Explain the `min-height: 100vh` on the `<body>` to keep the footer at the bottom.
3.  **Task:** Set up the global CSS reset and the `<nav>` using the skills from your previous navbar lesson.

---

### Prep for Day 2: The Content "Blocks"
1.  **Guided Practice:** Build the "Hero" section (Big text in the center) and the "Card" container.
2.  **Concept:** Using `flex-direction: column` for the Hero so the headline sits above the button, but both are centered.
3.  **Task:** Place 3 "Project" cards into a flex-container. Use `gap` for spacing.

---

### Prep for Day 3: Responsive Check (Mobile First)
1.  **Short Demo:** Resize the browser. Show the "Squish" where cards get too thin.
2.  **Guided Practice:** Introduce `flex-wrap: wrap` on the card container.
3.  **Independent Task:** Add a Media Query at `768px`. If the screen is smaller, change the `flex-direction` of the Header and Hero to `column` so it stacks perfectly on a phone.

---

### Prep for Day 4: Polish & UI
1.  **Short Demo:** Show how to use `flex-grow: 1` to make the "Main" content area fill the empty space on a short page.
2.  **Guided Practice:** Add hover effects to the flex-items (cards and nav links).
3.  **Task:** Final bug hunt. Ensure no horizontal scrollbars exist (the "Mobile Death Scroll").

---

### Prep for Day 5: The "Live" Launch
1.  **Activity:** Peer Review. Students open each other's sites and "Try to break it" by resizing the browser.
2.  **Reflection:** Students list three things Flexbox made "easy" compared to standard block layout.

---

