## Unit: The Editorial Feature (Grid Template Areas)

### Objective for Week
*By Friday, students will have mapped out and coded a responsive magazine-style article where the layout (headers, images, pull-quotes, and text) fundamentally shifts between mobile and desktop using `grid-template-areas`.*

### Possible Obstacles
* **Area Name Typos:** If `grid-area: header;` is defined but the template says `"hedar"`, the layout collapses.
* **The "Invisible Cell":** Students forgetting to account for every cell in the grid (every row must have the same number of names).
* **Source Order vs. Visual Order:** Confusion when the HTML says "Image first" but the Grid says "Image on bottom."
* **Nested Complexity:** Trying to make everything a grid item instead of identifying the 5-6 major "Areas."

### Sketch The Week (90-Minute Blocks)

| Day 1 | Day 2 | Day 3 | Day 4 |
| :---- | :---- | :---- | :---- |
| *Visual Mapping (Analog)* | *The Grid Blueprint* | *Responsive Swapping* | *Typography & Polish* |

**What I Will NOT Do This Week**
* Use Line Numbers: We are strictly using `grid-template-areas` to keep the logic visual and readable.
* Use Frameworks: No Bootstrap or Tailwind; we are writing raw CSS to master the layout engine.

---

### Prep for Day 1: Visual Mapping (Analog to Digital)
1. **Short demo:** Show a high-end magazine page (e.g., *National Geographic* or *Wired*). Physically draw boxes over the page to identify the "Header," "Hero," "Body," "Sidebar," and "Footer."
2. **Guided practice:** In a code editor, create the semantic HTML structure. Crucially, give each major element a `grid-area` property immediately (e.g., `header { grid-area: main-nav; }`).
3. **Independent task:** Students pick their article topic and sketch a 2x3 grid on paper. They must label which "Area Name" goes in which box for both a Desktop and Mobile view.

**Day 1 Resources**
- `editorial_samples.pdf`
- `semantic_skeleton.html`
- `style.css`

---

### Prep for Day 2: The Grid Blueprint (Desktop First)
1. **Short demo:** Introduce `grid-template-areas`. Show how the CSS looks like a "map" of the page. Demonstrate how to repeat names to make an area span multiple columns or rows.
2. **Guided practice:** Build the Desktop grid. 
   *Example:* `"nav nav nav"` 
   `"hero hero side"`
   `"body body side"`
3. **Independent task:** Apply the `grid-template-areas` to their project container. Use background colors for each area so they can "see" the grid working before adding content.

**Day 2 Resources**
- `grid_template_cheatsheet.md`
- `layout_blueprint.css`

---

### Prep for Day 3: Responsive Swapping (The Magic Trick)
1. **Short demo:** Show the "Desktop" grid looking broken on mobile. Introduce the `@media` query and rewrite the `grid-template-areas` to be a single column:
   `"nav"`
   `"hero"`
   `"body"`
   `"side"`
2. **Guided practice:** Code-along the mobile breakpoint. Show how *zero* changes are needed to the HTML; we only change the "map" in the CSS.
3. **Independent task:** Refine the mobile view. Ensure the "Sidebar" (which might have ads or links) moves to a logical spot (usually the bottom) for phone users.

**Day 3 Resources**
- `responsive_logic.md`
- `media_queries.css`

---

### Prep for Day 4: Typography & Editorial Polish
1. **Short demo:** Explain "Visual Hierarchy." Use Google Fonts to pair a bold Serif font for headings with a clean Sans-Serif for body text. 
2. **Guided practice:** Implement a simple "Type Scale." Show how to use `padding` and `line-height` to make long-form text readable (the "optimal 65 characters per line" rule).
3. **Independent task:** Final Polish. Add "Pull Quotes" or "Captions" into the grid. Ensure that when the screen is resized, the transition is smooth and no text is "cutoff."

**Day 4 Resources**
- `typography_basics.md`
- `final_checklist.html`
- `style.css`