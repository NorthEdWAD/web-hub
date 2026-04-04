## Intro to JavaScript
### JS-Powered Image Gallery / Exit Ticket

1. What is the **length** of each JS array?

```javascript
// Define an array of fruits
const fruits = ['apple', 'banana', 'cherry', 'mango'];

// Define an image array
const images = ['mountain.jpg', 'fashion-girl.jpg', 'kitty.jpg'];
```

2. What will the output be in the browser console?
```javascript
// Modern arrow function
const sumQuizScoresArrow = (score1, score2, score3) => {
    const sum = score1 + score2 + score3;
    console.log(`The sum of the quiz scores is: ${sum}`);
    return sum;
};

sumQuizScoresArrow(85, 90, 78);
```

3. Briefly explain **why** the three components in the `for` loop are needed for the loop to work. (The three components are inside the parentheses.)


4. Why use `const` to declare (create) the `numbers` array?  Why use `let` to declare the variable named `sum`?
```javascript
const numbers = [10, 20, 30, 40, 50];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

console.log(`The sum is: ${sum}`);

```
