## Unit: Responsive Layouts with CSS Flexbox

- [Virtual Addiction: Responsive Flexbox Page](https://youtu.be/kBNrc1_mTr8?si=XlCdIg5QpKLlFnwY)
- [Bro Code: Learn Flexbox in 10 Minutes](https://youtu.be/GteJWhCikCk?si=QGjWCFlDqwQKuPQp)
- [Learn Flexbox in 20 Minutes](https://youtu.be/wsTv9y931o8?si=4GHe1679V161dNob)

### Objective for Week
*By Friday, students will be able to use Flexbox properties to create a responsive navigation bar and a multi-column content layout that adapts to different screen sizes.*

### Possible Obstacles
* **The Container-Child Relationship:** Students trying to apply `justify-content` to the items instead of the parent container.
* **Flex-Direction Confusion:** Forgetting that switching to `column` swaps the main and cross axes.
* **Fixed Widths:** Students using `width: 500px` instead of percentages or `flex` properties, breaking responsiveness.
* **The Content Collapse:** Items vanishing or overlapping when `flex-wrap` is omitted.

### Sketch The Week

| Intro + short demo | Guided practice | Independent work | Debug/feedback | Assessment/reflection |
| :---- | :---- | :---- | :---- | :---- |
| *The Flex Container* | *Alignment & Spacing* | *The Flex Wrap & Growth* | *Layout "Crash" Test* | *Final Layout Project* |

**What I Will NOT Do This Week**
* Skip: The "Blue Box" phase. We will use simple colored divs before moving to actual images or text to focus purely on alignment.
* My “Good enough” approach: If it looks good on Desktop but breaks on Mobile, it’s not finished.

---

### Prep for Day 1: The Parent Container (`display: flex`)
1.  **Short demo:** Show a vertical stack of three `div` boxes. Add `display: flex;` to the parent and watch them snap into a row. Explain the "Magic Parent" concept.
2.  **Guided practice:** Build a basic "Header" together. Use `display: flex` and `justify-content: space-between` to push a Logo to the left and a Nav Link to the right.
3.  **Independent task:** Create a "Social Bar." Place four square icons (divs) in a row and use `justify-content: center` with a `gap` property to space them perfectly.

**Day 1 Resources**
- `flex_basics.md`
- `header_layout.html`
- `style.css`

---

### Prep for Day 2: Alignment & The Cross Axis
1.  **Short demo:** Demonstrate `align-items: center;`. Show how to perfectly center a button inside a tall hero section without using margins or padding hacks.
2.  **Guided practice:** Create a "Feature Card." Use `flex-direction: column` to stack an image, a title, and a description, then use `align-items` to keep everything centered.
3.  **Independent task:** Build a "Team Member" card. Use a horizontal layout for desktop (Image on left, Text on right) and ensure the text is vertically centered next to the image.

**Day 2 Resources**
- `axis_alignment.md`
- `feature_cards.html`
- `style.css`

---

### Prep for Day 3: Responsiveness & Wrapping
1.  **Short demo:** Shrink the browser window until boxes overlap. Introduce `flex-wrap: wrap;`. Show how items automatically "drop" to the next line when space runs out.
2.  **Guided practice:** Build a "Photo Gallery" grid. Use `flex: 1 1 200px;` (flex-grow, shrink, and basis) so cards resize themselves to fill the row.
3.  **Independent task:** Create a "Product Grid" of 6 items. Ensure that on a wide screen there are 3 items per row, but on a small screen, they stack into 1 column.

**Day 3 Resources**
- `flex_wrap_logic.md`
- `gallery_grid.html`
- `style.css`

---

### Prep for Day 4: The Responsive Challenge
1.  **Short demo:** The "Broken News Site." Show a layout where the sidebar is squishing the main content. Fix it using `flex-grow`.
2.  **Guided practice:** "The Great Pivot." Take the Day 1 Header and use a Media Query to change `flex-direction` from `row` to `column` for mobile devices.
3.  **Independent task:** Refine the "Daily Task List" or a "Portfolio Preview." Ensure all elements (Header, Gallery, and Footer) behave correctly when the browser window is resized.

**Day 4 Resources**
- `media_query_intro.css`
- `responsive_challenge.html`
- `style.css`
