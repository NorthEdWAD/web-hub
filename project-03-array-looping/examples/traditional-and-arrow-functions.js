// Define an array of five fruits
const fruits = ['apple', 'banana', 'orange', 'grape', 'kiwi'];

// Loop through the array using a traditional FOR loop
console.log("Using a traditional FOR loop:");
for (let i = 0; i < fruits.length; i++) {
    console.log(`Fruit ${i + 1}: ${fruits[i]}`);
}

/*
Output using traditional FOR loop

Fruit 1: apple
Fruit 2: banana
Fruit 3: orange
Fruit 4: grape
Fruit 5: kiwi
*/



// Loop through the array using the modern forEach method
console.log("\nUsing the forEach method:");
fruits.forEach((fruit, index) => {
    console.log(`Fruit ${index + 1}: ${fruit}`);
});

/*
Output using forEach method

Fruit 1: apple
Fruit 2: banana
Fruit 3: orange
Fruit 4: grape
Fruit 5: kiwi
*/





