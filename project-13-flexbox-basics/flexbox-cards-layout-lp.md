## Unit: Card Layouts & Equal Heights

### Objective for Week
*By Friday, students will be able to use CSS Flexbox to create a responsive "Grid" of cards where every card in a row maintains the exact same height, regardless of the content length inside.*

### Possible Obstacles
* **The "Stretched" Look:** Confusion over why items stretch by default (the `align-items: stretch` default behavior).
* **Content Overflow:** Images or long text breaking out of the card boundaries.
* **Nested Flexbox:** Students forgetting that a card can be a *flex-item* (to sit in a row) and a *flex-container* (to organize its own internal content) at the same time.
* **Image Scaling:** Images appearing distorted because they aren't set to `width: 100%` or `object-fit: cover`.

### Sketch The Week

| Intro + short demo | Guided practice | Independent work | Debug/feedback | Assessment/reflection |
| :---- | :---- | :---- | :---- | :---- |
| *The Magic of Stretch* | *Managing Card Content* | *Responsive Wrapping* | *The "Broken Card" Lab* | *Final Gallery Build* |

**What I Will NOT Do This Week**
* Use CSS Grid: While Grid is great for this, we are mastering Flexbox logic first to avoid syntax overload.
* Use fixed heights: I will strictly forbid `height: 400px;` on cards. We let Flexbox do the heavy lifting.

---

### Prep for Day 1: The Magic of Stretch
1. **Short demo:** Show three `<div>` cards with different amounts of text. Apply `display: flex` to the wrapper. Point out how they all instantly become the same height.
2. **Guided practice:** Build the "Container" and "Card" HTML. Set the container to `display: flex`. Use `gap` to create gutters between the cards.
3. **Independent task:** Create 3 cards. Put a single sentence in one and a full paragraph in another. Use a background color to prove they are the same height.

**Day 1 Resources**
- `flex_stretch_demo.md`
- `basic_cards.html`
- `style.css`

---

### Prep for Day 2: Internal Card Anatomy
1. **Short demo:** Show how to make the *card itself* a flex container (`flex-direction: column`). This allows us to push a "Buy Now" or "Learn More" button to the very bottom of every card using `margin-top: auto`.
2. **Guided practice:** Add an image, a title, and a button to each card. Use CSS to ensure images don't "explode" outside the card (`max-width: 100%`).
3. **Independent task:** Style the cards with rounded corners (`border-radius`) and a subtle `box-shadow` to make them look modern.

**Day 2 Resources**
- `nested_flexbox.md`
- `card_content.html`
- `style.css`

---

### Prep for Day 3: Responsive Wrapping
1. **Short demo:** Shrink the browser until the 3 cards become too skinny to read. Introduce `flex-wrap: wrap`.
2. **Guided practice:** Give cards a `flex-basis` (or a `min-width`) so they know when to "pop" down to the next line.
3. **Independent task:** Write a media query so that on mobile screens, the cards take up 100% of the width, but on desktop, they sit 3-across.

**Day 3 Resources**
- `wrapping_logic.md`
- `responsive_cards.css`
- `index.html`

---

### Prep for Day 4: The "Broken Card" Lab
1. **Short demo:** Show common "broken" layouts: an image that’s too tall, a button that isn't aligned at the bottom, or cards that are touching each other.
2. **Guided practice:** "The Professional Finish" — Use `object-fit: cover` on images so they all have the same aspect ratio without being squished.
3. **Independent task:** Final Challenge: Create a "Meet the Team" or "Product Gallery" page with at least 6 cards. All buttons must line up at the bottom, and all cards must be equal height.

**Day 4 Resources**
- `alignment_checklist.md`
- `final_card_challenge.html`
- `style.css`