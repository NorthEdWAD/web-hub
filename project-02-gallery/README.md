# ⚡ Intro to JavaScript
## JavaScript-Powered Slideshow

> **Objective:** Students will learn how to create an image gallery that cycles through images automatically and allows the user to control
> the slideshow with buttons.

---

## 📅 **Due Date**
- **Final Submission:** DAY 00 MAR 2026

## 🚀 Getting Started
1. **Download** the starter files from this repo.
2. **Extract** the `.zip` folder (by right-clicking) and open the extracted folder in your code editor.
3. **Delete** the original `.zip` folder.
4. **Build:** Write your code in `starter.js`, `starter.html` and `starter.css`.  

## 💡 Resources  

See the `examples` folder.

## 🛠️ Project Requirements

Your project is complete when you have:  

* [ ] Added the project CSS to your style sheet
* [ ] Added the HTML for your `<h1>`, the image placeholder and your three buttons
* [ ] Added the variables, arrays and functions described below  

## 🚀 **To Complete Your Project**
1. Read the instructions and background info for this project.
2. Write your HTML, then the CSS, and finally your JS.
3. Run your slideshow in your browser.
       
---


## 📤 Uploading Your Files to GitHub
1. Go to your `js-slideshow` repo on GitHub.
2. Click the **Add file** button > **Upload files**.
3. **Drag and drop** your updated files into the repo.
4. Scroll down, type "Final Submission," then click **Commit changes**.
5. Email the web address of your `js-slideshow` to your teacher.
   - Use "JS Slideshow" as the email **SUBJECT LINE** 

---


## Part 1: HTML Structure

First, we need to create the skeleton of our web page.

To your `starter.html` page body:

1. Add an h1: First Name Last Name JS Gallery
2. Add DIV with class of `gallery-container`
   - Add `<img>` with id of `gallery-img`
   - Set `<img>` `src` to filename of first image you wish to display
   - Update `alt` attribute to describe this first image
   - Add `<p>` with id of `gallery-caption`
   - Under `<p>`, add DIV that contains three (3) `<button>` elements
     - First button has `id` of `prev-btn` and button text of **Previous**
     - Second button has `id` of `pause-btn` and button text of **Pause**
     - Third button has `id` of `next-btn` and button text of **Next** 
---


<!--

## Part 2: `starter.css`

Style your page by adding these CSS rules to your style sheet:

- `body` rule:
  - Choose font family
  - Set text align: center
  - Margin of 20px
- `#gallery-container` rule:
  - Margin of `20px auto`
  - Max width of 600px
- `#gallery-img` rule:
  - Max width set to 100%
  - height set to auto
  - border set to 1px solid black
  - border radius of 4px
- `#gallery-caption` rule:
  - margin top set to 10px
  - font size set to 18px
- `button` rule:
  - padding set to `10px 20px`
  - margin set to 5px
  - font size of 16px
  - cursor property set to pointer
  - background color of your choice
  - color of white
  - border set to none
  - border radius of 4px
- `button:hover` pseudo-class:
  - background color of your choice (different from button background color)
 
## Part 3: Variables & Arrays

Write your JS in the `starter.js` file.  Remember to link your `starter.js` file to your web page.

You need several variables and two arrays for this gallery project.

- Using `let`, define variable named `currentIndex`, set it to zero (0)
- Using `let`, define variable named `slideInterval`
- Using `let`, define a Boolean variable named `isPlaying`, set it to `true`
- Using `const`, create array named `images`; add filenames of three images to array
- Using `const`, create array named `captions`; add short, descriptive caption for each image to this array

## Part 4: JavaScript Functions

**function:** A named block of code that performs a specific task.

**Pro tip:** The name of the function should describe what task the function performs.

```javascript
// Function to update the gallery
function updateGallery() {
   document.getElementById("gallery-img").src = images[currentIndex];
   document.getElementById("gallery-caption").textContent = captions[currentIndex];
}
```
---
```javascript
// Function to move to the next image
function nextImage() {
   currentIndex++;
   if (currentIndex >= images.length) {
      currentIndex = 0;
   }

   updateGallery();
}

```
---

```javascript
// Function to move to the previous image
function prevImage() {
   currentIndex--;
   if (currentIndex < 0) {
      currentIndex = images.length - 1;
   }

   updateGallery();
}

```
---

```javascript
// Function to start the auto-advance slideshow
function startSlideshow() {
   slideInterval = setInterval(nextImage, 2000); // Advance every 2 seconds
   isPlaying = true;
   document.getElementById("pause-btn").textContent = "Pause";
}

```
---

```javascript
// Function to pause or resume the slideshow
function toggleSlideshow() {
   if (isPlaying) {
      clearInterval(slideInterval);
      document.getElementById("pause-btn").textContent = "Play";
   } else {
      startSlideshow();
   }

   isPlaying = !isPlaying;

   }

```

---

```javascript
// Tell JS how to find the buttons in the page
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");
const pauseBtn = document.getElementById("pause-btn");

// Add event listeners to the buttons
nextBtn.addEventListener("click", nextImage);
prevBtn.addEventListener("click", prevImage);
pauseBtn.addEventListener("click", toggleSlideshow);

```

---
```javascript
// Start the slideshow and update the gallery when the page loads
window.addEventListener("load", function() {
   updateGallery();
   startSlideshow();
}); // Note punctuation on this line of JS

```

---


-->
