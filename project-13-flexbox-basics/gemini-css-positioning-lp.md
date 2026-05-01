## Unit: CSS Positioning (The Layout "Z-Axis")

### Objective for Week
*By Friday, students will be able to distinguish between static, relative, absolute, fixed, and sticky positioning to place elements precisely on a page and create "pinned" UI elements like headers and overlays.*

### Possible Obstacles
* **The "Vanishing" Element:** Students using `position: absolute` without a `position: relative` parent, causing the element to fly to the top of the body.
* **The Z-Index Battle:** Forgetting that `z-index` only works on positioned elements, leading to frustration when items won't layer correctly.
* **The Document Flow Gap:** Confusion over why `absolute` and `fixed` remove elements from the natural page flow, causing other elements to "slide under" them.
* **Sticky Failure:** `position: sticky` failing because a parent container has `overflow: hidden` or no defined height.

### Sketch The Week

| Intro + short demo | Guided practice | Independent work | Debug/feedback | Assessment/reflection |
| :---- | :---- | :---- | :---- | :---- |
| *Relative vs. Absolute* | *The Parent-Child Anchor* | *Fixed & Sticky UI* | *The "Lost Element" Hunt* | *Mini-Landing Page* |

**What I Will NOT Do This Week**
* Skip: Visualizing the "Z-index" stack. Students need to see that the screen has depth, not just width and height.
* My “Good enough” approach: If the student manually uses `margin-top: -500px` to move an element, we stop and refactor using positioning.

---

### Prep for Day 1: Relative & Absolute (The Duo)
1.  **Short demo:** Show a standard "Static" box. Change it to `relative` and nudge it with `top` and `left`. Then, drop an `absolute` box inside it to show how it anchors to its parent.
2.  **Guided practice:** Create a "Photo Badge." Place a small "Sale" circle in the top-right corner of a product image container using `position: absolute`.
3.  **Independent task:** Build a "Profile Card" where a circular user avatar overlaps the bottom edge of a rectangular banner image using `position: relative` on the avatar.

**Day 1 Resources**
- `position_basics.md`
- `badge_exercise.html`
- `style.css`

---

### Prep for Day 2: Fixed Positioning (The "Float")
1.  **Short demo:** Create a long page with lots of text. Add a "Back to Top" button that stays in the bottom-right corner of the screen no matter how far the user scrolls.
2.  **Guided practice:** Build a "Persistent Header." Fix a navigation bar to the top of the viewport and use `padding-top` on the body to prevent the content from being hidden underneath.
3.  **Independent task:** Create a "Floating Action Button" (like in Gmail or Spotify) that stays fixed in place as the user scrolls through a list of items.

**Day 2 Resources**
- `fixed_elements.md`
- `floating_button.html`
- `style.css`

---

### Prep for Day 3: Sticky Positioning (The "Smart" Pin)
1.  **Short demo:** Compare `fixed` vs `sticky`. Show how a `sticky` table header stays at the top of its container while you read the data, then scrolls away when the table ends.
2.  **Guided practice:** Build a "Blog Sidebar." The main article scrolls, but the "Related Posts" sidebar sticks to the top once the user reaches it.
3.  **Independent task:** Create an alphabetized "Contact List." Use `position: sticky` for the letter headers (A, B, C) so they stay visible while scrolling through names in that section.

**Day 3 Resources**
- `sticky_logic.md`
- `scrolling_list.html`
- `style.css`

---

### Prep for Day 4: Layering & The Z-Index
1.  **Short demo:** Create three overlapping boxes. Show how `z-index` changes the "stacking order." Explain that higher numbers come "forward" toward the user.
2.  **Guided practice:** Build a "Modal Overlay." Create a dark, semi-transparent background that covers the whole screen (`fixed`) and a white pop-up box (`absolute`) sitting on top.
3.  **Independent task:** Create a "Hero Image" with a text overlay and a semi-transparent color tint. Use positioning and `z-index` to ensure the text is perfectly legible on top of the image and tint.

**Day 4 Resources**
- `z_index_depth.md`
- `modal_popup.html`
- `style.css`