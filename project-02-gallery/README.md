# ⚡ Intro to JavaScript
## JavaScript-Powered Slideshow

> **Objective:** Students will learn how to create an image gallery that cycles through images automatically and allows the user to control
> the slideshow with buttons.

---

## 📅 **Due Date**
- **Final Submission:** DAY 00 MAR 2026

## 🚀 Getting Started
1. **Download** the starter files from this repo.
2. **Build:** Write your code in `starter.js`, `starter.html` and `starter.css` as shown below.

## 💡 Resources  

See the `examples` folder.

## 🛠️ Project Requirements

Your project is complete when you have:  

* [ ] Added the project CSS to your style sheet
* [ ] Added the HTML for your `<h1>`, the image placeholder and your three buttons
* [ ] Added, tested and, if necessary, debugged the variables, arrays and functions described below  

## 🚀 **To Complete Your Project**
1. Read the instructions and view the example code for this project.
2. Write your HTML, then CSS, and finally your JS as shown below.
3. Test your slideshow in your browser.
       
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
   - Set `<img>` `src` to `coffee-shop.jpg` (the first image to display when page loads in browser)
   - Update `alt` attribute to describe this first image
   - Add `<p>` with id of `gallery-caption`
   - Under `<p>`, add DIV with `class` of `controls` that contains three (3) `<button>` elements
     - First button has `id` of `prev-btn` and button text of **Previous**
     - Second button has `id` of `pause-btn` and button text of **Pause**
     - Third button has `id` of `next-btn` and button text of **Next** 
---




## Part 2: `starter.css`

Style your page by adding these CSS rules to your style sheet:

- `body` rule:
  - Choose font family
  - Set text align: center
  - Margin of 20px

- `.controls` class rule:
  - Set margin top to 20px

- `#gallery-container` rule:
  - Margin of `20px auto`
  - Max width of 600px
  - padding of 20px


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
  - background color of your choice (different than the button background color)
 
## Part 3: Variables & Arrays

Write your JS in the `starter.js` file.  Remember to link your `starter.js` file to your web page.

You need several variables and two arrays for this gallery project.

- Using `let`, define variable named `currentIndex`, set it to zero (0)
- Using `let`, define variable named `slideInterval`
- Using `let`, define a Boolean variable named `isPlaying`, set it to `false`
- Using `const`, create array named `images`; add filenames of three images to array
- Using `const`, create array named `captions`; add short, descriptive caption for each image 

## Part 4: JavaScript Functions

**function:** A named block of code that performs a specific task.

**Pro tip:** The name of the function should describe what task the function performs.

```javascript
// Function to update the gallery
function updateGallery(index) {
   currentIndex = index;
   document.getElementById("gallery-img").src = images[index];
   document.getElementById("gallery-caption").textContent = captions[index];
}
```
---
```javascript
function runSlideshow() {
   // We use the FOR loop to check each image in the 'images' array one by one
   // The loop starts at 0 and continues until it reaches the end of the array
   for (let i = 0; i < images.length; i++) {

      // This IF statement checks if the current loop index 'i' matches the 'currentIndex'
      // If it does, it means we've found the currently displayed image
      if (i === currentIndex) {

         // Calculate the index of the next image.
         // The '%' (modulo) operator ensures that if we're at the last image,
         // the next index wraps around to 0, creating a loop
         let nextIdx = (i + 1) % images.length;

         // Call the 'updateGallery' function to display the next image
         updateGallery(nextIdx);

         // Exit the loop early since we've found the current image and updated the gallery
         break;
      } // End of IF statement
   } // End of FOR loop
} // End of runSlideshow() function

```
---

```javascript
/**
 * This function starts an automatic slideshow timer
 * It updates the page to show that the slideshow is playing and then sets up a timer
 * to advance the slideshow every 2 seconds
 */

function startTimer() {
   // Set the slideshow state to 'playing'
   isPlaying = true;

   // Update the pause button text to "Pause" to indicate the slideshow is running
   document.getElementById("pause-btn").textContent = "Pause";

   // Set up a timer to call 'runSlideshow' every 2000 milliseconds (2 seconds)
   // This automatically advances the slideshow every two seconds
   slideInterval = setInterval(runSlideshow, 2000);
}


```
---

```javascript
/**
 * This function stops the automatic slideshow timer
 * It updates the page to show the slideshow is paused and clears the timer
 * that was advancing the slideshow
 */

function stopTimer() {
   // Set the slideshow state to 'paused'
   isPlaying = false;

   // Update the pause button text to "Play" to indicate the slideshow is stopped
   document.getElementById("pause-btn").textContent = "Play";

   // Clear the interval timer to stop the automatic advancement of the slideshow
   clearInterval(slideInterval);
}


```
---

```javascript
// Function to pause or resume the slideshow
function toggleSlideshow() {
   if (isPlaying) { 
      stopTimer(); 
   } else { 
      startTimer(); 
   }
}
```

```javascript
function nextImage() {
   stopTimer();
   runSlideshow(); 
}
```
---
```javascript
/**
 * This function navigates to the previous image in the slideshow
 * It stops the automatic timer, finds the current image, and updates the gallery
 * to show the previous image 
 */

function prevImage() {
   // Stop the automatic slideshow timer to prevent interference
   stopTimer();

   // Loop through the images to find the currently displayed image
   for (let i = 0; i < images.length; i++) {
      // Check if current value of counter variable (i) matches the index number of the displayed image
      if (i === currentIndex) {
         // Calculate the index of the previous image, ensuring it wraps around
         // to last image in image array if currently at the first image in the image array
         let prevIdx = (i - 1 + images.length) % images.length;

         // Update the gallery to display the previous image
         updateGallery(prevIdx);

         // Exit the loop early since the previous image has been found
         break;
      } // End of IF statement
   } // End of FOR loop
} // End of prevImage() function

```

---

```javascript
// Tell JS how to find the buttons in the page
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");
const pauseBtn = document.getElementById("pause-btn");

// Add CLICK event listeners to the buttons, call corresponding function when user clicks button
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



