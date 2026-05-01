## Unit: Responsive Navigation with Flexbox

### Objective for Week
*By Friday, students will be able to build a navigation bar that shifts from a horizontal desktop layout to a stacked mobile layout using CSS Flexbox and a single media query.*

### Possible Obstacles
* **The "Invisible Box":** Students struggling to visualize the parent container (flex-container) vs. the items (flex-items).
* **Default List Styling:** Confusion over why `<ul>` tags have bullets and padding by default.
* **Media Query Syntax:** Forgetting the curly brace hierarchy, causing the CSS to "break."
* **Justify vs. Align:** Mixing up `justify-content` (main axis) and `align-items` (cross axis).

### Sketch The Week

| Intro + short demo | Guided practice | Independent work | Debug/feedback | Assessment/reflection |
| :---- | :---- | :---- | :---- | :---- |
| *The Flex Mindset* | *Spacing & Alignment* | *Going Mobile* | *The "Squish" Test* | *Final Navbar Build* |

**What I Will NOT Do This Week**
* Skip: Drawing on the whiteboard. Students need to see the "Main Axis" vs "Cross Axis" visually.
* Overcomplicate: We will avoid Hamburger Menu JavaScript. We are focusing strictly on CSS layout transitions.

---

### Prep for Day 1: The Flex Mindset (Parent vs. Child)
1. **Short demo:** Show a standard vertical `<ul>`. Add `display: flex;` to the `<ul>` in Inspect Element to show it "magically" turning horizontal. Explain the Parent (Container) and Child (Items) relationship.
2. **Guided practice:** Create a basic HTML structure: a `<nav>` containing a `<ul>` with 4 `<li>` links. Use CSS to strip default bullets (`list-style: none`) and padding.
3. **Independent task:** Set the nav to `display: flex`. Experiment with `justify-content`: try `center`, `space-between`, and `space-around`. Label which one looks most like a "real" website.

**Day 1 Resources**
- `flex_basics.md`
- `nav_structure.html`
- `style.css`

---

### Prep for Day 2: Spacing & Alignment
1. **Short demo:** Show how to add "breathing room" using `gap` instead of complex margins. Demonstrate `align-items: center` by giving the `<nav>` a specific height (e.g., `100px`) and a background color.
2. **Guided practice:** Add a "Logo" (a `<div>` or `<h1>`) inside the `<nav>` alongside the `<ul>`. Use `justify-content: space-between` to push the logo to the left and links to the right.
3. **Independent task:** Style the links (remove underlines, change colors on `:hover`). Ensure the navbar looks polished and professional on a wide screen.

**Day 2 Resources**
- `alignment_tips.md`
- `navbar_v2.html`
- `style.css`

---

### Prep for Day 3: Going Mobile (Media Queries)
1. **Short demo:** Resize the browser to show the links overlapping. Introduce `@media (max-width: 600px)`. Explain it as an "If/Then" statement for the browser.
2. **Guided practice:** Inside the media query, change `flex-direction` from `row` (default) to `column`. Watch the navbar stack vertically.
3. **Independent task:** Adjust the mobile view so the text is centered and the "Logo" sits on top of the links when the screen is small.

**Day 3 Resources**
- `responsive_logic.md`
- `media_queries.css`
- `index.html`

---

### Prep for Day 4: The "Squish" Test & Refinement
1. **Short demo:** Use Chrome DevTools "Device Mode" to show how the site looks on an iPhone vs. a Desktop. Show common "breakage" (e.g., text being too large for small screens).
2. **Guided practice:** "The Professional Touch" — Add a small transition effect to the hover state and ensure the mobile version has enough padding so fingers can easily tap the links.
3. **Independent task:** Final Project: Build a navbar for a fictional brand (e.g., a pizza shop or a gaming site). It must be horizontal on desktop and stacked on mobile.

**Day 4 Resources**
- `polishing_ui.md`
- `final_nav_challenge.html`
- `style.css`
```

