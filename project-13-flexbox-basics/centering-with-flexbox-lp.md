## Unit: The Art of Centering with Flexbox

### Objective for Week
*By Friday, students will be able to perfectly center any content (text, images, or buttons) both horizontally and vertically within a container using Flexbox.*

### Possible Obstacles
* **The "Short Container" Problem:** Vertical centering isn't visible if the container is only as tall as the content inside.
* **Confusing the Axes:** Swapping `justify-content` (main axis) and `align-items` (cross axis) when the `flex-direction` changes.
* **Body vs. Div:** Forgetting that the `<body>` can also be a flex container to center a whole page layout.
* **The Ghost Space:** Extra margins or line-heights on text elements making a "perfectly centered" item look slightly off-center.

### Sketch The Week

| Intro + short demo | Guided practice | Independent work | Debug/feedback | Assessment/reflection |
| :---- | :---- | :---- | :---- | :---- |
| *Horizontal Alignment* | *The Vertical Breakthrough* | *The Dead-Center Hero* | *The "Off-Center" Audit* | *Full Page Center* |

**What I Will NOT Do This Week**
* Use `line-height` for centering: We want to break the habit of using "hacks" when Flexbox is available.
* Focus on complex grids: This week is purely about the 1-to-1 relationship of a container and its centered children.

---

### Prep for Day 1: Horizontal Alignment
1. **Short demo:** Create a `<div>` with three colored squares inside. Toggle `justify-content` in the browser inspector to show `flex-start`, `center`, and `flex-end`.
2. **Guided practice:** Build a "Feature Bar." Place three icons or words inside a container and use `justify-content: center` with a `gap` to keep them tidy.
3. **Independent task:** Create a "Social Media Link" bar. Center the links horizontally and use different `justify-content` values to see which looks best for a mobile footer.

**Day 1 Resources**
- `horizontal_flex.md`
- `social_bar.html`
- `style.css`

---

### Prep for Day 2: The Vertical Breakthrough
1. **Short demo:** This is the "Aha!" moment. Show a container with a height of `400px`. Use `align-items: center` to snap the content to the middle vertically.
2. **Guided practice:** Create a full-width "Announcement Banner" (e.g., "Free Shipping Today!"). Set a `min-height` and use both `justify-content` and `align-items` to center the text.
3. **Independent task:** Create a "Login Card" stub. Make the card a flex container and center a "Welcome" message and a "Login" button vertically within it.

**Day 2 Resources**
- `vertical_centering.md`
- `announcement_banner.html`
- `style.css`

---

### Prep for Day 3: The Dead-Center Hero
1. **Short demo:** Show a beautiful landing page "Hero" image with a title right in the middle. Explain how `height: 100vh` (Viewport Height) makes centering on the whole screen possible.
2. **Guided practice:** Code-along a Hero Section. Use a background image, a dark overlay, and use the "Flexbox Trio" (`display: flex`, `justify-content: center`, `align-items: center`) to center the headline.
3. **Independent task:** Design your own Hero Section for a favorite hobby. It must stay centered even when the browser window is resized.

**Day 3 Resources**
- `viewport_height_basics.md`
- `hero_section.html`
- `style.css`

---

### Prep for Day 4: The "Off-Center" Audit
1. **Short demo:** Show a "broken" centered layout where text looks a little too high or too low. Use DevTools to find hidden `margin-top` or `padding` on `<h1>` tags that "pushes" the element out of center.
2. **Guided practice:** "The Reset" — Show how `* { margin: 0; padding: 0; }` helps achieve pixel-perfect centering. 
3. **Independent task:** Final Project: Create a "Digital Business Card" that sits exactly in the middle of the browser window, no matter how big or small the screen is.

**Day 4 Resources**
- `debugging_centers.md`
- `centered_card_final.html`
- `style.css`