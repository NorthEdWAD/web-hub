# JavaScript Image Swap Project

**Overview:**

- You will build a JavaScript project that lets users swap out one image for another when they mouse over the image that displays when the web page loads in the browser.

---

<details>
<summary>Part 1: Setup & HTML Structure</summary>

In `starter.html`:
 - Set page title to: `JS Image Swap Page`
 - add `<div>` with class of `image-container` to page body
 - Inside the `<div>`:
   - add an `<h2>` with text that says: Mouse Over The Image and See What Happens
   - add `<img>` element with id of `model-frame`
   - set image `src` to the file name of one of your two images for this project
   - add short, descriptive `alt` attribute for your image
</details>

<details>
<summary>Part 2: Your CSS</summary>

- To your `starter.css` file add these CSS rules:

#### body rule:

- Set up as a CSS Grid container
- Set `height` to **100vh** so page uses full height of browser window
- Set `align-items` to center
- Set `justify-items` to center
- Set your `background-color`
- Set `margin` to zero (0)
- Apply a `font-family`

#### image-container class:

- Also set up as a CSS Grid container
- Set `justify-items` to center
- Apply `gap` of 15 - 20 pixels
- Set your `background-color`
- Set `padding` to 30px
- Set `border-radius` to 15 - 20px
- Option: Apply the `box-shadow` property

#### #model-frame rule:

- Set `width` to 450px
- Set `height` to 350px
- Set `object-fit` to cover
- Set `border-radius` to 12px
- Set `cursor` to pointer
- Set `transition` property to: `transform 0.3s ease` (for a simple animation effect)

#### #model-frame:hover pseudo-class:

- Use `transform` property and set it to: `scale(1.02)`
  - This will apply a subtle lift or grow effect to the image when user mouses over the image 

#### h2 rule

- Set `margin` to zero (0)
- Apply a text color using `color`
- Set `text-transform` to uppercase
- Set `letter-spacing` to 1px
- Set `font-size` to **1.2rem**

</details>

<details>
<summary>Part 3: Adding Your JavaScript</summary>

- Create file named `script.js` in project folder.
- Link `script.js` to `index.html` by adding this code just above the `</body>` tag:
  ```html
  <script src="script.js"></script>
  ```
- Add a click event to all navigation buttons:
  - When button is clicked, log its text to browser console.
  - Change button's background color to `#007BFF` when clicked.
- Test your website in both Chrome and Firefox to make sure everything works.
</details>


---
