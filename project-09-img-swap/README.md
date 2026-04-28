# JavaScript Image Swap Project

**Overview:**

- You will build a JavaScript project that lets users swap out one image for another when they mouse over the image that displays when the web page loads in the browser.
- You can use CSS Grid to create the page layout

---

### Submitting Your Finished Code

1. Create **NEW** GitHub repo: `js-image-swap`
2. Upload project code to the repo.
3. Copy/paste repo web address into the [GitHub URL Form](https://forms.gle/diNodcRDNmEKQ5TW9)

---

*Click the triangle icon to show/hide each section.*

<details>
<summary>Part 1: Setup & HTML Structure</summary>

In `starter.html`:
 - Set page title to: `JS Image Swap Page`
 - add `<div>` with class of `image-container` to page body
 - Inside the `<div>`:
   - add an `<h2>` with text that says: Mouse Over The Image To Switch Images
   - add `<img>` element with id of `model-frame`
   - set image `src` to the file name of one of your two images for this project
   - add short, descriptive `alt` attribute for your initial image
</details>

<details>
<summary>Part 2: Your CSS</summary>




- Technically, you need just ONE CSS rule for this project:

- 

```css
#model-frame {
     cursor: pointer;
}
```

---

- To make your project look more professional, though, add the following CSS rules:

#### #model-frame rule (add these properties to your existing model-frame rule):

- Set `width` to 450px
- Set `height` to 350px
- Set `object-fit` to cover
- Set `border-radius` to 12px
- Set `cursor` to pointer
- Set `transition` property to: `transform 0.3s ease` (for a simple animation effect)

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

To your `starter.js` file:

- Create an array named `modelImages` and add the file names of two model images to it
  - Remember to enclose the file names in a pair of quotation marks
- Define a variable named `imgElement` and use `getElementById()` method to point to your `model-frame` element
- To preload your second image into the browser cache, write this code:
```javascript
const preload = new Image();
preload.src = modelImages[1]; // Points to the second image in your modelImages array
```

- Next, tell JS to listen for/wait for the `mouseenter` event (when user mouses over the image that displays when the page loads in the browser):
```javascript
imgElement.addEventListener('mouseenter', () => {
     imgElement.src = modelImages[1];
}); // Note the punctuation on this line!

```

- Finally, write the code for the `mouseleave` event (when user removes mouse pointer from the image that displays when the page loads in the browser):
- Copy, paste and modify the `mouseenter` code from the previous step
- Change the event from 'mouseenter` to `mouseleave`
- Change the **index number** for the array image from [1] to [0]

- Test your JavaScript in your web browser
- Correct any errors or warnings listed in the `console` tab
</details>


---
